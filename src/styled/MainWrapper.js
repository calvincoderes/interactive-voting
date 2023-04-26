import styled from "styled-components";

const breakpoint = '768px';

export const MainWrapper = styled.div`
  background-color: rgb(0,89,92) ;
  padding: 4px;
  border-radius: 5px;
  margin: 0 auto;
  max-width: 100%;
  @media (min-width: ${breakpoint}) {
    max-width: 600px;
  }
`;