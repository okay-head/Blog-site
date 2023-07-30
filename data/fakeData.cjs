const fs = require('fs')
const { faker } = require('@faker-js/faker')
const { format } = require('fecha')

const toTitleCase = word => {
  const arr = word.split('')
  arr.unshift(arr.shift().toUpperCase())
  return arr.join('')
}
const formatDate = date => format(date, 'Do MMMM, YYYY')

const id = 1

const jsonData = {
  data: Array(10).fill(1).map((_,i)=>({
    id:id+i,
    avatar: null,
    author: faker.person.fullName(),
    date: formatDate(
      faker.date.between({
        from: '2020-01-01T00:00:00.000Z',
        to: '2024-01-01T00:00:00.000Z'
      })
    ),
    title:
      toTitleCase(faker.word.words(1)) +
      ' ' +
      faker.word.words({ count: { min: 5, max: 10 } }),
    body: faker.lorem.paragraphs(5),
    tags: [faker.word.noun(), faker.word.noun()],
    hero: null
  })),

  user: Array(5).fill(1).map((_,i)=>({
    user_id: Number(faker.number.int({min:10, max:100})) + i,
    user_displayName: faker.person.fullName(),
    user_email: faker.internet.email(),
    user_passHash: faker.git.commitSha({length:8}),
    user_avatar: null, 
    user_articles: [i+1],
    user_bookmarks:[i+2]
  }))
}
console.log(jsonData);

fs.writeFile('./db.json', JSON.stringify(jsonData), err=>{
  if (err) 
    console.log(err)
    console.log('File written successfully');
})
