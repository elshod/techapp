<template>
    <div class="all">
        <table>
            <thead>
                <tr>
                    <th>№</th>
                    <th>Наименование</th>
                    <th>Серия</th>
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
                <tr v-for="(n,i) of 15" :key='i'>
                    <td>№</td>
                    <td>Цитрамон</td>
                    <td>312AAB241</td>
                    <td>12.12.2022</td>
                    <td>123 п</td>
                    <td>2 300 сум</td>
                    <td>2 300 с</td>
                    <td>12 000 300 с</td>
                    <td>10%</td>
                    <td>Oksmed</td>
                    <td>TrueChange</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {

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