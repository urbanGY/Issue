import { api } from '$utils/api'
import { Issue } from '$types/issue'

export const getIssueList = async () => {
    const result = await api.get<Issue[]>('/getIssueList')

    return result
}
