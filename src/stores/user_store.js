import {defineStore} from 'pinia'
import Cookies from "js-cookie";
import {api} from "boot/axios";

export const useUserInfo = defineStore('userInfo', {
  state: () => ({
    name: null,
    description: null,
    email: null,
    phones: null,
    address: null
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
          this.setName(response.data.name);
          this.setPhones(response.data.phones);
          this.setAddress(response.data.address);
          this.setDescription(response.data.description);
          this.setEmail(response.data.email);
        })
    },
    setName(name){
      this.name = name;
    },
    setPhones(phones){
      this.phones = phones;
    },
    setDescription(description){
      this.description = description;
    },
    setAddress(address){
      this.address = address;
    },
    setEmail(email){
      this.email = email;
    }
  }
})
