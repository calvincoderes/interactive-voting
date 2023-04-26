import PropTypes from 'prop-types'; 
import { StyledH1 } from "./styles"

export const MainHeading = ({ content = '' }) => {
  return (
    <>
      <StyledH1>
        { content }
      </StyledH1>
    </>
  )
}


MainHeading.propTypes = {
  content: PropTypes.string.isRequired
}

