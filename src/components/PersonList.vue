<template>
    <div class="list">
        <h3 class="list__header">Список персонажей</h3>
      <div v-if="persons.length > 0" class="list-wrapper">
          <transition-group name="list-wrapper">
              <person-item
                  :person="person"
                  class="list__item"
                  v-for="(person,idx) in persons"
                  :key="'person' + idx"
              />
          </transition-group>
      </div>
        <h2 style="color: white" v-else>
            Список персонажей пуст
        </h2>
  </div>
</template>

<script>
import PersonItem from "@/components/PersonItem";

export default {
  name: 'PersonList',
    components: {PersonItem},
    props: {
        persons: {
            type: Array,
            required: true,
        }
  },
}
</script>

<style scoped>
 @import "css/list-styles.css";
</style>
