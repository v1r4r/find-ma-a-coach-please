import actions from './actions.js';
import getters from './getters.js';
import mutations from './mutations';

export default {
  state() {
    return {
      userId: null,
      token: null,
      tokenExpiration: null,
    };
  },
  actions,
  getters,
  mutations,
};
