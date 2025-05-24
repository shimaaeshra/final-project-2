// 5. storage.js

function saveToStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data))
}

function getFromStorage(key) {
  return JSON.parse(localStorage.getItem(key)) || []
}


