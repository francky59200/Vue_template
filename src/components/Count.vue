<template>
  <div class="butonAlign">
    <h4>{{ count }}</h4>

    <b-button class="mr-4" v-on:click="count++">Add One</b-button>
    <b-button v-on:click="count--">Remove One</b-button>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";

export default {
  name: "Count",
  data() {
    return {
      count: 0
    };
  }
};
</script>

<style>
.butonAlign {
  display: align;
  text-align: center;
}
</style>



