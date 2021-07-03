import React from 'react'
import Word from './word'

const list: Array<number> = [1, 2, 3, 4, 5]

const WordClound = () => {
  return (
    <>
      {list.map((elem) => {
        return <Word key={elem} value={elem} />
      })}
    </>
  )
}

export default WordClound
