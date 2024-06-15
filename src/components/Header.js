import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Home from "./Home";
import Searchresult from "./Searchresult";

export default function Header(name) {
  const [getdata1, setdata1] = useState([]);
  let namev = useRef("");
  const navigate = useNavigate();
  const Api_key = "c45a857c193f6302f2b5061c3b85e743";

  const [getc, setc] = useState(false);

  const param=useParams();
  function search(e) {
    
    const name1 = namev.current.value;
    navigate(`/searchmoviepage/${name1}`);
   
  }
  
  return (

     
        <>
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarTogglerDemo01"
                aria-controls="navbarTogglerDemo01"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                <a class="navbar-brand" href="#">
                  <h1>Movie DB</h1>
                </a>
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link hover" href="/">
                      <h4>Popular</h4>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link "
                      href="/topmoviepage"
                      tabindex="-1"
                      aria-disabled="true"
                    >
                      <h4>Top Rated</h4>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link "
                      href="/upcommingmoviepage"
                      tabindex="-1"
                      aria-disabled="true"
                    >
                      <h4>Upcomming</h4>
                    </a>
                  </li>
                </ul>
                <form class="d-flex" onSubmit={search}>
                  <input
                    class="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    ref={namev}
                  />
                  <button class="btn btn-outline-success" type="submit">
                    Search
                  </button>
                </form>
              </div>
            </div>
          </nav>
          
          
        </>
     
   
  );
}
