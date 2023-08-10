const toTitleCase = (word) => {
  console.log(word)
  const arr = word.split('')
  arr.unshift(arr.shift().toUpperCase())
  return arr.join('')
}

export default toTitleCase
