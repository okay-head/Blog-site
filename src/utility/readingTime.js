// calculates word count to further ascertain average reading time

// src https://medium.com/feedium/what-is-read-time-on-medium-com-f88127aa94d5
// 1 minute of reading time = 265 words
// 1 word = 1/256 mins

// also this data is not stored and is calculated at render

const readingTime = (body) => {
  if (body == undefined || body == null) {
    return 2
  }
  const count = Math.ceil(body.split(' ').length / 256)
  return count
}

export default readingTime
