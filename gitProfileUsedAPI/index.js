/*const requestUrl = "https://api.github.com/users/kamrul17";
const xhr = new XMLHttpRequest();
xhr.open("GET", requestUrl);
xhr.onreadystatechange = function () {
  console.log(xhr.readyState);
  if (xhr.readyState === 4) {
    const data = JSON.parse(this.responseText);
    console.log(typeof data);

    console.log(data.avatar_url);
    console.log(data.login);
    console.log(data.followers);
  }
};
xhr.send();*/

// const requestUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/hello";
// const xhr = new XMLHttpRequest();
// xhr.open("GET", requestUrl);
// xhr.onreadystatechange = function () {
//   console.log(xhr.readyState);
//   if (xhr.readyState === 4) {
//     const data = JSON.parse(this.responseText);
//     console.log(typeof data);
//     console.log(data[0].word);
//     console.log(data[0].meanings);
//   }
// };
// xhr.send();
const requestUrl = "https://api.github.com/users/kamrul17";
const xhr = new XMLHttpRequest();
xhr.open("GET", requestUrl);
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    const data = JSON.parse(this.responseText);

    // Get the container divs
    const avatarContainer = document.getElementById("avatarContainer");
    const loginContainer = document.getElementById("loginContainer");
    const followersContainer = document.getElementById("followersContainer");

    // Update the content of the container divs
    avatarContainer.innerHTML = `<img src="${data.avatar_url}" alt="User Avatar" width="100">`;
    loginContainer.textContent = `Name: ${data.login}`;
    followersContainer.textContent = `Followers: ${data.followers}`;
  }
};
xhr.send();
