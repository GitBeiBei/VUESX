<template>
  <div id="app">
    <Header/>
    <Nav/>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/header/index'
import Nav from './components/nav/index'
export default {
  name: 'App',
  components: {
    Header,
    Nav
  }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  #app{
     min-width: 1200px;
     font-size: 14px;
  }
  .auto{
        margin: auto;
         width: 1200px;
    }
    .dsflex{
      display: flex;
    }
    :focus{
        outline: none;
    }
    li{
      list-style: none;
    }
</style>
