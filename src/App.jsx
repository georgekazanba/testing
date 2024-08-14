import './App.css'
import './css/vars.css'
import './styles/Style.css'
import Navbar from './components/UI/Navbar/Navbar'
import AppRouter from './components/AppRouter'
import { useEffect, useState } from 'react';
import { KIWAMIGREEN } from './context';
import MainButton from './components/UI/Button/MainButton';
import { ParseBool } from './components/utils/ParseBool'
import { Outlet, Route, Routes, useRoutes } from 'react-router-dom'
import Error from './pages/Error'
import Index from './pages/Index'
import About from './pages/About'
import Posts from './pages/Posts'
import PostIdPage from './pages/PostIdPage'

function App() {
  const routes = useRoutes([
    {
      path: '/',
      element: <Index/>,
    },
    {
      path: 'about',
      element: <About/>,
    },
    {
      path: 'posts',
      element: <Posts exact/>,
    },
    {
      path: 'posts/:id',
      element: <PostIdPage exact/>
    }
  ]);

  const [isGreen, setIsGreen] = useState(false);

  useEffect(() => {
    if(ParseBool(localStorage.getItem('isGreen'))){
      setIsGreen(true);
    }
  }, [])

  const toggleKiwami = () => {
    localStorage.setItem('isGreen', !isGreen);
    setIsGreen(!isGreen);
  }

  return (
    <KIWAMIGREEN.Provider value={{
        isGreen,
        setIsGreen
    }}>
      <Navbar/>
      <MainButton className="KIWAMIGREENBG" onClick={toggleKiwami}>Kiwami Mode</MainButton>
      {routes}
    </KIWAMIGREEN.Provider>
  )
}

export default App