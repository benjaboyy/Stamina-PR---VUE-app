import { createStore } from 'vuex'

import submissionModule from './submission.js'
import rankingModule from './ranking.js'
import pointsModule from './points.js'

const store = createStore({
  state: {
  },
  modules: {
    submission: submissionModule,
    ranking: rankingModule,
    points: pointsModule
  }
});

export default store