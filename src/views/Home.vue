<template>
  <div class="home">
    <Top/>    
    <Table/>    
    <New/>
  </div>
</template>

<script>
import Top from '../components/Home/Top'
import Table from '../components/Home/Table'
import New from '../components/Home/New'
export default {
  name: 'Home',
  components: {
    Top, Table, New
  }
}
</script>
<style lang="scss">
.home {
  padding: 40px 60px;
}
  .bigtitle {
    display: flex;
    .left {
      .title {
        font-size: 30px;
        color: #000;
        margin-bottom: 17px;
      }
      .all {
        color: #A6ACBE;
        font-size: 14px;
        span {
          color: #000;
          font-weight: bold;
        }

      }
    }
    .filtr {
      border:1px solid #DADCE5;
      border-radius: 5px;
      padding: 3px 3px 3px 21px;
      display: flex;
      margin-left: auto;
      margin-right: 76px;
      width: 405px;
      justify-content: space-between;
      input {
        background: unset;
        font-size: 14px;
        color: #6F52ED;
        border:0;
        width: 80%;
      }
      button {
        width: 55px;
        background-color: #6F52ED;
        border:0;
        border-radius: 5px;
        path {
          fill:#fff;
        }
      }
    }
    button.pause,
    button.add {
      background-color: #6F52ED;
      font-size: 14px;
      color: #fff;
      display: flex;
      align-items: center;
      border:0;
      width: 225px;
      padding: 14px 15px;
      border-radius: 5px;
      &.center {
        justify-content: center;
      }
      svg {
        margin-right: 30px;
      }
    }
    button.pause {
      background-color: #FFB800;
      margin-left: auto;
      text-align: center;
      justify-content: center;
      margin-right: 25px;
    }
    button.settings {
      border-radius: 5px;
      background: unset;
      border:1px solid #DADCE5;
      padding: 15px 18px;
      color: #6F52ED;
      display: flex;
      align-items: center;
      width: 204px;
      margin-right: 30px;
      svg {
        margin-right: 24px;
      }
    }
  }
</style>