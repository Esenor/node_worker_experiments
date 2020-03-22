import { workerData, parentPort } from 'worker_threads'
import calc from './calc.js'
const promise = calc(workerData.a, workerData.b)
promise.then((v) => {
  parentPort.postMessage(v)
})
