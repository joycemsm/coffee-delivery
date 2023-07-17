import styled from "styled-components"

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 6px 36px;
  padding: 16px;
  margin: 1rem;
  max-width: 256px;
  width: 256px;
  background: ${(props) => props.theme['neutral-100']}; 

  > img {
    width: 120px;
    height: 120px;
    margin-top: -40px;
  }

   > h1 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 130%;
    color: ${(props) => props.theme['neutral-900']};
    margin: 16px auto 8px;
    text-align: center;
  }

  > p {
    font-family: "Roboto";
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 130%;
    text-align: center;
    margin-bottom: 2rem;
    color: ${(props) => props.theme['neutral-500']};
  }
`
export const Label = styled.div`
  display: flex; 
  width: 100%;
  margin-top: 12px;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  span {
    padding: 4px 8px;
    background: #F1E9C9;
    color:#C47F17;
    font-size: 0.625rem;
    font-family: Roboto;
    font-weight: 700;
    line-height: 130%;
    text-transform: uppercase;
    border-radius: 100px;
    margin-left: 0.3rem;
  }
`

export const BoxCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const Price = styled.div`
  font-size: 24px;
  font-family: "Baloo 2";
  font-style: normal;
  font-weight: 800;
  line-height: 130%;
  text-align: right;
  color: ${(props) => props.theme["neutral-800"]};
   margin: 0.2rem;
`
  
export const PriceSymbol = styled.div`
  font-size: 14px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  color: ${(props) => props.theme["neutral-800"]};
`
