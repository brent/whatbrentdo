import type { PageServerLoad } from './$types'
import { now } from '$lib/data.json'

const { updated, projects, reading, playing, watching } = now

export const load: PageServerLoad = async () => {
  return {
    updated: updated,
    projects: projects,
    reading: reading,
    playing: playing,
    watching: watching,
  }
}
