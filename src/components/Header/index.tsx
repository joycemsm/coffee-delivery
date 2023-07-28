import { HeaderContainer, HeaderContent, LabelLocation } from "./styles"
import { MapPin, ShoppingCartSimple } from "phosphor-react";

import logo from "../../assets/logo.svg"

export function Header() {
  return (
    <HeaderContainer>

      <img src={logo} alt="" />
      <HeaderContent>
        <LabelLocation>
          <MapPin size={22} weight="fill" />
          <span>São Paulo, SP</span>
        </LabelLocation>
        <button>
          <ShoppingCartSimple size={22} weight="fill" />
        </button>
      </HeaderContent>
    </HeaderContainer>


  )
}