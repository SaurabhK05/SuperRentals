import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class RentalsComponent extends Component {
  @tracked query = '';
  
  @tracked changedText = 'Clear the search...';
  @tracked isButtonDisabled = true;
  
  @action clearQuery(){
      this.query = '';
      this.isButtonDisabled = true; 
  }
  @action updateButtonState(){
    if(this.query.length <= 0){
      this.isButtonDisabled = true;
    }
    else{
      this.isButtonDisabled = false;
    }
     
  }
}
