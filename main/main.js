document.addEventListener('DOMContentLoaded', () => {


  // function populateFeed(data){
  //   const hnFeed = document.querySelector('body');
    
  //   // for (let index = 0; index < 15; index++) {
  //     let newParagraph = document.createElement('p');
  //     const messageObj = data[index];
  //     // chatRoom.innerHTML = data[index].message;
  //     newParagraph.innerHTML = messageObj.message;
  //     hnFeed.appendChild(newParagraph);
  //   }
  // }
  
// code to fetch data from Hackernews api
  fetch('https://hacker-news.firebaseio.com/v0/topstories.json?')
    .then((data) => data.json())
    .then((data)=> getStorydata(data))
        //console.log(data))
        //slice the first ten data points of the API

        //loop through the ten data 
    .catch(error => console.log(`Im the error ${error}`));

//Showing top 10 sories from the data
  function getStorydata(storyArray) {

    // Iteration through the first 10 elements of the the JSON data
    for (let index = 0; index < 10; index++) {
      const story = storyArray[index];
      fetch(`https://hacker-news.firebaseio.com/v0/item/${story}.json?`)
      .then((data) => data.json())
      .then((data) => populateNews(data, index))
      .then((data) => console.log(data))
      .catch(error => console.log(`Im the error ${error}`));
    }

  // Where we keep the entirety of the DOM
  function populateNews(data, index) {
    let newParagraph = document.createElement('p');
    // newParagraph.setAttr
    let newLink = document.createElement('a');
    newLink.setAttribute('href', data.url);
    newLink.innerText = data.title;
    let newButton = document.createElement('button');
    // newButton.setAttribute('onclick', copy);
    newButton.addEventListener('click',() => {
          let url = data.url;
          copy(url);
    });
    


    // <button onclick=copy(newLink)></button>
    // newParagraph.innerText = `${data.title} \n Article Score: ${data.score} \n Comments: ${data.descendants} \n ${data.url}`;
    newParagraph.innerText = `Article Score: ${data.score} \n Comments: ${data.descendants}`;
    // newParagraph.appendChild(newLink);
    // newParagraph.innerHTML = newLink;
    // n
    document.body.appendChild(newLink);
    document.body.appendChild(newButton);
    document.body.appendChild(newParagraph);
    
    return data;    
  }

  // Function to create a copy link option
  function copy(url) {
    console.log(url);
    window.prompt("Copy URL link below: Ctrl+C ", url)
  }


  }
});


















    // https://hacker-news.firebaseio.com/v0/item/30853392.json?

    // https://hacker-news.firebaseio.com/v0/maxitem.json?

    // https://news.ycombinator.com/item?id=30863384
    
    //Top 500 stores -- Array of Story ID Numbers
    // https://hacker-news.firebaseio.com/v0/topstories.json?








// Code to fetch data from entirety of hacker news comments
    // fetch('https://hacker-news.firebaseio.com/v0/item/30853392.json?')
    // .then((data) => data.json())
    // .then((data)=> console.log(data))
    // .catch(error => console.log(`Im the error ${error}`));



