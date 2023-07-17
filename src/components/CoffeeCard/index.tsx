import { BoxCard, Card, Label, Price, PriceSymbol } from "./styles"

interface IProps {
  value: {
    img?: string;
    type: string[];
    name: string;
    description: string;
    price: string;
  }
}

export function CoffeeCard(props: IProps) {
  return (


    <Card>
      <img src={props.value.img} />
      <Label>
        <div>
          {props.value.type.map((label) => <span>{label}</span>)}
        </div>
      </Label>
      <h1>{props.value.name}</h1>
      <p>{props.value.description}</p>
      <BoxCard>
        <PriceSymbol>
          <span>R$</span>
        </PriceSymbol>
        <Price>
          <span>{props.value.price}</span>
        </Price>
        <span>Add car</span>
      </BoxCard>
    </Card>
  )
}