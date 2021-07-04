import { observer } from 'mobx-react'
import { Issue } from '$types/issue'

interface WordInterface {
    elem: Issue
}

const Word = observer(({ elem }: WordInterface) => {
    console.log(elem.value)
    return <p>{elem.value}</p>
})

export default Word
