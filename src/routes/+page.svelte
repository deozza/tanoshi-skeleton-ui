<script lang="ts">
    import { FONT_SIZES, FONT_WEIGHTS, PARAGRAPH_THEMES, THEMES, TanoshiButtonModel, TanoshiIconModel, TanoshiParagraphModel } from 'tanoshi-models'
	import TanoshiParagraph from "$lib/atoms/TanoshiParagraph.svelte";
    import '../app.css'
	import TanoshiButton from '$lib/atoms/TanoshiButton.svelte';
	import TanoshiIcon from '$lib/atoms/TanoshiIcon.svelte';


    const tanoshiButtonModel: TanoshiButtonModel = new TanoshiButtonModel()
    tanoshiButtonModel.backgroundTheme = THEMES.Primary;
    tanoshiButtonModel.textTheme = THEMES.White;
    tanoshiButtonModel.borderTheme = THEMES.Primary;
    tanoshiButtonModel.hoverBackgroundTheme = THEMES.Primary;
    tanoshiButtonModel.hoverTextTheme = THEMES.White;
    tanoshiButtonModel.hoverBorderTheme = THEMES.Primary;

    const tanoshiIconModel: TanoshiIconModel = new TanoshiIconModel('mdi:user');
    tanoshiIconModel.theme = THEMES.Danger;
    tanoshiIconModel.width = 48;
    tanoshiIconModel.height = 48;

</script>


<h1>Welcome to your library project</h1>
<p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<TanoshiButton {tanoshiButtonModel} on:click={()=>console.log('coucou')}>
    <TanoshiIcon tanoshiIconModel={tanoshiIconModel} />
    coucou
</TanoshiButton>