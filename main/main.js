document.addEventListener('DOMContentLoaded', () => {
 
// code to fetch top stories data from Hackernews api
  fetch('https://hacker-news.firebaseio.com/v0/topstories.json?')
    .then((data) => data.json())
    .then((data)=> getStorydata(data))
    .catch(error => console.log(`Im the error ${error}`));

//Showing top 10 sories from the data
  function getStorydata(storyArray) {
    // Iteration through the first 10 elements of the the JSON data
    for (let index = 0; index < 10; index++) {
      const story = storyArray[index];
      fetch(`https://hacker-news.firebaseio.com/v0/item/${story}.json?`)
      .then((data) => data.json())
      .then((data) => populateNews(data, index))
      // .then((data) => console.log(data))
      .catch(error => console.log(`Im the error ${error}`));
    }

  // Where we keep the entirety of the DOM
  function populateNews(data, index) {

    let newDiv = document.createElement('div');
    newDiv.setAttribute('class', 'story-container');

    let newParagraph = document.createElement('p');

    let newLink = document.createElement('a');
    newLink.setAttribute('href', data.url);
    newLink.innerText = data.title;

    let newButton = document.createElement('button');
    newButton.addEventListener('click', () => {
      let url = data.url;
      copy(url);
      });

    let storyId = data.id;
    let storyThread = `https://news.ycombinator.com/item?id=${storyId}`;
    
    let newThreadLink = document.createElement('a');
    newThreadLink.setAttribute('href', storyThread);
    newThreadLink.innerText = 'HN Discussion Link';

    newParagraph.innerText = `Article Score: ${data.score} \n Comments: ${data.descendants}`;

    document.body.appendChild(newDiv);
    newDiv.appendChild(newLink);
    newDiv.appendChild(newButton);
    newDiv.appendChild(newParagraph);
    newDiv.appendChild(newThreadLink);
   
    return data;    
  }

  // Function to create a copy link option
  function copy(url) {
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



