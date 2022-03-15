<script>
import Child from "../../components/Child/Child.svelte";
import Parent from "../../components/Parent/Parent.svelte";

import {supermarket} from "../../stores/supermarket.js"

console.log($supermarket)

    const parents = [
        {
            key: 1,
            name: "Adam"
        },
        {
            key: 2,
            name: "Eve"
        }
    ]

    function onFamilyMeetingCalled(name) {
        console.log("family meeting called by", name)
    }

</script>

<h1>Welcome to the home page</h1>
{#each parents as parent (parent.key)}
    <Parent handleFamilyMeetingCalled={onFamilyMeetingCalled} name={parent.name}/>
{/each}

<Child handleFamilyMeetingCalled={onFamilyMeetingCalled} stereotype="black-sheep" name="child1"/>
<Child handleFamilyMeetingCalled={onFamilyMeetingCalled} stereotype="bright-kid" name="child2"/>
<Child handleFamilyMeetingCalled={onFamilyMeetingCalled} stereotype="" name="Emma" isGirl=true/>

<h1>This is the supermarket section</h1>
<p>{JSON.stringify($supermarket, null, 4)}</p>
