import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Styled from "styled-components";
import Header from "./components/Header";
import DetailPage from "./pages/DetailPage";
import HomePage from "./pages/HomePage";

function App() {
  const [userData, setUserData] = useState([]);
  const [isTrue, setIsTrue] = useState(false);

  return (
    <Container>
      <Router>
        <Routes>
          <Route
            exact
            path="/details"
            element={
              <>
                <Header isTrue={isTrue} setIsTrue={setIsTrue} />
                <DetailPage
                  userData={userData}
                  setUserData={setUserData}
                  isTrue={isTrue}
                />
              </>
            }
          />
          <Route
            exact
            path="/"
            element={
              <>
                <Header isTrue={isTrue} setIsTrue={setIsTrue} />
                <HomePage userData={userData} setUserData={setUserData} i />
              </>
            }
          />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;

const Container = Styled.div`
  width: 100vw;
`;
