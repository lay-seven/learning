<template>
  <li>
    <label>
      <input
        type="checkbox"
        :checked="todo.done"
        @change="handleCheck(todo.id)"
      />
      <span v-show="!todo.isEdit">{{ todo.title }}</span>
      <input
        type="text"
        ref="title"
        v-show="todo.isEdit"
        :value="todo.title"
        @blur="handleBlur(todo, $event)"
      />
    </label>
    <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
    <button
      class="btn btn-edit"
      v-show="!todo.isEdit"
      @click="handleEdit(todo)"
    >
      编辑
    </button>
  </li>
</template>

<script>
import pubsub from "pubsub-js";
export default {
  // data() {
  //   return {
  //     flag: false,
  //   };
  // },
  name: "Item",
  props: ["todo"],
  methods: {
    handleCheck(id) {
      // 将对应的todoObj的done取反
      // this.checkTodo(id);
      this.$bus.$emit("checkTodo", id);
    },
    handleDelete(id) {
      if (confirm("您确定要删除该项吗")) {
        // this.deleteTodo(id);
        pubsub.publish("deleteTodo", id);
      }
    },
    handleEdit(todo) {
      if (todo.hasOwnProperty("isEdit")) {
        todo.isEdit = true;
        // this.flag = true;
        // this.$refs.focus();//此处不能通过ref获取焦点，
        //因为DOM元素会发生变化，应使用mounted
      } else {
        this.$set(todo, "isEdit", true);
        // this.flag = true;
      }
      // 通过延时函数，而在正确的时机获得焦点
      // setTimeout(() => {
      //   this.$refs.title.focus();
      // },100)
      this.$nextTick(() => {
        this.$refs.title.focus();
      })
    },
    handleBlur(todo, e) {
      todo.isEdit = false;
      if (!e.target.value.trim()) return alert("输入不能为空");
      this.$bus.$emit("updateTodo", todo.id, e.target.value);
    },
  },
  //获取焦点
  // updated() {
  //   if (this.flag) {
  //     console.log(this.$refs.title);
  //     this.$refs.title.focus();
  //     this.flag = false;
  //   }
  // },
};
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:hover button {
  display: block;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
li:hover {
  background-color: #ddd;
}
</style>