<template>
    <div class="bigtitle mb">
        <div class="left">
            <div class="title">Ручной приход</div>
            <div class="all">
                Сумма добавленных товаров: <span>{{summa}} сум</span>
            </div>
        </div>
        <button class="pause">
            Приостоновить приход
        </button>
        <button class="add center">
            Завершить приход
        </button>
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
            summa(){
                return this.$store.getters.getAllSum(this.id)
            }
        }
    }
</script>

<style>
.bigtitle.mb {
        margin-bottom: 37px;
    }
</style>