<template>
    <input v-if="queryModel" class="input" v-model="queryPerson" @input="updatePersons" type="text" placeholder="Поиск...">
    <input v-else class="input" v-model="queryStarship" @input="updateSearch" placeholder="Поиск..." type="text">
</template>

<script>
import {mapActions, mapState} from "vuex";
import {debounce} from "lodash";

export default {
    name: "SearchBar",
    methods: {
        ...mapActions(['getSearchQuery', 'getStarships', 'getPersonQuery', 'fetchPersons']),
        updateSearch() {
            this.getStarships();
        },
        updatePersons() {
            this.fetchPersons();
        },
    },
    computed: {
        ...mapState(['searchQuery', 'searchQueryPerson']),
        queryModel() {
            return this.$route.name === 'people';
        },
        queryStarship: {
            get() {
                return this.searchQuery;
            },
            set(val) {
                return this.getSearchQuery(val);
            }
        },
        queryPerson: {
            get() {
                return this.searchQueryPerson;
            },
            set(val) {
                return this.getPersonQuery(val);
            }
        }
    },
}
</script>

<style scoped>
.input {
    width: 500px;
    border: 1px solid teal;
    border-radius: 10px;
    padding: 20px 25px;
    margin: 25px 25px 0;
}
</style>