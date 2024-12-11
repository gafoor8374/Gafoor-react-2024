import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider} from "react-router"; // create a router creareBrowserRouter and chanin the router chanin via RouterProivder
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";

const AppLayout = () =>{
    return (
        <div className="App">
            <Header/>
            <Body/>
        </div>
    )
};

const approuter = createBrowserRouter([
    {
        path:'/',
        element:<AppLayout />, // going to home page
        errorElement:<Error /> // going a error page 
    },
    {
        path:'/about',
        element:<About /> // going to about page
    },
    {
        path:'/contact',
        element:<Contact />
    }
])


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={approuter}/>);