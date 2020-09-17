export function setDataToLocalStorage(data) {
  localStorage.setItem("labepics", JSON.stringify(data));
}

export function clearLocalStorage() {
  localStorage.removeItem("labepics");
}

export function getDataFromLocalStorage() {
  try {
    return JSON.parse(localStorage.getItem("labepics"));
  } catch (error) {
    return;
  }
}

export function getNickname() {
  try {
    return JSON.parse(localStorage.getItem("labepics")).nickname;
  } catch (error) {
    return;
  }
}

export function getToken() {
  try {
    return JSON.parse(localStorage.getItem("labepics")).token;
  } catch (error) {
    return;
  }
}
