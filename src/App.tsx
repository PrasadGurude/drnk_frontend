import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Customer_service from "./pages/Customer_service"
import Stores from "./pages/Stores"
import Wholesale from "./pages/Wholesale"
import Partnership from "./pages/Partnership"
import More_about_us from "./pages/More_about_us"
import Our_initiatives from "./pages/Our_initiatives"


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} ></Route>
        <Route path="/home" element={<Home/>} ></Route>
        <Route path="/customer-service" element={<Customer_service/>} ></Route>
        <Route path="/stores" element={<Stores/>} ></Route>
        <Route path="/wholesale" element={<Wholesale/>} ></Route>
        <Route path="/partnership" element={<Partnership/>} ></Route>
        <Route path="/more-about-us" element={<More_about_us/>} ></Route>
        <Route path="/our-initiatives" element={<Our_initiatives/>} ></Route>
      </Routes>
    </>
  )
}

export default App
