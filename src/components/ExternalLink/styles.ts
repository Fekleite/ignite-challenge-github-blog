import styled from "styled-components";

export const Link = styled.a`
  color: ${props => props.theme.blue};

  display: flex;
  align-items: center;
  gap: 0.5rem;

  text-transform: uppercase;
  text-decoration: none;
  font-size: 0.75rem;
  font-weight: 700;

  transition: opacity 0.3s;

  &:hover {
    opacity: 0.8;
  }
`;