import { Routes, Route } from 'react-router-dom'

export const AppRouter = () => {

  const authStatus = 'not-authenticated'

  return (

    <Routes>
      <Route path="/" element={<App />} />





    </Routes>
  )
}
