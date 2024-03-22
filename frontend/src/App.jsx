import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login'
import Signup from './pages/Signup'
import Layout from "./pages/Layout";
import Home from "./pages/Home";
function App() {


  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

