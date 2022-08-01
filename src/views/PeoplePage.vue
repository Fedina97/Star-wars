<template>
    <div class="people">
        <div class="people-wrapper">
            <navbar-panel>
                <input
                    class="input"
                    :value="searchQueryPerson"
                    @input="fetchPersons($event.target.value)"
                    placeholder="Поиск..."
                    type="text"
                >
            </navbar-panel>
            <div>
                <person-list
                    :persons="personsList"
                    v-if="!isPersonLoading"
                />
                <loader-spinner v-else/>
                <pagination
                    v-if="!isPersonLoading"
                    :total-pages="totalPages"
                    :current="currentPeoplePage"
                    @page-change="changePage"
                />
            </div>
        </div>
    </div>
</template>

<script>
import PersonList from "@/components/PersonList";
import {mapState, mapActions, mapMutations, mapGetters} from 'vuex'
import NavbarPanel from "@/components/NavbarPanel";
import Pagination from "@/components/UI/Pagination";

export default {
    components: {
        Pagination,
        NavbarPanel,
        PersonList
    },
    methods: {
        ...mapMutations({
            updatePage: 'setPage',
            setTotalPages: 'setTotalPages'
        }),
        ...mapActions({
            fetchPersons: 'fetchPersons',
        }),
        changePage(pageNumber) {
            this.updatePage(pageNumber)
            this.fetchPersons()
        },
    },
    mounted() {
        this.fetchPersons();
    },
    computed: {
        ...mapState({
            isPersonLoading: state => state.persons.isPersonLoading,
            page: state => state.persons.page,
            searchQueryPerson: state => state.persons.searchQueryPerson,
            totalPages: state => state.persons.totalPages,
        }),
        ...mapGetters([
            'personsList',
        ]),
        currentPeoplePage() {
             return this.$store.getters.currentPeoplePage
        },
    },
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.people {
    background-image: url('../../public/images/bg-people.jpg');
    background-size: cover;
    background-attachment: fixed;
    overflow-y: paged-y;
    width: 100%;
    min-height: 100vh;
}

.people-wrapper {
    padding: 20px;
}
</style>

