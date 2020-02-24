<template>
  <div>
    <Home/>
    <Form/>
    <Count/>
  </div>
</template>




<script>
import Home from "./components/Home";
import Form from "./components/Form";
import Count from "./components/Count";

export default {
  name: "App",
  components: {
    Home,
    Form,
    Count
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
