import styled from "styled-components"
export const StyledDiv = styled.div`
 .popup-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* semi-transparent black background */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  /* Popup content */
  .popup-content {
    background-color: #fff; /* white background */
    border-radius: 5px;
    padding: 20px;
    max-width: 80%;
    max-height: 80%;
    overflow: auto;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3); /* shadow effect */
  }
  
  /* Close button */
  .popup-close {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 1.5rem;
    color: #333;
    cursor: pointer;
  }
  
  /* Animation */
  .popup-content-enter {
    opacity: 0;
    transform: scale(0.9);
  }
  .popup-content-enter-active {
    opacity: 1;
    transform: scale(1);
    transition: opacity 300ms, transform 300ms;
  }
  .popup-content-exit {
    opacity: 1;
    transform: scale(1);
  }
  .popup-content-exit-active {
    opacity: 0;
    transform: scale(0.9);
    transition: opacity 300ms, transform 300ms;
  }
`