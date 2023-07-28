import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  margin: auto;
`

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  display: flex;
  justify-content: flex-end;

  > button {
      position: relative;
      background: ${(props) => props.theme["yellow-200"]};
      color: ${(props) => props.theme["yellow-600"]};
      padding: 8px;
      border: none;
      cursor: pointer;
      border-radius: 6px;   
  }

  <img {
    display: flex;
    align-items: flex-start;
  }
`

export const LabelLocation = styled.div`
  background: ${(props) => props.theme["purple-200"]};
  display: flex;
  padding: 8px;
  margin-right: 0.7rem;
  justify-content: end;
  align-items: center;
  gap: 4px;
  border-radius: 6px;
  color: ${(props) => props.theme["purple-700"]};
  font-size: 14px;
  font-family: Roboto;
  font-weight: 400;
  line-height: 130%;
`

