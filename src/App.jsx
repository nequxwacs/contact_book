import './App.css'
import Nav from './components/Nav/Nav'
import User from './components/User/User'
import UserInfo from './components/UserInfo/UserInfo'
import Users from './components/Users/Users'
import { Routes, Route } from 'react-router-dom'
 
const App = () => {

  return (
    <main className='main'>
      <div className="main__header">
        <Nav/>
      </div>
      <section className='main__section'>
        <div className="section__container">
          <Routes>
            <Route path='/' element={<Users />}></Route>
            <Route path='/edit' element={<User />}></Route>
            <Route path='/user_info' element={<UserInfo/>}></Route>
          </Routes>
        </div>
      </section>
    </main>
  )
}

export default App
