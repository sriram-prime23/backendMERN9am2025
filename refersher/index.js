const arr = [1, 2, 3, 4, 5];

// console.log(arr.join(''));
// console.log("code ran successfully");

// function array (){
//     const array = [1, 2, 3, 4, 5];

//     for (let i = 0; i < array.length; i++) {
//         console.log(array[i]);
//     }   
//     if (true){
//         console.log("code ran successfully");
//     }
// }

// array();
// console.log("code ran successfully");




// arr.forEach( (value)=>{
//     console.log(value);
// })

// console.log("code ran successfully");

// let body = document.getElementById('aa');

// let h1 = document.createElement('h1');

// body.appendChild(h1);
// h1.innerHTML = 'Welcome to my MERN stack class!';



// body.appendChild(document.createElement('h1'));
// body.innerHTML = 'Welcome to my MERN stack class!';


//  fetch("https://api.github.com/users/arun-cloud-dev/followers")

//  .then(response => response.json())

//  .then(data => {
//     console.log(data);
//  })
//     .catch(error => {
//         console.error('Error fetching data:', error);
//     });







// let myPromise = new Promise((resolve, reject) => {
//     let success = true;
//     if (success) {
//         resolve("Promise resolved successfully!");
//     }else {
//         reject("Promise rejected ....")
//     }
// })
// myPromise 
// .then(result => {
//     console.log(result);

// })
// .catch(error => {
//     console.error('Error:', error);
// });
//getGithub followers

function getGithubUser(){
    return new Promise((resolve, reject) => {
        fetch("https://api.github.com/users/arun-cloud-dev/followers")

        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {resolve(data)
        })

        .catch(error => {
            reject('Error fetching data: ' + error.message);
        });
    })
}
//use promise 
getGithubUser("")
.then(userData =>{
    console.log('github user data:', userData.login);
    console.log('Public Repos:',
    userData.public_repos);
})
.catch(error => {
    console.error('Error:', error);
})








