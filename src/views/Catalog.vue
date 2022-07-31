<template>
    <div class="catalog">
        <div class="catalog-wrapper">
            <catalog-item/>
        </div>
    </div>
</template>

<script>
import CatalogItem from "@/components/CatalogItem";
export default {
    name: "Catalog",
    components: {CatalogItem}
}
</script>

<style scoped>
    .catalog {
        background-image: url('../../public/images/bg-1.jpg');
        background-size: cover;
        height: 100vh;
    }

    .catalog-wrapper {
        height:100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>