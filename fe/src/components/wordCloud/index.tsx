import React, { useEffect } from 'react'
import { observer } from 'mobx-react'
import { getIssueStore } from '$stores/issueStore'

import Word from './Word'

const WordClound = observer(() => {
    const { issueList, fetchIssue } = getIssueStore()

    useEffect(() => {
        fetchIssue()
    }, [fetchIssue])

    if (!issueList.length) {
        return null
    }

    return (
        <>
            {issueList.map((elem, idx) => {
                return <Word key={idx} elem={elem} />
            })}
        </>
    )
})

export default WordClound
