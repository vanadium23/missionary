<template>
  <div id="app" class="quiz">
    <h1 class="title">Missionary</h1>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style>
h1, h3 {
  font-family: sans-serif;
}

h2 {
  margin: 0;
  line-height: 0;
  text-align: center;
}

html, body {
  margin: 0;
  width: 100%;
  height: 100%;
  background: gradient(#2A4B87, #274882);
  background: linear-gradient(#2A4B87, #274882);
  background: -moz-linear-gradient(#2A4B87, #274882);
  background: -ms-linear-gradient(#2A4B87, #274882);
  background: -o-linear-gradient(#2A4B87, #274882);
  background-repeat: no-repeat;
}

.quiz {
  width: 55%;
  height: 400px;
  background-color: #ECEEEF;
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 5px;
  transform: translate(-50%, -50%);
  -webkit-box-shadow: 0px 0px 47px 9px rgba(0, 0, 0, 0.08);
  -moz-box-shadow: 0px 0px 47px 9px rgba(0, 0, 0, 0.08);
  box-shadow: 0px 0px 47px 9px rgba(0, 0, 0, 0.08);
}
.quiz h1 {
  text-align: center;
}

.option {
  width: 100%;
  height: 60px;
  background-color: #F4F7F7;
  cursor: pointer;
}
.option div span:nth-child(2) {
  display: inline-block;
}
.option div span:nth-child(2) p {
  margin: 25px 20px;
  font-family: sans-serif;
}
.option span {
  display: inline-block;
}

.letter {
  width: 40px;
  height: 35px;
  background-color: #3498db;
  text-align: center;
  margin: 5px 10px;
  border-radius: 4px;
  padding-bottom: 5px;
}
.letter p {
  color: white;
  font-family: arial;
  font-size: 16pt;
  line-height: 0;
  font-weight: 600;
}

.borderme {
  border-top: solid 0.75pt #DEDEDE;
}

.question {
  width: 100%;
  height: 60px;
  background-color: #DDDDDD;
}
.question h3 {
  padding-top: 16px;
  padding-left: 20px;
  font-size: 12pt;
  color: #1C1C1C;
}

@media screen and (max-width: 400px) {
  .question h3 {
    padding-top: 0px;
  }
}

.button-wrapper {
  width: 20%;
  margin: 0 auto;
  padding-top: 100px;
}

.button {
  background-color: ForestGreen;
  border-radius: 5px;
  color: white;
  padding: 1em;
  text-decoration: none;
}

.button:focus,
.button:hover {
  background-color: DarkGreen;
}

.desc {
  margin: 20px;
}
</style>
