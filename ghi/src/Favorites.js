import { useState, useEffect } from "react";
import { useAuthContext } from "./auth";

export default function Favorites() {
  const { token } = useAuthContext();
  const [anime, setAnime] = useState([]);
  const [decodedUser, setDecodedUser] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function parseJwt(token) {
    let base64Url = token.split(".")[1];
    let base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    let jsonPayload = decodeURIComponent(
      window
        .atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );
    const variable = JSON.parse(jsonPayload);
    setDecodedUser(variable.account);
  }

  useEffect(() => {
    if (token !== null) {
      parseJwt(token);
    }
  }, [token]);

  useEffect(() => {
    async function getFavorite() {
      const favoritesURL = `${process.env.REACT_APP_FAVORITES_API_HOST}/favoritos/${decodedUser.id}`;
      const fetchConfig = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      };

      const response = await fetch(favoritesURL, fetchConfig);
      if (response.ok) {
        const data = await response.json();
        console.log(data.favoritos)
        setAnime(data.favoritos);
      }
    }
    if (decodedUser) {
      getFavorite();
    }
  }, [token, decodedUser, submitted]);

  const removeFavorite = async (favorite_id) => {
    const removeURL = `${process.env.REACT_APP_FAVORITES_API_HOST}/favoritos/${decodedUser.id}/${favorite_id}`;
    const fetchConfig = {
      method: "delete",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(removeURL, fetchConfig);
    if (response.ok) {
      setAnime([...anime]);
      setSubmitted(true);
    }
  };

  return (
    <>
      <h1>Anime in your favoritos</h1>
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th>Título Do Anime</th>
            <th>Date</th>
            <th>Imagem</th>
          </tr>
        </thead>
        <tbody>
          {anime.map((favorite) => {
            return (
              <tr key={favorite.id}>
                <td>{favorite.anime_title}</td>
                <td>{favorite.date}</td>
                <td>
                  <img
                    src={favorite.img_url}
                    alt = {favorite.anime_title}
                    width="20%"
                    height="20%"
                  />
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => removeFavorite(favorite.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}