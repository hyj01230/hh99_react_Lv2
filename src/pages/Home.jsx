import React from 'react'
import styled from "styled-components"

function Home() {
    return (
        <Wrap>
            {/* 상단바 구역 */}
            <Nav>
                <Nav_P>My Todo List</Nav_P>
                <Nav_P>React</Nav_P>
            </Nav>

            {/* 인풋 구역 */}
            <InputZone>
                <InputWrap>
                    제목 <input />
                    내용 <input />
                </InputWrap>
                <InputBtn>추가하기</InputBtn>
            </InputZone>

            {/* 카드 구역 */}
            <Main>
                <CardZoneName>Working..🔥</CardZoneName>
                <CardZone>
                    <CardLayout>
                        <Constent>
                            <Detail>상세보기</Detail>
                            <p>렙2</p>
                            <p>어렵습니다..ㅜㅜ</p>
                        </Constent>
                        <CardBtnWrap>
                            <CardBtn borderColor="red">삭제</CardBtn>
                            <CardBtn borderColor="green">완료</CardBtn>
                        </CardBtnWrap>
                    </CardLayout>
                </CardZone>

                <CardZoneName>Done..!🎉</CardZoneName>
                <CardZone>

                </CardZone>
            </Main>
        </Wrap>
    )
}

export default Home

const Wrap = styled.div`
text-align: center;
  min-width: 800px;
  max-width: 1200px;
  margin: 0 auto;
`
const Nav = styled.header`
  display: flex;
  justify-content: space-between;
  border: 1px solid gray;
`
const Nav_P = styled.p`
  margin: 15px;
`
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
`

const CardBtnWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`
const CardBtn = styled.button`
  width: 115px;
  height: 40px;
  border: 2px solid ${(props) => props.borderColor};
  border-radius: 8px;
  background-color: transparent;
  cursor: pointer;
`