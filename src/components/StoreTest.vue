<template>
    <div>
        <h1>This is Store Test</h1>
        <p>Loading: {{ ifLoading }}</p>
        <button @click="reverseLoad();addTimes()">Reverse</button>
        <p>Button Clicked Times: {{clickedTimes}}</p>
        <p>{{ doneTodos }}</p>
    </div>
</template>
<script>
  import { mapState } from "vuex";
export default {
    methods: {
        reverseLoad() {
            this.$store.commit("Loaded")
        },
        addTimes() {
            this.$store.commit("AddTimes")
        }
    },
    computed: {
      doneTodos() {return this.$store.getters.doneTodos},
      ...mapState({
        ifLoading: 'isLoading', 
        clickedTimes: 'clickedTimes'
      })
    }
}
</script>