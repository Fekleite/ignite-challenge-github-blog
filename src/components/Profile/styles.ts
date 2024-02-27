import styled from "styled-components";

export const ProfileContainer = styled.div`
  padding: 2rem 2.5rem;
  border-radius: 1.25rem;
  margin-top: -5rem;

  background-color: ${props => props.theme["base-profile"]};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
`

export const ProfileInfo = styled.div`
  flex: 1;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 0.5rem;

    span {
      font-weight: 700;
      font-size: 1.5rem;
      line-height: 130%;
      color: ${props => props.theme["base-title"]};
    }

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

  p {
    line-height: 160%;

    margin-bottom: 1.5rem;
  }
`;

export const ProfileResume = styled.div`
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