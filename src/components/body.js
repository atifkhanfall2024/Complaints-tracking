import { createBrowserRouter, RouterProvider } from "react-router"
import LoginForm from "./Login"
import Browse from "./browse"
import OPT from "./Opt"
import OTPVerification from "./OTPwait"
import SuccessScreen from "./Success"


const Body = ()=>{

   const Approuter = createBrowserRouter([
  
    {
        path:"/" ,
        element: <LoginForm/>

   } , 
   {
      path:"/browse",
      element:<Browse/>
   } ,
   {
    path:"/opt",
    element:<OPT/>
   },
   {
    path:"wait" ,
    element:<OTPVerification/>
   } ,
   {
    path:"/success",
    element:<SuccessScreen/>
   }
])

    return(
        <div>
         <RouterProvider router={Approuter} />
      
        </div>
    )
}

export default Body