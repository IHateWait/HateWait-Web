import {LoginAction, Login} from './types';
import {createReducer} from 'typesafe-actions';
import {LOG_IN, LOG_OUT} from './actions';
import produce from 'immer';

//초기 상태
const initialState: Login = {
    user : '',
};

//리듀서
const log = createReducer<Login, LoginAction>(initialState, {
  [LOG_IN]: (state, action) =>
    produce(state, draft => {
      draft.user = action.payload.user;
    }),
    [LOG_OUT]: (state, action) =>
      produce(state, draft => {
        draft.user = '';
      }), //TODO: 기능하는건지 확인 및 수정
});


export default log;
