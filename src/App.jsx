import './App.css'
import Divider from './components/Divider'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {

  return (
    <UserContextProvider>
      <h1>React Context API</h1>
      <Login />
      <Divider />
      <Profile />
    </UserContextProvider>
  )
}

export default App
