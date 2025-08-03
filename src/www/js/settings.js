/* eslint-disable no-console */
/* eslint-disable no-undef */

'use strict';

new Vue({
  el: '#app',
  data: {
    settings: {},
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
});
