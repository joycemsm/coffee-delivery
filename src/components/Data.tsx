import { CoffeeCard } from "./CoffeeCard"
import { StylesData } from "./stylesData"
import arabic from "../assets/images/arabic.png"
import cappucino from "../assets/images/cappucino.png"
import coffeewithmilk from "../assets/images/coffee-with-milk.png"
import creamyespresso from "../assets/images/creamy-espresso.png"
import cuban from "../assets/images/cuban.png"
import espressoamericano from "../assets/images/espresso-americano.png"
import hawaian from "../assets/images/hawaian.png"
import hotChocolate from "../assets/images/hot-chocolate.png"
import icedEspresso from "../assets/images/iced-espresso.png"
import irish from "../assets/images/irish.png"
import latte from "../assets/images/latte.png"
import macchiato from "../assets/images/macchiato.png"
import moccacino from "../assets/images/moccacino.png"
import traditionalEspresso from "../assets/images/traditional-espresso.png"

const infoCards = [
  {
    img: traditionalEspresso,
    type: ["Tradicional"],
    name: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: "9,90"
  },
  {
    img: espressoamericano,
    type: ["Tradicional"],
    name: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    price: "9,90"
  },
  {
    img: creamyespresso,
    type: ["Tradicional"],
    name: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    price: "9,90"
  },
  {
    img: icedEspresso,
    type: ["label 1", "label 2"],
    name: "Expresso Gelado",
    description: "Café expresso Bebida preparada com café expresso e cubos de gelo com espuma cremosa",
    price: "9,90"
  },
  {
    img: coffeewithmilk,
    type: ["Tradicional", "Com leite"],
    name: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    price: "9,90"
  },
  {
    img: latte,
    type: ["Tradicional", "Com leite"],
    name: "Latte",
    description: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    price: "9,90"
  },
  {
    img: cappucino,
    type: ["Tradicional", "Com leite"],
    name: "Capucciono",
    description: "Bebida com canela feita de doses iguais de café, leite e espuma",
    price: "9,90"
  },
  {
    img: macchiato,
    type: ["Tradicional", "Com leite"],
    name: "Macchiato",
    description: "Café expresso misturado com um pouco de leite quente e espuma",
    price: "9,90"
  },
  {
    img: moccacino,
    type: ["Tradicional", "Com leite"],
    name: "Mocaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    price: "9,90"
  },
  {
    img: hotChocolate,
    type: ["Tradicional", "Com leite"],
    name: "Chocolate Quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    price: "9,90"
  },
  {
    img: cuban,
    type: ["Tradicional", "Com leite", "Gelado"],
    name: "Cubano",
    description: "Drink gelado de café expresso com rum, creme de leite e hortelã",
    price: "9,90"
  },
  {
    img: hawaian,
    type: ["Especial"],
    name: "Havaiano",
    description: "Bebida adocicada preparada com café e leite de coco",
    price: "9,90"
  },
  {
    img: arabic,
    type: ["Especial"],
    name: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias adocicada preparada com café e leite de coco",
    price: "9,90"
  },
  {
    img: irish,
    type: ["Especial", "Alcoólico"],
    name: "Irlandês",
    description: "Bebida Bebida a base de café, uísque irlandês, açúcar e chantilly com grãos de café árabe e especiarias adocicada preparada com café e leite de coco",
    price: "9,90"
  },
]

export function Data() {
  return (
    <StylesData>
      {infoCards.map((mycoffee, key) => <CoffeeCard value={mycoffee} />)}
    </StylesData>
  )
}

