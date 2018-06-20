import Ember from 'ember';

export default Ember.Component.extend({
    tagname:'form',
    classNames:['add-movie'],
    
    title: null,
    image: null,
    description: null,
});