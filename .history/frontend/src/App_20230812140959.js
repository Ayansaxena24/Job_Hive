import { Home } from "@mui/icons-material"
import { BrowserRouter, Routes, Route } from "react-router-dom"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="*" element={<>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App