<script>
    export let name
    export let handleFamilyMeetingCalled
</script>

<h1 on:click={handleFamilyMeetingCalled(name)}>Hello Im the svelte {name}</h1>