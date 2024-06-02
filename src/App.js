import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/Login/LoginPage";
import LoginLoadingPage from "./pages/Login/LoginLoadingPage";
import SinchonMainPage from "./pages/SinchonMainPage/SinchonMainPage";
import RecordDetailPage from "./pages/detailPage/RecordDetailPage";
import BookDetailPage from "./pages/detailPage/BookDetailPage";
import GoodsDetailPage from "./pages/detailPage/GoodsDetailPage";
import LoginLoadingPage from "./pages/Login/LoginLoadingPage";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/login/loading" element={<LoginLoadingPage />} />
      <Route path="/sinchonMain" element={<SinchonMainPage />} />
      <Route
        path="/sinchonMain/recordDetail/:productId"
        element={<RecordDetailPage />}
      />
      <Route
        path="/sinchonMain/bookDetail/:productId"
        element={<BookDetailPage />}
      />
      <Route
        path="/sinchonMain/goodsDetail/:productId"
        element={<GoodsDetailPage />}
      />
    </Routes>
  );
}

export default App;
