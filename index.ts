// only for vite, tsup
// remember, this is not barrel file.
const moduleMap = {
    before: './src/before.ts',
    clamp: './src/clamp.ts',
    cloneDeep: './src/cloneDeep.ts',
    debounce: './src/debounce.ts',
    eq: './src/eq.ts',
    every: './src/every.ts',
    first: './src/first.ts',
    groupBy: './src/groupBy.ts',
    gt: './src/gt.ts',
    has: './src/has.ts',
    includes: './src/includes.ts',
    isArray: './src/isArray.ts',
    isEmpty: './src/isEmpty.ts',
    isEqual: './src/isEqual.ts',
    isFunction: './src/isFunction.ts',
    isNil: './src/isNil.ts',
    isNull: './src/isNull.ts',
    isNumber: './src/isNumber.ts',
    isObject: './src/isObject.ts',
    isPlainObject: './src/isPlainObject.ts',
    isString: './src/isString.ts',
    isSymbol: './src/isSymbol.ts',
    isUndefined: './src/isUndefined.ts',
    keys: './src/keys.ts',
    last: './src/last.ts',
    mapValues: './src/mapValues.ts',
    memoize: './src/memoize.ts',
    merge: './src/merge.ts',
    omit: './src/omit.ts',
    once: './src/once.ts',
    repeat: './src/repeat.ts',
    shuffle: './src/shuffle.ts',
    size: './src/size.ts',
    sum: './src/sum.ts',
    sumBy: './src/sumBy.ts',
    throttle: './src/throttle.ts',
    toNumber: './src/toNumber.ts',
} as const

export default moduleMap
