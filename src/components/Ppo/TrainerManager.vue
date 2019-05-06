<template>
  <div id="trainerManager">
    <el-row>
      <el-col :span="22" :offset="1">
        <el-table :data="tableData" style="width: 100%" stripe border>
          <el-table-column prop="id" label="序号"></el-table-column>
          <el-table-column prop="trainerName" label="姓名"></el-table-column>
          <el-table-column prop="gender" label="性别"></el-table-column>
          <el-table-column prop="tel" label="电话"></el-table-column>
          <el-table-column prop="post" label="职位"></el-table-column>
          <el-table-column prop="description" label="描述"></el-table-column>
          <el-table-column prop="resume" label="简历"></el-table-column>
          <el-table-column prop="shopId" label="子门店"></el-table-column>
          <el-table-column prop="shopParentId" label="父门店"></el-table-column>
          <el-table-column prop="address" label="预约时间">
            <a @click="dialogTableVisible = true">详情</a>
          </el-table-column>
          <el-table-column prop="address" label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                type="danger"
                @click="handleDeleteTrainer(scope.$index, scope.row)"
              >删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="22" :offset="1">
        <el-pagination background layout="prev, pager, next" :total="pageCount * 10"></el-pagination>
      </el-col>
    </el-row>
    <!-- 预约时间显示 -->
    <el-dialog title="预约时间" :visible.sync="dialogTableVisible" center>
      <el-table :data="appoTimeArr">
        <el-table-column property="startTime" label="开始时间"></el-table-column>
        <el-table-column property="endTime" label="结束时间"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="danger" @click="handleDeleteAppoTime(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-row>
        <el-date-picker
          v-model="appoTime"
          type="datetimerange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          format="yyyy-MM-dd HH:mm:ss"
          vue-format="yyyy-MM-dd HH:mm:ss"
        ></el-date-picker>
        <el-button type="primary" @click="handleAddAppoTime()">新增</el-button>
      </el-row>
    </el-dialog>
    <!-- end 预约时间显示 -->
    <!--  -->
    <el-dialog title="编辑" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="姓名" :label-width="formLabelWidth">
          <el-input v-model="editMsg.trainerName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="性别" :label-width="formLabelWidth">
          <el-select v-model="editMsg.gender" placeholder="请选择性别">
            <el-option label="男" value="male"></el-option>
            <el-option label="女" value="female"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="电话" :label-width="formLabelWidth">
          <el-input v-model="editMsg.tel" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="职位" :label-width="formLabelWidth">
          <el-input v-model="editMsg.post" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="描述" :label-width="formLabelWidth">
          <el-input v-model="editMsg.description" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="简历" :label-width="formLabelWidth">
          <el-input v-model="editMsg.resume" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="子门店" :label-width="formLabelWidth">
          <el-input v-model="editMsg.shopId" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="父门店" :label-width="formLabelWidth">
          <el-input v-model="editMsg.shopParentId" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="预约时间" :label-width="formLabelWidth">
          <el-date-picker
            v-model="appoTime"
            type="datetimerange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          ></el-date-picker>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="confirmEdit">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          id: 1,
          trainerName: "王小虎",
          gender: "男",
          tel: "18657223333",
          post: "医师",
          description: "专业二级",
          resume: "",
          shopId: "2556",
          shopParentId: "2550"
        },
        {
          id: 2,
          date: "2016-05-02",
          trainerName: "王小二",
          gender: "男",
          tel: "18657223333",
          post: "医师",
          description: "专业二级",
          resume: "",
          shopId: "2556",
          shopParentId: "2550"
        }
      ],
      dialogTableVisible: false, //预约时间对话框
      dialogFormVisible: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      formLabelWidth: "120px",
      pageCount: 3,
      pageSize: 3,
      pageCurrent: 1,
      editMsg: {},
      appoTime: {},
      appoTimeArr: []
    };
  },
  methods: {
    // 时间格式化
    padLeftZero(str) {
      return ("00" + str).substr(str.length);
    },
    formatDate(date, fmt) {
      if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(
          RegExp.$1,
          (date.getFullYear() + "").substr(4 - RegExp.$1.length)
        );
      }
      let o = {
        "M+": date.getMonth() + 1,
        "d+": date.getDate(),
        "h+": date.getHours(),
        "m+": date.getMinutes(),
        "s+": date.getSeconds()
      };
      for (let k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
          let str = o[k] + "";
          fmt = fmt.replace(
            RegExp.$1,
            RegExp.$1.length === 1 ? str : this.padLeftZero(str)
          );
        }
      }
      return fmt;
    },
    // 增加可预约时间
    handleAddAppoTime() {
      let appoTimeObj = {
        startTime: this.formatDate(this.appoTime[0], "yyyy-MM-dd hh:mm:ss"),
        endTime: this.formatDate(this.appoTime[1], "yyyy-MM-dd hh:mm:ss")
      };
      this.appoTimeArr.push(appoTimeObj);
      console.log("handleAddAppoTime", typeof this.appoTimeArr);
      //Todo 后端增加操作
    },
    handleDeleteAppoTime(index, row) {
      this.appoTimeArr.pop(row);
      //Todo 后端删除操作
    },
    handleDeleteTrainer(index, row) {
      this.tableData.pop(row);
      //Todo 后端删除操作
    },
    confirmEdit() {
      this.dialogFormVisible = false;
      //Todo 修改后端数据
    }
  }
};
</script>

