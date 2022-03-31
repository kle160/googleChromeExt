document.addEventListener('DOMContentLoaded', () => {

  let articleDisplay = 'random';

  let newButton = document.createElement('Button');
  newButton.setAttribute('class','randomize-button');
  newButton.innerText = 'Randomize';
  newButton.addEventListener('click', ()=> {
    
    let allsStories = document.querySelectorAll('.story-container');
    allsStories.forEach(story=>{
      story.remove();
    })
    fetch('https://hacker-news.firebaseio.com/v0/topstories.json?')
    .then((data) => data.json())
    .then((data)=> getStorydata(data, articleDisplay))
    .catch(error => console.log(`Im the error ${error}`));   
  })
  document.body.appendChild(newButton);
  // newLink.setAttribute('href', data.url);
  // newLink.setAttribute('target', "_blank");
  // newLink.innerText = data.title;
 
// code to fetch top stories data from Hackernews api
  fetch('https://hacker-news.firebaseio.com/v0/topstories.json?')
    .then((data) => data.json())
    .then((data)=> getStorydata(data, 'top'))
    .catch(error => console.log(`Im the error ${error}`));

//Showing top 10 stories from the data
  function getStorydata(storyArray, sequence='top') {
    // Iteration through the first 10 elements of the the JSON data

    if (sequence === 'top') {
      
      let promises = [];
      for (let index = 0; index < 10; index++) {

        //Working Code
        const story = storyArray[index];
        fetch(`https://hacker-news.firebaseio.com/v0/item/${story}.json?`)
        .then((data) => data.json())
        .then((data) => populateNews(data, index))
        // .then((data) => console.log(data))
        .catch(error => console.log(`Im the error ${error}`));
        document.querySelector('#header').innerText = 'Hacker News Top 10 Articles';
        newButton.innerText = 'Randomize';
        articleDisplay = 'random';

        //Experimenting Code to Keep Sequence
        // const story = storyArray[index];
        // promises.push(fetch(`https://hacker-news.firebaseio.com/v0/item/${story}.json?`)
        // .then((data) => data.json())
        // .then((data) => populateNews(data, index))
        // // .then((data) => console.log(data))
        // .catch(error => console.log(`Im the error ${error}`)));


      }
      // console.log(promises);
      // Promise.all(promises);
      document.querySelector('#header').innerText = 'Hacker News Top 10 Articles';
      newButton.innerText = 'Randomize';
      articleDisplay = 'random';
    } else { //Randomized 10

      let randomNum; 

      for (let index = 0; index < 10; index++) {
        console.log(randomNum);
        randomNum = Math.floor(Math.random() * 500);

        // console.log(typeof storyArray);
        // console.log(typeof storyArray);
        const story = storyArray[randomNum];
        fetch(`https://hacker-news.firebaseio.com/v0/item/${story}.json?`)
        .then((data) => data.json())
        .then((data) => populateNews(data, index))
        // .then((data) => console.log(data))
        .catch(error => console.log(`Im the error ${error}`));
      }

      // console.log(document.querySelector('header'));
      document.querySelector('#header').innerText = 'Randomized 10 Articles';
      newButton.innerText = 'Top 10';
      articleDisplay = 'top';
    }



  // Where we keep the entirety of the DOM
  function populateNews(data, index) {

    let newDiv = document.createElement('div');
    newDiv.setAttribute('class', 'story-container');

    let newParagraph = document.createElement('p');

    let newLink = document.createElement('a');
    newLink.setAttribute('href', data.url);
    newLink.setAttribute('target', "_blank");
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
    newThreadLink.setAttribute('target', "_blank");
    newThreadLink.innerText = 'Article Thread Discussion';

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



