<template>
<div id="app">
  <Navs/><Top/>
  <div class="view">
    <router-view/>
    </div>
    </div>
</template>

<script>
  import Navs from './components/App/Nav'
  import Top from './components/App/Top'

export default {
  components: {
    Navs,
    Top
  },
  created() {
    this.$store.dispatch('allDorilar')
    this.$store.dispatch('allReceipt')
    this.$store.dispatch('allCompany')
  }
}

</script>
<style lang="scss">
@import url(./assets/style.scss);



body {
  background-color: #F8F8FB;
  font-family: 'gotham';
}

.view {
  height: calc(100vh - 100px);
  overflow: auto;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    
  }

  &::-webkit-scrollbar-thumb {
    background-color: #6F52ED;
    outline: 1px solid #6F52ED;
  }
}

input,
textarea,
button {
  &:focus {
    outline: 0;
  }
}

button {
  cursor: pointer;

  &:hover {
    path {
      stroke: #6F52ED;
    }
  }
}

</style>