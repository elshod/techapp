<template>
    <div class="manual">
        <Top/>
        <FormApp/>

        <Table/>
    </div>
</template>

<script>
import Top from '../components/Manual/Top'
import Table from '../components/Manual/Table'
import FormApp from '../components/Manual/Form'
export default {
    components: {
        Top, Table, FormApp
    }
}
</script>

<style lang="scss">
.manual {
    padding: 40px 60px;
}
</style>