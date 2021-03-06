import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {
    /*
    text: todo 내용
    checked: 체크박스 상태
    id: todo의 고유 아이디
    onToggle: 체크박스를 켜고 쓰는 함수
    onRemove: 아이템을 삭제시키는 함수
    */
    render() {
        const { text, checked, id, onToggle, onRemove, color } = this.props;

        return (
            <div className="todo-item" onClick={() => onToggle(id)}>
                <div className="remove" onClick={(e) => {
                    e.stopPropagation(); // onToggle이 실행안되게 함
                                         // 이벤트의 확산을 막아줌   
                                         // 따라서 onRemove만 실행
                    onRemove(id)}
                }>&times;</div>
                <div style={{color}} className={`todo-text ${checked && 'checked'}`}>
                    <div>{text}</div>
                </div>   
                {   
                    checked && (<div className="check-mark"></div>)
                } 
            </div>
        );
    }
}

export default TodoItem;