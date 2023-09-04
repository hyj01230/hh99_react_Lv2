import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import Layout from "./Layout";

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        {/* 레이아웃 밑 부분이 Layout.js 페이지의 {children}으로 들어가서 렌더링됨 */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="detail" element={<Detail />} /> */}
          {/* 삭제해도 문제없음! 밑에 주소로 연결되어있기 떄문에!!*/}
          <Route path="detail/:id" element={<Detail />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
