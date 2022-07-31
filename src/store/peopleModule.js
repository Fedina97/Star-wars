import axios from "axios";

export const persons = {
    state: () => ({
        persons: [],
        isPersonLoading: false,
        searchQueryPerson: '',
        page: 1,
        totalPages: 0,
    }),
    getters: {
        personsList(state) {
            return state.persons
        },
        currentPeoplePage(getters) {
            return getters.page;
        },
    },
    mutations: {
        setPersons(state, persons) {
            state.persons = persons;
        },
        setPersonLoading(state, bool) {
            state.isPersonLoading = bool;
        },
        newSearchQuery(state, searchQueryPerson) {
            state.searchQueryPerson = searchQueryPerson;
        },
        setTotalPages(state, totalPages) {
            state.totalPages = totalPages;
        },
        setPage(state, payload) {
            state.page = payload;
        },
    },
    actions: {
        getPersonQuery({commit}, searchQueryPerson) {
            commit('newSearchQuery', searchQueryPerson);
        },
       async fetchPersons({state, commit, getters}) {
            try {
                commit('setPersonLoading', true)
                const response = await axios.get(`https://swapi.dev/api/people`, {
                    params: {
                        page: state.page,
                        search: state.searchQueryPerson
                    },
                })
                commit('setPage',  state.page);
                commit('setTotalPages', Math.ceil(response.data.count / 10))
                commit('setPersons',  response.data.results);
            } catch (e) {
                console.log(e, 'Ошибка')
            } finally {
                commit('setPersonLoading', false)
            }
        },
    }
}
