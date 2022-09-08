import { Route, Routes } from "react-router-dom";
import Banner from "./components/banner/Banner";
import NotFound from "./components/notFound/NotFound";
import Main from "./layout/main/Main";
import HomeDetailPage from "./pages/homeDetailPage/HomeDetailPage";
import HomePage from "./pages/homePage/HomePage";

function App() {
  return (
    <div className="container-fluid">
      <Routes>
        <Route element={<Main />}>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <HomePage />
              </>
            }
          />

          <Route path="detail" element={<HomeDetailPage />} />
        </Route>

        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
