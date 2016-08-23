import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var url = 'http://congress.api.sunlightfoundation.com/bills/search?bill_id=hr965-113&apikey=de839dbcf42a488cab04f79da6584165'
    return Ember.$.getJSON(url).then(function(responseJSON){
      debugger;
      return responseJSON.results;
    });
  }
});
