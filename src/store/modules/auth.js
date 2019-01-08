import {
  SET_AUTH,
  PURGE_AUTH,
  SET_ERROR,
  SET_LOADING
} from './../mutations.type'
import {
  LOGIN,
  LOGOUT,
  REGISTER,
  CHECK_AUTH,
  UPDATE_USER,
  AUTO_LOGIN
} from './../actions.type'
import firebase from '@/config/firebaseConfig'

// initial state
const state = {
  user: {},
  error: '',
  loading: false,
  isAuthenticated: false
}

const getters = {
  isAuthenticated (state) {
    return state.user !== null && state.user !== undefined
  },
  getUser (state) {
    return state.user
  },
  getError (state) {
    return state.error
  },
  isLoading (state) {
    return state.loading
  }
}

const actions = {
  [LOGIN] (context, credentials) {
    console.log('LOGIN CALLED!')
    context.commit(SET_LOADING, true)
    var provider = new firebase.auth.FacebookAuthProvider()
    provider.addScope('public_profile')
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        var token = result.credential.accessToken
        var user = result.user
        console.log(token, user)
        console.log('displayName :: ', user.displayName)
        console.log('photoURL ::', user.photoURL)
        context.commit(SET_AUTH, user)
        context.commit(SET_LOADING, false)
        context.commit(SET_ERROR, null)
      })
      .catch(function (error) {
        context.commit(SET_ERROR, error.message)
        context.commit(SET_LOADING, false)
      })

    // context.commit(SET_AUTH, 'Mond User');
  },
  [LOGOUT] (context) {
    console.log('LOGOUT CALLED!')
    context.commit(SET_LOADING, true)
    firebase
      .auth()
      .signOut()
      .then(
        function () {
          context.commit(PURGE_AUTH)
          context.commit(SET_ERROR, null)
          context.commit(SET_LOADING, false)
        },
        function (error) {
          context.commit(SET_ERROR, error.message)
          context.commit(SET_LOADING, false)
        }
      )
  },
  [UPDATE_USER] (context, payload) {
    // context.commit(SET_AUTH, user);
  },
  [AUTO_LOGIN] (context, payload) {
    console.log('AUTO_LOGIN CALLED!')
    context.commit(SET_AUTH, payload)
  }
}

const mutations = {
  [SET_ERROR] (state, error) {
    state.errors = error
  },
  [SET_AUTH] (state, user) {
    state.user = user
  },
  [PURGE_AUTH] (state) {
    state.user = null
  },
  [SET_LOADING] (state, isLoading) {
    state.loading = isLoading
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
