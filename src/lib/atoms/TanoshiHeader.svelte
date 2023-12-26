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
		style="{$$props.style};"
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
		style="{$$props.style};"
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
		style="{$$props.style};"
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
		style="{$$props.style};"
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
		style="{$$props.style};"
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
		style="{$$props.style};"
	>
		<slot />
	</h6>
{/if}


<style>
	h1.black, h2.black, h3.black, h4.black, h5.black, h6.black {
        color: rgba(var(--black));
    }

	h1.header-black, h2.header-black, h3.header-black, h4.header-black, h5.header-black, h6.header-black {
		color: rgba(var(--header-black));
	}

	h1.white, h2.white, h3.white, h4.white, h5.white, h6.white {
		color: rgba(var(--white));
	}

	h1.header-white, h2.header-white, h3.header-white, h4.header-white, h5.header-white, h6.header-white {
		color: rgba(var(--header-white));
	}

	h1.primary, h2.primary, h3.primary, h4.primary, h5.primary, h6.primary {
		color: rgba(var(--primary));
	}

	h1.header-primary, h2.header-primary, h3.header-primary, h4.header-primary, h5.header-primary, h6.header-primary {
		color: rgba(var(--header-primary));
	}

	h1.secondary, h2.secondary, h3.secondary, h4.secondary, h5.secondary, h6.secondary {
		color: rgba(var(--secondary));
	}

	h1.header-secondary, h2.header-secondary, h3.header-secondary, h4.header-secondary, h5.header-secondary, h6.header-secondary {
		color: rgba(var(--header-secondary));
	}

	h1.success, h2.success, h3.success, h4.success, h5.success, h6.success {
		color: rgba(var(--success));
	}

	h1.header-success, h2.header-success, h3.header-success, h4.header-success, h5.header-success, h6.header-success {
		color: rgba(var(--header-success));
	}

	h1.danger, h2.danger, h3.danger, h4.danger, h5.danger, h6.danger {
		color: rgba(var(--danger));
	}

	h1.header-danger, h2.header-danger, h3.header-danger, h4.header-danger, h5.header-danger, h6.header-danger {
		color: rgba(var(--header-danger));
	}

	h1.warning, h2.warning, h3.warning, h4.warning, h5.warning, h6.warning {
		color: rgba(var(--warning));
	}

	h1.header-warning, h2.header-warning, h3.header-warning, h4.header-warning, h5.header-warning, h6.header-warning {
		color: rgba(var(--header-warning));
	}

	h1.info, h2.info, h3.info, h4.info, h5.info, h6.info {
		color: rgba(var(--info));
	}

	h1.header-info, h2.header-info, h3.header-info, h4.header-info, h5.header-info, h6.header-info {
		color: rgba(var(--header-info));
	}
</style>