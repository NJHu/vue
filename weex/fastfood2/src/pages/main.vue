<template>
    <div class="main-wrapper">
        <text>{{msg}}</text>
        <div><input id="input-name" type="text"/></div>
        <image class="testImage" src="http://7xjyw1.com1.z0.glb.clouddn.com/20170412101827.png"></image>
    </div>
</template>

<script>
//    var modal = weex.requireModule('modal')
    export default {
        data() {
            return {
                msg: '12321321'
            }
        },
        created() {
//            console.log('will show toast')
//            modal.toast({
//                message: '初始化成功。',
//                duration: 5
//            })
        }
    }
</script>

<style scoped>
    .main-wrapper {
        display: flex;
        flex-direction: column;
    }

    #input-name {
        width: 200px;
        height: 44px;
        background-color: red;
    }
    /*宽：720px=100%         高：1250px =100%*/
    .testImage {
        width: 720px;
        height: 720px;
    }
</style>
