import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 896px;

  padding: 0 1rem;
  margin: 0 auto;

  main {
    margin-top: 4.5rem;

    form {
      input {
        width: 100%;
        height: 50px;

        border-radius: 6px;
        padding: 0.75rem 1rem;
        border: 1px solid ${props => props.theme["base-border"]};

        background-color: ${props => props.theme["base-input"]};
        color: ${props => props.theme["base-text"]};
        
        &::placeholder {
          color: ${props => props.theme["base-label"]};
        }
      }
    }
  }
`;

export const TitleGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 0.875rem;

  h2 {
    color: ${props => props.theme["base-subtitle"]};

    font-size: 1.125rem;
  }

  span {
    color: ${props => props.theme["base-span"]};

    font-size: 0.875rem;
  }
`;