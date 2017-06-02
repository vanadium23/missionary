<template>
  <div id="quiz">
    <!-- index is used to check with current question index -->
    <div v-for="(question, index) in quiz.questions">
      <!-- Hide all questions, show only the one with index === to current question index -->
      <div v-show="index === questionIndex">
        <h2>{{ index }} / {{ quiz.questions.length }}</h2>
        <div class="question">
          <h3>{{ question.text }}</h3>
        </div>
        <div class="option borderme" v-for="(response, index) in question.responses">
          <div v-on:click="choose(index)">
            <span class="letter"><p>{{ index }}</p></span>
            <span><p>{{ response.text }}</p></span>
          </div>
        </div>
      </div>
    </div>
    <div v-show="questionIndex === quiz.questions.length">
      <h2>
        Спасибо, что прошли - вот результат: {{ score() }} / {{ quiz.questions.length }}
      </h2>
    </div>
  </div>
</template>

<script>
import missions from '../missions';

const shuffle = () => 0.5 - Math.random();

const companies = missions.map(m => m.company);
const questions = missions.sort(shuffle).map((m) => {
  const answers = companies.filter(c => c !== m.company).sort(shuffle);
  const responses = [{
    text: m.company,
    correct: true,
  }];
  for (let i = 0; i < 3; i += 1) {
    responses.push({
      text: answers[i],
      correct: false,
    });
  }
  return {
    text: m.text,
    responses: responses.sort(shuffle),
  };
}).slice(0, 10);

// generate quiz
const quiz = {
  questions,
};

export default {
  name: 'quiz',
  data() {
    return {
      quiz,
      // Store current question index
      questionIndex: 0,
      // An array initialized with "false" values for each question
      // It means: "did the user answered correctly to the question n?" "no".
      userResponses: [],
    };
  },
  // The view will trigger these methods on click
  methods: {
    // Go to next question
    choose(index) {
      this.userResponses.push(this.quiz.questions[this.questionIndex].responses[index].correct);
      this.questionIndex += 1;
    },
    // Return "true" count in userResponses
    score() {
      const score = this.userResponses.filter(val => val).length;
      this.$ga.event('quiz', 'finish', 'score', score);
      return score;
    },
  },
};
</script>

