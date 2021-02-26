import { reactive } from 'vue'
import axios from 'axios'

const BASE_API_URL = 'https://danielcs-todo-backend.herokuapp.com/todos'

const store = {
  state: reactive({
    todos: [],
  }),

  async fetchTodos() {
    const { data: todos } = await axios.get(BASE_API_URL)
    this.state.todos = todos
  },

  async createTodo(content) {
    const { data: newTodo } = await axios.post(BASE_API_URL, { content })
    this.state.todos = [...this.state.todos, newTodo]
  },

  async toggleTodo(id) {
    const { data: toggledTodo } = await axios.post(`${BASE_API_URL}/${id}`)
    this.state.todos = this.state.todos.map(todo => {
      if (todo.id === toggledTodo.id) {
        return toggledTodo
      }
      return todo
    })
  },

  async editTodo(id, content) {
    const { data: updatedTodo } = await axios.put(`${BASE_API_URL}/${id}`, { content })
    this.state.todos = this.state.todos.map(todo => {
      if (todo.id === updatedTodo.id) {
        return updatedTodo
      }
      return todo
    })
  },

  async deleteTodo(id) {
    const { data: success } = await axios.delete(`${BASE_API_URL}/${id}`)
    if (success) {
      this.state.todos = this.state.todos.filter(todo => todo.id !== id)
    }
  },
}

export default store
