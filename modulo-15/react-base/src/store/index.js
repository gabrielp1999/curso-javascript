import { createStore } from 'redux';

import rootReducer from './modules/example/reducer';

const store = createStore(rootReducer);

export default store;
