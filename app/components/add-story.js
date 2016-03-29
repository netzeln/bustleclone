import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save1(){
      var params = {
        headline: this.get('headline'),
        byline: this.get('byline'),
        posted: this.get('posted'),
        body: this.get('body'),
        image: this.get('image')
      };
      this.sendAction('save2', params);
    }
  }
});
