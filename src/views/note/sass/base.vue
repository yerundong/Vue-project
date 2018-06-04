<template>
    <div id="sass-base">
        <div class="bgc-test">I am base</div>
        <son1></son1>
    </div>
</template>
<script>
    import son1 from "./son1";
    export default {
        components:{
            son1
        },
        data(){
            return {}
        },
    }
</script>
<style lang="scss" scoped>
    #sass-base .bgc-test{
        background: red;
    }
    // @import "../../../styles/sass/base";
</style>
