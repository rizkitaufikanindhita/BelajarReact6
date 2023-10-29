import MainAlbums from "./components/albums/MainAlbums";
import MainLayouts from "./components/layouts/MainLayouts";
import InvalidPage from "./components/invalidPage/InvalidPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      {/* yang dikomen berhubungan dengan childen di MainLayouts.js */}
      <MainLayouts>
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <h1 className="text-4xl mt-10 font-bold items-center justify-center text-center">
                  HOMEPAGE
                </h1>
              }
            />
            <Route path="/albums" element={<MainAlbums />} />
            <Route path="*" element={<InvalidPage />} />
          </Routes>
        </Router>
      </MainLayouts>
    </>
  );
}

export default App;
