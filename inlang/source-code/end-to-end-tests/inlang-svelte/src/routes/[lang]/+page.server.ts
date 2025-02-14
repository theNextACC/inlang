import { initState } from "@inlang/sdk-js/adapter-sveltekit/server"

export const load = () => {
	return { "page.server.ts": 1 }
}

export const entries = async () => {
	const { languages } = await initState(await import("../../../project.inlang.json"))

	return languages.map((language) => ({ lang: language }))
}
