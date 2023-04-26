import PropTypes from 'prop-types'
import { StyledButton } from "./styles"

export const SubmitButton = ({ handleClick, isDisabled = false, text = 'Submit' }) => {

    return (
        <StyledButton isDisabled={isDisabled} onClick={handleClick}>
            {text}
        </StyledButton>
    )
}

SubmitButton.propTypes = {
    handleClick: PropTypes.func,
    isDisabled: PropTypes.bool.isRequired,
    text: PropTypes.string
}