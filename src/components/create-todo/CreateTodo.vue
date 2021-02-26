<template>
  <div class="create-todo-container">
    <div>
      <label for="new-todo">What needs doing?</label>
      <input id="new-todo" type="text" v-model.trim="content" @keyup.enter="createTodo">
    </div>
    <button type="button" @click="createTodo">Add</button>
  </div>
</template>

<script>
  import store from '../../store/store'

  export default {
    name: 'CreateTodo',
    data() {
      return {
        content: '',
      }
    },
    methods: {
      createTodo() {
        if (this.content.length === 0) {
          return
        }
        store.createTodo(this.content)
        this.content = ''
      },
    },
  }
</script>

<style>
  .create-todo-container {
    background-color: #fff;
    width: 600px;
    border-radius: 8px;
    margin-bottom: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 40px 20px;
    box-shadow: 0 0 0 1px #dadce0;
  }

  .create-todo-container label {
    display: inline-block;
    margin-right: 8px;
    font-weight: bold;
    font-size: 1.1em;
  }
</style>
