import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import CreatePost from './components/post/CreatePost'
import PostList from './components/post/PostList'
import Sidebar from './components/Sidebar'

function App() {
  const [tab, settab] = useState("create post");

  return (
    <div className='app-container'>
     <Sidebar tab={tab} settab={settab} />
     <div className="content">
     <Header />
     {tab == "home" ? <PostList /> : <CreatePost />}
     <Footer />
     </div>
    </div>
  )
}

export default App
