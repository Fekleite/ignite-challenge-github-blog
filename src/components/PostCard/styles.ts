import { Link } from "react-router-dom";
import styled from "styled-components";

export const CardContainer = styled(Link)`
  text-decoration: none;
  
  padding: 2rem;
  border-radius: 10px;

  background-color: ${props => props.theme["base-post"]};

  header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1rem;

    margin-bottom: 1.25rem;

    h1 {
      font-size: 1.25rem;

      color: ${props => props.theme["base-title"]};
    }

    span {
      font-size: 0.875rem;
      color: ${props => props.theme["base-span"]};

      white-space: nowrap;
    }
  }
`;

export const PostBody = styled.div`
  line-height: 160%;

  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;

  color: ${props => props.theme["base-text"]};
`