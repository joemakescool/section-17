<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <h1>Vuex</h1>
          <app-result></app-result>
          <another-result></another-result>
          <hr>
          <app-counter></app-counter>
          <another-counter></another-counter>
          <hr>
          <label>Value in store.js:
            <input type="text" :value="value" v-on:input="updateValue">
          </label>
          <p>Value in store.js: {{ value }}</p>
          <hr>
          <label>Value in store.js with setters and getters in computed: {}:
            <input type="text" v-model="value">
          </label>
          <p>Value in store.js with computed: {}: {{ value }}</p>

          <!--          <app-result :counter-from-parent="counter"></app-result>-->
          <!--          <hr>-->
          <!--          <app-counter @updated="counter += $event"></app-counter>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Counter from './components/Counter.vue';
  import Result from './components/Result.vue';
  import AnotherResult from "@/components/AnotherResult";
  import AnotherCounter from "@/components/AnotherCounter";

export default {
  name: 'app',

  computed: {
    value: {
      get() {
        return this.$store.getters.value;
      },
      set(value) {
        this.$store.dispatch("updateValue", value);
      }
    }
  },

  methods: {
    updateValue(event) {
      this.$store.dispatch('updateValue', event.target.value);
    }
  },

  components: {
    appCounter: Counter,
    appResult: Result,
    'another-result': AnotherResult,
    'another-counter': AnotherCounter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
