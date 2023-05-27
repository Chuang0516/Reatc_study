import React, { Component } from 'react'
import './css/01-index.css'

export default class App extends Component {
    state = {
        todos: [],
        todo: ''
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.todo} onChange={(evt) => {
                    this.setState({
                        todo: evt.target.value
                    })
                }} />
                <button onClick={() => this.addTodo()}>添加</button>
                <ul>
                    {
                        this.state.todos.map(({ id, todo, isChecked }, index) =>
                            <li key={id}>
                                {/* {todo} */}

                                <input type="checkbox" checked={isChecked} onChange={() => this.handleChecked(index)} />
                                {/* 富文本展示 */}
                                <span dangerouslySetInnerHTML={
                                    {
                                        __html: todo
                                    }
                                } style={{ textDecoration: isChecked ? 'line-through' : '' }} ></span>
                                <button onClick={() => this.delTodo(index)}>删除</button>
                            </li>
                        )
                    }
                </ul>

                {/* {
                    this.state.todos.length ? null : <div>暂无代办事项</div>
                } */}

                {/* {
                    !this.state.todos.length && <div>暂无代办事项</div>
                } */}

                <div className={this.state.todos.length === 0 ? '' : 'hidden'}>暂无代办事项</div>
            </div>
        )
    }

    handleChecked = (index) => {

        let newList = [...this.state.todos]

        newList[index].isChecked = !newList[index].isChecked

        this.setState({
            todos: newList
        })
    }

    addTodo() {

        // 不要直接修改状态
        // this.state.todos.push(this.todo.current.value)

        const newTodos = [...this.state.todos]
        newTodos.push({
            id: Math.random() * 10000000,
            todo: this.state.todo,
            isChecked: false
        })

        this.setState({
            todos: newTodos,
            todo: ''
        })
    }

    delTodo(index) {
        const newTodos = [...this.state.todos]
        newTodos.splice(index, 1)
        this.setState({
            todos: newTodos
        })
    }
}
