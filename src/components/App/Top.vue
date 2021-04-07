<template>
    <header class="header">
        <div class="header__search">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z" fill="#C9CED6"/></svg>
            <input type="text" v-model="search" placeholder="Поиск">
        </div>
        <div class="header__user">
            <div class="left">
                <div class="name">Олимов Асрор</div>
                <div class="smena">Смена №2</div>
            </div>
            <img src="@/assets/img/avatar.png" alt="">
            <button><svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L7 7L13 1" stroke="#C9CED6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
            <div class="right">
                <button>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke="#C9CED6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" stroke="#C9CED6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </button>
                <button>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9" stroke="#C9CED6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 17L21 12L16 7" stroke="#C9CED6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M21 12H9" stroke="#C9CED6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </button>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    data(){
        return {
            search:''
        }
    }
}
</script>

<style lang='scss'>
.header {
    background-color: #fff;
    height: 100px;
    padding:0px 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &__user{
        display: flex;
        align-items: center;
        button {
            margin-left: 24px;
        }
        .left {
            text-align: right;
            margin-right: 14px;
            .name {
                font-size: 14px;
            }
            .smena {
                font-size: 12px;
                color: #A6ACBE;
            }
        }
    }
    
    button {
        background: unset;
        border:0;
    }
    &__search {
        display: flex;
        align-items: center;
        input {
            font-size: 16px;
            border:0;
            margin-left: 10px;
            width: 300px;
            &::-webkit-input-placeholder{
                color: #A6ACBE;
            }
        }
    }
}
</style>