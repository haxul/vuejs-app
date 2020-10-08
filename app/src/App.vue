<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>
    import Input from "./components/Input";
    import Transition from "./components/Transition";

    export default {
        name: "App",
        components: {Input, Transition},
        data() {
            return {

            }
        },

        methods: {

        }
    }

</script>
