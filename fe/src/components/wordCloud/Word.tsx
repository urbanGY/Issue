import { observer } from 'mobx-react'
import { wordStyle } from '$types/issue'
import classNames from 'classnames/bind'
import styles from './Word.module.scss'
import { IssueModel } from '$stores/issueStore'

const cx = classNames.bind(styles)
interface WordInterface {
    elem: IssueModel
    wordStyle: wordStyle
    idx: number
}

const Word = observer(({ elem, wordStyle, idx }: WordInterface) => {
    return (
        <>
            <span className={cx('wrapper')} style={wordStyle}>
                {elem.word}
            </span>
        </>
    )
})

export default Word
