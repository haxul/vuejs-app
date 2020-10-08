<template>
    <div>
        <Transition></Transition>
        <Input></Input>
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
