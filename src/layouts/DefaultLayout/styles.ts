import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 74rem;
  height: calc(100vh - 10rem);
  margin: 5rem auto;
  padding: 2.5rem;

  background: ${(props) => props.theme.container};
  border-radius: 8px;

  display: flex;
  flex-direction: column;

  @media (max-width: 700px) {
    padding: 1rem;
    margin: 5rem 0.5rem;
  }
`
