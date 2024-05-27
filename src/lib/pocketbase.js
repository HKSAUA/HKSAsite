
// importing shit for usage with pocketbase
import PocketBase from 'pocketbase';
import { writable } from "svelte/store";


// I don't have an IP yet because I don't wanna pay or deploy yet lol
const url = 'https://hksa-site.pockethost.io/'
export const pb = new PocketBase(url);

// currentUser = null when not logged in, = database record when logged in
export const currentUser = writable(pb.authStore.model);

pb.authStore.onChange((auth) => {
    console.log("authentication changed", auth);
    currentUser.set(pb.authStore.model);
})