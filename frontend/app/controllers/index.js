import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    toggleStatus(todo) {
      console.log(`Toggle status from todo with id = ${todo.get('id')}`);
      todo.set('isCompleted', true);
      todo.save();
    }
  }
});
