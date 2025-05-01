import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import api from '../../services/api';
import { Background, ConatinerButtons, Container, Info, Poster } from './styles';
import Button from '../../components/Button';
import Slider from '../../components/Slider';
import { getImages } from '../../utils/getImages';
import Modal from '../../components/Modal';

function Home() {
  const [showModal, setShowModal] = useState(false)
  const [movie, setMovie] = useState()
  const [topMovies, setTopMovies] = useState()
  const [topSeries, setTopSeries] = useState()
  const [popularSeries, setPopularSeries] = useState()
  const [personPopular, setPersonPopular] = useState()
  const navigate = useNavigate()

  useEffect(() => {

    async function getMovies() {
      const { data: { results } } = await api.get('/movie/popular');

      console.log(results[2])
      setMovie(results[2])
    }

    async function getTopMovies() {
      const { data: { results } } = await api.get('/movie/top_rated');

      setTopMovies(results)
    }

    async function getTopSeries() {
      const { data: { results } } = await api.get('/tv/top_rated');

      setTopSeries(results)
    }

    async function getPopularSeries() {
      const { data: { results } } = await api.get('/tv/popular');

      setPopularSeries(results)
    }

    async function getPersonPopular() {
      const { data: { results } } = await api.get('/person/popular');

      setPersonPopular(results)
    }

    getMovies();
    getTopMovies()
    getTopSeries()
    getPopularSeries()
    getPersonPopular()

  }, [])


  return (
    <>
      {movie && (
        <Background img={getImages(movie.backdrop_path)}>
          {showModal && <Modal movieId={movie.id} setShowModal={setShowModal}/>}
          <Container>
            <Info>
              <h1>{movie.title}</h1>
              <p>{movie.overview}</p>
              <ConatinerButtons>
                <Button red onClick={()=> navigate(`/detalhe/${movie.id}`)}>Assita agora</Button>
                <Button onClick={() => setShowModal(true)}>Assita o Trailer</Button>
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
      {popularSeries && <Slider info={popularSeries} title="Séries Populares" />}
      {personPopular && <Slider info={personPopular} title="Top Artistas" />}
    </>
  );
}

export default Home;


