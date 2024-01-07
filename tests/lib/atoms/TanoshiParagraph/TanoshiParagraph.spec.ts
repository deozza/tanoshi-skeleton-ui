import { test, expect } from '@playwright/experimental-ct-svelte';
import { describe } from 'node:test';
import DefaultParagraph from './components/DefaultParagraph.svelte';

describe('paragraph customization', () => {
	const testCases_globalTheme_parameters = [
		'black',
		'white',
		'primary',
		'secondary',
		'success',
		'danger',
		'warning',
		'info'
	];
	const testCases_globalTheme_expectedRgbValues = [
		'rgb(0, 0, 0)',
		'rgb(255, 255, 255)',
		'rgb(0, 123, 255)',
		'rgb(108, 117, 125)',
		'rgb(40, 167, 69)',
		'rgb(220, 53, 69)',
		'rgb(255, 193, 7)',
		'rgb(23, 162, 184)'
	];

	testCases_globalTheme_parameters.forEach((theme, index) => {
		test(`paragraph with global ${theme} theme`, async ({ mount }) => {
			const component = await mount(DefaultParagraph, { props: { theme } });

			await expect(component).toHaveClass(/tanoshi-paragraph/);
			await expect(component).toHaveCSS('color', testCases_globalTheme_expectedRgbValues[index]);
		});
	});

	const testCases_customTheme_parameters = [
		'paragraph-text-black',
		'paragraph-text-white',
		'paragraph-text-primary',
		'paragraph-text-secondary',
		'paragraph-text-success',
		'paragraph-text-danger',
		'paragraph-text-warning',
		'paragraph-text-info'
	];
	const testCases_customTheme_expectedRgbValues = [
		'rgb(25, 25, 25)',
		'rgb(250, 250, 250)',
		'rgb(10, 123, 255)',
		'rgb(118, 117, 125)',
		'rgb(50, 167, 69)',
		'rgb(230, 53, 69)',
		'rgb(155, 193, 7)',
		'rgb(33, 162, 184)'
	];

	testCases_customTheme_parameters.forEach((theme, index) => {
		test(`paragraph with custom ${theme} theme`, async ({ mount }) => {
			const component = await mount(DefaultParagraph, { props: { theme } });

			await expect(component).toHaveCSS('color', testCases_customTheme_expectedRgbValues[index]);
		});
	});

	// const testCases_fontSize_parameters = ['sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl'];
	// const testCases_fontSize_expectedFontSizeValues = ['0.875rem', '1rem', '1.125rem', '1.25rem', '1.5rem', '1.875rem', '2.25rem', '3rem', '3.75rem'];
	// const testCases_fontSize_expectedLineHeightValues = ['1.25rem', '1.5rem', '1.75rem', '1.75rem', '2rem', '2.25rem', '2.5rem', '1', '1'];

	// testCases_fontSize_parameters.forEach((fontSize, index) => {
	// 	test(`paragraph with font size ${fontSize}`, async ({ mount }) => {

	// 		const component = await mount(DefaultParagraph, { props: { fontSize } });

	// 		await expect(component).toHaveCSS('font-size', testCases_fontSize_expectedFontSizeValues[index] );
	// 		await expect(component).toHaveCSS('line-height', testCases_fontSize_expectedLineHeightValues[index] );
	// 	});
	// });

	const testCases_fontWeight_parameters = [
		'extralight',
		'light',
		'regular',
		'medium',
		'bold',
		'extrabold'
	];
	const testCases_fontWeight_expectedFontWeightValues = ['200', '300', '400', '500', '600', '700'];

	testCases_fontWeight_parameters.forEach((fontWeight, index) => {
		test(`paragraph with font weight ${fontWeight}`, async ({ mount }) => {
			const component = await mount(DefaultParagraph, { props: { fontWeight } });

			await expect(component).toHaveCSS(
				'font-weight',
				testCases_fontWeight_expectedFontWeightValues[index]
			);
		});
	});

	const testCases_textAlignment_parameters = ['left', 'center', 'right', 'justify'];
	const testCases_textAlignment_expectedTextAlignValues = ['left', 'center', 'right', 'justify'];

	testCases_textAlignment_parameters.forEach((textAlign, index) => {
		test(`paragraph with text alignment ${textAlign}`, async ({ mount }) => {
			const component = await mount(DefaultParagraph, { props: { textAlign } });

			await expect(component).toHaveCSS(
				'text-align',
				testCases_textAlignment_expectedTextAlignValues[index]
			);
		});
	});

	const testCases_textTransform_parameters = ['uppercase', 'lowercase', 'capitalize'];
	const testCases_textTransform_expectedTextTransformValues = [
		'uppercase',
		'lowercase',
		'capitalize'
	];

	testCases_textTransform_parameters.forEach((textTransform, index) => {
		test(`paragraph with text transform ${textTransform}`, async ({ mount }) => {
			const component = await mount(DefaultParagraph, { props: { textTransform } });

			await expect(component).toHaveCSS(
				'text-transform',
				testCases_textTransform_expectedTextTransformValues[index]
			);
		});
	});

	const testCases_textDecoration_parameters = ['underline', 'line-through', 'no-underline'];
	const testCases_textDecoration_expectedTextDecorationValues = [
		'underline',
		'line-through',
		'no-underline'
	];

	testCases_textDecoration_parameters.forEach((textDecoration, index) => {
		test(`paragraph with text decoration ${textDecoration}`, async ({ mount }) => {
			const component = await mount(DefaultParagraph, { props: { textDecoration } });

			await expect(component).toHaveCSS(
				'text-decoration',
				testCases_textDecoration_expectedTextDecorationValues[index]
			);
		});
	});
});
