import { Outlet } from "react-router";
import Text from "../components/text";

export function LayoutMain(){
  return (
    <div>
      <Text variant="heading-medium">Layou Principal</Text>
      <hr/>
      <Outlet/>
    </div>
  )
}