import React from "react";
import { Link } from "react-router-dom";
import { useGlobal } from "./context";
import Loading from "./Loading";
import styled from "styled-components";
const StyledLoading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const MoviesList = () => {
  const { data, loading } = useGlobal();
  return (
    <article className="movies_container">
      {loading && (
        <StyledLoading className="center">
          <Loading />
        </StyledLoading>
      )}
      <div className="container">
        {data.map((movie) => {
          const { imdbID, Title, Poster, Year } = movie;
          return (
            <div className="box" key={imdbID}>
              <Link to={`/movie/${imdbID}`}>
                <img src={Poster} alt={Title} />
                <div className="info">
                  <h3>{Title}</h3>
                  <p>{Year}</p>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </article>
  );
};

export default MoviesList;
