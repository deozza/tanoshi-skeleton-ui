
import { render } from '@testing-library/svelte';
import { expect, test } from 'vitest'

import TanoshiParagraph from '../../../../src/lib/atoms/TanoshiParagraph.svelte';
import { PARAGRAPH_TEXT_THEMES, THEMES, TanoshiParagraphModel } from 'tanoshi-models';
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
        { theme: PARAGRAPH_TEXT_THEMES.Black, expectedClass: 'text-theme-paragraph-text-black' },
        { theme: PARAGRAPH_TEXT_THEMES.White, expectedClass: 'text-theme-paragraph-text-white' },
        { theme: PARAGRAPH_TEXT_THEMES.Primary, expectedClass: 'text-theme-paragraph-text-primary' },
        { theme: PARAGRAPH_TEXT_THEMES.Secondary, expectedClass: 'text-theme-paragraph-text-secondary' },
        { theme: PARAGRAPH_TEXT_THEMES.Success, expectedClass: 'text-theme-paragraph-text-success' },
        { theme: PARAGRAPH_TEXT_THEMES.Warning, expectedClass: 'text-theme-paragraph-text-warning' },
        { theme: PARAGRAPH_TEXT_THEMES.Danger, expectedClass: 'text-theme-paragraph-text-danger' },
        { theme: PARAGRAPH_TEXT_THEMES.Info, expectedClass: 'text-theme-paragraph-text-info' },
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