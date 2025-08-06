/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

'use strict';

class API {

  async call({ method, path, body }) {
    const res = await fetch(`./api${path}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: body
        ? JSON.stringify(body)
        : undefined,
    });

    if (res.status === 204) {
      return undefined;
    }

    const json = await res.json();

    if (!res.ok) {
      throw new Error(json.error || res.statusText);
    }

    return json;
  }

  async getRelease() {
    return this.call({
      method: 'get',
      path: '/release',
    });
  }

  async getLang() {
    return this.call({
      method: 'get',
      path: '/lang',
    });
  }

  async getRememberMeEnabled() {
    return this.call({
      method: 'get',
      path: '/remember-me',
    });
  }

  async getuiTrafficStats() {
    return this.call({
      method: 'get',
      path: '/ui-traffic-stats',
    });
  }

  async getChartType() {
    return this.call({
      method: 'get',
      path: '/ui-chart-type',
    });
  }

  async getWGEnableOneTimeLinks() {
    return this.call({
      method: 'get',
      path: '/wg-enable-one-time-links',
    });
  }

  async getWGEnableExpireTime() {
    return this.call({
      method: 'get',
      path: '/wg-enable-expire-time',
    });
  }

  async getAvatarSettings() {
    return this.call({
      method: 'get',
      path: '/ui-avatar-settings',
    });
  }

  async getSession() {
    return this.call({
      method: 'get',
      path: '/session',
    });
  }

  async createSession({ password, remember }) {
    return this.call({
      method: 'post',
      path: '/session',
      body: { password, remember },
    });
  }

  async deleteSession() {
    return this.call({
      method: 'delete',
      path: '/session',
    });
  }

  async getPeers() {
    return this.call({
      method: 'get',
      path: '/wireguard/peer',
    }).then((peers) => peers.map((peer) => ({
      ...peer,
      createdAt: new Date(peer.createdAt),
      updatedAt: new Date(peer.updatedAt),
      expiredAt: peer.expiredAt !== null
        ? new Date(peer.expiredAt)
        : null,
      latestHandshakeAt: peer.latestHandshakeAt !== null
        ? new Date(peer.latestHandshakeAt)
        : null,
    })));
  }

  async createPeer(peerData) {
    return this.call({
      method: 'post',
      path: '/wireguard/peer',
      body: peerData,
    });
  }

  async deletePeer({ peerId }) {
    return this.call({
      method: 'delete',
      path: `/wireguard/peer/${peerId}`,
    });
  }

  async showOneTimeLink({ clientId }) {
    return this.call({
      method: 'post',
      path: `/wireguard/client/${clientId}/generateOneTimeLink`,
    });
  }

  async enablePeer({ peerId }) {
    return this.call({
      method: 'post',
      path: `/wireguard/peer/${peerId}/enable`,
    });
  }

  async disablePeer({ peerId }) {
    return this.call({
      method: 'post',
      path: `/wireguard/peer/${peerId}/disable`,
    });
  }

  async updatePeerName({ peerId, name }) {
    return this.call({
      method: 'put',
      path: `/wireguard/peer/${peerId}/name/`,
      body: { name },
    });
  }

  async updatePeerAddress({ peerId, address }) {
    return this.call({
      method: 'put',
      path: `/wireguard/peer/${peerId}/address/`,
      body: { address },
    });
  }

  async updatePeerExpireDate({ peerId, expireDate }) {
    return this.call({
      method: 'put',
      path: `/wireguard/peer/${peerId}/expireDate/`,
      body: { expireDate },
    });
  }

  async restoreConfiguration(file) {
    return this.call({
      method: 'put',
      path: '/wireguard/restore',
      body: { file },
    });
  }

  async getUiSortClients() {
    return this.call({
      method: 'get',
      path: '/ui-sort-clients',
    });
  }

}
