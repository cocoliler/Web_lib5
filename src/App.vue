<template>
  <div id="app">
    <!-- <h1 id="htitle">{{ message }}</h1> -->
    <!-- <test-button></test-button> -->
    <!-- <user-view></user-view> -->
    <router-view></router-view>
  </div>
</template>

<script>
//import TestButton from './views/elment/TestButton.vue';
// import UserView from './views/elment/UserView.vue';
//import QuestionView from './views/elment/QuestionView.vue';
export default {
  //components: {QuestionView},
  data() {
    return {
      message: "hello vue",
    };
  },
  methods: {
  },
};
</script>