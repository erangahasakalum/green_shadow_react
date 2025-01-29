import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import RootLayout from "./components/RootLayout";
import { DashBoard } from "./pages/DashBoard";
import { CropPage } from "./pages/CropPage";
import { LogsPage } from "./pages/LogsPage";
import { Equipmentpage } from "./pages/EquipmentPage";
import { StaffPage } from "./pages/StaffPage";
import { VehiclePage } from "./pages/VehiclePage";
import { UserPage } from "./pages/UserPage";
import { FieldPage } from "./pages/FieldPage";

function App() {
  const routes = createBrowserRouter([
    {
      path:'',
      element:<RootLayout/>,
      children:[
        { path: '/', element: <DashBoard /> },
        {path:'/crop',element:<CropPage/>},
        {path:'/field',element:<FieldPage/>},
        {path:'/log',element:<LogsPage/>},
        {path:'/equipment',element:<Equipmentpage/>},
        {path:'/staff',element:<StaffPage/>},
        {path:'/vehicle',element:<VehiclePage/>},
        {path:'/user',element:<UserPage/>}
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