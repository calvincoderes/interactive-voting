import styled from "styled-components";

export const MainDiv = styled.div`
    width: 100%;
    margin-bottom: 1rem;
`

export const CategoryHeader = styled.div`
    background-color: #E6C635;
    padding: 6px;
`

export const CategoryBody = styled.div`
    background-color: #F6A131;
    padding: 6px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-content: center;
    justify-content: start;
    align-items: center;
    gap: 20px;
`

export const FlexTile = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background-color: #FED5AE;
    border-radius: 20px;
    color: black;
    min-height: 190px;
    min-width: 30%;
    width: auto;
    margin-bottom: 20px;
`

export const StyledImage = styled.img`
    margin-top: 0.6rem;
    width: 100px;
    height: 100px;
`