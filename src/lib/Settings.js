'use strict';

const fs = require('node:fs/promises');
const path = require('path');
const debug = require('debug')('Settings');
const defaultConfig = require('../config');

const SETTINGS_FILE_PATH = path.join(defaultConfig.WG_PATH, 'settings.json');

class Settings {
  constructor() {
    this.settings = {
        PASSWORD_HASH: defaultConfig.PASSWORD_HASH,
        WG_DEFAULT_ADDRESS: defaultConfig.WG_DEFAULT_ADDRESS,
    };
    this.isInitialized = false;
  }

  async init() {
    if (this.isInitialized) {
      return;
    }

    debug('Initializing settings...');
    try {
      const settingsFile = await fs.readFile(SETTINGS_FILE_PATH, 'utf8');
      const savedSettings = JSON.parse(settingsFile);
      this.settings = { ...this.settings, ...savedSettings };
      debug('Settings loaded from file.');
    } catch (error) {
      if (error.code === 'ENOENT') {
        debug('No settings file found, creating with defaults.');
        await this.save();
      } else {
        throw error;
      }
    }
    this.isInitialized = true;
  }

  get(key) {
    if (!this.isInitialized) {
      throw new Error('Settings not initialized.');
    }
    return this.settings[key];
  }

  getAll() {
    if (!this.isInitialized) {
      throw new Error('Settings not initialized.');
    }
    return this.settings;
  }

  async save() {
    debug('Saving settings...');
    await fs.writeFile(SETTINGS_FILE_PATH, JSON.stringify(this.settings, null, 2), {
      mode: 0o660,
    });
    debug('Settings saved.');
  }

  async update(newSettings) {
    if (!this.isInitialized) {
      await this.init();
    }
    this.settings = { ...this.settings, ...newSettings };
    await this.save();
  }
}

module.exports = new Settings();
