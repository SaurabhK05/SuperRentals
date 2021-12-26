import Route from '@ember/routing/route';
// import fetch from 'fetch';

export default class IndexRoute extends Route{
    async model(){
        // let response = await fetch('/api/rentals.json');
        // let parsed = await response.json();
        // return parsed;
        return{
            title: 'Grand Old Mansion',
            owner: 'Veruca Salt',
            city: 'San Francisco',
            location: {
                lat: 37.7749,
                lng: -122.4194,
            },
            id: 'grand-old-mansion',
            category: 'Estate',
            type: 'Stanalone',
            bedrooms: 15,
            image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg',
            description: 'This grand old mansion sits on over 100 acres of rolling hills and dense redwood forests.',
        };
    }
}