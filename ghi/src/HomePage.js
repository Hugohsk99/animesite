import React from "react";
import "./index.css";
import "./Carousel.css";
import Carousel from "./Carousel";

function HomePage() {

  return (
    <div className="px-4 py-5 my-5 text-center">
      <script src="js/jquery-1.7.1.min.js"></script>
      <script src="js/bootstrap.js"></script>
      <h1 className="display-5 fw-bold">Nipo Land</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">Encontre seu animes aqui!</p>
      </div>

      <div>
        <Carousel />

      </div>

    </div>
  );
}

export default HomePage;