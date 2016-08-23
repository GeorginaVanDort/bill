import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    keywordSearch() {
      var params= {
        keyword: this.get('keyword')
      };
      this.sendAction('keywordSearch', params);
    }
  }
});
