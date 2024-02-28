import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 896px;

  padding: 0 1rem;
  margin: 0 auto;
`;

export const PostInfo = styled.div`
  padding: 2rem;
  border-radius: 1.25rem;
  margin-top: -5rem;

  background-color: ${props => props.theme["base-profile"]};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  header {
    display: flex;
    justify-content: space-between;

    margin-bottom: 1.25rem;

    a {
      color: ${props => props.theme.blue};

      display: flex;
      align-items: center;
      gap: 0.5rem;

      text-decoration: none;
      font-size: 0.75rem;
      font-weight: 700;

      transition: opacity 0.3s;

      &:hover {
        opacity: 0.8;
      }
    }
  }

  h1 {
    font-size: 1.5rem;

    color: ${props => props.theme["base-title"]};

    margin-bottom: 0.5rem;
  }
`;

export const PostResume = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    color: ${props => props.theme["base-label"]};

    span {
      color: ${props => props.theme["base-subtitle"]};
    }
  }
`;

export const Content = styled.main`
  padding: 2.5rem 2rem;
`;