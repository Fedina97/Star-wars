<template>
    <div class="catalog-item">
        <div
            v-for="item in catalog"
            :key="item"
            class="catalog-block"
            @click="$router.push(`/${item.route}`)"
        >
            {{ item.name }}
        </div>
    </div>
</template>

<script>
export default {
    name: "CatalogItem",
    data() {
        return {
            catalog: [
                { name: 'Персонажи', route: 'people' },
                { name: 'Корабли', route: 'starships' }
            ]
        }
    }
}
</script>

<style scoped>
    .catalog-item {
        display: flex;
        gap: 10px;
        color: white;
        padding: 40px;
        font-size: 25px;
    }

    .catalog-block {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid white;
        cursor: pointer;
        width: 350px;
        height: 400px;
        background-color: rgba(255, 255, 255, 0.12);
    }
</style>