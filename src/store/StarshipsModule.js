import axios from "axios";
const guid = require("js-guid");

export const starships = {
    state: () => ({
        starships: [],
        isLoading: false,
        searchQueryStarship: '',
        page: 1,
        totalPages: 0,
    }),
    getters: {
        starshipsList(state) {
            return state.starships;
        },
        currentPage(getters) {
            return getters.page;
        },
    },
    mutations: {
        isLoading(state, payload){
            state.isLoading = payload;
        },
        setStarships(state, payload) {
            state.starships = payload;
        },
        setStarshipPage(state, payload) {
            state.page = payload;
        },
        setSearchQueryStarship(state, searchQueryStarship) {
            state.searchQueryStarship = searchQueryStarship;
        },
        setTotalPages(state, payload) {
            state.totalPages = payload;
        }
    },
    actions: {
        async getStarships({state, commit, getters}, search) {
            try {
                commit('isLoading', true)
                commit('setSearchQueryStarship', search)
                const response = await axios.get(`https://swapi.dev/api/starships`, {
                    params: {
                        page: state.page,
                        search,
                    },
                })
                commit('setStarshipPage',  state.page);
                commit('setTotalPages', Math.ceil(response.data.count / 10))
                commit('setStarships',  response.data.results.map(item => {
                    const {StringGuid} = guid.Guid.newGuid()
                    item = {...item, id: StringGuid};
                    return item;
                }))
            } catch (e) {
                console.log(e, 'Ошибка')
            } finally {
                commit('isLoading', false)
            }
        },
    }
}