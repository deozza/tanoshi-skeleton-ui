<script lang="ts">
    import '$lib/styles/reset.css';

	import type { TanoshiButtonModel } from "tanoshi-models";

	export let tanoshiButtonModel: TanoshiButtonModel;
</script>

<button
	class=" 
	btn-{tanoshiButtonModel.backgroundTheme}
	btn-text-{tanoshiButtonModel.textTheme}
	btn-border-{tanoshiButtonModel.borderTheme}
	btn-hover-{tanoshiButtonModel.hoverBackgroundTheme}
	btn-text-hover-{tanoshiButtonModel.hoverTextTheme}
	btn-border-hover-{tanoshiButtonModel.hoverBorderTheme}
	"
	disabled={tanoshiButtonModel.isDisabled}
	on:click
	type={tanoshiButtonModel.type}
>

	<slot />
	
</button>

<style>

	button {
		border-width: 1px;
		transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-duration: 150ms;
		transition-duration: 300ms;	
		cursor: pointer;
		display: flex;
		align-items: center;
	}

    button:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

	button:hover:not([disabled]){
		cursor: pointer;
	}

</style>