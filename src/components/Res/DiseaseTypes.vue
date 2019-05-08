<template>
<!-- 症状类型 -->
    <div class="diseaseTypes">
         <el-row>
             <el-col :offset="1" :span="22">
                <el-table style="width:100%" :data="tableData" stripe border>
                    <el-table-column fixed prop="id"></el-table-column>
                    <el-table-column fixed prop="symptom" label="症状名称"> </el-table-column>
                    <el-table-column fixed prop="describe" label="描述"> </el-table-column>
                    <el-table-column fixed prop="state" label="状态"> </el-table-column>
                    <el-table-column label="操作">
                        <template slot-scope="scope">
                            <el-button type="success" @click="dialogFormVisible = true,handleEdit(scope.$index, scope.row)">编辑</el-button>
                            <el-button type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <el-dialog title="修改内容" :visible.sync="dialogFormVisible">
                    <el-form :model="form">
                        <el-form-item label="症状名称" :label-width="formLabelWidth">
                            <el-input v-model="form.symptom" auto-complete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="描述" :label-width="formLabelWidth">
                            <el-input v-model="form.describe" auto-complete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="状态" :label-width="formLabelWidth">
                            <el-input v-model="form.state" auto-complete="off"></el-input>
                        </el-form-item>
                    </el-form>
                    <div slot="footer" class="dialog-footer">
                        <el-button @click="dialogFormVisible = false">取 消</el-button>
                        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
                    </div>
                </el-dialog>
             </el-col>
        </el-row>
        
        <el-pagination
            background
            layout="prev, pager, next"
            :total="3*10">
        </el-pagination>
    </div>
</template>
<script>
export default {
    data(){
        return{
            tableData:[
                {   id:1,
                    symptom:'近视',
                    describe:'近视表示，注意力不集中，看物体模糊',
                    state:'生效'
                },
                {
                    id:2,
                    symptom:'近视',
                    describe:'近视表示，注意力不集中，看物体模糊',
                    state:'生效'
                },
                {
                    id:3,
                    symptom:'近视',
                    describe:'近视表示，注意力不集中，看物体模糊',
                    state:'生效'
                },
                {
                    id:4,
                    symptom:'近视',
                    describe:'近视表示，注意力不集中，看物体模糊',
                    state:'生效'
                },
            ],
            dialogFormVisible: false,
            form: {
                symptom: '',
                describe: '',
                state: '',
            },
            formLabelWidth: '120px'
        }
    },
    methods:{
        handleDelete(index, row) {
            console.log(index, row);
            this.tableData.splice(index, 1);
        },//删除数据
        handleEdit(index, row) {
            console.log(index, row);
            this.form=row;
        },//修改数据
    }
}
</script>
<style>

</style>
