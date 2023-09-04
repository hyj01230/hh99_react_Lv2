import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from "react";
import styled from "styled-components"
import { addTodo } from "../redux/modules/todo";
import Done from '../components/Done';
import Working from '../components/Working';

function Home() {

  // useSelector(리덕스 훅) = Store에 접근하여, todo 값을 읽어오기
  // useSelector()에서 () 안에 매개변수로 콜백함수가 들어감!
  // state: store 안에 있는 state 전체를 말함
  const todo = useSelector((state) => {
    return state.todo;
  });
  // console.log(todo)

  const dispatch = useDispatch();

  // input 입력값
  const [inputTitle, setInputTitle] = useState("")
  const [inputContents, setInputContents] = useState("")

  // input 값 변경될 때
  const onChangeTitleHandler = (evet) => { setInputTitle(evet.target.value); }
  const onChangeContentsHandler = (evet) => { setInputContents(evet.target.value) }

  return (
    <div>
      {/* 인풋 구역 */}
      <InputZone>
        <InputWrap>
          제목 <input value={inputTitle} onChange={onChangeTitleHandler} />
          내용 <input value={inputContents} onChange={onChangeContentsHandler} />
        </InputWrap>
        <InputBtn onClick={() => {
          dispatch(addTodo({ inputTitle, inputContents }));
          // ★dispatch(액션 생성자 함수 이름)({addTodo의 payload에 객체 형태로 들어갈 데이터})
          // dispatch가 스토어에 던짐!
          // 스토어는 액션 타입에 따라 state를 변경해줌!
          setInputTitle('')
          setInputContents('')
        }}>추가하기</InputBtn>
      </InputZone>

      {/* 카드 구역 */}
      <Main>
        <CardZoneName>Working..🔥</CardZoneName>
        <CardZone>
          {/* todo의 중에서 isDone이 false 것만 뽑고, map으로 그려줌!
              >> 카드 완료 누른 순서대로 안들어감! */}
          {todo.filter((item) => { return item.isDone === false }).map((item) => (
            <Working key={item.id} item={item} />
            // Home 정보값 Working 컴퍼넌트로 내려주기(props) 
          ))}
        </CardZone>

        <CardZoneName>Done..!🎉</CardZoneName>
        <CardZone>
          {/* todo의 중에서 isDone이 true 것만 뽑고, map으로 그려줌!
              >> 카드 완료 누른 순서대로 안들어감! */}
          {todo.filter((item) => { return item.isDone === true }).map((item) => (
            <Done key={item.id} item={item} />
            // Home 정보값 Done 컴퍼넌트로 내려주기(props) 
          ))}
        </CardZone>
      </Main>
    </div>


  )
}

const InputZone = styled.div`
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 0px solid;
  border-radius: 5px;
  background-color: lightgray;
`
const InputWrap = styled.div`
  margin: 15px;
`
const InputBtn = styled.button`
  height: 30px;
  width: 100px;
  margin-right: 25px;
  border: none;
  border-radius: 5px;
  background-color: green;
  color: white;
  cursor: pointer;
`
const Main = styled.main`
  padding: 0 24px;
`
const CardZoneName = styled.p`
  text-align: start;
  width: 100%;
  font-weight: bold;
`
const CardZone = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export default Home