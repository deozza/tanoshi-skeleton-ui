import { test, expect } from '@playwright/experimental-ct-svelte';
import DefaultParagraph from './components/DefaultParagraph.svelte';


test('paragraph has class', async ({ mount }) => {
	const component = await mount(DefaultParagraph);

	await expect(component).toContainText('Paragraph');
	// check if the component has at least the class
	await expect(component).toHaveClass(/tanoshi-paragraph/);
	// check if the component has the css color propery set to rgba(26, 29, 35)
	await expect(component).toHaveCSS('color', 'rgb(26, 29, 35)' );
});