import React from 'react'

interface WordInterface {
  value: number
}

const Word = ({ value }: WordInterface) => {
  return <p>{value}</p>
}

export default Word
