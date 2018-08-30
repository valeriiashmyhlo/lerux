import { Store } from './redux';
import reducer from './reducer';

let state = sessionStorage.getItem('state');
state = state ? JSON.parse(state) : undefined;

export const store = new Store(reducer, state);

store.subscribe(state => {
  console.log(state);
  sessionStorage.setItem('state', JSON.stringify(state));
});
