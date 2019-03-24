import { combineReducers } from 'redux'
import { handleActions } from 'redux-actions';
import { createAsyncReducer } from 'redux-easy-async';

import * as actions from './actions';

const someReducer = handleActions(
  {
    [actions.doSomething]: (
      state,
      { payload }
    ) => {
      return payload;
    }
  },
  null
);

// const requests = createAsyncReducer();

const reducers = combineReducers({
  someReducer,
  // requests,
});

export default reducers;
