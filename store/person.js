import Vue from 'vue'
import Vuex from 'vuex'
import getImageLink from '../plugins/helpers/getImageLink'

Vue.use(Vuex)

export default {
  state () {
    return {
      person: {}
    }
  },
  getters: {
    setPerson ({ person }) {
      person.imageLink = getImageLink('medium', person.poster_path || person.profile_path)
      return person
    }
  },
  mutations: {
    SET_PERSON (state, personResponseData) {
      state.person = personResponseData
    }
  },
  actions: {
    async getPerson ({ commit, state }, { id }) {
      const onePerson = await this.$axios.get(`/person/${id}`)
      commit('SET_PERSON', onePerson.data)
    }
  }
}
