<template>
    <div class="page-pagination">
        <div
            class="page"
            v-for="pageNumber in totalPages"
            :key="pageNumber"
            :class="{'current-page': current === pageNumber}"
            @click="onClickPageButton(pageNumber)"
        >
            {{ pageNumber }}
        </div>
    </div>
</template>

<script>
export default {
    name: "Pagination",
    props: {
        totalPages: {
            type: Number,
        },
        current: {
            type: Number,
            default: 1,
        }
    },
    methods: {
        onClickPageButton(pageNumber){
            this.$emit('page-change', pageNumber)
        }
    }
}
</script>

<style scoped>
.page-pagination {
    display: flex;
    justify-content: center;
    gap: 5px;
    margin-top: 15px;
    margin-bottom: 25px;
}

.page {
    border-radius: 10px;
    border: 1px solid black;
    padding: 10px 15px;
    cursor: pointer;
    background-color: #b9b7b7;
}

.current-page {
    border: 2px solid forestgreen;
    font-weight: 600;
    color: forestgreen;
    background-color: white;
}
</style>