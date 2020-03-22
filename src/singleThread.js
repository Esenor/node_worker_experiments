import { start as startInspector } from './inspector.js'
import calc from './calc.js'
const inspector = startInspector()
const foo = [...Array(1000000)]

const promised = []

foo.forEach((a, i) => {
  promised.push(calc(i, i))
})

Promise.all(promised).then((results) => {
  console.log(`${results.length} object generated`)
  console.log(`Script done in ${inspector.inspectDuration() / 1000} s`)
  console.log(`Script done heap memory used = ${inspector.inspectMemory()} MB`)
})
