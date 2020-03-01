import React from 'react';
import './Form.css';

const Form = ({value, onChange, onCreate, onKeyPress}) => {
    /*
    value: 인풋의 내용
    onCreate: 버튼 클릭시 실행함수
    onChange: 인풋 내용 변경시 실행 함수
    onKeyPress: 인풋에서 키를 입력할 때 실행 함수 / 엔터 누르면 onCreate랑 같은 함수 실행
    */
    return (
        <div className="form">
            <input value={value} onChange={onChange} onKeyPress={onKeyPress}/>
            <div className="create-button" onClick={onCreate}>
                추가
            </div>
        </div>
    );
};

export default Form;