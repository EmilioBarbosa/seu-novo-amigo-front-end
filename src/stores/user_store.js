import {defineStore} from 'pinia'
import Cookies from "js-cookie";
import {api} from "boot/axios";

export const useUserInfo = defineStore('userInfo', {
  state: () => ({
    name: null,
    description: null,
    email: null,
    phones: null
  }),

  getters: {
    doubleCount(state) {
      return state.counter * 2
    }
  },

  actions: {
    getUserInfo() {
      const user_id = Cookies.get('user_id');
      api.get(`users/${user_id}`)
        .then((response) => {
          alert(response.data)
        })
    }
  }
})
