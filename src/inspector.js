export function start () {
  const startTime = new Date()
  return {
    inspectMemory: () => Math.round((process.memoryUsage().heapUsed / 1024 / 1024) * 100) / 100,
    inspectDuration: () => new Date() - startTime
  }
}
