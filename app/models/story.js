import DS from 'ember-data';

export default DS.Model.extend({
  headline: DS.attr(),
  byline: DS.attr(),
  body: DS.attr(),
  posted: DS.attr(),
  image: DS.attr()
});
