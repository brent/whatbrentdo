import type { PageServerLoad } from "../$types";
import { about } from '$lib/data.json'

const { jobs, projects, wbs } = about

export const load: PageServerLoad = () => {
  return {
    jobs: jobs,
    projects: projects,
    wbs: wbs,
  }
}
