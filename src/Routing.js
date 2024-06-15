
import {createBrowserRouter} from "react-router-dom";
import App from "./App";
import Home from "./components/Home";
import Top from "./components/Top";
import Upcomming from "./components/Upcomming";
import Singlemovie from "./components/Singlemovie";
import Searchresult from "./components/Searchresult";

const customRouter = createBrowserRouter([
    {
      path: "",
      element:<App/>, 
      children: [
        {
          path: "/",
          element: <Home/>
        },
        {
            path: "/singlemoviepage/:id",
            element: <Singlemovie/>
          },
          {
            path: "/topmoviepage",
            element: <Top />
          },
          {
            path: "/upcommingmoviepage",
            element: <Upcomming/>
          },
          {
            path: "/searchmoviepage/:name1",
            element: <Searchresult/>
          },
        
      ],
    }
  ]);
  export default customRouter;