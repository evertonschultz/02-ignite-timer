import styled from 'styled-components'

export const HistoryContainer = styled.main`
  flex: 1;
  padding: 3.5rem;

  display: flex;
  flex-direction: column;

  @media (max-width: 850px) {
    padding: 0;
    padding-top: 3.5rem;
  }

  h1 {
    font-size: 1.5;
    color: ${(props) => props.theme.primary};
  }
`

export const HistoryList = styled.div`
  flex: 1;
  overflow: auto;
  margin-top: 2rem;
  max-height: 450px;
  padding: 2px;

  ::-webkit-scrollbar {
    overflow-x: hidden;
    overflow-y: hidden;
    width: 3px;
    height: 3px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.background};
    border-radius: 9999px;
  }

  ::-webkit-scrollbar-button {
    height: 5px;
  }

  ::-webkit-scrollbar-corner {
    background-color: ${(props) => props.theme.container};
  }

  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;

    @media (max-width: 700px) {
      display: none;
    }

    th {
      background-color: ${(props) => props.theme.quaternary};
      padding: 1rem;
      text-align: left;
      color: ${(props) => props.theme.primary};
      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        border-top-left-radius: 8px;
        padding-left: 1.5rem;
      }

      &:last-child {
        border-top-right-radius: 8px;
        padding-right: 1.5rem;
      }
    }

    > tbody {
      tr {
        td {
          background-color: ${(props) => props.theme.content};
          border-top: 4px solid ${(props) => props.theme.container};
          padding: 1rem;
          font-size: 0.875rem;
          line-height: 1.6;

          color: ${(props) => props.theme.table};

          min-width: 100px;

          &:first-child {
            width: 50%;
            padding-left: 1.5rem;
          }

          &:last-child {
            padding-right: 1.5rem;
          }
        }

        &:last-child {
          td {
            &:first-child {
              width: 50%;
              padding-left: 1.5rem;
              border-bottom-left-radius: 8px;
            }

            &:last-child {
              padding-right: 1.5rem;
              border-bottom-right-radius: 8px;
            }
          }
        }
      }
    }
  }
`
const STATUS_COLORS = {
  yellow: 'yellow-500',
  green: 'green-500',
  red: 'red-500',
} as const

interface StatusProps {
  statusColor: keyof typeof STATUS_COLORS
}

export const Status = styled.span<StatusProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '';
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 9999px;
    background: ${(props) => props.theme[STATUS_COLORS[props.statusColor]]};
  }
`

export const HistoryListMobile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  @media (min-width: 700px) {
    display: none;
  }
`

export const HistoryMobile = styled.div`
  background-color: ${(props) => props.theme.content};
  padding: 1rem;
  text-align: left;
  line-height: 1.6;

  display: flex;
  flex-direction: column;

  &:first-child {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  &:last-child {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`
export const TitleMobile = styled.span`
  font-weight: bold;
  font-size: large;
  color: ${(props) => props.theme.primary};
`
export const DurationMobile = styled.span`
  font-size: small;
  color: ${(props) => props.theme.primary};
`

export const StatusMobile = styled.span`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  > span {
    font-size: small;
    color: ${(props) => props.theme.tertiary};
  }
`
