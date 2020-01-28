// const questions =
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function pronounceTheQuestion(question) {
  var msg = new SpeechSynthesisUtterance();
  msg.volume = 1; // 0 to 1
  msg.rate = 1; // 0.1 to 10
  msg.pitch = 1; //0 to 2
  msg.text = question;
  msg.lang = 'fi-FI';
  speechSynthesis.speak(msg);
}

var app = new Vue({
  el: '#app',
  data: {
    questions: [
      ["Mikä sun nimi on?", "What is your name", "", ["chapter 1"]],
      ["Miten se kirjoitetaan?",  "How does it spell", "", ["chapter 1"]],
      ["Mistä maasta sä tulet?", "Where are you from", "", ["chapter 1"]],
      ["Mitä kieliä sä puhut?",  "What languages do you speak", "", ["chapter 1"]],
      ["Miksi sä opiskelet suomea?", "Why do you stadying finnish", "", ["chapter 1"]],
      ["Missä sä asut?",  "Where do you live", "", ["chapter 1"]],
      ["Mikä päivä tänään on?", "What's day is today", "", ["chapter 1"]],
      ["Mistä sinä tykkäät?",  "What do you like", "", ["chapter 1"]],
      ["Missä kuussa on sun syntumäpäiva", "In what month is your birthday?", "", ["chapter 1"]],
      ["Kerro jotain itsestäsi",  "Tell something by yourself", "", ["chapter 1"]],
      ["Millainen perhe sull on?", "What kind of family do you have", "", ["chapter 1"]],
    ],
    current: 0,
    isAnswerShown: false,
    selectedChapters: [1],
  },
  computed: {
    question: function () {
      return this.includedQuestion[this.current][0]
    },
    answer: function () {
      return this.includedQuestion[this.current][1]
    },
    includedQuestion: function () {
      return this.questions
    }
  },
  methods: {
    nextQuestion: function () {
      this.current = this.current + 1 < this.includedQuestion.length ? this.current + 1 : 0
      pronounceTheQuestion(this.includedQuestion[this.current][0])
    },
    prevQuestion: function () {
      this.current = this.current - 1 >= 0 ? this.current - 1 : this.includedQuestion.length - 1
      pronounceTheQuestion(this.includedQuestion[this.current][0])
    },
    randomQuestoin: function () {
      let randomQuestion = getRandomInt(this.includedQuestion.length);
      this.current =  randomQuestion == this.current ? randomQuestion : getRandomInt(this.includedQuestion.length);
      pronounceTheQuestion(this.includedQuestion[this.current][0])
    },
    toggleAnswers: function () {
      this.isAnswerShown = this.isAnswerShown ? false : true;
    },
    vocalizeAnswer: function () {
      pronounceTheQuestion(this.includedQuestion[this.current][1])
    },
    vocalizeQuestion: function () {
      pronounceTheQuestion(this.includedQuestion[this.current][0])
    }
  },
  mounted: function () {
      pronounceTheQuestion(this.includedQuestion[this.current][0])
  }
})
