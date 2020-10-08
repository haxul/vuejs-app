<template>
    <div>
        <router-view></router-view>
        <Input>
            <h1>{{iText}}</h1>
        </Input>
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
                iText: "some text "
            }
        },

        methods: {

        }
    }

</script>
