<template>
    <div class="manual__add">
        <table>
            <thead>
                <tr>
                    <th>№</th>
                    <th>Наименование</th>
                    <th>Состав</th>
                    <th>Срок.год</th>
                    <th>Кол-во</th>
                    <th>Базавая цена</th>
                    <th>Цена продажи</th>
                    <th>Поставщик</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(dori,i) of dorilar" :key='i'>
                    <td>{{i+1}}</td>
                    <td>{{dori.nomi}}</td>
                    <td>{{dori.tarkib}}</td>
                    <td>{{dori.srok}}</td>
                    <td>{{dori.dona*dori.qadoq+dori.qdona*1}}</td>
                    <td>{{dori.bnarhi}}</td>
                    <td>{{dori.pnarhi}}</td>
                    <td>{{change(dori.reid)}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    data(){
        return {
            id: this.$route.params.id
        }
    },
    computed: {
        dorilar(){
            return this.$store.getters.getReDorilar(this.id)
        }
    },
    methods: {
        change(id){
            return this.$store.getters.getCompany(id)
        }
    }
}
</script>

<style lang='scss'>
    .manual__add table {
        width: calc(100% - 468px);
        margin-top: 0;
    }
</style>