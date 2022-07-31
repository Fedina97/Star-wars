<template>
    <div class="people">
        <div class="people-wrapper">
            <navbar-panel/>
            <div>
                <starships-list
                    :starships="starshipsList"
                    v-if="!isLoading"
                />
                <loader-spinner v-else/>
                <pagination
                    v-if="!isLoading"
                    :current="currentPage"
                    :total-pages="totalPages"
                    @page-change="changePage"
                />
            </div>
        </div>
    </div>
</template>

<script>
import StarshipsList from '@/components/StarshipsList'
import {mapState, mapActions, mapMutations, mapGetters} from 'vuex'
import NavbarPanel from "@/components/NavbarPanel";
import Pagination from "@/components/UI/Pagination";

export default {
    components: {Pagination, NavbarPanel, StarshipsList},
    data() {
        return {
            visibleDialog: false,
        }
    },
    methods: {
        ...mapMutations({
            checkPage: 'setStarshipPage',
            setTotalPages: 'setTotalPages',
        }),
        ...mapActions([
            'getStarships',
        ]),
        changePage(pageNo) {
            this.checkPage(pageNo )
            this.getStarships()
        },
    },
    mounted() {
        this.getStarships();
    },
    computed: {
        ...mapState({
            isLoading: state => state.starships.isLoading,
            searchQuery: state => state.starships.searchQuery,
            page: state => state.starships.page,
            totalPages: state => state.starships.totalPages,
        }),
        ...mapGetters([
            'starshipsList',
        ]),
        currentPage () {
            return this.$store.getters.currentPage
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