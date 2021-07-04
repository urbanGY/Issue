import { rest } from 'msw'
import getIssue from './getIssue'

export const handlers = [
    rest.get('*/getIssueList', (req, res, ctx) => {
        return res(ctx.json(getIssue))
    }),
]
