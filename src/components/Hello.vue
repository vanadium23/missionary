<template>
  <div>
    <div>
    <p class="desc">
      Большинство из вас наверняка знают игру Brandomania (или Logo Quiz), но помимо логотипов
      у больших компаний есть <a href="https://ru.wikipedia.org/wiki/%D0%9C%D0%B8%D1%81%D1%81%D0%B8%D1%8F_%D0%BE%D1%80%D0%B3%D0%B0%D0%BD%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D0%B8">миссия</a>. Давайте попробуем их отгадать. P.S. только давайте договоримся не подсматривать (;
    </p>
    </div>
    <div class="button-wrapper">
      <router-link to="/quiz" class="button">Начнём?</router-link>
    </div>
  </div>
</template>

<style scoped>
  .desc {
    margin: 20px;
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

</style>
