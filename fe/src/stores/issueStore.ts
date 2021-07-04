import { observable } from 'mobx'
import toSingleton from '$utils/toSingleton'

import { Issue } from '$types/issue'
import { getIssueList } from '$services/issue'

const createIssueStore = () => {
    const $private = observable({
        issueList: [] as Issue[],
    })

    const $public = observable({
        async fetchIssue() {
            $private.issueList = await getIssueList()
        },
        get issueList() {
            return $private.issueList
        },
    })

    return $public
}

export const getIssueStore = toSingleton(createIssueStore)
