import styled from "styled-components"

export const BoxContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
  width: 100%;
  margin: 0rem 0rem 0rem 2.8rem;
  

  > div {
    > h1 {
      font-family: "Baloo 2";
      font-size: 3rem;
      font-style: normal;
      font-weight: 800;
      line-height: 130%;
      color: ${(props) => props.theme["neutral-900"]};
    }

    > p {
      font-family: "Roboto";
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 130%;
      color: ${(props) => props.theme["neutral-900"]};
    }

    
  }
  > img {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      padding: 5rem;
    }
`

export const GridContent = styled.div`
  display: grid;
  flex:1;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  gap: 1rem;
  align-items: flex-start;
  margin-top: 3rem;
`

export const GridItem = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 1rem;
  margin-left: 0;

 > p {
    font-size: 1rem;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    color: ${(props) => props.theme["neutral-800"]};
  }
`

export const ShopIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 8px;
  color: ${(props) => props.theme["white"]};

  width: 32px;
  height: 32px;

  border-radius: 100px;
  background: ${(props) => props.theme["yellow-600"]};
`


export const ClockIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 8px;
  color: ${(props) => props.theme["white"]};

  width: 32px;
  height: 32px;

  border-radius: 100px;
  background: ${(props) => props.theme["yellow-500"]};
`

export const CubeIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 8px;
  color: ${(props) => props.theme["white"]};

  width: 32px;
  height: 32px;

  border-radius: 100px;
  background: ${(props) => props.theme["neutral-800"]};
`

export const CoffeeIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 8px;
  color: ${(props) => props.theme["white"]};

  width: 32px;
  height: 32px;

  border-radius: 100px;
  background: ${(props) => props.theme["purple-700"]};
`