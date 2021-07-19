<template>
    <div>
        <h2>{{ storeState }}</h2>
        <h2>{{ numbers }}</h2>
    </div>
</template>
<script>
import EventBus from "../EventBus.js"
import { store } from "../store.js"

export default {
    data() {
        return {
            numbers: [1,3,5,7,9],
            storeState: store.state.numbers
        }
    },
    methods: {
        handleAddNumber() {
            EventBus.$on('addNumber', (payload)=>{
                this.numbers.push(payload)
            })
        }
    },
    created() {
        this.handleAddNumber()
    }
}
</script>