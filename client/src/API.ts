import axios, { AxiosResponse } from "axios"

const baseUrl: string = "http://localhost:4000"

const getTodos = async(): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const todos: AxiosResponse<ApiDataType> = await axios.get(
      `${baseUrl}/todos`
    )
    return todos
  } catch (error) {
    throw new Error(error)
  }
}

const addTodo = async(formData: ITodo): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const todo: Omit<ITodo, "_id"> = {
      name: formData.name,
      description: formData.description,
      status: false,
    }
    const savedTodo: AxiosResponse<ApiDataType> = await axios.post(
      `${baseUrl}/todos`,
      todo
    )
    return savedTodo
  } catch (error) {
    throw new Error(error)
  }
}

const updateTodo = async (todo: ITodo): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const url: URL = new URL("todos", baseUrl)
    const todoUpdate: Pick<ITodo, "status"> = {
      status: true,
    }
    const updatedTodo: AxiosResponse<ApiDataType> = await axios.put(
      `${baseUrl}/todos/${todo._id}`,
      todoUpdate
    )
    return updatedTodo
  } catch (error) {
    throw new Error(error)
  }
}

const deleteTodo = async(todo: ITodo): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const deletedTodo: AxiosResponse<ApiDataType> = await axios.delete(
      `${baseUrl}/todos/${todo._id}`
    )
    return deletedTodo
  } catch (error) {
    throw new Error(error)
  }
}

export { getTodos, addTodo, updateTodo, deleteTodo }