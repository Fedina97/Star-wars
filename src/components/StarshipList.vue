<template>
    <div class="list">
        <h3 class="list__header">Список кораблей</h3>
      <div v-if="starships.length > 0" class="list-wrapper">
          <transition-group name="list-wrapper">
              <starship-item
                  :starship="starship"
                  class="list__item"
                  v-for="(starship,idx) in starships"
                  :key="'starship' + idx"
              />
          </transition-group>
      </div>
        <h2 v-else>
            Список кораблей пуст
        </h2>
  </div>
</template>

<script>
import StarshipItem from "@/components/StarshipItem";

export default {
  name: 'StarshipList',
    components: {StarshipItem},
    props: {
        starships: {
            type: Array,
            required: true,
        }
  },
}
</script>

<style scoped>
    @import "css/list-styles.css";
</style>
