import { BoxCart, ButtonAdd, ButtonCart } from "./styles"
import { Minus, Plus, ShoppingCartSimple } from "phosphor-react"

export function CardCoffeeCart() {
  return (
    <>
      <BoxCart>
        <ButtonAdd>
          <Minus size={16} weight="bold" />
          <span>1</span>
          <Plus size={16} weight="bold" />
        </ButtonAdd>
        <ButtonCart>
          <ShoppingCartSimple size={22} weight="fill" />
        </ButtonCart>
      </BoxCart>


    </>
  )
}