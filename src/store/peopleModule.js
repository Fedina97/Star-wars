import axios from "axios";
const guid = require("js-guid");
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
        setSearchQueryPerson(state, searchQueryPerson) {
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
       async fetchPersons({state, commit, getters}, search) {
            try {
                commit('setPersonLoading', true)
                commit('setSearchQueryPerson', search)
                const response = await axios.get(`https://swapi.dev/api/people`, {
                    params: {
                        page: state.page,
                        search,
                    },
                })
                commit('setPage',  state.page);
                commit('setTotalPages', Math.ceil(response.data.count / 10))
                commit('setPersons',  response.data.results.map(item => {
                    const {StringGuid} = guid.Guid.newGuid()
                    item = {...item, id: StringGuid};
                    return item;
                }))
            } catch (e) {
                console.log(e, 'Ошибка')
            } finally {
                commit('setPersonLoading', false)
            }
        },
    }
}
