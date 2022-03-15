import { writable } from "svelte/store"

export const supermarket = writable({
    apples: 60,
    tomatoes: 30,
    milk: 7,
    candy: 20,
})

