import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Main from "./Layouts/Main/Main";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Project from "./Pages/Project/Project";
import Skills from "./Pages/Skills/Skills";
import Contact from "./Pages/Contact/Contact";
import Work from "./Pages/Work/Work";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element = {<Main/>}>
          <Route path="/" element = {<Home/>}/>
          <Route path="/about" element = {<About/>}/>
          <Route path="/project" element = {<Project/>}/>
          <Route path="/skills" element = {<Skills/>}/>
          <Route path="/experience" element = {<Work/>}/>
          <Route path="/contact" element = {<Contact/>}/>
      </Route>
       
    )
  );
  return (
    <RouterProvider
    router={router}
  />
  )
}

export default App
