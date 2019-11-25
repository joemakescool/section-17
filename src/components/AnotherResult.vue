<template>
    <div>
        <p>Another Result</p>
        <p>Counter is: {{ doubleCounter }}</p>
        <p>Clicks was {{ stringCounter }}</p>
        <p>doubleMe : {{ doubleMe }}</p>
        <p>stringMe: {{ stringMe }}</p>
        <p>Value of the this thing {{ value }}</p>
    </div>
</template>

<script>

    import {mapGetters} from 'vuex';

    export default {
        // props: ['counterFromParent']
        data: () => ({}),
        computed: {
            ...mapGetters([
                'doubleCounter',
                'stringCounter'
            ]),
            ...mapGetters({
                doubleMe: 'doubleCounter',
                stringMe: 'stringCounter'
            }),

            value: {
                get() {
                    return this.doubleMe + 1;
                }
            }


        }
    }
</script>
