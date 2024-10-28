import type { PageServerLoad } from './$types'
import { shuffleArray } from '$lib/funcs'
import { uses } from '$lib/data.json'

const { hardware, software } = uses

export const load: PageServerLoad = async () => {
  return {
    hardware: shuffleArray(hardware),
    software: shuffleArray(software),
  }
}
