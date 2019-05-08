<template>
<!-- 训练记录 -->
    <div class="trainingRecords">
        <div class="demo-input-suffix">
            姓名 <el-input placeholder="请输入姓名" v-model="input2" class="el-input-name"></el-input>
            时间 <el-input placeholder="请输入时间" v-model="input3" class="el-input-tel"></el-input>
            <el-button type="primary" icon="el-icon-search">查询</el-button>
        </div>
        <hr>
        <el-row>
            <el-col :offset="1" :span="22">
                <el-table :data="tableData5" border stripe>
                    <el-table-column prop="id"></el-table-column>
                    <el-table-column prop="name" label="姓名"></el-table-column>
                    <el-table-column prop="ucva" label="裸眼视力"></el-table-column>
                    <el-table-column prop="grades" label="评分"></el-table-column>
                    <el-table-column prop="evaluate" label="评价"></el-table-column>
                    <el-table-column prop="projectContent" label="项目内容"></el-table-column>
                    <el-table-column prop="tutor" label="导师"></el-table-column>
                    <el-table-column prop="times" label="时间"></el-table-column>
                     <el-table-column label="操作" style="width:500px">
                        <template slot-scope="scope" style="width:500px">
                            <el-button type="success" @click="dialogFormVisible = true,handleEdit(scope.$index, scope.row)" class="el-input-edit">编辑</el-button>
                            <el-button type="danger" @click="handleDelete(scope.$index, scope.row)" class="el-input-delete">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <el-dialog title="修改内容" :visible.sync="dialogFormVisible">
                    <el-form :model="form">
                        <el-form-item label="姓名" :label-width="formLabelWidth">
                            <el-input v-model="form.name" auto-complete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="裸眼视力" :label-width="formLabelWidth">
                            <el-input v-model="form.ucva" auto-complete="off"></el-input>
                        </el-form-item>
                         <el-form-item label="评分" :label-width="formLabelWidth">
                            <el-input v-model="form.grades" auto-complete="off"></el-input>
                        </el-form-item>
                         <el-form-item label="评价" :label-width="formLabelWidth">
                            <el-input v-model="form.evaluate" auto-complete="off"></el-input>
                        </el-form-item>
                         <el-form-item label="项目内容" :label-width="formLabelWidth">
                            <el-input v-model="form.projectContent" auto-complete="off"></el-input>
                        </el-form-item>
                         <el-form-item label="导师" :label-width="formLabelWidth">
                            <el-input v-model="form.tutor" auto-complete="off"></el-input>
                        </el-form-item>
                         <el-form-item label="时间" :label-width="formLabelWidth">
                            <el-input v-model="form.times" auto-complete="off"></el-input>
                        </el-form-item>
                    </el-form>
                    <div slot="footer" class="dialog-footer">
                        <el-button @click="dialogFormVisible = false">取 消</el-button>
                        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
                    </div>
                </el-dialog>
            </el-col>
        </el-row>

    </div>
</template>
<script>
export default {
    data(){
        return{
            tableData5:[
                {
                    id:1,
                    name:"顾子熙",
                    ucva:"R:0.2 L:0.3",
                    grades:"5",
                    evaluate:"今天不是很配合，希望改进",
                    projectContent:"弱视训练",
                    tutor:"吴老师",
                    times:"2019-05-02"
                },
                 {
                    id:2,
                    name:"顾子熙",
                    ucva:"R:0.2 L:0.3",
                    grades:"5",
                    evaluate:"今天不是很配合，希望改进",
                    projectContent:"弱视训练",
                    tutor:"吴老师",
                    times:"2019-05-02"
                },
                 {
                    id:3,
                    name:"顾子熙",
                    ucva:"R:0.2 L:0.3",
                    grades:"5",
                    evaluate:"今天不是很配合，希望改进",
                    projectContent:"弱视训练",
                    tutor:"吴老师",
                    times:"2019-05-02"
                },
                 {
                    id:4,
                    name:"顾子熙",
                    ucva:"R:0.2 L:0.3",
                    grades:"5",
                    evaluate:"今天不是很配合，希望改进",
                    projectContent:"弱视训练",
                    tutor:"吴老师",
                    times:"2019-05-02"
                },
                 {
                    id:5,
                    name:"顾子熙",
                    ucva:"R:0.2 L:0.3",
                    grades:"5",
                    evaluate:"今天不是很配合，希望改进",
                    projectContent:"弱视训练",
                    tutor:"吴老师",
                    times:"2019-05-02"
                },

            ],
            dialogFormVisible: false,
            form: {
                symptom: '',
                describe: '',
                state: '',
            },
            formLabelWidth: '120px',
            input2:"",
            input3:"",
        }
    },
    methods:{
        handleDelete(index, row) {
            console.log(index, row);
            this.tableData5.splice(index, 1);
        },//删除数据
        handleEdit(index, row) {
            console.log(index, row);
            this.form=row;
        },//修改数据
    }
}
</script>
<style>
.demo-input-suffix{
    margin-left: 20px;
}
.el-input-name{
    width: 200px;
    margin-left: 10px;
    margin-right: 20px;
}
.el-input-tel{
    width: 200px;
    margin-left: 10px;
    margin-right: 20px;
}
.el-input-edit{
    margin-left: 10px;
    padding: 10px 17px;
    margin-bottom: 5px;
}
.el-input-delete{
    margin-left: 5px;
    padding: 10px 17px;
}
</style>

