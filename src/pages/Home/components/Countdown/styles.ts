import styled from 'styled-components'

export const CountdownContainer = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;
  line-height: 8rem;
  color: ${(props) => props.theme.primary};

  display: flex;
  gap: 1rem;

  @media (max-width: 700px) {
    font-size: 5rem;
    line-height: 4rem;
    color: ${(props) => props.theme.primary};

    display: flex;
    gap: 1rem;
  }
  @media (max-width: 500px) {
    font-size: 2.5rem;
    line-height: 2rem;
    color: ${(props) => props.theme.primary};

    display: flex;
    gap: 0.5rem;
  }

  @media (max-width: 300px) {
    font-size: 2rem;
    line-height: 1.75rem;
    color: ${(props) => props.theme.primary};

    display: flex;
    gap: 0.5rem;
  }

  span {
    background: ${(props) => props.theme.content};
    padding: 2rem 1rem;
    border-radius: 8px;
  }
`
export const Separator = styled.div`
  padding: 2rem 0;
  color: ${(props) => props.theme['green-500']};

  width: 4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;

  @media (max-width: 700px) {
    width: 3rem;
  }

  @media (max-width: 500px) {
    width: 2rem;
  }

  @media (max-width: 300px) {
    width: 1rem;
  }
`
