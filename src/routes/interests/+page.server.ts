import type { PageServerLoad } from "./$types";
import { interests } from '$lib/data.json'
import { shuffleArray } from "$lib/funcs";

export const load: PageServerLoad = () => {
  return {
    interests: shuffleArray(interests),
  }
}
