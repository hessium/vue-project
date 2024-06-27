<template>
  <section>
    <div class="container">
      <div class="content">
        <h2 class="text-shadows">404</h2>
      </div>
      <p>Странициа не найдена </p>
      <p>Перейдите на <RouterLink  to="/home">На главную</RouterLink></p>
    </div>
  </section>
</template>

<script setup>

</script>

<style scoped>

p {
  font-size: 20px;
  padding-bottom: 20px;
}
a  {
  text-decoration: underline;
  color: var(--color-prime);
  cursor: pointer;
}

.content {
  display: flex;
  align-content: center;
  justify-content: center;
}

.text-shadows {
  text-shadow: 3px 3px 0 var(--color-secondary), 6px 6px 0 var(--color-tertiary),
  9px 9px var(--color-quaternary), 12px 12px 0 var(--color-quinary);
  font-family: bungee, sans-serif;
  font-weight: 400;
  text-transform: uppercase;
  font-size: calc(2rem + 5vw);
  text-align: center;
  margin: 0;
  color: var(--color-prime);
  animation: shadows 2s ease-in infinite;
  letter-spacing: 0.4rem;

}

@keyframes shadows {
  0% {
    text-shadow: none;
  }
  10% {
    transform: translate(-3px, -3px);
    text-shadow: 3px 3px 0 var(--color-secondary);
  }
  20% {
    transform: translate(-6px, -6px);
    text-shadow: 3px 3px 0 var(--color-secondary),
    6px 6px 0 var(--color-tertiary);
  }
  30% {
    transform: translate(-9px, -9px);
    text-shadow: 3px 3px 0 var(--color-secondary),
    6px 6px 0 var(--color-tertiary), 9px 9px var(--color-quaternary);
  }
  40% {
    transform: translate(-12px, -12px);
    text-shadow: 3px 3px 0 var(--color-secondary),
    6px 6px 0 var(--color-tertiary), 9px 9px var(--color-quaternary),
    12px 12px 0 var(--color-quinary);
  }
  50% {
    transform: translate(-12px, -12px);
    text-shadow: 3px 3px 0 var(--color-secondary),
    6px 6px 0 var(--color-tertiary), 9px 9px var(--color-quaternary),
    12px 12px 0 var(--color-quinary);
  }
  60% {
    text-shadow: 3px 3px 0 var(--color-secondary),
    6px 6px 0 var(--color-tertiary), 9px 9px var(--color-quaternary),
    12px 12px 0 var(--color-quinary);
  }
  70% {
    text-shadow: 3px 3px 0 var(--color-secondary),
    6px 6px 0 var(--color-tertiary), 9px 9px var(--color-quaternary);
  }
  80% {
    text-shadow: 3px 3px 0 var(--color-secondary),
    6px 6px 0 var(--color-tertiary);
  }
  90% {
    text-shadow: 3px 3px 0 var(--color-secondary);
  }
  100% {
    text-shadow: none;
  }
}

@media (max-width: 920px) {
  .text-shadows {
    font-size: 90px;
  }
}
</style>