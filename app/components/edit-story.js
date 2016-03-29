import Ember from 'ember';

export default Ember.Component.extend({
  isSelected: false,
  actions: {
    isSelected(post) {
      var id = post.get("id");
      console.log(id);
      this.set('isSelected', true);
    },
    unSelected(post) {
      var id = post.get("id");
      console.log(id);
      this.set('isSelected', false);
    }
  }
});
