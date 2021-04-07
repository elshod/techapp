<template>
    <div class="newmodal" v-show="newModal">
        <button class="closemodal" @click="closeNewModal"><span>+</span></button>
        <div class="title">Новый приход</div>
        <div class='newmodal__box'>
            <div class="t">Поставщик</div>
            <div class="inp del">
                <input type="text">
                <button>+</button>
            </div>
        </div>
        <div class='newmodal__box'>
            <div class="t">Номер с/ф</div>
            <div class="inp num">
                <input type="text">
            </div>
        </div>
        <div class='newmodal__box'>
            <div class="t">Дата прихода</div>
            <div class="inp date">
                <input type="date" id="dd">
                <label for="dd"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.6047 29.2961H29.3706C29.9411 29.2961 30.3876 28.8496 30.3876 28.2791V5.58139C30.3876 5.01085 29.9411 4.56433 29.3706 4.56433H24.3349V3.69612C24.3349 3.12557 23.8884 2.67906 23.3179 2.67906C22.7473 2.67906 22.3008 3.12557 22.3008 3.69612V4.56433H9.84811V3.69612C9.84811 3.12557 9.4016 2.67906 8.83106 2.67906C8.26051 2.67906 7.814 3.12557 7.814 3.69612V4.56433H2.6047C2.03416 4.56433 1.58765 5.01085 1.58765 5.58139V28.3039C1.58765 28.8496 2.05896 29.2961 2.6047 29.2961ZM3.62176 6.59844H7.814V7.14418C7.814 7.71472 8.26051 8.16123 8.83106 8.16123C9.4016 8.16123 9.84811 7.71472 9.84811 7.14418V6.59844H22.3008V7.14418C22.3008 7.71472 22.7473 8.16123 23.3179 8.16123C23.8884 8.16123 24.3349 7.71472 24.3349 7.14418V6.59844H28.3783V9.2279H3.62176V6.59844ZM3.62176 11.262H28.3535V27.2868H3.62176V11.262Z" fill="white"/><path d="M23.3179 15.9256H8.68222C8.11167 15.9256 7.66516 16.3721 7.66516 16.9426C7.66516 17.5132 8.11167 17.9597 8.68222 17.9597H23.3179C23.8884 17.9597 24.3349 17.5132 24.3349 16.9426C24.3349 16.3721 23.8884 15.9256 23.3179 15.9256Z" fill="white"/><path d="M16 20.8372H8.68222C8.11167 20.8372 7.66516 21.2837 7.66516 21.8543C7.66516 22.4248 8.11167 22.8713 8.68222 22.8713H16C16.5706 22.8713 17.0171 22.4248 17.0171 21.8543C17.0171 21.2837 16.5706 20.8372 16 20.8372Z" fill="white"/></svg>
                </label>
            </div>
        </div>
        <button class="add">Добавить</button>
    </div>
</template>

<script>
export default {
    computed: {
        newModal(){
            return this.$store.getters.getNewModal
        }
    },
    methods: {
        closeNewModal(){
            this.$store.commit('changeNewModal',false)
        }
    }
}
</script>

<style lang='scss'>
.newmodal {
    position: fixed;
    max-width: 445px;
    background-color: #fff;
    box-shadow: 0px 0px 12px 0px rgba(0,0,0,0.1);
    top: 100px;
    left: 0;
    right: 0;
    margin: auto;
    z-index: 1;
    border-radius: 10px;
    padding: 48px 120px;
    .title {
        font-size: 30px;
        margin-bottom: 37px;
        text-align: center;
    }
    button.closemodal {
        position: absolute;
        background: unset;
        font-size: 36px;
        border:0;
        transform: rotate(45deg);
        right: 30px;
        top: 20px;
    }
    .t {
        font-size: 14px;
        
    }
    .newmodal__box {
        margin-bottom: 31px;
        display: block;
    }
    input[type="date"]::-webkit-inner-spin-button,
    input[type="date"]::-webkit-calendar-picker-indicator {
        display: none;
        -webkit-appearance: none;
    }
    button.add {
        background-color: #21B8C7;
        width: 221px;
        height: 50px;
        border-radius: 5px;
        margin-top: 41px;
        margin-left: auto;
        margin-right: auto;
        border:0;
        display: block;
        font-size: 14px;
        color: #fff;
    }
    .inp {
        border:1px solid #DADCE5;
        height: 50px;
        display: flex;
        align-items: center;
        padding: 3px 3px 3px 21px;
        border-radius: 5px;
        input {
            border:0;
            font-size: 14px;
            color: #000;
            width: calc(100% - 55px);
        }
        label,
        button {
            background-color: #6F52ED;
            margin-left: auto;
            width: 55px;
            height: 48px;
            border:0;
            border-radius: 5px;
            font-size: 36px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff;
        }
    }
}
</style>