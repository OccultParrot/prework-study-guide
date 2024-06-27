// List of topics to study
const topics = ['HTML', 'CSS', 'Git', 'JavaScript'];

function listTopics() {
  for (let x = 0; x < topics.length; x++) {
      console.log(topics[x]);
  }
}

// function selectTopic() {
//   let topicIndex = Math.floor(Math.random() * topics.length);

//   if (topics[topicIndex] === 'HTML') {
//     console.log("Let's study HTML!");
//   } else if (topics[topicIndex] === 'CSS') {
//     console.log("Let's study CSS!");
//   } else if (topics[topicIndex] === 'Git') {
//     console.log("Let's study Git!");
//   } else if (topics[topicIndex] === 'JavaScript') {
//     console.log("Let's study JavaScript!");
//   } else {
//     console.log('Please try again!');
//   }
// }

function selectTopic() {
  const randomTopic = topics[Math.floor(Math.random() * topics.length)];
  console.log("Lets study", randomTopic + "!");
}


console.log("Here are the topics we learned through Prework:")
listTopics();

console.log("Which topic should we study first?")
selectTopic();