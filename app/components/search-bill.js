import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    sns() {
      this.sendAction('sns');
    },

    guns() {
      this.sendAction('guns');
    },

    keywordSearch() {
      var params= {
        keyword: this.get('keyword')
      };
      this.sendAction('keywordSearch', params);
    }
  }
});
