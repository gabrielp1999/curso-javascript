import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './modules/example/reducer';
import rootSaga from './modules/rootSagas';


const SagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(SagaMiddleware));

SagaMiddleware.run(rootSaga);

export default store;
