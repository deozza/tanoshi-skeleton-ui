<script lang="ts">
	import '$lib/styles/reset.css';
    import '$lib/styles/text.css';

	import type { TanoshiHeaderModel } from "tanoshi-models";

    export let tanoshiHeaderModel: TanoshiHeaderModel;
</script>


{#if tanoshiHeaderModel.tag === 'h1'}
	<h1
		class="
			text-{tanoshiHeaderModel.fontSize} 
			{tanoshiHeaderModel.fontWeight} 
			text-{tanoshiHeaderModel.textAlignment} 
			{tanoshiHeaderModel.textTransform}
			{tanoshiHeaderModel.textDecoration}
			{$$props.class}
		"
		style="{$$props.style};--label-color: rgba(var(--{tanoshiHeaderModel.textTheme}));"
	>
		<slot />
	</h1>
{:else if tanoshiHeaderModel.tag === 'h2'}
	<h2
		class="
			text-{tanoshiHeaderModel.fontSize} 
			{tanoshiHeaderModel.fontWeight} 
			text-{tanoshiHeaderModel.textAlignment} 
			{tanoshiHeaderModel.textTransform}
			{tanoshiHeaderModel.textDecoration}
			{$$props.class}
		"
		style="{$$props.style};--label-color: rgba(var(--{tanoshiHeaderModel.textTheme}));"
	>
		<slot />
	</h2>
{:else if tanoshiHeaderModel.tag === 'h3'}
	<h3
		class="
			text-{tanoshiHeaderModel.fontSize} 
			{tanoshiHeaderModel.fontWeight} 
			text-{tanoshiHeaderModel.textAlignment} 
			{tanoshiHeaderModel.textTransform}
			{tanoshiHeaderModel.textDecoration}
			{$$props.class}
		"
		style="{$$props.style};--label-color: rgba(var(--{tanoshiHeaderModel.textTheme}));"
	>
		<slot />
	</h3>
{:else if tanoshiHeaderModel.tag === 'h4'}
	<h4
		class="
			text-{tanoshiHeaderModel.fontSize} 
			{tanoshiHeaderModel.fontWeight} 
			text-{tanoshiHeaderModel.textAlignment} 
			{tanoshiHeaderModel.textTransform}
			{tanoshiHeaderModel.textDecoration}
			{$$props.class}
		"
		style="{$$props.style};--label-color: rgba(var(--{tanoshiHeaderModel.textTheme}));"
	>
		<slot />
	</h4>
{:else if tanoshiHeaderModel.tag === 'h5'}
	<h5
		class="
			text-{tanoshiHeaderModel.fontSize} 
			{tanoshiHeaderModel.fontWeight} 
			text-{tanoshiHeaderModel.textAlignment} 
			{tanoshiHeaderModel.textTransform}
			{tanoshiHeaderModel.textDecoration}
			{$$props.class}
		"
		style="{$$props.style};--label-color: rgba(var(--{tanoshiHeaderModel.textTheme}));"
	>
		<slot />
	</h5>
{:else}
	<h6
	class="
			text-{tanoshiHeaderModel.fontSize} 
			{tanoshiHeaderModel.fontWeight} 
			text-{tanoshiHeaderModel.textAlignment} 
			{tanoshiHeaderModel.textTransform}
			{tanoshiHeaderModel.textDecoration}
			{$$props.class}
		"
		style="{$$props.style};--header-color: rgba(var(--{tanoshiHeaderModel.textTheme}));"
	>
		<slot />
	</h6>
{/if}


<style>
    h1, h2, h3, h4, h5, h6 {
		color: var(--header-color);
	}
</style>