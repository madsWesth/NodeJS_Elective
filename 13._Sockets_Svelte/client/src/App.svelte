<script>
import { onMount } from "svelte";
import Colors from "./Pages/Colors.svelte";

import UserRegistration from "./Pages/UserRegistration.svelte";

	let username
	const fetchUser = async () => {
		const response = await fetch("/api/fetchUser")
		const parsedData = await response.json()
		username = parsedData.data
	}

	onMount(fetchUser)

</script>

<main>
	{#if username}
	<Colors/>
	{:else}
	<UserRegistration/>
	{/if}
</main>

<style>

</style>