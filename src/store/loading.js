const SET_LOADING = 'react-app-starter/loading/SET_LOADING';

export const STATE_KEY = 'loading';

const initialState = {
  appLoading: true,
};

export default function loadingReducer(state = initialState, action) {
  const {type, payload} = action;
  if (type === SET_LOADING) {
    return {
      ...state,
      [`${payload.scope}Loading`]: payload.loading,
    };
  } else {
    return state;
  }
}

export const setLoading = (scope, loading) => ({
  type: SET_LOADING,
  payload: {
    scope,
    loading,
  },
});
