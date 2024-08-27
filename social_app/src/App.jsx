import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Context_of_post_list from './store/Post_list_store'
import { Outlet } from 'react-router-dom'

function App() {
  const [tab, settab] = useState("home");

  return (
    <Context_of_post_list>
      <div className='app-container'>
        <Sidebar tab={tab} settab={settab} />
        <div className="content">
          <Header />
          <Outlet />
          <Footer />
        </div>
      </div>
    </Context_of_post_list>
  )
}

export default App
