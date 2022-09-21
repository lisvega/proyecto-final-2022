import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { JwtContextProvider } from "./contexts/jwtContext";
import Login from "./pages/Login";
import Home from "./pages/Home";
import RequiredAuth from "./components/RequiredAuth";
import Experiences from "./pages/Experience/Experience";
import CreateExperience from "./pages/Experience/Create";
import Pdis from "./pages/Pdi/Pdi";
import CreatePdis from "./pages/Pdi/Create";
import Header from "./components/Header/Header"

const App = () => {
  return (
    <JwtContextProvider>
      <div>
        <Router>
          <Header />
          <Routes>
            <Route
              path="/"
              element={<Login />} />
            <Route
              path="/home"
              element={
                <RequiredAuth>
                  <Home />
                </RequiredAuth>} />
            <Route
              path="/experiences"
              element={
                <RequiredAuth>
                  <Experiences />
                </RequiredAuth>} />
            <Route
              path="/new-experience"
              element={
                <RequiredAuth>
                  <CreateExperience />
                </RequiredAuth>} />
            <Route
              path="/pdis"
              element={
                <RequiredAuth>
                  <Pdis />
                </RequiredAuth>} />
            <Route
              path="/new-pdi"
              element={
                <RequiredAuth>
                  <CreatePdis />
                </RequiredAuth>} />
          </Routes>
        </Router>
      </div>
    </JwtContextProvider>
  )
};






export default App;
