import Container from "../components/container"
import { PhotoWidget } from "../contexts/photos/components/photo-widget"
import type { Photo } from "../contexts/photos/models/photo"

export function PageHome(){
  return(
    <Container>
      <div className='grid grid-cols-4 gap-9'>
        <PhotoWidget
          photo={{
            id: '123',
            title: 'Olá, sou uma foto',
            imageId: 'portrait-tower.png',
            albums: [
              {id: '1', title: 'Album 1'},
              {id: '2', title: 'Album 2'},
              {id: '3', title: 'Album 3'},
            ]
          }}
        />
        <PhotoWidget
          photo={{
            id: '456',
            title: 'Olá, sou uma foto',
            imageId: 'portrait-tower.png',
            albums: [
              {id: '1', title: 'Album 1'},
              {id: '2', title: 'Album 2'},
              {id: '3', title: 'Album 3'},
            ]
          }}
        />
        <PhotoWidget
          photo={{
            id: '789',
            title: 'Olá, sou uma foto',
            imageId: 'portrait-tower.png',
            albums: [
              {id: '1', title: 'Album 1'},
              {id: '2', title: 'Album 2'},
              {id: '3', title: 'Album 3'},
            ]
          }}
        />
        <PhotoWidget
          photo={{} as Photo}
          loading
        />
      </div>
    </Container>
  )
}