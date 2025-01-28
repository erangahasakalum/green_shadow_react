import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import RootLayout from "./components/RootLayout";
import { DashBoard } from "./pages/DashBoard";
import { CropPage } from "./pages/crop/CropPage";
function App() {

  const routes = createBrowserRouter([
    {
      path:'',
      element:<RootLayout/>,
      children:[
        { path: '', element: <DashBoard /> },
        {path:'/crop-manage',element:<CropPage/>}
        
        
      ]
    }
  ])
  return (
    <>
      <RouterProvider router={routes}/>
    </>
  );
}

export default App;
