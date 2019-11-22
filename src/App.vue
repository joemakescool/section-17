<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <h1>Vuex</h1>
          <app-result :counter="counter"></app-result>
          <hr>
          <app-counter @updated="counter += $event"></app-counter>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Counter from './components/Counter.vue';
  import Result from './components/Result.vue';

export default {
  name: 'app',
  data() {
    return {
      counter: 0
    }
  },

  components: {
    appCounter: Counter,
    appResult: Result,
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
