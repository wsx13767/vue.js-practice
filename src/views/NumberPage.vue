<template>
    <div>
        <displayNumbers />
        <addNumbers />
    </div>
</template>
<script>
import addNumbers from "../components/AddNumbers.vue";
import displayNumbers from "../components/DisplayNumbers.vue";
export default {
    components: {addNumbers, displayNumbers}
}
</script>