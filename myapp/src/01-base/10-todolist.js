import React, { Component } from 'react'
import './css/01-index.css'

export default class App extends Component {
    todo = React.createRef()

    state = {
        todos: []
    }

    render() {
        return (
            <div>
                <input type="text" ref={this.todo} />
                <button onClick={() => this.addTodo()}>添加</button>
                <ul>
                    {
                        this.state.todos.map(({ id, todo }, index) =>
                            <li key={id}>
                                {/* {todo} */}

                                {/* 富文本战士 */}
                                <span dangerouslySetInnerHTML={
                                    {
                                        __html: todo
                                    }
                                }></span>

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

    addTodo() {
        console.log(this.todo.current.value)

        // 不要直接修改状态
        // this.state.todos.push(this.todo.current.value)

        const newTodos = [...this.state.todos]
        newTodos.push({
            id: Math.random() * 10000000,
            todo: this.todo.current.value
        })

        this.setState({
            todos: newTodos
        })

        // 清空输入框
        this.todo.current.value = ''
    }

    delTodo(index) {
        const newTodos = [...this.state.todos]
        newTodos.splice(index, 1)
        this.setState({
            todos: newTodos
        })
    }
}
