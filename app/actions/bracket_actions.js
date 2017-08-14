import axios from 'axios';
import {
  BRACKET_URL,
  BRACKETS_URL,
  FEATURED_BRACKET_URL
} from '../util/bracket_api_util';

//constants
export const RECEIVE_SELECTED_BRACKET = 'RECEIVE_SELECTED_BRACKET';
export const RECEIVE_FEATURED_BRACKET = 'RECEIVE_FEATURED_BRACKET';
export const RECEIVE_LIVE_BRACKETS = 'RECEIVE_LIVE_BRACKETS';

//async actions
export const createBracket = bracket => dispatch =>{

console.log(bracket);
  return axios
    .post(BRACKETS_URL, bracket)
    .then(response => {
      console.log(response);
      dispatch(receiveSelectedBracket(response.data))

    });
  }

export const editBracket = bracket => dispatch =>
  axios
    .put(BRACKET_URL(bracket._id))
    .then(response => dispatch(receiveSelectedBracket(response.data.bracket)));

export const requestSelectedBracket = bracketId => dispatch =>
  axios
    .get(BRACKET_URL(bracketId))
    .then(response => dispatch(receiveSelectedBracket(response.data.bracket)));

export const requestFeaturedBracket = bracketId => dispatch =>
  axios
    .get(FEATURED_BRACKET_URL)
    .then(response => dispatch(receiveFeaturedBracket(response.data.bracket)));

export const requestLiveBrackets = () => dispatch =>
  axios
    .get(BRACKETS_URL)
    .then(response => dispatch(receiveLiveBrackets(response.data.brackets)));

//sync actions
export const receiveSelectedBracket = bracket => {
  return {
    type: RECEIVE_SELECTED_BRACKET,
    bracket
  };
};

export const receiveFeaturedBracket = bracket => {
  return {
    type: RECEIVE_FEATURED_BRACKET,
    bracket
  };
};

export const receiveLiveBrackets = brackets => {
  return {
    type: RECEIVE_LIVE_BRACKETS,
    brackets
  };
};
