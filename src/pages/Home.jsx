import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from "react";
import styled from "styled-components"
import { addTodo, doneTodo, deleteTodo, cancleTodo } from "../redux/modules/todo";
import { useNavigate } from 'react-router-dom';

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

  // 
  const navigate = useNavigate();

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
            <CardLayout key={item.id}>
              <Constent>
                <Detail onClick={() => {
                  navigate('/detail');
                }}>상세보기</Detail>
                <p>{item.title}</p>
                <p>{item.content}</p>
              </Constent>
              <CardBtnWrap>
                <CardBtn bordercolor="red" onClick={() => {
                  dispatch(deleteTodo(item.id))
                }}>삭제</CardBtn>
                <CardBtn bordercolor="green" onClick={() => {
                  dispatch(doneTodo(item.id))
                }}>완료</CardBtn>
              </CardBtnWrap>
            </CardLayout>
          ))}
        </CardZone>

        <CardZoneName>Done..!🎉</CardZoneName>
        <CardZone>
          {/* todo의 중에서 isDone이 true 것만 뽑고, map으로 그려줌!
              >> 카드 완료 누른 순서대로 안들어감! */}
          {todo.filter((item) => { return item.isDone === true }).map((item) => (
            <CardLayout key={item.id}>
              <Constent>
                <Detail onClick={() => {
                  navigate('/detail');
                }}>상세보기</Detail>
                <p>{item.title}</p>
                <p>{item.content}</p>
              </Constent>
              <CardBtnWrap>
                <CardBtn bordercolor="red" onClick={() => {
                  dispatch(deleteTodo(item.id))
                }}>삭제</CardBtn>
                <CardBtn bordercolor="green" onClick={() => {
                  dispatch(cancleTodo(item.id))
                }}>취소</CardBtn>
              </CardBtnWrap>
            </CardLayout>
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
const CardLayout = styled.div`
  width: 250px;
  height: 230px;
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 0 20px;
  border: 3px solid green;
  border-radius: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Constent = styled.div`
  width: 100%;
  height: 160px;
  display: flex;
  margin-bottom: 10px;
  flex-direction: column;
  align-items: flex-start;
`

const Detail = styled.button`
  margin: 21px 0px 9px 0px;
  background-color: white;
  border-radius: 6px;
  border: 1px solid grey;
  cursor: pointer;
`

const CardBtnWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`
const CardBtn = styled.button`
  width: 115px;
  height: 40px;
  border: 2px solid ${(props) => props.bordercolor};
  border-radius: 8px;
  background-color: transparent;
  cursor: pointer;
`
export default Home