<template>
    <div class="header">
        <div class="header-box">
            <div class="header-tou auto">
                <div>
                    <span>设为首页</span>
                    <span>|</span>
                    <span>收藏本网站</span>
                </div>
                <div>
                    <span>路人甲</span>
                    <span>|</span>
                    <span>退出登录</span>
                    <span>|</span>
                    <span>我的订单</span>
                </div>
            </div>
        </div>
        <div class="header-input auto dsflex">
            <div class="header-logo">
                <img src="../img/logo.png">
            </div>
            <div class="header-seek">
                <div class="header-seek-box dsflex">
                    <input type="text" placeholder="奶粉">
                    <button>搜索</button>
                </div>
                <div>
                    <span>奈良</span>
                    <span>|</span>
                    <span>奶酪</span>
                    <span>|</span>
                    <span>奶糖</span>
                </div>
            </div>    
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .header-box{
        height: 35px;
        width: 100%;
        background: #f7f7f7;
    }
    .header-tou{
        display: flex;
        line-height: 34px;
        justify-content: space-between;
    }
    .header-input{
        height: 132px;
        align-items: center;
    }
    .header-seek-box{
        width: 510px;
        height: 40px;
        border: 2px solid red;
    }
    .header-seek-box input{
        width: 100%;
        height: 100%;
        background: url(../img/sousuo.png) no-repeat 5px center;
        padding-left: 23px;
        border: none;
    }
    .header-seek-box button{
        width: 80px;
        background: red;
        border: none;
        cursor: pointer;
    }
    .header-seek{
        margin-left: 180px;
    }
</style>
