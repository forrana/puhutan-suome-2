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
      ["Miten se kirjoitetaan?",  "Se kirjoitetaan ...", "", ["chapter 1"]],
      ["Mistä maasta sä tulet?", "Minä tulen Suomesta", "", ["chapter 1"]],
      ["Mitä kieliä sä puhut?",  "Mä puhin englantia ja tosi vahan suomea", "", ["chapter 1"]],
      ["Miksi sä opiskelet suomea?", "Koska käyn töissä täällä", "", ["chapter 1"]],
      ["Missä sä asut?",  "Mä asun amurilla", "", ["chapter 1"]],
      ["Mikä päivä tänään on?", "Tänään on keskiviikko", "", ["chapter 1"]],
      ["Mistä sinä tykkäät?",  "Mä tykkään kahvista ja jäätelösta", "", ["chapter 1"]],
      ["Missä kuussa on sun syntumäpäiva", "Mun syntymäpäiva on joulukussa", "", ["chapter 1"]],
      ["Kerro jotain itsestäsi",  "Tell something by yourself", "", ["chapter 1"]],
      ["Millainen perhe sull on?", "Mun perhe on pieni.", "", ["chapter 1"]],

      ["Miten menee?", "Ihan hyvin", "", ["chapter 2"]],
      ["Oletko sinä puolalainen?",  "En. Mä olen suomalainen", "", ["chapter 2"]],
      ["Missä kussa on Runenbergin päivä on?", "Runenbergin päivä on 5 helmikussa", "", ["chapter 2"]],
      ["Missä kussa on laskiainen päivä on?", "laskiainen päivä on 23 helmikussa", "", ["chapter 2"]],
      ["Missä kussa on pääsiäinen päivä on?", "pääsiäinen päivä on 12 hyhtikussa", "", ["chapter 2"]],

      ["Mitä talvella voi tehdä ulkona?",  "Talvella voi hihtää ja lasketella ja luistella", "", ["chapter 2"]],
      ["Asutko sä Hervannassa?", "En. Asun Keskussa.", "", ["chapter 2"]],
      ["Tykkäätkö sä lumesta?",  "Joo. Tykkään", "", ["chapter 2"]],
      ["Osaatko luistella?", "En osaa. Osaan lasketella.", "", ["chapter 2"]],
      ["Kerro jotain itsestäsi?",  "Mä tykkään kahvista ja jäätelösta", "", ["chapter 2"]],
      ["Mitä laskiaisena tehdään?", "", "", ["chapter 2"]],

      ["Mitä kello on?", "Kello on puoli viisi", "", ["chapter 3"]],
      ["Onko kello nyt seitsemän?",  "Ei. Kello on puoli kuusi", "", ["chapter 3"]],
      ["Mihin aikaan heräät aamulla?", "Herään aamulla puoli kahdeksan", "", ["chapter 3"]],
      ["Monelta menet nukkumaan?", "Menen nukkumaan kymmenen", "", ["chapter 3"]],
      ["Mitä hiihtolomalla voi tehdä ulkona?", "Voi matkustaa lappin", "", ["chapter 3"]],

      ["Mitä sä syöt tavallisesti aamulla",  "Tavallisesti mä syön aamupalaksi puuroa ja juon kahvia", "", ["chapter 3"]],
      ["Tykkäätkö sä mämmistä?", "Joo, tykkään.", "", ["chapter 3"]],
      ["Oletko sinä maistanut mämmiä?",  "Joo. olen maistanut mämmiä. Se oli hyvää. En ole maistanut mämmistä", "", ["chapter 3"]],
      ["Heräätko sinä kello kuudelta?", "En herää, herään kahdeksalta", "", ["chapter 3"]],
      ["Menetkö töihin kahdeksalta?", "Joo herään", "", ["chapter 3"]],
      ["Mitä sä teet yleensä illalla?", "Yleensä teen ruokka ja käyn baarissa.", "", ["chapter 3"]],

      ["Mitä pääsiäisenä tehdään?",  "Pääsiäisenä syödään pashaa. Palmusunnuntaina lapset virpovat. He kasvattavat reiruohaa.", "", ["chapter 3"]],

      ["Teetkö nyt etätöitä?", "Joo, teen nyt kotona töitä", "", ["chapter 4"]],
      ["Onko kello nyt kaksitoista?",  "Ei. Kello on puoli kuusi", "", ["chapter 4"]],
      ["Nyt on kevät. Millainen sää on Suomessa?", "Kevät on kaunis. Aurinko paistaa. Välillä sataa vettä. On valoisaa. On jo lämmintä. Ei ole pakkasta! Ei ole lunta.", "", ["chapter 4"]],
      ["Monelta nouset aamulla? Entä monelta syöt lounasta", "", "", ["chapter 4"]],
      ["Mitä sä syöt tavallisesti lounaaksi?", "Syön yleensä hernekeittoa ja lohta", "", ["chapter 4"]],

      ["Miten koronavirus vaikutta elämääsi",  "Olen nyt kotona. Teen töitä kotona. En matkusta. Ulkoilen paljon. Nyt voin lukea paljon ja tehdä hyvää ruokaa.Pesen käsiä koko ajan. Käytän käsidesiä", "", ["chapter 4"]],
      ["Oletko sinä maistanut pashaa?", "Joo. olen maistanut pashaa. Se oli hyvää. En pidä pashasta.", "", ["chapter 4"]],
      ["Millainen päiväohjelma sinulla on?",  "Herään kahdeksalta. Käyn suihkussa. Puen päälle. Syön aamupalaa. Teen töitä. Soitan työpuheluita. Meillä on puhelinpalaveri kello 11. Sitten syön lounasta. Yleensä syön pastaa ja salaattia. Teen vielä töitä. Kello viisi menen lenkille. Kuudelta syömme iltaruokaa. Illalla pelaan pelejä, käyn saunassa ja suunnittelen seuraavaa päivää", "", ["chapter 4"]],
      ["Mitä sä teet yleensä lomalla?", "Matkustan paljon. Olen mökillä ja rentoudun. Olen perheen kanssa.", "", ["chapter 4"]],
      ["Mitä luulet, miten kauan korona-kriisi kestää?", "En osaa sanoa. Kolme kuukautta. Yks vuotta.", "", ["chapter 4"]],

      ["Millainen koti sinulla on?", "Minulla on kiva pieni koti. Asun korkeassa kerrostalossa. Se on yksio. Siellä on keittiö ja olohuone", "", ["chapter 5"]],
      ["Mitä sun keittiössä olohuoneessa on?",  "Mun keittiössä on pöytä ja neljä tuolia. Siellä on kahvinkeitin, jääkaappi, uuni,  hella ja pesukone.", "", ["chapter 5"]],
      ["Oletko ollut etätöissä?", "Joo, olen ollut etätöissä. Se on mukava. Tykkään siitä.", "", ["chapter 5"]],
      ["Minne haluaisit matkustaa?", "Haluaisin matkustaa Norjan. Koska tykkään Norjaa.", "", ["chapter 5"]],
      ["Missä taulut/kukat/kirjat/kasvit/tietokone/pyyhkeet/vaatteetovat/on sinun kotona? ?", "(Meillä/minun kotona) kasvit ovatpöydällä/ikkunalaudalla/hyllyssä/parvekkeella. Tietokoneet ovat lattialla tai sohvalla. Kirjat ovat hyllyssä tai keinutuolissa. ", "", ["chapter 5"]],
    ],
    current: 0,
    isAnswerShown: false,
    selectedChapters: [1, 2, 3, 4, 5],
  },
  computed: {
    question: function () {
      return this.includedQuestion.length && this.includedQuestion[this.current][0]
    },
    answer: function () {
      return this.includedQuestion.length && this.includedQuestion[this.current][1]
    },
    includedQuestion: function () {
      let selectedQuestionsArray = [];

      this.selectedChapters.forEach(
        (selectedChapter) => {
          selectedQuestionsArray.push(
            ...this.questions.filter( question => question[3].includes(`chapter ${selectedChapter}`))
          )
        }
      )
      console.log(selectedQuestionsArray)
      return selectedQuestionsArray;
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
    vocalizeQuestion: function () {
      pronounceTheQuestion(this.includedQuestion[this.current][0])
    },
    vocalizeAnswer: function () {
      pronounceTheQuestion(this.includedQuestion[this.current][1])
    },
    resetIndex: function () {
      this.current = 0;
    },
  },
  mounted: function () {
    pronounceTheQuestion(this.includedQuestion[this.current][0])
  }
})
