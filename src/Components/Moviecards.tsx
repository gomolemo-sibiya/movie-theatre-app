import { Moviecard } from "../Typings/MoviesType";
import { MovieRow } from "./MovieRows";
import { 
    Container, 
    Title, 
    Wrapper,
    MoviesList,
    ButtonStyle
} from "./Moviecardstyle";


export const Movies = ({movies, cardRef, title, titleCategory}: Moviecard) => {
    const next = () => {
        cardRef.current?.scrollBy(300, 0);
    }
    const prev = () => {
        cardRef.current?.scrollBy(-300, 0);
    }

    return (
        <Container id={titleCategory} className={'MovieCard'}>
            <Wrapper>
                <Title>{title}<span>Movies</span></Title>
                    <MoviesList ref={cardRef} className={'MovieList'}>
                        {movies.results.length > 0 &&
                            movies.results.map((item, index) => (
                                <MovieRow
                                    key={index}
                                    title={item.title}
                                    url={item.backdrop_path}
                                    id={item.id}
                                />
                        ))}
                    </MoviesList>
                    <ButtonStyle onClick={next}>
                        <button className="btn">
                            <svg width="60px" height="60px" viewBox="0 0 60 60" className="border">
                            <polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line" />
                            <polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line" />
                            </svg>
                            <span className="next"> 
                                &#8250;
                            </span>
                        </button>
                    </ButtonStyle>
                    <ButtonStyle onClick={prev}>
                        <button className="btn">
                            <svg width="60px" height="60px" viewBox="0 0 60 60" className="border">
                            <polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line" />
                            <polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line" />
                            </svg>
                            <span className="prev"> 
                                &#8249;
                            </span>
                        </button>
                    </ButtonStyle>
            </Wrapper>
        </Container>
    )
}

export default Movies;