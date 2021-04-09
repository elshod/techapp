<template>
    <div class="newmodal" v-show="newCompModal">
        <button class="closemodal" @click="closeModal"><span>+</span></button>
        <div class="title">Новый поставщик</div>
        <div class='newmodal__box'>
            <div class="t">Наименование</div>
            <div class="inp del">
                <input type="text" v-model="comp.title">
            </div>
        </div>
        <div class='newmodal__box'>
            <div class="t">Номер с/ф</div>
            <div class="inp num">
                <input type="text" v-model="comp.sf">
            </div>
        </div>
        <div class='newmodal__box'>
            <div class="t">Адресс</div>
            <div class="inp num">
                <input type="text" v-model="comp.addr">
            </div>
        </div>
        <div class='newmodal__box'>
            <div class="t">Номер телефон</div>
            <div class="inp num">
                <input type="text" v-model="comp.phone">
            </div>
        </div>
        <div class='newmodal__box'>
            <div class="t">Email</div>
            <div class="inp num">
                <input type="text" v-model="comp.email">
            </div>
        </div>
        <button class="add" @click="add()">Добавить</button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            comp: {},

        }
    },
    computed: {
        newCompModal(){
            return this.$store.getters.getNewCompModal
        }
    },
    methods: {
        add(){
            this.$store.dispatch('addNewCompany',this.comp)
            this.comp = {}
            this.closeModal()
        },
        closeModal(){
            this.$store.commit('changeNewCompModal',false)

        }
    }
}
</script>

<style lang='scss'>

</style>