import { Data } from "../../components/Data";
import { LayoutContainer } from "./styles";

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Data />
      {/* <Outlet /> */}
    </LayoutContainer>
  )
}