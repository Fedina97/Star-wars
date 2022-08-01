<template>
        <div class="about-person">
            <button-item class="back-btn" @click="$router.push('/starships')">Вернуться к списку</button-item>
            <div class="person-info">
                <h1 class="person-name">{{starshipItem.name}}</h1>
                <div class="person-card">
                    <div class="person-photo">
                        <img src="https://via.placeholder.com/400x500">
                    </div>
                    <div class="info-wrapper">
                        <p class="info-item">Model: {{starshipItem.model}}</p>
                        <p class="info-item">Manufacturer: {{starshipItem.manufacturer}}</p>
                        <p class="info-item">Cost: {{starshipItem.cost_in_credits}}</p>
                        <p class="info-item">Length: {{starshipItem.length}}</p>
                        <p class="info-item">Max speed: {{starshipItem.max_atmosphering_speed}}</p>
                        <p class="info-item">Crew: {{starshipItem.crew}}</p>
                        <p class="info-item">Passengers: {{starshipItem.passengers}}</p>
                        <p class="info-item">Cargo capacity: {{starshipItem.cargo_capacity}}</p>
                        <p class="info-item">Starship class: {{starshipItem.starship_class}}</p>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
import {mapGetters} from "vuex";
import ButtonItem from "@/components/UI/ButtonItem";

export default {
    name: "StarshipsPage",
    components: {ButtonItem},
    computed: {
        ...mapGetters([
            'starshipsList'
        ]),
        starshipItem() {
            return this.starshipsList.find(el => el.id === this.$route.params.id)
        }
    },
}
</script>

<style>
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

.info-wrapper {
    width: 400px;
}

.person-card {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    margin-top: 35px;
}

.info-item{
    margin-bottom: 10px;
    font-size: 20px;
    color: #efca3f;
    font-weight: bold;
}
</style>