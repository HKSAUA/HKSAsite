import { currentUser, pb } from "$lib/pocketbase.js";

export async function load() {
    return {
        post: await pb.collection('executives').getList(1,50)
    }
}