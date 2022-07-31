import { createStore } from 'vuex'
import {persons} from '@/store/peopleModule'
import {starships} from "@/store/StarshipsModule";

export default createStore({
  modules: {
    persons: persons,
    starships: starships,
    namespaced: true,
  },
})
