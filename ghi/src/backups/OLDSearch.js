// import React from "react";
// import { useState, useEffect } from "react";
// import "./index.css";

// export function Search(query) {
//   const [searchResults, setSearchResults] = useState([]);
//   const [isCarregando, setIsCarregando] = useState(false);
//   const [isData, setIsData] = useState(true);

//   useEffect(() => {
//     const fetchResult = async () => {
//       setIsCarregando(true);
//       try {
//         console.log("TESTING FETCH RESULT");

//         const result = await fetch(
//           `https://api.jikan.moe/v4/anime?q=${query}&sfw`
//         );
//         let response = await result.json();
//         setSearchResults(response.data);
//       } catch(error) {
//         console.log("THIS ERROR RAN")
//         let data = {}
//         data.title = ["no results found"]
//         setSearchResults(data);
//       }
//       setIsCarregando(false);
//       setIsData(true);
//     };
//     if (query) {
//       fetchResult();
//     } else {
//       setSearchResults([]);
//     }
//   }, [query])};

// export function SearchBar() {
//   const [query, setQuery] = useState("");


//   function handleChange(event) {
//     setQuery(event.target.value);
//   }

//   async function handleSubmit(event) {
//     event.preventDefault();
//     console.log("Searching for:", query);
//     Search(query);
//   }

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Search for an Anime..."
//           value={query}
//           onChange={handleChange}
//         />
//         <button type="submit">Search</button>
//       </form>
//       {isCarregando ? (
//         <div>Carregando...</div>
//       ) : (
//         <ul>
//           {searchResults.map((data, index) => (
//             <li key={index}>{data.title}</li>
//           ))}
//         </ul>
//       )}
//     </>
//   );
// }
