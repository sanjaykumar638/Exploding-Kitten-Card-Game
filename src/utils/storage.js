export const setItem = (key, data) =>
  localStorage.setItem(key, JSON.stringify(data))

export const getItem = key => JSON.parse(localStorage.getItem(key))

export const removeItem = key => localStorage.removeItem(key)
