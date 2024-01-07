<script lang="ts">
	import {
		BUTTON_BACKGROUND_THEMES,
		BUTTON_HOVER_BACKGROUND_THEMES,
		DIRECTIONS,
		JUSTIFY_CONTENTS,
		PARAGRAPH_TEXT_THEMES,
		THEMES,
		TanoshiButtonModel,
		TanoshiContainerModel,
		TanoshiParagraphModel
	} from 'tanoshi-models';
	import '../app.css';
	import TanoshiButton from '$lib/atoms/TanoshiButton.svelte';
	import TanoshiContainer from '$lib/molecules/TanoshiContainer.svelte';
	import TanoshiParagraph from '$lib/atoms/TanoshiParagraph.svelte';

	const tanoshiParagraphModel: TanoshiParagraphModel = new TanoshiParagraphModel().setTextTheme(
		PARAGRAPH_TEXT_THEMES.Primary
	);

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
