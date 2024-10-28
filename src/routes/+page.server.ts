import type { PageServerLoad } from './$types'
import { about, now, interests, uses } from '$lib/data.json'
import { shuffleArray } from '$lib/funcs'

export const load: PageServerLoad = () => {
  return {
    about: about,
    now: now,
    interests: shuffleArray(interests),
    uses: {
      hardware: shuffleArray(uses.hardware),
      software: shuffleArray(uses.software),
    },
  }
}
