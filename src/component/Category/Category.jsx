import { useContext } from 'react'
import PropTypes from 'prop-types'
import { AppContext } from '../../context/AppContext'
import { MainDiv, CategoryHeader, CategoryBody, FlexTile, StyledImage } from './styles'

import { VoteButton } from '../VoteButton/VoteButton'

export const Category = ({ categoryTitle = '', categoryData }) => {
  const {voteSelection, setVoteSelection} = useContext(AppContext)

  const HandleVoteClick = ({name}) => {
    setVoteSelection(prev => ({...prev, [categoryTitle]: name }))
  }

  const isNomineeSelected = (category, name) => voteSelection?.[category] && voteSelection?.[category] === name

  return (
    <MainDiv>
      <CategoryHeader className='category-header'>Category: {categoryTitle}</CategoryHeader>
      <CategoryBody>
        {categoryData.map((item) => (
          <FlexTile key={item.name}>
            {item.name}
            <StyledImage src={item.image} />
            <VoteButton handleClick={() => HandleVoteClick({name: item.name})} isSelected={isNomineeSelected(categoryTitle, item.name)}>Vote</VoteButton>
          </FlexTile>
        ))}
      </CategoryBody>
    </MainDiv>
    
  )
}

Category.propTypes = {
  categoryTitle: PropTypes.string.isRequired,
  categoryData: PropTypes.array
}
