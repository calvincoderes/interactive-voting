import styled from "styled-components"
export const StyledButton = styled.button`
    margin-bottom: 1rem;
    min-width: 25vw;
    color: black;
    background-color: ${props => props.isDisabled ? `#B8BCB5` : `#E6C635`};
    border-radius: 0;
    padding: 6px;

    :hover {
        border: solid 1px white;
    }
`