<script>
  import Apple from "./Apple.svelte";

  const apples = ["🍏", "🍎", "🍏", "🍏"]

  const pickApple = () => {
    apples.pop();
    apples = apples;
  }
</script>

<h2>🌳</h2>

{#each apples as apple}
  <Apple {apple} />
{/each}

<button on:click={() => pickApple()}>Pick an apple</button>
