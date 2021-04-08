<template>
    <div class="manual__form">
        <div class="mbox">
            <div class="title">Торговая марка</div>
            <input type="text" v-model='dori.nomi'>
        </div>
        <div class="mbox">
            <div class="title">Состав</div>
            <input type="text" v-model='dori.tarkib'>
        </div>
        <div class="row">
            <div class="col-6">
                <div class="mbox">
                    <div class="title">Форма выпуска</div>
                    <select v-model='dori.turi'>
                        <option value="Капсулы">Капсулы</option>
                        <option value="Таблетки">Таблетки</option>
                    </select>
                </div>
            </div>
            <div class="col-6">
                <div class="mbox">
                    <div class="title">Срок годности</div>
                    <input type="date" v-model='dori.srok'>
                </div>
            </div>
            <div class="col-6">
                <div class="mbox">
                    <div class="title">Доза / размер</div>
                    <input type="text" v-model='dori.doza'>
                </div>
            </div>
            <div class="col-6">
                <div class="mbox">
                    <div class="title">Кол-во в упаковке</div>
                    <input type="text" v-model='dori.dona'>
                </div>
            </div>
        </div>
        <div class="mbox">
            <div class="title">Производитель</div>
            <input type="text" v-model='dori.ishlab'>
        </div>
        <div class="row">
            <div class="col-6">
                <div class="mbox">
                    <div class="title">Количество в прихода</div>
                    <input type="text" v-model='dori.qadoq'>
                </div>
            </div>
            <div class="col-6">
                <div class="mbox">
                    <div class="title"> </div>
                    <input type="text" v-model='dori.qdona'>
                </div>
            </div>
            <div class="col-6">
                <div class="mbox">
                    <div class="title">Базовая цена</div>
                    <input type="text" v-model='dori.bnarhi'>
                </div>
            </div>
            <div class="col-6">
                <div class="mbox">
                    <div class="title">Приходная цена</div>
                    <input type="text" v-model='dori.pnarhi'>
                </div>
            </div>
            <div class="col-6">
                <div class="mbox">
                    <div class="title">Наценка</div>
                    <input type="text" v-model='dori.foiz'>
                </div>
            </div>
            <div class="col-6">
                <div class="mbox">
                    <div class="title">Цена продажи</div>
                    <input type="text" v-model='dori.bonarhi'>
                </div>
            </div>
            <div class="col-6"></div>
            <div class="col-6">
                <button class="toadd" @click="newDori">Добавить</button>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    data(){
        return{
            dori: {
                reid: this.$route.params.id
            },
            
        }
    },
    methods: {
        newDori(){
            this.$store.dispatch('addNewDori',this.dori)
            this.dori = {
                reid: this.$route.params.id
            }
        }
    }
}
</script>

<style lang='scss'>
    .manual{
        &__form{
            float: left;
            width: 404px;
            margin-right: 40px;
            background-color: #fff;
            padding: 12px;
            button.toadd {
                display: block;
                width: 100%;
                background-color: #33D69F;
                color: #fff;
                font-size: 14px;
                text-align: center;
                height: 50px;
                border-radius: 5px;
                border:0;
            }
            .mbox {
                margin-bottom: 12px;
                .title {
                    font-size: 14px;
                    margin-bottom: 7px;
                }
                select,
                input {
                    border:0;
                    font-size: 14px;
                    color: #000;
                    display: block;
                    width: 100%;
                    border:1px solid #DADCE5;
                    height: 50px;

                    padding: 3px 3px 3px 21px;
                    border-radius: 5px;
                }
                
            }
        }
    }

</style>