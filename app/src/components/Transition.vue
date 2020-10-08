<template>
    <div>
        <button @click="sendData">sendData</button>
        <h2>current status : {{getStatus}}</h2>
        <button v-on:click="addUser">
            Add user
        </button>
        <p><input type="text" v-model="firstname"/></p>
        <p><input type="text" v-model="lastname"/></p>
    </div>

</template>

<script>
    import Input from "./Input";

    export default {
        name: "Transition",
        components: {Input},
        data() {
            return {
                show: false,
                firstname: "",
                lastname: ""
            }
        },
        computed: {
            getStatus() {
                return this.$store.getters.getStatus
            }
        },
        methods: {
            addUser() {
                const payload = {
                    firstname: this.firstname,
                    lastname: this.lastname
                }
                this.$store.commit("addUser", payload)
            },
            sendData() {
                this.$store.dispatch("sendData", "hello world")
            }
        }
    }
</script>

<style scoped>

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }

    .fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */
    {
        opacity: 0;
    }


</style>