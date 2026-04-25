import { Component, lazy,Suspense } from "react";
import { createBrowserRouter } from "react-router";
import basicLayout from "../layouts/basicLayout";


const Loading = () => <div>Loading.....</div>
const Main = lazy(() => import("../pages/mainPage"));
const About = lazy(() => import("../pages/aboutPage"));
const TodoIndex = lazy(() => import("../pages/todo/indexPage"));
const router = createBrowserRouter([
  {
    path: "",
    Component:basicLayout,
    children:[
      {
        index:true,
        element:<Suspense fallback={<Loading/>}><Main/></Suspense>
      },
      {
          path:'about',
          element:<Suspense fallback={<Loading/>}><About/></Suspense>
      },
      {
        path:'todo',
        element:<Suspense fallback={<Loading/>}><TodoIndex/></Suspense>
      }
    ]
  },


]);

export default router;