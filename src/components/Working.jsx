import React from 'react'
import styled from "styled-components"
import { useDispatch } from 'react-redux'
import { doneTodo, deleteTodo } from "../redux/modules/todo";
import { Link } from 'react-router-dom';

// Home에서 내려준 item props 전달받기
const Working = ({ item }) => {

  const dispatch = useDispatch();

  return (
    <WorkingCardLayout key={item.id}>
      <Constent>
        <Link to={`/detail/${item.id}`}>
          <Detail>상세보기</Detail>
        </Link>
        <p>{item.title}</p>
        <p>{item.content}</p>
      </Constent>
      <CardBtnWrap>
        <CardBtn_R onClick={() => {
          dispatch(deleteTodo(item.id))
        }}>삭제</CardBtn_R>
        <CardBtn_G onClick={() => {
          dispatch(doneTodo(item.id))
        }}>완료</CardBtn_G>
      </CardBtnWrap>
    </WorkingCardLayout>
  )
}

const WorkingCardLayout = styled.div`
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
const CardBtn_R = styled.button`
  width: 115px;
  height: 40px;
  border: 2px solid red;
  border-radius: 8px;
  background-color: transparent;
  cursor: pointer;
`
const CardBtn_G = styled.button`
  width: 115px;
  height: 40px;
  border: 2px solid green;
  border-radius: 8px;
  background-color: transparent;
  cursor: pointer;
`

export default Working