<template>
    <div class="nav">
        <div class="nav-box auto dsflex">
            <div class="commodity">
                <div class="commodity-text dsflex">
                    全部商品分类     
                </div>
                <ul class="commodity-text-list commodity-text-none">
                    <li>
                        <span>母婴用品</span>
                         <span>
                            <img src="../img/sanjia.png" alt="">
                         </span>
                    </li>
                     <li>
                        <span>母婴用品</span>
                         <span>
                            <img src="../img/sanjia.png" alt="">
                         </span>
                    </li>
                     <li>
                        <span>母婴用品</span>
                         <span>
                            <img src="../img/sanjia.png" alt="">
                         </span>
                    </li>
                     <li>
                        <span>母婴用品</span>
                         <span>
                            <img src="../img/sanjia.png" alt="">
                         </span>
                    </li>
                     <li>
                        <span>母婴用品</span>
                         <span>
                            <img src="../img/sanjia.png" alt="">
                         </span>
                    </li>
                     <li>
                        <span>母婴用品</span>
                         <span>
                            <img src="../img/sanjia.png" alt="">
                         </span>
                    </li>
                </ul>
            </div>
            <ul class="dsflex nav-box-list">
                <li>首页</li>
                <li>积分商城</li>
                <li>团购</li>
                <li>秒杀</li>
            </ul>
        </div>
    </div>    
</template>
<script>
export default {
    
}
</script>
<style>
    .nav{
        height: 40px;
        background: red;
        color: white;
    }
    .commodity-text{
        width: 200px;
        height: 40px;
        justify-content: center;
        align-items: center;
        background: #ec193e;
        position: relative;
    }
    .nav-box-list{
        width: 387px;
        align-items: center;
    }
    .nav-box-list li{
        line-height: 39px;
        padding: 0 25px;
        text-align: center;
        cursor: pointer;
    } 
    .commodity-text-list{
        position: absolute;
        background: red;
        padding: 0 20px 0 30px;
        flex-direction: column;
        display: flex;
         width: 200px;
    }
    .commodity-text-list li{
        width: 100%;
        display:inline-flex;
        justify-content: space-between;
        height: 52px;
       align-items: center;
    }
</style>
