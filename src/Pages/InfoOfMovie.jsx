import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Loading from "../components/Loading";
import styled from "styled-components";
const url = "https://www.omdbapi.com/?apikey=c1920adf&i=";
const StyledLoading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5rem 0;
`;
const InfoOfMovie = () => {
  const movieId = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const getData = async () => {
    try {
      setLoading(true);
      const reponse = await fetch(`${url}${movieId.id}`);
      const data = await reponse.json();
      setMovie(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const { Title, Year, Plot, Poster } = movie;

  return (
    <article className="movie">
      {loading && (
        <StyledLoading>
          <Loading />
        </StyledLoading>
      )}
      {!loading && (
        <div className="container">
          <img src={Poster} alt={Title} />
          <div className="infoMovie">
            <h1>{Title}</h1>
            <p>{Plot}</p>
            <p>{Year}</p>
            <Link to="/">
              <button className="btn">back to home</button>
            </Link>
          </div>
        </div>
      )}
    </article>
  );
};

export default InfoOfMovie;
