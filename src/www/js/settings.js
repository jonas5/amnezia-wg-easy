/* eslint-disable no-console */
/* eslint-disable no-undef */

'use strict';

new Vue({
  el: '#app',
  data: {
    settings: {
      WG_SUBNET: '',
      WG_PORT: '',
    },
  },
  mounted() {
    this.api = new API();
    this.api.getSettings()
      .then((settings) => {
        this.settings = settings;
      })
      .catch((err) => {
        console.error(err);
        alert(err.message || err.toString());
      });
  },
  methods: {
    saveSettings() {
      this.api.updateSettings(this.settings)
        .then(() => {
          alert('Settings saved successfully!');
        })
        .catch((err) => {
          console.error(err);
          alert(err.message || err.toString());
        });
    },
    restartWireGuard() {
      if (!confirm('Are you sure you want to restart WireGuard? This will disconnect all clients.')) {
        return;
      }
      this.api.restartWireGuard()
        .then(() => {
          alert('WireGuard restarted successfully!');
        })
        .catch((err) => {
          console.error(err);
          alert(err.message || err.toString());
        });
    },
  },
});
