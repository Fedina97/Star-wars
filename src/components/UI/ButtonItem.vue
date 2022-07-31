<template>
    <button class="create-btn">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: "ButtonItem"
}
</script>

<style scoped>
.create-btn {
    padding: 20px 25px;
    box-shadow: 2px 8px 15px 0 rgba(0,0,0,0.23);
    border-radius: 15px;
    border: none;
    text-transform: uppercase;
    cursor: pointer;
    background: white;
    color: #232222;
}
</style>