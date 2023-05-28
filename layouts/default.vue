<!-- /layouts はルート直下にする -->
<template>
  <div class="wrapper">
    <header>
      <nav>ここにナビゲーションバーを入れる</nav>
    </header>
    <main>
      <slot />
    </main>
    <footer>
      <p>ここにフッターを入れる</p>
    </footer>
  </div>
</template>

<style lang="scss">
.wrapper {
  display: grid;
  background-color: orange;
  grid-template-areas: "header" "main" "footer";
  grid-template-rows: 80px 1fr 60px;
  min-height: 100vh;
  min-height: 100dvh;
}
header {
  background-color: teal;
  grid-area: header;
}

main {
  background-color: whitesmoke;
  grid-area: main;
}

footer {
  background-color: orange;
  grid-area: footer;
}
</style>
