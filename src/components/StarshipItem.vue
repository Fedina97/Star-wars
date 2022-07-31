<template>
    <div class="item">
        <h2 class="item__model">{{starship.model}}</h2>
        <h3 class="item__name">{{ starship.name }}</h3>
        <div class="item__image">
            <img src="https://via.placeholder.com/300x350">
        </div>
        <div class="item__buttons">
            <button-item
                @click="this.$router.push(`/starship/${this.starship.id}`)"
            >
                Подробнее
            </button-item>
        </div>
    </div>
</template>

<script>
import ButtonItem from "@/components/UI/ButtonItem";

const guid = require("js-guid");

export default {
    name: "StarshipItem",
    components: {ButtonItem},
    props: {
        starship: {
            type: Object,
            required: true,
        },
    },
    mounted() {
        const id = guid.Guid.newGuid()
        this.starship.id = id.StringGuid
    }
}

</script>

<style scoped>
    @import "css/item-styles.css";
</style>