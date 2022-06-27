import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api_key from "../config/api_keys";
import { MovieData } from '../Typings/MoviesType';
import Rating from '@mui/material/Rating';
import { Actors } from "../Components/Actors";
import { Cast } from '../Typings/ActorsType';

import {
    Container,
    Wrapper,
    Left,
    Right,
    CastContainer,
    MovieContainer
} from './Style/moviestyle'
export const Movies = () => {
    const [movieData, setMovieData] = useState<MovieData>();
    const [cast, setCast] = useState<Cast[]>([]);
    const url = 'https://image.tmdb.org/t/p/w500/';
    const params = useParams();

    useEffect(() => {
        if (params.slug)
            fetch(
                `https://api.themoviedb.org/3/movie/${params.slug}?api_key=${api_key}`
            )
            .then((res) => res.json())
            .then((data) => setMovieData(data));
    }, [params.slug]);

    useEffect(() => {
        if(movieData){
            fetch(
                `https://api.themoviedb.org/3/movie/${params.slug}/credits?api_key=${api_key}&language=pt-BR`
            )
            .then((res) => res.json())
            .then((data) => setCast(data.cast));
        }
    });

    if (!movieData) {
        return (
          <Container>
            <h1>Carregando</h1>
          </Container>
        );
    }

    return (
        <Container>
            <Wrapper>
                <MovieContainer>
                    <Left backImage={`${url}${movieData?.poster_path}`}/>
                    <Right>
                        <div>
                            <h1>{movieData.title}</h1>
                            <Rating 
                                name="read-only" 
                                value={5}
                                readOnly
                                color="#5DC98D"
                                style = {{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                }}
                            />
                        </div>
                        <p className="overview">
                            {movieData.overview}
                        </p>
                    </Right>
                </MovieContainer>
                <CastContainer>
                    <Actors 
                        cast={cast} 
                        url={"https://image.tmdb.org/t/p/w500/"}
                    />
                </CastContainer>
            </Wrapper>
        </Container>
    );
}