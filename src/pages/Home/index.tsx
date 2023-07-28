import { BoxContent, ClockIcon, CoffeeIcon, CubeIcon, GridContent, GridItem, ShopIcon } from "./styles";
import { Clock, Coffee, Cube, ShoppingCartSimple } from "phosphor-react"

import { DefaultLayout } from "../../layouts/DefaultLayout";
import { Header } from "../../components/Header";
import ImageCoffee from "../../assets/images/image-coffee-home.png"

const GRID_ITEMS = [
  {
    title: "Compra simples e segura",
    icon: (
      <ShopIcon>
        <ShoppingCartSimple size={22} weight="fill" />
      </ShopIcon>
    ),
  },
  {
    title: "Embalagem mantém o café intacto",
    icon: (
      <CubeIcon>
        <Cube size={22} weight="fill" />
      </CubeIcon>
    ),
  },
  {
    title: "Entrega rápida e rastreada",
    icon: (
      <ClockIcon>
        <Clock size={22} weight="fill" />
      </ClockIcon>
    ),
  },

  {
    title: "Embalagem mantém o café O café chega fresquinho até você",
    icon: (
      <CoffeeIcon>
        <Coffee size={22} weight="fill" />
      </CoffeeIcon>
    ),
  },
]
export function Home() {
  return (
    <>
      <Header />

      <BoxContent>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>

          <GridContent>
            {GRID_ITEMS.map((item) => (
              <GridItem key={item.title}>
                {item.icon}
                <p>{item.title}</p>
              </GridItem>
            ))}
          </GridContent>
        </div>
        <img src={ImageCoffee} alt="" />
      </BoxContent>
      <DefaultLayout />
    </>
  )
}