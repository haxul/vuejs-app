<template>
    <div>
        <Input :text="'Hello Input'"/>
    </div>
</template>

<script>
    import Input from "./components/Input";

    export default {
        name : "App",
        components: {Input}
    }

</script>
