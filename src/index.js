import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const initialState = {
  people: [],
  planets: [],
  mainCharacter: ''
};

const reducer = (state, action) => {
  switch(action.type) {
    case 'SAVE_PEOPLE':
      return {
        ...state,
        people: [
          ...state.people,
          action.people
        ]
      };
    default: return state;
  }
};

const store = createStore(reducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
