import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import PostList from './components/post/PostList.jsx'
import CreatePost from './components/post/CreatePost.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <PostList  /> /* , loader: postLoader  */ },
      { path: '/create-post', element: <CreatePost /> /* , action: addPost  */}
    ]
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
