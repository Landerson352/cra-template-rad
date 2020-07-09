import firebase from 'firebase';

import dataLayer from './dataLayer';

const { increment } = firebase.firestore.FieldValue;

export const incrementGameUserScore = (gameId, userId, value) => {
  return dataLayer.updateGameUser(gameId, userId, { score: increment(value) });
};


export default {
  ...dataLayer,

  incrementGameUserScore,
};
