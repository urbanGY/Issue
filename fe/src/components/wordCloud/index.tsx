import React, { useEffect } from 'react'
import { observer } from 'mobx-react'
import { getIssueStore, IssueModel } from '$stores/issueStore'
import Word from './Word'
import classNames from 'classnames/bind'
import styles from './index.module.scss'

import { randomRGB } from '$utils/common'

const cx = classNames.bind(styles)

const WordClound = observer(() => {
    const { issueList, fetchIssue } = getIssueStore()

    useEffect(() => {
        fetchIssue()
    }, [fetchIssue])

    if (!issueList.length) {
        return null
    }

    const getWordStyle = (elem: IssueModel, idx: number) => {
        const fontSize = 12 + elem.ratio * 5 + 'px'
        const color = randomRGB()
        return {
            fontSize: fontSize,
            color: color,
        }
    }

    return (
        <div className={cx('article')}>
            {issueList.map((elem, idx) => {
                return (
                    <Word
                        key={`${elem.word}_${idx}`}
                        elem={elem}
                        wordStyle={getWordStyle(elem, idx)}
                        idx={idx}
                    />
                )
            })}
        </div>
    )
})

export default WordClound
