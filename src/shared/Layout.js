import { styled } from 'styled-components';

const Wrap = styled.div`
  text-align: center;
  min-width: 800px;
  max-width: 1200px;
  margin: 0 auto;
`

const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  border: 1px solid gray;
`
const HeaderStyle_P = styled.p`
  margin: 15px;
`

function Header() {
  return (
    <HeaderStyle>
      <HeaderStyle_P>My Todo List</HeaderStyle_P>
      <HeaderStyle_P>React</HeaderStyle_P>
    </HeaderStyle>
  )
}

// 모든 페이지 레이아웃의 제일 큰 틀!!
// 모든 페이지는 Wrap, Header를 가진다!
// Router.js 에서 import해서 받아주면, 모든 페이지에서 적용이 된다!!
function Layout({ children }) {
  return (
    <Wrap>
      <Header />
        {children}
    </Wrap>
  )
}

export default Layout;