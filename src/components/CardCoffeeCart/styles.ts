import styled from "styled-components";

export const BoxCart = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
`

export const ButtonCart = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
 background: ${(props) => props.theme["purple-700"]};
 color: ${(props) => props.theme["white"]};
 border-radius: 8px;
 height: 38px;
 width: 38px;
 cursor: pointer;

 &:hover {
  background: ${(props) => props.theme["purple-800"]};
  }
`
export const ButtonAdd = styled.div`
  background: ${(props) => props.theme["neutral-300"]};
  border-radius: 8px;
  height: 38px;
  width: 72px;
  display: flex;
  align-items: center;
  justify-contet: center;
  gap: 1rem;
  padding: 0rem 0.5rem 0rem 0.5rem;
  color:  ${(props) => props.theme["purple-700"]};
  cursor: pointer;
   
  > span {
    color: ${(props) => props.theme["neutral-900"]};
    font-family: "Roboto";
    font-size: 16px;
    font-weight: 400;
    line-height: 130%;
  }
`