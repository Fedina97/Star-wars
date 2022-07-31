<template>
    <div class="item">
        <div>
            <h3 class="item__name">{{ person.name }}</h3>
            <div class="item__image">
                <img src="https://via.placeholder.com/300x400">
            </div>
        </div>
        <div class="post-buttons">
            <button-item
                @click="$router.push(`/people/${person.id}`)"
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
    name: "PersonItem",
    components: {ButtonItem},
    props: {
        person: {
            type: Object,
            required: true,
        }
    },
    mounted() {
        const id = guid.Guid.newGuid()
        this.person.id = id.StringGuid
    }
}

</script>

<style scoped>
    @import "css/item-styles.css";
</style>