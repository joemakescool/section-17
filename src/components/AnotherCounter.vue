<template>
    <div class="btn-group">
        <button class="btn btn-primary" @click="asyncIncrement">Increment +</button>
        <button class="btn btn-info" @click="asyncDecrement({by: 100, duration: 500})">Decrement -</button>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'

    export default {
        methods: {
            ...mapActions(["asyncIncrement", "asyncDecrement"])
            // increment() {
            //     // this.$emit('updated', 1);
            //     this.$store.commit('increment');
            // },
            // decrement() {
            //     this.$store.commit('decrement');
        },


    }
</script>

