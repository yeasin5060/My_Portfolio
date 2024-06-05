import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Main from "./Layouts/Main/Main";
import Home from "./Pages/Home/Home";
import Errorpage from "./Pages/errorpage/Errorpage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element = {<Main/>}>
          <Route path="/" element = {<Home/>}/>
        </Route>
        <Route path="*" element = {<Errorpage/>}/>
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
