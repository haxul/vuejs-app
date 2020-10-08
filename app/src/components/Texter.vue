<template>
    <div>
        <h1>{{getText}}</h1>
        <router-link to="tran">tran</router-link>

    </div>

</template>

<script>
    export default {
        name: "Texter",
        computed: {
            getText() {
                return this.$store.getters["textModule/getText"]
            }
        }
    }
</script>

<style scoped>

</style>