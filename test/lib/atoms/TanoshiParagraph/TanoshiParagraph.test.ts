
import { render } from '@testing-library/svelte';
import { expect, test } from 'vitest'

import TanoshiParagraph from '../../../../src/lib/atoms/TanoshiParagraph.svelte';
import { PARAGRAPH_THEMES, THEMES, TanoshiParagraphModel } from 'tanoshi-models';
import { describe } from 'node:test';


describe('TanoshiParagraph themes', () => {

	test('should render default values', () => {
		const tanoshiParagraphModel: TanoshiParagraphModel = new TanoshiParagraphModel();
		const { container } = render(TanoshiParagraph, { props: { tanoshiParagraphModel: tanoshiParagraphModel } });

		const paragraphElement = container.querySelector('p');
		expect(paragraphElement).toBeTruthy();
		expect(paragraphElement!.classList.contains('tanoshi-paragraph')).toBeTruthy();
		expect(paragraphElement!.classList.contains('text-theme-black')).toBeTruthy();
		expect(paragraphElement!.classList.contains('font-size-md')).toBeTruthy();
		expect(paragraphElement!.classList.contains('font-weight-regular')).toBeTruthy();
		expect(paragraphElement!.classList.contains('text-align-left')).toBeTruthy();
	});
	
	
	const testCases_globalTheme = [
        { theme: THEMES.Black, expectedClass: 'text-theme-black' },
        { theme: THEMES.White, expectedClass: 'text-theme-white' },
        { theme: THEMES.Primary, expectedClass: 'text-theme-primary' },
        { theme: THEMES.Secondary, expectedClass: 'text-theme-secondary' },
        { theme: THEMES.Success, expectedClass: 'text-theme-success' },
        { theme: THEMES.Warning, expectedClass: 'text-theme-warning' },
        { theme: THEMES.Danger, expectedClass: 'text-theme-danger' },
        { theme: THEMES.Info, expectedClass: 'text-theme-info' },
    ];

    testCases_globalTheme.forEach(({ theme, expectedClass }) => {
        test(`should render global ${theme} theme`, () => {
            const tanoshiParagraphModel: TanoshiParagraphModel = new TanoshiParagraphModel()
                .setTextTheme(theme);
            const { container } = render(TanoshiParagraph, { props: { tanoshiParagraphModel: tanoshiParagraphModel } });

            const paragraphElement = container.querySelector('p');
            expect(paragraphElement).toBeTruthy();
            expect(paragraphElement!.classList.contains(expectedClass)).toBeTruthy();
        });
    });

	const testCases_customTheme = [
        { theme: PARAGRAPH_THEMES.Black, expectedClass: 'text-paragraph-black' },
        { theme: PARAGRAPH_THEMES.White, expectedClass: 'text-paragraph-white' },
        { theme: PARAGRAPH_THEMES.Primary, expectedClass: 'text-paragraph-primary' },
        { theme: PARAGRAPH_THEMES.Secondary, expectedClass: 'text-paragraph-secondary' },
        { theme: PARAGRAPH_THEMES.Success, expectedClass: 'text-paragraph-success' },
        { theme: PARAGRAPH_THEMES.Warning, expectedClass: 'text-paragraph-warning' },
        { theme: PARAGRAPH_THEMES.Danger, expectedClass: 'text-paragraph-danger' },
        { theme: PARAGRAPH_THEMES.Info, expectedClass: 'text-paragraph-info' },
    ];

    testCases_customTheme.forEach(({ theme, expectedClass }) => {
        test(`should render custom ${theme} theme`, () => {
            const tanoshiParagraphModel: TanoshiParagraphModel = new TanoshiParagraphModel()
                .setTextTheme(theme);
            const { container } = render(TanoshiParagraph, { props: { tanoshiParagraphModel: tanoshiParagraphModel } });

            const paragraphElement = container.querySelector('p');
            expect(paragraphElement).toBeTruthy();
            expect(paragraphElement!.classList.contains(expectedClass)).toBeTruthy();
        });
    });
})