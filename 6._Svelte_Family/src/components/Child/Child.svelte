<script>
    import {supermarket} from "../../stores/supermarket.js"
export let name
export let isGirl = false
export let stereotype = ""
export let handleFamilyMeetingCalled

    function eatCandy() {
        console.log("nom")
        supermarket.update(storeValue => {
            if (storeValue.candy > 0) storeValue.candy--
            return storeValue
        })

    }
</script>

<div
    class:girly={isGirl}
    class={stereotype || "beyond-any-stereotype"}>
    <h3 on:click={handleFamilyMeetingCalled(name)}>Im a child my name is {name}. There are this many pieces of candy reamining: {$supermarket.candy}</h3>

    <button on:click={eatCandy}>Eat candy</button>
</div>

<style>
    .girly {
        background-color: pink;
    }

    .black-sheep {
        background-color: black;
        color: white;
    }

    .bright-kid {
        background-color: yellow;
    }
</style>