import { useEffect, useState } from "react";
import Root from "./Components/RootLayout";
import "./App.css";
import MainContainer from "./Components/UI/MainContainer";
import Main from "./Components/Main/Main";
import SideBar from "./Components/SideBar/SideBar";
import NavigavtionBar from "./Components/NavBar/NavBar";
import Dashboard from "./Components/Dashboard/Dashboard";
import CollectionTasks from "./Components/CollectionTasks/CollectionTasks";
import Collections from "./Components/Collections/Collections";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        path: "",
        element: <Dashboard />,
      },
      {
        path: "collections",
        element: <Collections />,
      },
      {
        path: "collections/:collectionId",
        element: <CollectionTasks />,
      },
    ],
  },
]);

function App() {
  let content;

  const getPreviousPage = () => {};

  // useEffect(() => {
  //   if (contentToDisplay != "CollectionTasks") setItem({});
  //   setprevPage(contentToDisplay);
  // }, [contentToDisplay]);

  // switch (contentToDisplay) {
  //   case "Dashboard":
  //     content = (

  //     );
  //     break;
  //   case "CollectionTasks":
  //     content = (

  //     );
  //     break;
  //   case "Collections":
  //     content = ;
  //     break;
  //   default:
  //     content = (
  //       <Dashboard
  //         setContentToDisplay={setContentToDisplay}
  //         setItem={setItem}
  //       />
  //     );
  // }

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
