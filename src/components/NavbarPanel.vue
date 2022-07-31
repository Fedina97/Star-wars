<template>
    <div class="navbar">
        <button-item class="back-btn" @click="$router.push('/catalog')">Вернуться к каталогу</button-item>
        <search-bar/>
    </div>
</template>

<script>
export default {
    name: "NavbarPanel",
}
</script>

<style>
.navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
}
</style>