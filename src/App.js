import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog';
import Home from './components/Home';
import Main from './components/Main';
import Qustion from './components/Qustion';
import Statics from './components/Statics';
import Topics from './components/Topics';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {path:'/',element:<Home></Home>},
        {path:'/home',element:<Home></Home>},
        {path:'/topics',loader:()=> fetch('https://openapi.programming-hero.com/api/quiz'), element:<Topics></Topics>},
        {path:'quiz/:quizId', loader: ({params})=> fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`),element:<Qustion></Qustion>},
        {path:'/statics',loader:()=> fetch('https://openapi.programming-hero.com/api/quiz'), element:<Statics></Statics>},
        {path:'/blog',element:<Blog></Blog>}
      ]

    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
