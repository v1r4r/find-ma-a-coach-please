export default {
  requests(state, __, __2, rootGetters) {
    const coachId = rootGetters.userId;
    return state.requests.filter((request) => request.coachId === coachId);
  },
  hasRequests(__, getters) {
    return getters.requests && getters.requests.length > 0;
  },
};
