<template>
  <div id="app">
    <Counter />
  </div>
</template>

<script>
import Counter from "./Counter.vue";
export default {
  components: {
    Counter
  },
  data() {
    return {
      message: "hello"
    };
  },
  computed: {
    message: "Reggie"
  }
};
</script>

<style lang="scss">
#app {
  font-size: 18px;
  font-family: "Roboto", sans-serif;
  color: green;
}
</style>
