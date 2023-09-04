import React from 'react'
import { styled } from 'styled-components'
import { useNavigate } from 'react-router-dom';


function Detail() {

  const navigate = useNavigate();


  return (
    <DetailLayout>
      <DetailBox>
        <DetailTop>
          <p>아이디값</p>
          <DetailButton onClick={() => {
            navigate("/")
          }}>돌아가기</DetailButton>
        </DetailTop>
        <DetailTitle>11</DetailTitle>
        <DetailContents>11</DetailContents>
      </DetailBox>
    </DetailLayout>
  )
}

const DetailLayout = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 80px;
`
const DetailBox = styled.div`
  border: 1px solid gray;
  height: 450px;
  width: 550px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 24px;
`
const DetailTop = styled.div`
  width: 100%;
  height: 70px;
  padding: 0 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const DetailButton = styled.button`
  background-color: white;
  border-radius: 6px;
  border: 1px solid grey;
  cursor: pointer;
`
const DetailTitle = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`

const DetailContents = styled.div`
  width: 100%;
  height: 280px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`

export default Detail