import Container from "../components/container";
import { AlbumsFilter } from "../contexts/albums/components/albums-filter";
import { PhotosList } from "../contexts/photos/components/photos-list";

export function PageHome() {
  return (
    <Container>
      <AlbumsFilter albums={[
        {id: '1', title: 'Album 1'},
        {id: '2', title: 'Album 2'},
        {id: '3', title: 'Album 3'},
      ]} className="mb-9" />


      <PhotosList photos={[]} />
    </Container>
  );
}
