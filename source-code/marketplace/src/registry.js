export const registry = [
	{
		id: "inlang.app.webEditor",
		displayName: {
			en: "Web Editor",
		},
		description: {
			en: "The inlang web editor is a simple and easy-to-use no-code tool to manage your translations.",
		},
		marketplace: {
			icon: "https://inlang.com/favicon/safari-pinned-tab.svg",
			linkToReadme: {
				en: "https://inlang.com/editor",
			},
			keywords: ["web", "editor", "no-code"],
			publisherName: "@inlang",
			publisherIcon: "https://inlang.com/favicon/safari-pinned-tab.svg",
		},
	},
	{
		id: "inlang.app.cli",
		displayName: {
			en: "CLI",
		},
		description: {
			en: "@inlang/cli is a command line interface (CLI) tool that allows you to interact with the Inlang infrastructure.",
		},
		marketplace: {
			icon: "https://inlang.com/favicon/safari-pinned-tab.svg",
			linkToReadme: {
				en: "https://github.com/inlang/inlang/tree/main/source-code/cli",
			},
			keywords: ["cli", "automation"],
			publisherName: "@inlang",
			publisherIcon: "https://inlang.com/favicon/safari-pinned-tab.svg",
		},
	},
	{
		id: "inlang.app.ideExtension",
		displayName: {
			en: "IDE Extension",
		},
		description: {
			en: "The VS Code extension provides seamless integration of Inlang's globalization infrastructure into Visual Studio Code.",
		},
		marketplace: {
			icon: "https://inlang.com/favicon/safari-pinned-tab.svg",
			linkToReadme: {
				en: "https://marketplace.visualstudio.com/items?itemName=inlang.vs-code-extension",
			},
			keywords: ["web", "editor", "no-code"],
			publisherName: "@inlang",
			publisherIcon: "https://inlang.com/favicon/safari-pinned-tab.svg",
		},
	},
	{
		id: "inlang.app.badge",
		displayName: {
			en: "Badge",
		},
		description: {
			en: "Create a badge to show how many translations are missing in your project.",
		},
		marketplace: {
			icon: "https://inlang.com/favicon/safari-pinned-tab.svg",
			linkToReadme: {
				en: "#",
			},
			keywords: ["badge", "embed"],
			publisherName: "@inlang",
			publisherIcon: "https://inlang.com/favicon/safari-pinned-tab.svg",
		},
	},
	{
		id: "inlang.plugin.json",
		displayName: {
			en: "Plugin JSON",
		},
		description: {
			en: "JSON plugin for inlang",
		},
		marketplace: {
			icon: "https://github.com/inlang/inlang/blob/main/source-code/plugins/json/assets/icon.png?raw=true",
			linkToReadme: {
				en: "https://github.com/inlang/inlang/tree/main/source-code/plugins/json",
			},
			keywords: ["json", "generic"],
			publisherName: "@inlang",
			publisherIcon: "https://inlang.com/favicon/safari-pinned-tab.svg",
		},
	},
	{
		id: "inlang.plugin.i18next",
		displayName: {
			en: "i18next",
		},
		description: {
			en: "i18next plugin for inlang",
		},
		marketplace: {
			icon: "https://github.com/inlang/inlang/blob/main/source-code/plugins/i18next/assets/icon.png?raw=true",
			linkToReadme: {
				en: "https://github.com/inlang/inlang/tree/main/source-code/plugins/i18next",
			},
			keywords: ["i18next", "react", "nextjs"],
			publisherName: "@inlang",
			publisherIcon: "https://inlang.com/favicon/safari-pinned-tab.svg",
		},
	},
	{
		id: "inlang.lintRule.identicalPattern",
		displayName: {
			en: "Identical Pattern",
		},
		description: {
			en: "\nChecks for identical patterns in different languages.\n\nA message with identical wording in multiple languages can indicate\nthat the translations are redundant or can be combined into a single\nmessage to reduce translation effort.\n",
		},
		marketplace: {
			icon: "https://raw.githubusercontent.com/inlang/inlang/main/source-code/plugins/standard-lint-rules/assets/icon.png",
			linkToReadme: {
				en: "https://github.com/inlang/inlang/tree/main/source-code/plugins/standard-lint-rules",
			},
			keywords: ["lint-rule", "standard", "identical-pattern"],
			publisherName: "@inlang",
			publisherIcon: "https://inlang.com/favicon/safari-pinned-tab.svg",
		},
	},
	{
		id: "inlang.lintRule.messageWithoutSource",
		displayName: {
			en: "Message Without Source",
		},
		description: {
			en: "\nChecks for likely outdated messages.\n\nA message with a missing source is usually an indication that\nthe message (id) is no longer used in source code, but messages\nhave not been updated accordingly.\n",
		},
		marketplace: {
			icon: "https://raw.githubusercontent.com/inlang/inlang/main/source-code/plugins/standard-lint-rules/assets/icon.png",
			linkToReadme: {
				en: "https://github.com/inlang/inlang/tree/main/source-code/plugins/standard-lint-rules",
			},
			keywords: ["lint-rule", "standard", "message-without-source"],
			publisherName: "@inlang",
			publisherIcon: "https://inlang.com/favicon/safari-pinned-tab.svg",
		},
	},
	{
		id: "inlang.lintRule.missingMessage",
		displayName: {
			en: "Missing Message",
		},
		description: {
			en: "\nChecks for missing messages in a language tag.\n\nIf a message exists in the reference resource but is missing\nin a target resource, it is likely that the message has not\nbeen translated yet.\n",
		},
		marketplace: {
			icon: "https://raw.githubusercontent.com/inlang/inlang/main/source-code/plugins/standard-lint-rules/assets/icon.png",
			linkToReadme: {
				en: "https://github.com/inlang/inlang/tree/main/source-code/plugins/standard-lint-rules",
			},
			keywords: ["lint-rule", "standard", "missing-message"],
			publisherName: "@inlang",
			publisherIcon: "https://inlang.com/favicon/safari-pinned-tab.svg",
		},
	},
]
