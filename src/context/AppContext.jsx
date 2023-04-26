/* eslint-disable react/prop-types */
import { createContext, useState, useCallback } from 'react'
import { categories } from '../data/data'

const AppContext = createContext()

const MainAppContext = props => {
  const [voteSelection, setVoteSelection] = useState({})

  const isVoteComplete = useCallback(() => {
    const totalCategories = categories.length
    const totalVoteCasted = Object.keys(voteSelection).length
    return totalCategories === totalVoteCasted ? true : false
  }, [voteSelection])

  return (
    <AppContext.Provider
      value={{
        voteSelection,
        setVoteSelection,
        isVoteComplete
      }}
    >
      {props.children}
    </AppContext.Provider>
  )
}

export { MainAppContext, AppContext }
