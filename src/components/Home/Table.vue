<template>
    <div class="all">
        <table>
            <thead>
                <tr>
                    <th>№</th>
                    <th>Наименование</th>
                    <th>Состав</th>
                    <th>Срок.год</th>
                    <th>Кол-во</th>
                    <th>Базавая цена</th>
                    <th>Приходная цена</th>
                    <th>Приходная сумма</th>
                    <th>Нац%</th>
                    <th>Производитель</th>
                    <th>Поставщик</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(dori,i) of dorilar" :key='i'>
                    <td>{{i+1}}</td>
                    <td>{{dori.nomi}}</td>
                    <td>{{dori.tarkib}}</td>
                    <td>{{dori.srok}}</td>
                    <td>{{dori.qadoq*dori.dona+dori.qdona*1}}</td>
                    <td>{{dori.bnarhi}} сум</td>
                    <td>{{dori.pnarhi}} сум</td>
                    <td>{{dori.pnarhi*dori.qadoq}} сум</td>
                    <td>{{dori.foiz}}%</td>
                    <td>{{dori.ishlab}}</td>
                    <td>{{change(dori.reid)}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    computed:{
        dorilar(){
            return this.$store.getters.getDorilar
        }
    },
    methods:{
        change(id){
            return this.$store.getters.getCompany(id)
        }
    }
}
</script>

<style lang='scss'>
    table {
        width: 100%;
        margin-top: 50px;
        text-align: left;
        background-color: #fff;
        border-radius: 5px;
        border-collapse: collapse;
        overflow: hidden;
        border:4px solid #fff;
        thead {
            tr {
                background-color: #EDEDF6;
                
                border-radius: 5px;
                th {
                    color: #6D6D6D;
                    font-size: 14px;
                    padding: 18px;
                }
            }
        }
        td,
        th {
            padding: 19px 0px;
        }
        tbody {
            td {
                padding: 18px;
                font-size: 14px;
            }
            tr {
                &:nth-child(even){
                    background-color: #FAFAFA;
                    border-radius: 5px;
                }
                &:hover {
                    td:first-child {
                        border-left: 3px solid #6F52ED;
                    }    
                }
                td:first-child {
                    border-left: 3px solid #fff;
                }
            }
        }
    }
</style>