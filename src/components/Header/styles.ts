import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 296px;

  background-color: ${props => props.theme["base-profile"]};

  padding: 4rem 0;

  img {
    display: block;
    margin: 0 auto;
  }
`;