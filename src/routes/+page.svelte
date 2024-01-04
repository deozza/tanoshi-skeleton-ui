<script lang="ts">
	import {
		BUTTON_BACKGROUND_THEMES,
		BUTTON_HOVER_BACKGROUND_THEMES,
		DIRECTIONS,
		JUSTIFY_CONTENTS,
		THEMES,
		TanoshiButtonModel,
		TanoshiContainerModel
	} from 'tanoshi-models';
	import '../app.css';
	import TanoshiButton from '$lib/atoms/TanoshiButton.svelte';
	import TanoshiContainer from '$lib/molecules/TanoshiContainer.svelte';

	const tanoshiButtonModel: TanoshiButtonModel = new TanoshiButtonModel()
		.setBackgroundTheme(BUTTON_BACKGROUND_THEMES.Black)
		.setHoverBackgroundTheme(BUTTON_HOVER_BACKGROUND_THEMES.Danger)
		.setIsDisabled(false);

	const tanoshiRowContainerModel: TanoshiContainerModel = new TanoshiContainerModel(
		DIRECTIONS.Row,
		DIRECTIONS.Column
	)
		.setJustifyContent(JUSTIFY_CONTENTS.Between)
		.setBackgroundTheme(THEMES.Primary);

	const tanoshiColContainerModel: TanoshiContainerModel = new TanoshiContainerModel(
		DIRECTIONS.Column,
		DIRECTIONS.Column
	)
		.setJustifyContent(JUSTIFY_CONTENTS.Between)
		.setBackgroundTheme(THEMES.Secondary);
</script>

<h1>Welcome to your library project</h1>
<p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<TanoshiContainer tanoshiContainerModel={tanoshiRowContainerModel}>
	<TanoshiButton {tanoshiButtonModel} on:click={() => console.log('coucou')}>coucou</TanoshiButton>
	<TanoshiButton {tanoshiButtonModel} on:click={() => console.log('coucou')}>coucou</TanoshiButton>
	<TanoshiButton {tanoshiButtonModel} on:click={() => console.log('coucou')}>coucou</TanoshiButton>
</TanoshiContainer>

<TanoshiContainer tanoshiContainerModel={tanoshiColContainerModel} class={'h-full'}>
	<TanoshiButton {tanoshiButtonModel} on:click={() => console.log('coucou')}>coucou</TanoshiButton>
	<TanoshiButton {tanoshiButtonModel} on:click={() => console.log('coucou')}>coucou</TanoshiButton>
	<TanoshiButton {tanoshiButtonModel} on:click={() => console.log('coucou')}>coucou</TanoshiButton>
</TanoshiContainer>

<div class="background-primary">coucou</div>

<style>
	:global(.h-full) {
		height: 300px;
	}

	:global(div.tanoshi-container.background-primary) {
		padding: 0.5rem 1rem /* 8px */;
		box-shadow:
			inset 8px 8px 15px rgba(var(--primary-dark-bg-container, var(--primary-dark))),
			inset -8px -8px 15px rgba(var(--primary-light-bg-container, var(--primary-light)));
	}

	:global(div.background-secondary) {
		background-color: rgba(var(--secondary));
	}
</style>
