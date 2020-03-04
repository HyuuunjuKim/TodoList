import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {
    /*
    todos: todo 객체들이 들어있는 배열
    onToggle: 체크박스 켜고 끄는 함수
    onRemove: 아이템 삭제
    */
    render() {
        const { todos, onToggle, onRemove } = this.props;

        const todoList = todos.map(
            ({id, text, checked, color}) => (
                <TodoItem
                    id={id}
                    text={text}
                    checked={checked}
                    color={color}
                    onToggle={onToggle}
                    onRemove={onRemove}
                    key={id}
                />
            )
        );

        return (
            <div>
                {todoList}
            </div>
        );
    }
}

export default TodoItemList;