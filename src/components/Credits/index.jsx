import { getImages } from "../../utils/getImages";
import { Container, Title } from "./styles";

function Credits({ credits }) {
 
  return (
    <>
      <Title>Créditos</Title>
      {credits && (
        <Container>
          {credits.slice(0, 5) .map((artits)=>
          <div key={artits.id}>
            <img src={getImages(artits.profile_path)}/>
            <p>{artits.original_name}</p>
          </div>)}
        </Container>
      )}
    </>
  )
}

export default Credits;
