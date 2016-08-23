import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    keywordSearch(params) {
      this.transitionTo('results', params.keyword);
    },
    sns() {
      this.transitionTo('sns');
    },
    guns() {
      this.transitionTo('guns');
    }
  }
});
