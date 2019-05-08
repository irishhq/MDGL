<template>
<!-- 充值记录 -->
    <div class="rechargeRecord">
        <el-row>
            <el-col :offset="1" :span="22">
                <el-table :data="dataTable" border stripe>
                    <el-table-column prop="id"></el-table-column>
                    <el-table-column prop="name" label="姓名"></el-table-column>
                    <el-table-column prop="tel" label="电话"></el-table-column>
                    <el-table-column prop="rechargeTypet" label="充值类型"></el-table-column>
                    <el-table-column prop="aggregateAmount" label="总金额"></el-table-column>
                    <el-table-column prop="rechargeAmount" label="充值金额"></el-table-column>
                    <el-table-column prop="presenterAmount" label="赠送金额"></el-table-column>
                    <el-table-column prop="rechargeTime" label="充值时间"></el-table-column>
                </el-table>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    data(){
        return{
            dataTable:[
                {
                    id:1,
                    name:"邓天泽",
                    tel:"15685672498",
                    rechargeType:"充一疗程送200",
                    aggregateAmount:"2000",
                    rechargeAmount:"2200",
                    presenterAmount:"200",
                    rechargeTime:"2018-10-25",
                },
                {
                    id:2,
                    name:"邓天泽",
                    tel:"15685672498",
                    rechargeType:"充一疗程送200",
                    aggregateAmount:"2000",
                    rechargeAmount:"2200",
                    presenterAmount:"200",
                    rechargeTime:"2018-10-25",
                },
                {
                    id:3,
                    name:"邓天泽",
                    tel:"15685672498",
                    rechargeType:"充一疗程送200",
                    aggregateAmount:"2000",
                    rechargeAmount:"2200",
                    presenterAmount:"200",
                    rechargeTime:"2018-10-25",
                },
                {
                    id:4,
                    name:"邓天泽",
                    tel:"15685672498",
                    rechargeType:"充一疗程送200",
                    aggregateAmount:"2000",
                    rechargeAmount:"2200",
                    presenterAmount:"200",
                    rechargeTime:"2018-10-25",
                },
            ]

        }
    }
}
</script>
<style>

</style>

