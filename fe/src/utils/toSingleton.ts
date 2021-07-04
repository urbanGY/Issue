import memoize from 'lodash/memoize'

const key = 'MEMOIZE_KEY'

const toSingleton = <T extends (...args: unknown[]) => unknown>(func: T) => {
    return memoize(func, () => key)
}

export default toSingleton
