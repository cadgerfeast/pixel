import { definePlaygroundNode } from '@slithe/playground/node';

export const playground = definePlaygroundNode({
	nav: () => {
		return [
      {
				text: 'Guide',
				link: '/guide/getting-started',
				activeMatch: '/guide/'
			},
			{
				text: 'Links',
				items: [
					{
						text: 'Contributing',
						link: 'https://github.com/cadgerfeast/pixel/blob/main/CONTRIBUTING.md'
					},
					{
						text: 'Changelog',
						link: 'https://github.com/cadgerfeast/pixel/blob/main/CHANGELOG.md'
					}
				]
			}
		];
	},
	socialLinks: () => {
		return [
			{ icon: 'github', link: 'https://github.com/cadgerfeast/pixel' }
		];
	},
	sidebar: (defaultSidebar) => {
		defaultSidebar['/guide/'] = [
      {
				text: 'Introduction',
				collapsed: false,
				items: [
					{ text: 'Getting Started', link: '/guide/getting-started' }
				]
			},
			...defaultSidebar['/guide/'].map((item) => {
				if (item.text === 'Components') {
					item.items = item.items?.filter(({ text }) => text && ['Button', 'Icon'].includes(text));
				}
				return item;
			})
		];
		return defaultSidebar;
	}
});
