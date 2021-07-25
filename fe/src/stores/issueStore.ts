import { observable } from 'mobx'
import toSingleton from '$utils/toSingleton'

import { Issue } from '$types/issue'
import { getIssueList } from '$services/issue'

export type IssueModel = Readonly<{ ratio: number }> & Issue

const createIssueModel = (elem: Issue, sum: number): IssueModel => {
    return {
        ...elem,
        ratio: Math.ceil((elem.frequency / sum) * 100),
    }
}

const issueListLoader = async () => {
    const list = await getIssueList()
    const sum = list.reduce((acc, elem) => acc + elem.frequency, 0)
    return list.map((elem) => createIssueModel(elem, sum))
}

const createIssueStore = () => {
    const $private = observable({
        issueList: [] as IssueModel[],
    })

    const $public = observable({
        async fetchIssue() {
            $private.issueList = await issueListLoader()
        },
        get issueList() {
            return [...$private.issueList].sort((a, b) => {
                if (a.ratio < b.ratio) {
                    return 1
                }
                if (a.ratio > b.ratio) {
                    return -1
                }
                return 0
            })
        },
    })

    return $public
}

export const getIssueStore = toSingleton(createIssueStore)
