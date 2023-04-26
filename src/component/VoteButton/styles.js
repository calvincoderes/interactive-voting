import styled from "styled-components"
export const StyledButton = styled.button`
    margin-top: 0.6rem;
    width: 100px;
    color: white;
    background-color: ${props => props.isSelected ? `#E6C635` : `#B8BCB5`};
    border: ${props => props.isSelected ? `solid 1px white`: `none`};
    border-radius: 0;
    padding: 6px;

    :hover, active {
        border: solid 1px white;
        background-color: #E6C635;
    }
`