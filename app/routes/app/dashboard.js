import Ember from 'ember';

export default Ember.Route.extend({
    activate: function() {
        Ember.$('body').toggleClass("hold-transition skin-blue sidebar-mini");
    },
    deactivate: function(){
        Ember.$('body').toggleClass("hold-transition skin-blue sidebar-mini");
    }
});
