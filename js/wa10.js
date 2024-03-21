const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const StoryText = "On this cold winter night, :insertx: woke up in :inserty:. He wandered around for a while until he ran into Bob. They continued to walk around together until they saw :insertz:. Together, :insertx: and Bob deafeated it together."
const insertX = ['Finn the Human', 'Jake the Dog', 'BMO']
const insertY = ['the Ice Kingdom', 'the Candy Kingdom', 'Lumpy Space']
const insertZ = ['the Lich', 'a demon lizard made of caramel', 'a rogue vampire']

randomize.addEventListener('click', result);

function result() {
    let newStory = StoryText;
    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);

    newStory = newStory.replaceAll(':insertx:', xItem);
    newStory = newStory.replaceAll(':inserty:', yItem);
    newStory = newStory.replaceAll(':insertz:', zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll('Bob', name);
  }

  if(document.getElementById("uk").checked) {
    const weight = `${Math.round(300*0.0714286)} stone`;
    const temperature = `${Math.round((94-32)*5/9)} centigrade`;
    newStory = newStory.replaceAll ('94 fahrenheit', temperature);
    newStory = newStory.replaceAll('300 pounds', weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}