import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return Ember.$.getJSON('http://congress.api.sunlightfoundation.com/bills/search?query=guns&apikey=de839dbcf42a488cab04f79da6584165').then(function(responseJSON){
      return responseJSON.results;
    });
  }
  details: false,
  actions: {
    showDetails() {
      this.set("details", true);
    }
  }

});
