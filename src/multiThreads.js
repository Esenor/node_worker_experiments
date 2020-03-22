import { start as startInspector } from './inspector.js'
import calc from './calc.js'
import { Worker } from 'worker_threads'
const inspector = startInspector()
const foo = [...Array(10000)]

const promised = []

const startThread = (i) => new Promise((resolve, reject) => {
  const worker = new Worker('./src/worker.js', {
    workerData: {
      a: i,
      b: i
    }
  })
  worker.on('error', (e) => {
    reject(e)
  })
  worker.on('message', (v) => {
    // console.log('MESSAGE', v)
    resolve(v)
  })
  worker.on('exit', (e) => {
    resolve(e)
  })
})

foo.forEach((a, i) => {
  promised.push(startThread(i))
  
})

Promise.all(promised).then((results) => {
  console.log(`${results.length} object generated`)
  console.log(`Script done in ${inspector.inspectDuration() / 1000} s`)
  console.log(`Script done heap memory used = ${inspector.inspectMemory()} MB`)
})
