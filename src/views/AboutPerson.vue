<template>
    <div class="about-person">
        <button-item class="back-btn" @click="$router.push('/people')">Вернуться к списку</button-item>
        <div class="person-info" v-bind="getPerson">
            <h1 class="person-name">{{item.name}}</h1>
            <div class="person-card">
                <div class="person-photo">
                    <img src="https://via.placeholder.com/400x500">
                </div>
                <div class="info-wrapper">
                    <p class="info-item">Gender: {{item.gender}}</p>
                    <p class="info-item">Birth Year: {{item.birth_year}}</p>
                    <p class="info-item">Height: {{item.height}}</p>
                    <p class="info-item">Mass: {{item.mass}}</p>
                    <p class="info-item">Eye Color: {{item.eye_color}}</p>
                    <p class="info-item">Skin Color: {{item.skin_color}}</p>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import ButtonItem from "@/components/UI/ButtonItem";

export default {
    name: "AboutPerson",
    components: {ButtonItem},
    data() {
        return {
            item: ''
        }
    },
    methods: {
        getPerson() {
            this.personsList.filter((el) => {
                if(el.id === this.$route.params.id) {
                    return this.item = {...el};
                }
            })
        }
    },
    computed: {
        ...mapGetters([
            'personsList'
        ]),
    },
    mounted() {
        this.getPerson();
    },
}
</script>

<style scoped>
.about-person {
    background-image: url('../../public/images/bg-1.jpg');
    background-size: cover;
}
    .person-info {
        height: 100vh;
        width: 900px;
        margin: 0 auto;
        padding: 20px;
    }

    .person-name {
        text-align: center;
        color: white;
    }

    .person-card {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 30px;
        margin-top: 35px;
    }

    .info-wrapper {
        width: 400px;
    }

    .info-item{
        margin-bottom: 10px;
        font-size: 20px;
        color: #efca3f;
        font-weight: bold;
    }
</style>