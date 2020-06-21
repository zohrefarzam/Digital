// importing observables and decorate
import {decorate, observable, action} from 'mobx';

class Store {
  // observable to save search query
  text = '';

  // action to update text
  setTitle = text => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => console.log(json));
  };

  // observable to save image response from api
  data = null;

  // action to call API and search images
  setImages = () => {
    fetch('https://picsum.photos/200/300')
      .then(response => response.json())
      .then(data => this.setData(data));
  };

  // observables can be modifies by an action only
  setData = data => {
    this.data = data;
  };
}

// another way to decorate variables with observable
decorate(Store, {
  text: observable,
  setTitle: action,
  data: observable,
  setImage: action,
  setData: action,
});

// export class
export default new Store();
