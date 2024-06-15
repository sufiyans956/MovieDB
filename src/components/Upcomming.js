import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Upcomming() {
  const Key = "c45a857c193f6302f2b5061c3b85e743";
  const [getdata, setdata] = useState([]);
  const navigate=useNavigate();
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${Key}&language=en-US&page=1`)
        .then(response => {
            console.log(response.data.results);
            setdata(response.data.results);
        }).catch(error => {
            console.log(error.message);
        });
}, []);
var secondpage=(id)=>{
  alert(id);
  
  navigate(`/singlemoviepage/${id}`);
}

  return (
   <>
    <div className="container bg-dark ">
            <div className="row" >
                {getdata.map((movie) => (
                    <div className="col-md-4 mb-3" key={movie.id} >
                      
                        <div className="card" style={{ width: '25rem' }} onClick={()=>secondpage(movie.id)}>
                            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className="card-img-top" alt={movie.title} height={"400px"}/>
                            <div className="card-body bg-dark ">
                                <h5 className="card-title text-white text-center">{movie.title}</h5>
                             <p className="card-text text-white text-center">Rating: {movie.vote_average}</p>
                                
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
   
   </>
  )
}
