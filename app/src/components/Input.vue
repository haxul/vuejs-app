<template>
    <div>
        <h2>Users: </h2>
        <h4 v-for="user in users">
            Name: {{user.name}}, Last name: {{user.lastname}}
        </h4>
        <slot></slot>
        <router-link to="tran">transition</router-link>
    </div>
</template>

<script>
    export default {
        name: "Input",
        computed: {
            users() {
                return this.$store.getters.getUsers
            }
        }
    }
</script>

<style scoped>

</style>