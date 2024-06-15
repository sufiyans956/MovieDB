import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Singlemovie() {
  const [getdata, setdata] = useState({});
  const [castdata, setcastdata] = useState([]);
  const Key = "c45a857c193f6302f2b5061c3b85e743";
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${Key}&language=en-US`
      )
      .then((response) => {
        console.log(response.data);
        setdata(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
     

    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${Key}&language=en-US`
      )
      .then((response) => {
        console.log(response.data);
        setcastdata(response.data.cast); // Set only the cast array
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [id]);

  const imgpath = `https://image.tmdb.org/t/p/w500${getdata.backdrop_path}`;

  const myStyle = {
    backgroundImage: `url(${imgpath})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "500px",
    borderRadius: "15px",
    opacity: "1",
    maxWidth:"500px"
  };

  const containerStyle = {
    backgroundColor: "#343a40",
    padding: "10px",
    height: "100%",
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Adjust this to the number of cards you want to show
    slidesToScroll: 1,
  };

  return (
    <>
      <div style={containerStyle}>
        <div
          className="container bg-dark"
          style={{
            marginTop: "10px",
            border: "solid white 5px",
            borderRadius: "5px",
          }}
        >
          <div className="row">
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-4">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${getdata.poster_path}`}
                    className="mt-2"
                    style={{ height: "200px", maxWidth: "180px" }}
                  />
                </div>
                <div className="col-md-8">
                  <h2 className="text-white">{getdata.original_title}</h2>
                  <br></br>
                  <h4 className="text-white">Rating: {getdata.vote_average}</h4>
                  <h4 className="text-white">
                    Release Date: {getdata.release_date}
                  </h4>
                  <div className="d-flex">
                    <input
                      className="btn btn-dark text-white"
                      value={getdata.runtime + " Min"}
                      style={{
                        width: "100px",
                        borderColor: "yellow white  yellow",
                      }}
                    ></input>
                    <span
                      style={{
                        marginLeft: "5px",
                        alignContent: "center",
                        padding: "2px",
                      }}
                    >
                      {getdata.genres &&
                        getdata.genres.map((genre) => (
                          <span
                            key={genre.id}
                            style={{ marginRight: "5px", color: "white" }}
                          >
                            {genre.name}
                          </span>
                        ))}
                    </span>
                  </div>
                </div>
              </div>
              <h1 className="text-white p-2">Overview</h1>
              <p className="text-white p-2" style={{ textAlign: "justify" }}>
                {getdata.overview}
              </p>
            </div>

            <div className="col-md-6" style={myStyle}></div>
          </div>
        </div>
        <section className="container-fill text-white p-2">
          <h2>Cast</h2>
          <Slider {...settings}>
            {castdata.map((cast) => (
              <div key={cast.cast_id} className="p-2">
                <div className="card" style={{ maxWidth: "350px",height:"350px" }}>
                  <img
                
                    src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
                    className="card-img-top"
                    height={"250px"}
                    alt={cast.name}
                    
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://via.placeholder.com/150";
                    }}
                    
                  />
                  <div className="card-body" >
                    <h5 className="card-title">{cast.name}</h5>
                    <p className="card-text">{cast.character}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </section>
      </div>
    </>
  );
}
