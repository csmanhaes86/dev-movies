import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Background,
  ConatinerButtons,
  Container,
  Info,
  Poster,
} from './styles';
import Button from '../../components/Button';
import Slider from '../../components/Slider';
import { getImages } from '../../utils/getImages';
import Modal from '../../components/Modal';
import {
  getMovies,
  getTopMovies,
  getTopSeries,
  getPersonPopular,
  getPopularSeries,
} from '../../services/getData';

function Home() {
  const [showModal, setShowModal] = useState(false);
  const [movie, setMovie] = useState();
  const [topMovies, setTopMovies] = useState();
  const [topSeries, setTopSeries] = useState();
  const [popularSeries, setPopularSeries] = useState();
  const [personPopular, setPersonPopular] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    async function getAllData() {
      Promise.all([
        getMovies(),
        getTopMovies(),
        getTopSeries(),
        getPopularSeries(),
        getPersonPopular()
      ])
        .then(([movies, topMovies, topSeries, popularSeries, popularPerson]) => {
          setMovie(movies);
          setTopMovies(topMovies);
          setTopSeries(topSeries);
          setPopularSeries(popularSeries);
          setPersonPopular(popularPerson);
        }).catch((error) => { console.error(error) })

    }
    getAllData();

  }, []);

  return (
    <>
      {movie && (
        <Background img={getImages(movie.backdrop_path)}>
          {showModal && (
            <Modal movieId={movie.id} setShowModal={setShowModal} />
          )}
          <Container>
            <Info>
              <h1>{movie.title}</h1>
              <p>{movie.overview}</p>
              <ConatinerButtons>
                <Button red onClick={() => navigate(`/detalhe/${movie.id}`)}>
                  Assita agora
                </Button>
                <Button onClick={() => setShowModal(true)}>
                  Assita o Trailer
                </Button>
              </ConatinerButtons>
            </Info>
            <Poster>
              <img src={getImages(movie.poster_path)} alt="poster-movie" />
            </Poster>
          </Container>
        </Background>
      )}

      {topMovies && <Slider info={topMovies} title="Top Filmes" />}
      {topSeries && <Slider info={topSeries} title="Top Séries" />}
      {popularSeries && (
        <Slider info={popularSeries} title="Séries Populares" />
      )}
      {personPopular && <Slider info={personPopular} title="Top Artistas" />}
    </>
  );
}

export default Home;
