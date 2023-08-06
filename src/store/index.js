import { createStore } from 'vuex'

import submissionModule from './submission.js'
import rankingModule from './ranking.js'

const store = createStore({
  state: {
  },
  modules: {
    submission: submissionModule,
    ranking: rankingModule,
  }
});

export default store