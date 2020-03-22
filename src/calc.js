export default function (ca, cb) {
  return new Promise((resolve, reject) => {
    resolve({
      key: `Item n°${ca * cb}`
    })
  })
}
