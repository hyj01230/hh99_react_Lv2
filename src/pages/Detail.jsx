import React from 'react'
import { styled } from 'styled-components'
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';


function Detail() {

  // 돌아가기 클릭 경로 설정할 때 사용!
  const navigate = useNavigate();

  // 파라미터 확인할 때 필요함!
  const params = useParams()
  // 주소/detail/123 라고 치고 콘솔 찍으면 id: "123" 확인됨!
  // id라고 나오는 이유는 Router.js에 지정한 파라미터 이름이 id라서!
  console.log(params)
  // working과 done 컴포넌트 상세보기에 Link 넣어주기


  // 어떤 id값의 todo인지 찾아보기 = 중앙스토어에 올라간 todo에 접근해서 id 가져오자!
  const todo = useSelector((state) => {
    return state.todo;
  });

  const foundData = todo.find((item) => {
    return item.id === parseInt(params.id);
    // todo 카드들의 아디(item.id)랑 클릭한 카드의 아디(params.id)랑 비교해서 같으면 리턴!!
    // item.id : 숫자형, params.id : 문자형이라 parseInt로 형변환(문자>숫자)해서 비교!!
  })

  return (
    <DetailLayout>
      <DetailBox>
        <DetailTop>
          {/* foundData 으로 찾은 id값 넣어주기! */}
          <p>id: {foundData.id}</p>
          <DetailButton onClick={() => {
            navigate("/")
          }}>돌아가기</DetailButton>
        </DetailTop>
        <DetailTitle>{foundData.title}</DetailTitle>
        <DetailContents>{foundData.content}</DetailContents>
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
  border: 3px solid green;
  height: 450px;
  width: 550px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 24px;
  border-radius: 10px;
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
  font-size: xx-large;
  font-weight: bold;
`

const DetailContents = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  font-size: large;
`

export default Detail