import axios from "axios";

export const starships = {
    state: () => ({
        starships: [],
        searchQuery: '',
        isLoading: false,
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
        setSearchQuery(state, searchQuery) {
            state.searchQuery = searchQuery;
        },
        setTotalPages(state, payload) {
            state.totalPages = payload;
        }
    },
    actions: {
        getSearchQuery({commit}, searchQuery) {
            commit('setSearchQuery', searchQuery)
        },
        async getStarships({state, commit, getters}) {
            try {
                commit('isLoading', true)
                const response = await axios.get(`https://swapi.dev/api/starships`, {
                    params: {
                        page: state.page,
                        search: state.searchQuery,
                    },
                })
                commit('setStarshipPage',  state.page);
                commit('setTotalPages', Math.ceil(response.data.count / 10))
                commit('setStarships',  response.data.results);
            } catch (e) {
                console.log(e, 'Ошибка')
            } finally {
                commit('isLoading', false)
            }
        },
    }
}