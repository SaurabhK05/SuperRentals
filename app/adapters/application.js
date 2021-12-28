import JSONAPIAdater from '@ember-data/adapter/json-api';

export default class ApplicationAdapter extends JSONAPIAdater{
    namespace = 'api';
    buildURL(...args){
        return `${super.buildURL(...args)}.json`;
    }
}