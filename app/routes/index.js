import Route from '@ember/routing/route';
// import fetch from 'fetch';
const COMMUNITY_CATEGORIES = ['Condo', 'Townhouse', 'Apartment'];
export default class IndexRoute extends Route {
  async model() {
    // console.log(this.store.get(rental.json));

    // const response1 = await fetch('/api/rentals.json').then(results => {return resul);
    let response = await fetch('/api/rentals.json');

    let { data } = await response.json();

    return data.map((model) => {
      let { id, attributes } = model;
      let type;

      if (COMMUNITY_CATEGORIES.includes(attributes.category)) {
        type = 'Community';
      } else {
        type = 'Standalone';
      }

      return { id, type, ...attributes };
    });
  }
}
