import {
  getDatabase,
  connectDatabaseEmulator,
  get,
  ref,
  set,
  update,
  remove,
} from 'firebase/database'
import { app } from './firebaseApp'
import triggerAlert from '../components/shared/triggerAlert'

const db = getDatabase(app)

connectDatabaseEmulator(db, 'localhost', 9000)

// ----| GET |----
const getFn = async (url, check) => {
  try {
    const res = await get(ref(db, url))
    if (check) return res.exists()

    return res.exists() && res.val()
  } catch (error) {
    console.log(error)
    triggerAlert(undefined, error)
  }
}
// only for getting all data
// no fn for user since no use case for the same
const getAllDataFn = async (url) => {
  try {
    const res = await get(ref(db, url))

    if (!res.exists()) {
      console.warn('No data present!')
      return
    }
    res.val().forEach((x, i) => {
      if (i !== 0) console.log(x)
    })
  } catch (error) {
    throw new Error(error)
  }
}

// ----| SET |----
const setUserFn = async (data) => {
  try {
    // check for the resource just in case
    const url = 'users/' + data.id
    const exists = await getFn(url, true)
    if (exists) {
      console.warn('Already exists. Create unique id and try again.')
      return
    }

    await set(ref(db, 'users/' + data.id), data)
    console.log('Resource set successfully!')
  } catch (error) {
    throw new Error(error)
  }
}
const setDataFn = async (data) => {
  try {
    // find the count value for id
    let currentCounter = (await get(ref(db, '/count'))).val()
    data.id = ++currentCounter
    await set(ref(db, 'data/' + data.id), data)

    //update counter
    await update(ref(db, '/count'), data.id)
    console.log('Resource set successfully!')
  } catch (error) {
    throw new Error(error)
  }
}

const patchFn = async (url, data) => {
  try {
    // find if resource exists
    const exists = await getFn(url, true)
    if (!exists) {
      console.warn('Resource doesnt exist!')
      return
    }
    await update(ref(db, url), data)
    console.log('Updated successfully')
  } catch (error) {
    throw new Error(error)
  }
}
const deleteFn = async (url) => {
  try {
    // find if resource exists
    const exists = await getFn(url, true)
    if (!exists) {
      console.warn('Resource doesnt exist!')
      return
    }
    await remove(ref(db, url))
    console.log('Resource deleted!')
  } catch (error) {
    throw new Error(error)
  }
}

export { getFn, getAllDataFn, setUserFn, setDataFn, patchFn, deleteFn }
