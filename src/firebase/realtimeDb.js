import {
  getDatabase,
  connectDatabaseEmulator,
  get,
  ref,
  set,
  update,
  remove,
} from 'firebase/database'

export default function realtimeDb(app) {
  const db = getDatabase(app)

  connectDatabaseEmulator(db, 'localhost', 9000)

  // ----| GET |----
  const getFn = async (url, check) => {
    try {
      const res = await get(ref(db, url))
      if (check) return res.exists()

      console.log(res.exists() && res.val())
    } catch (error) {
      throw new Error(error)
    }
  }

  // ----| SET |----
  const setUserFn = async (data) => {
    try {
      // check for the resource just in case
      const exists = await getFn(ref(db, url), true)
      if (exists)
        console.warn('Already exists. Create unique id and try again.')

      await set(ref(db, 'user/' + data.id), data)
      console.log('Resource set successfully!')
    } catch (error) {
      throw new Error(error)
    }
  }
  const setDataFn = async (data) => {
    try {
      // find the count value for id
      const currentCounter = (await get(ref(db, '/count'))).val()
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
}
