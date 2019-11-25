<template>
    <p>Counter is: {{ counter }}</p>
</template>

<script>
    export default {
        // props: ['counterFromParent']
        data: () => ({}),
        computed: {
            counter() {
                return this.$store.getters.doubleCounter;
            }
        }
    }
</script>
