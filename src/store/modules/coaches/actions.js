export default {
  addCoach(context, data) {
    const coachData = {
      id: context.rootGetters.userId,
      firstName: data.first,
      lastName: data.last,
      description: data.rate,
      hourlyRate: data.rate,
      areas: data.areas,
    };

    context.commit('addCoach', coachData);
  },
};
