import { Fragment, useContext, useState } from 'react'
import './App.css'

// data
import { categories } from './data/data'

// styled components
import { MainWrapper } from './styled/MainWrapper'

// components
import { MainHeading } from './component/MainHeading/MainHeading'
import { Category } from './component/Category/Category'
import { SubmitButton } from './component/SubmitButton/SubmitButton'
import { Modal } from './component/Modal/Modal'

// context
import { AppContext } from './context/AppContext'
import styled from 'styled-components'

function App() {
  const { voteSelection, isVoteComplete } = useContext(AppContext)
  const [popupSettings, setPopupSettings] = useState({
    isOpen: false,
    message: null
  })

  const handleSubmit = () => {
    // if no nominees selected 
    if (!isVoteComplete()) {
      setPopupSettings({
        isOpen: true,
        message: 'You have to pick one nominee for each category.'
      })
      return false
    }
    // validation
    const isDoneVoting = JSON.parse(localStorage.getItem('isDoneVoting'));
    const nominees = [];
    for (const key in voteSelection) {
      nominees.push(voteSelection[key])
    }

    if (isDoneVoting) {
      const previousVote = localStorage.getItem('submittedVote')
      setPopupSettings({ isOpen: true, message: `You already voted for: ${previousVote}` })
      return
    }
    
    // else submit and call a modal
    setPopupSettings({ isOpen: true, message: `Thank you for your votes!` })
    // save in localStorage
    localStorage.setItem('isDoneVoting', true)
    localStorage.setItem('submittedVote', nominees.join(', '))

  }
  return (
    <Fragment>
      <Modal popupSettings={popupSettings} setPopupSettings={setPopupSettings} />
      <MainHeading content={'Online Votes'} />
      <MainWrapper className="main-wrapper">
        {categories.map((category, index) => (
          <Category
            key={index}
            categoryTitle={category.title}
            categoryData={category.data}
          />
        ))}
        <StyledDiv>
          <SubmitButton handleClick={handleSubmit} isDisabled={!isVoteComplete()} text='Submit Your Votes' />
        </StyledDiv>
      </MainWrapper>
    </Fragment>
  )
}

export default App


const StyledDiv = styled.div`
  padding: 1em;
`
