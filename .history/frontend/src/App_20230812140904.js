import { BrowserRouter, Routes, Route } from "react-router-dom"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
      </BrowserRouter>
    </>
  )
}

export default App