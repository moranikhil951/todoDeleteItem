import {Component} from 'react'
import TodoItem from '../TodoItem'

import './index.css'

const initialTodosListed = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here

class SimpleTodos extends Component {
  state = {initialTodosList: initialTodosListed}

  onDeleteUser = id => {
    const {initialTodosList} = this.state

    const filteredUserTodo = initialTodosList.filter(each => each.id !== id)
    this.setState({initialTodosList: filteredUserTodo})
  }

  render() {
    const {initialTodosList} = this.state
    return (
      <div className="container">
        <div className="todoContainer">
          <h1 className="heading">Simple Todos</h1>
          <ul>
            {initialTodosList.map(eachTodo => (
              <TodoItem
                userTodo={eachTodo}
                onDeleteUser={this.onDeleteUser}
                key={eachTodo.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
