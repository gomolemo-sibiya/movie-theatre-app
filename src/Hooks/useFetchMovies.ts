import { useState, useEffect } from "react";
import api_keys from "../config/api_keys";
import { Movies } from "../Typings/MoviesType";

export const useFetchMovies = (url: string) => {
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [movies, setMovies] = useState<Movies>({
    page: 1,
    total_pages: 982,
    results: [],
  });

  useEffect(() => {
    const fetchApi = async () => {
      const res = await fetch(
        `${url}?api_key=${api_keys}&page=${pageNumber}`
      );
      const json = await res.json();
      const data = await json;

      setMovies((currentList) => ({
        page: data.page,
        total_pages: data.total_pages,
        results:
          data.page !== currentList.page
            ? [...currentList.results, ...data.results]
            : [...data.results],
      }));
    };

    fetchApi();
  }, [pageNumber, url]);

  return { setPageNumber, pageNumber, movies };
};

export const useFetchGenres = (url: string, with_genres: string) => {
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [movies, setMovies] = useState<Movies>({
    page: 1,
    total_pages: 982,
    results: [],
  });

  useEffect(() => {
    const fetchGenreApi = async () => {
      const res = await fetch(
        `${url}?api_key=${api_keys}&with_genres=${with_genres}&page=${pageNumber}`
      );
      const json = await res.json();
      const data = await json;

      setMovies((currentList) => ({
        page: data.page,
        total_pages: data.total_pages,
        results:
          data.page !== currentList.page
            ? [...currentList.results, ...data.results]
            : [...data.results],
      }));
    };

    fetchGenreApi();
  }, [pageNumber, url, with_genres]);

  return { setPageNumber, pageNumber, movies };
};

