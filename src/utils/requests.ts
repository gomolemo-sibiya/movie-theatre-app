// import { useFetchGenres } from "../Hooks/useFetchMovies"

const api_key = process.env.NEXT_PUBLIC_API_KEY
const url = 'https://api.themoviedb.org/3'

const requests = {
  fetchTrending: `${url}/trending/all/week?api_key=${api_key}&language=en-US`,
  fetchNetflixOriginals: `${url}/discover/movie?api_key=${api_key}&with_networks=213`,
  fetchTopRated: `${url}/movie/top_rated?api_key=${api_key}&language=en-US`,
  fetchActionMovies: `${url}/discover/movie?api_key=${api_key}&language=en-US&with_genres=28`,
  fetchComedyMovies: `${url}/discover/movie?api_key=${api_key}&language=en-US&with_genres=35`,
  fetchHorrorMovies: `${url}/discover/movie?api_key=${api_key}&language=en-US&with_genres=27`,
  fetchRomanceMovies: `${url}/discover/movie?api_key=${api_key}&language=en-US&with_genres=10749`,
  fetchDocumentaries: `${url}/discover/movie?api_key=${api_key}&language=en-US&with_genres=99`,
  
}

export default requests


// const  requests = () => {
//   const fetchActionMovies = `https://api.themoviedb.org/3/discover/movie,"28"`;
//   const fetchAdventureMovies = useFetchGenres(`https://api.themoviedb.org/3/discover/movie`,"12");
//   const fetchAnimationMovies = useFetchGenres(`https://api.themoviedb.org/3/discover/movie`,"16");
//   const fetchComedyMovies = useFetchGenres(`https://api.themoviedb.org/3/discover/movie`,"35");
//   const fetchDocumentaryMovies = useFetchGenres(`https://api.themoviedb.org/3/discover/movie`,"99");
//   const fetchDramaMovies = useFetchGenres(`https://api.themoviedb.org/3/discover/movie`,"18");
//   const fetchHistoryMovies = useFetchGenres(`https://api.themoviedb.org/3/discover/movie`,"36");
//   const fetchHorrorMovies = useFetchGenres(`https://api.themoviedb.org/3/discover/movie`,"27");
//   const fetchRomanceMovies = useFetchGenres(`https://api.themoviedb.org/3/discover/movie`,"10749");
//   const fetchSciFiMovies = useFetchGenres(`https://api.themoviedb.org/3/discover/movie`,"878");
//   const fetchThrillerMovies = useFetchGenres(`https://api.themoviedb.org/3/discover/movie`,"53");
//   const fetchPopularMovies = useFetchMovies(`https://api.themoviedb.org/3/movie/popular`);

//   const popularMovies = {
//     setPageNumber: fetchPopularMovies.setPageNumber,
//     pageNumber: fetchPopularMovies.pageNumber,
//     cardRef: cardRef,
//     movies: fetchPopularMovies.movies,
//   };

//   const actionMovies = {
//     setPageNumber: fetchActionMovies.setPageNumber,
//     pageNumber: fetchActionMovies.pageNumber,
//     cardRef: cardRef,
//     movies: fetchActionMovies.movies
//   };

//   const adventureMovies = {
//     setPageNumber: fetchAdventureMovies.setPageNumber,
//     pageNumber: fetchAdventureMovies.pageNumber,
//     cardRef: cardRef,
//     movies: fetchAdventureMovies.movies
//   };

//   const animationMovies = {
//     setPageNumber: fetchAnimationMovies.setPageNumber,
//     pageNumber: fetchAnimationMovies.pageNumber,
//     cardRef: cardRef,
//     movies: fetchAnimationMovies.movies
//   };

//   const comedyMovies = {
//     setPageNumber: fetchComedyMovies.setPageNumber,
//     pageNumber: fetchComedyMovies.pageNumber,
//     cardRef: cardRef,
//     movies: fetchComedyMovies.movies
//   };

//   const documentaryMovies = {
//     setPageNumber: fetchDocumentaryMovies.setPageNumber,
//     pageNumber: fetchDocumentaryMovies.pageNumber,
//     cardRef: cardRef,
//     movies: fetchDocumentaryMovies.movies
//   };

//   const dramaMovies = {
//     setPageNumber: fetchDramaMovies.setPageNumber,
//     pageNumber: fetchDramaMovies.pageNumber,
//     cardRef: cardRef,
//     movies: fetchDramaMovies.movies
//   };

//   const historyMovies = {
//     setPageNumber: fetchHistoryMovies.setPageNumber,
//     pageNumber: fetchHistoryMovies.pageNumber,
//     cardRef: cardRef,
//     movies: fetchHistoryMovies.movies
//   };

//   const horrorMovies = {
//     setPageNumber: fetchHorrorMovies.setPageNumber,
//     pageNumber: fetchHorrorMovies.pageNumber,
//     cardRef: cardRef,
//     movies: fetchHorrorMovies.movies
//   };

//   const romanceMovies = {
//     setPageNumber: fetchRomanceMovies.setPageNumber,
//     pageNumber: fetchRomanceMovies.pageNumber,
//     cardRef: cardRef,
//     movies: fetchRomanceMovies.movies
//   };

//   const scifiMovies = {
//     setPageNumber: fetchSciFiMovies.setPageNumber,
//     pageNumber: fetchSciFiMovies.pageNumber,
//     cardRef: cardRef,
//     movies: fetchSciFiMovies.movies
//   };

//   const thrillerMovies = {
//     setPageNumber: fetchThrillerMovies.setPageNumber,
//     pageNumber: fetchThrillerMovies.pageNumber,
//     cardRef: cardRef,
//     movies: fetchThrillerMovies.movies
//   };

//   return { 
//     ...popularMovies, 
//     ...actionMovies, 
//     ...adventureMovies,
//     ...animationMovies, 
//     ...comedyMovies, 
//     ...documentaryMovies, 
//     ...dramaMovies,
//     ...historyMovies,
//     ...horrorMovies,
//     ...romanceMovies,
//     ...scifiMovies,
//     thrillerMovies
//   };
// }
 
// export default requests