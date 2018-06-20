import Ember from 'ember';
export default Ember.Component.extend({
  classNameBindings:['expand'],
  expand: false,
  movies:null,
  actions: {
        onClick: function () {
            this.set('expand', true);
        }
  }
});