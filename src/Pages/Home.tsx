import { useState, useEffect, useRef}  from 'react'
import Banner from "../Components/Banner";
import Movies from "../Components/Moviecards";
import api_key from '../config/api_keys';
import { BigImage } from '../Typings/BannerType';
import { useFetchMovies } from '../Hooks/useFetchMovies';
import { useFetchGenres } from '../Hooks/useFetchMovies';
import { useAutoCarrousel } from '../Hooks/useAutoCarrousel';

export const Home = () => {
    const [topRatesMovies, setTopRatesMovies] = useState<BigImage[]>([]);
    const popularCardRef = useRef<HTMLUListElement>(null);

    const cardRef = useRef<HTMLUListElement>(null);
    const cardRefAni = useRef<HTMLUListElement>(null);
    const cardRefAct = useRef<HTMLUListElement>(null);
    const cardRefAdv = useRef<HTMLUListElement>(null);
    const cardRefCom = useRef<HTMLUListElement>(null);
    const cardRefDoc = useRef<HTMLUListElement>(null);
    const cardRefDr = useRef<HTMLUListElement>(null);
    const cardRefHis = useRef<HTMLUListElement>(null);
    const cardRefHorr = useRef<HTMLUListElement>(null);
    const cardRefRom = useRef<HTMLUListElement>(null);
    const cardRefSci = useRef<HTMLUListElement>(null);
    const cardRefThr = useRef<HTMLUListElement>(null);

    const fetchActionMovies = useFetchGenres(`https://api.themoviedb.org/3/discover/movie`,"28");
    const fetchAdventureMovies = useFetchGenres(`https://api.themoviedb.org/3/discover/movie`,"12");
    const fetchAnimationMovies = useFetchGenres(`https://api.themoviedb.org/3/discover/movie`,"16");
    const fetchComedyMovies = useFetchGenres(`https://api.themoviedb.org/3/discover/movie`,"35");
    const fetchDocumentaryMovies = useFetchGenres(`https://api.themoviedb.org/3/discover/movie`,"99");
    const fetchDramaMovies = useFetchGenres(`https://api.themoviedb.org/3/discover/movie`,"18");
    const fetchHistoryMovies = useFetchGenres(`https://api.themoviedb.org/3/discover/movie`,"36");
    const fetchHorrorMovies = useFetchGenres(`https://api.themoviedb.org/3/discover/movie`,"27");
    const fetchRomanceMovies = useFetchGenres(`https://api.themoviedb.org/3/discover/movie`,"10749");
    const fetchSciFiMovies = useFetchGenres(`https://api.themoviedb.org/3/discover/movie`,"878");
    const fetchThrillerMovies = useFetchGenres(`https://api.themoviedb.org/3/discover/movie`,"53");
    const fetchPopularMovies = useFetchMovies(`https://api.themoviedb.org/3/movie/popular`);

    /*  `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=28,12`  */
    /*---------------------------------------------------------------------------*/

    const popularMovies = {
        setPageNumber: fetchPopularMovies.setPageNumber,
        pageNumber: fetchPopularMovies.pageNumber,
        cardRef: cardRef,
        movies: fetchPopularMovies.movies,
    };
    const actionMovies = {
        setPageNumber: fetchActionMovies.setPageNumber,
        pageNumber: fetchActionMovies.pageNumber,
        cardRef: cardRefAct,
        movies: fetchActionMovies.movies
    };
    const adventureMovies = {
        setPageNumber: fetchAdventureMovies.setPageNumber,
        pageNumber: fetchAdventureMovies.pageNumber,
        cardRef: cardRefAdv,
        movies: fetchAdventureMovies.movies
    };
    const animationMovies = {
        setPageNumber: fetchAnimationMovies.setPageNumber,
        pageNumber: fetchAnimationMovies.pageNumber,
        cardRef: cardRefAni,
        movies: fetchAnimationMovies.movies
    };
    const comedyMovies = {
        setPageNumber: fetchComedyMovies.setPageNumber,
        pageNumber: fetchComedyMovies.pageNumber,
        cardRef: cardRefCom,
        movies: fetchComedyMovies.movies
    };
    const documentaryMovies = {
        setPageNumber: fetchDocumentaryMovies.setPageNumber,
        pageNumber: fetchDocumentaryMovies.pageNumber,
        cardRef: cardRefDoc,
        movies: fetchDocumentaryMovies.movies
    };
    const dramaMovies = {
        setPageNumber: fetchDramaMovies.setPageNumber,
        pageNumber: fetchDramaMovies.pageNumber,
        cardRef: cardRefDr,
        movies: fetchDramaMovies.movies
    };
    const historyMovies = {
        setPageNumber: fetchHistoryMovies.setPageNumber,
        pageNumber: fetchHistoryMovies.pageNumber,
        cardRef: cardRefHis,
        movies: fetchHistoryMovies.movies
    };
    const horrorMovies = {
        setPageNumber: fetchHorrorMovies.setPageNumber,
        pageNumber: fetchHorrorMovies.pageNumber,
        cardRef: cardRefHorr,
        movies: fetchHorrorMovies.movies
    };
    const romanceMovies = {
        setPageNumber: fetchRomanceMovies.setPageNumber,
        pageNumber: fetchRomanceMovies.pageNumber,
        cardRef: cardRefRom,
        movies: fetchRomanceMovies.movies
    };
    const scifiMovies = {
        setPageNumber: fetchSciFiMovies.setPageNumber,
        pageNumber: fetchSciFiMovies.pageNumber,
        cardRef: cardRefSci,
        movies: fetchSciFiMovies.movies
    };
    const thrillerMovies = {
        setPageNumber: fetchThrillerMovies.setPageNumber,
        pageNumber: fetchThrillerMovies.pageNumber,
        cardRef: cardRefThr,
        movies: fetchThrillerMovies.movies
    };

    useEffect(() => {
        const getTopRateMovies = async () => {
            const res = await fetch(
                `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=36`
            );
            const json = await res.json();
            const result = json.results;
            const items = result.slice(0, 5);
            setTopRatesMovies(items);
        };
        getTopRateMovies();
    }, []);

    useAutoCarrousel(fetchPopularMovies.movies, 2000, popularCardRef);

    return (
        <div>
            <Banner image={topRatesMovies} />
            <Movies title="Popular" {...popularMovies}/>
            <Movies title="Action" {...actionMovies}/>
            <Movies title="Adventure" {...adventureMovies}/>
            <Movies title="Animation" {...animationMovies}/>
            <Movies title="Comedy" {...comedyMovies}/>
            <Movies title="Documentary" {...documentaryMovies}/>
            <Movies title="Drama" {...dramaMovies}/>
            <Movies title="History" {...historyMovies}/>
            <Movies title="Horror" {...horrorMovies}/>
            <Movies title="Romance" {...romanceMovies}/>
            <Movies title="SciFi" {...scifiMovies}/>
            <Movies title="Thriller" {...thrillerMovies}/>
        </div>
    );
}


