import PropTypes from 'prop-types'
import { StyledButton } from "./styles"


export const VoteButton = ({ handleClick, isSelected = false, text= 'Vote' }) => {
    return (
        <StyledButton isSelected={isSelected} onClick={handleClick}>
            {text}
        </StyledButton>
    )
}

VoteButton.propTypes = {
    handleClick: PropTypes.func,
    isSelected: PropTypes.bool.isRequired,
    text: PropTypes.string

}