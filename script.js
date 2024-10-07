// array of words
const subjects = ["A playful puppy", "A curious kitten", "A wise old turtle", "A brave little mouse", "A friendly dragon"];
const verbs = ["dances with", "explores", "plays with", "helps", "adventures with"];
const adjectives = ["colorful", "happy", "silly", "sparkly", "friendly"];
const objects = ["a shiny ball", "a rainbow feather", "a magical flower", "a treasure chest", "a cozy blanket"];
const places = ["in the sunny meadow", "by the sparkling river", "in a cozy treehouse", "under the bright stars", "in a beautiful garden"];

//Stores selected words
let selectedSubject = "", selectedVerb = "", selectedAdjective = "", selectedObject = "", selectedPlace = "";
let textToSpeak = "";

// take random word from an array
function getRandomWord(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// Button event listeners
document.getElementById('subjectBtn').addEventListener('click', () => {
    selectedSubject = getRandomWord(subjects);
    updateStory();
});

document.getElementById('verbBtn').addEventListener('click', () => {
    selectedVerb = getRandomWord(verbs);
    updateStory();
});

document.getElementById('adjectiveBtn').addEventListener('click', () => {
    selectedAdjective = getRandomWord(adjectives);
    updateStory();
});

document.getElementById('objectBtn').addEventListener('click', () => {
    selectedObject = getRandomWord(objects);
    updateStory();
});

document.getElementById('placeBtn').addEventListener('click', () => {
    selectedPlace = getRandomWord(places);
    updateStory();
});

//Update the story
function updateStory() {
    const subject = selectedSubject || "___";
    const verb = selectedVerb || "___";
    const adjective = selectedAdjective || "___";
    const object = selectedObject || "___";
    const place = selectedPlace || "___";

    textToSpeak = `${subject} ${verb} a ${adjective} ${object} ${place}.`;
    document.getElementById('story').textContent = textToSpeak;
}

// Speak the story
document.getElementById('speakBtn').addEventListener('click', () => {
    if (textToSpeak.includes("___")) {
        alert("Please complete the story by selecting all parts.");
    } else {
        speakNow(textToSpeak);
    }
});

// story reseter
document.getElementById('resetBtn').addEventListener('click', () => {
    selectedSubject = selectedVerb = selectedAdjective = selectedObject = selectedPlace = "";
    textToSpeak = "";
    document.getElementById('story').textContent = "Your story will appear here.";
});

function speakNow(text) {
    const speech = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(speech);
}
