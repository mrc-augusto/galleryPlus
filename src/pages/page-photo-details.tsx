import { useParams } from "react-router";
import Text from "../components/text";

export function PagePhotoDetails(){
  const {id} = useParams()
  

  return(
    <div>
      <Text variant="heading-medium">Detalhes da Foto</Text>
      <hr/>
      <Text variant="heading-medium">ID da foto: {id}</Text>
    </div>
  )
}