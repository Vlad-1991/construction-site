import { createStore } from 'vuex'

import images from './images'

const store = {
  modules: {
    images
  },
  strict: process.env.NODE_ENV !== 'production'
}

export default createStore(store);

