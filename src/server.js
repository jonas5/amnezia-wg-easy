'use strict';

const fs = require('node:fs/promises');
const path = require('path');
const bcrypt = require('bcryptjs');

require('./services/Server');

const WireGuard = require('./services/WireGuard');

(async () => {
  try {
    await fs.access(path.join(__dirname, '..', '.env'));
  } catch (err) {
    console.log('Creating default .env file...');
    const password = Math.random().toString(36).slice(-8);
    const hash = bcrypt.hashSync(password, 10);
    await fs.writeFile(path.join(__dirname, '..', '.env'), `PASSWORD_HASH=${hash}\n`);
    console.log(`Default password is: ${password}`);
  }

  WireGuard.getConfig()
    .catch((err) => {
    // eslint-disable-next-line no-console
      console.error(err);

      // eslint-disable-next-line no-process-exit
      process.exit(1);
    });
})();

// Handle terminate signal
process.on('SIGTERM', async () => {
  // eslint-disable-next-line no-console
  console.log('SIGTERM signal received.');
  await WireGuard.Shutdown();
  // eslint-disable-next-line no-process-exit
  process.exit(0);
});

// Handle interrupt signal
process.on('SIGINT', () => {
  // eslint-disable-next-line no-console
  console.log('SIGINT signal received.');
});
