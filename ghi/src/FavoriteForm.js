import { useState, useEffect } from "react";
import { useAuthContext } from "./auth";

export default function FavoriteForm() {
  const [decodedUser, setDecodedUser] = useState("");
  const { token } = useAuthContext();
  const [animeTitle, setAnimeTitle] = useState("");
  const [date, setDate] = useState("");
  const [imgUrl, setImgUrl] = useState("");


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
    setDecodedUser(variable.account.id);
  }

  useEffect(() => {
    if (token !== null) {
      parseJwt(token)
    }
  }, [token]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newFavorite = {
      user_id: decodedUser,
      anime_title: animeTitle,
      date: date,
      img_url: imgUrl,
    };
    const favoriteUrl = `${process.env.REACT_APP_FAVORITES_API_HOST}/favoritos`;
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(newFavorite),
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      credentials: "include",
    };

    const response = await fetch(favoriteUrl, fetchConfig);
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setAnimeTitle("");
          setDate("");
          setImgUrl("");
        }
  }
  return (
    <div className="row">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
          <h1>Add your favorite Anime</h1>
          <form onSubmit={handleSubmit} id="create-bin-form">
            {/* <div className="form-floating mb-3">
                            <label htmlFor='userID'>User ID</label>
                            <input value={userID} onChange={(e)=>setUserID(e.target.value)} placeholder="user_id" required type="text" name="user_id" id="user_id" className="form-control form-input" />
                        </div> */}
            <div className="form-floating mb-3">
              <label htmlFor="date">Título Do Anime</label>
              <input
                value={animeTitle}
                onChange={(e) => setAnimeTitle(e.target.value)}
                required
                type="title"
                name="anime_title"
                id="anime_title"
                className="form-control form-input"
              />
            </div>
            <div className="form-floating mb-3">
              <label htmlFor="date">Lançamento</label>
              <input
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
                type="date"
                name="date"
                id="date"
                className="form-control form-input"
              />
            </div>
            <div className="form-floating mb-3">
              <label htmlFor="notes">Img</label>
              <input
                value={imgUrl}
                onChange={(e) => setImgUrl(e.target.value)}
                required
                type="url"
                name="img_url"
                id="img_url"
                className="form-control form-input"
              />
            </div>
            <button className="btn btn-primary">Create</button>
          </form>
        </div>
      </div>
    </div>
  );
}