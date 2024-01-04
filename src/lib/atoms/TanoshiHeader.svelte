<script lang="ts">
	import '../styles/reset.css';
	import '../styles/text.css';

	import type { TanoshiHeaderModel } from 'tanoshi-models';

	export let tanoshiHeaderModel: TanoshiHeaderModel;
</script>

{#if tanoshiHeaderModel.tag === 'h1'}
	<h1 class="{tanoshiHeaderModel.getClasses()} {$$props.class}" style="{$$props.style};">
		<slot />
	</h1>
{:else if tanoshiHeaderModel.tag === 'h2'}
	<h2 class="{tanoshiHeaderModel.getClasses()} {$$props.class}" style="{$$props.style};">
		<slot />
	</h2>
{:else if tanoshiHeaderModel.tag === 'h3'}
	<h3 class="{tanoshiHeaderModel.getClasses()} {$$props.class}" style="{$$props.style};">
		<slot />
	</h3>
{:else if tanoshiHeaderModel.tag === 'h4'}
	<h4 class="{tanoshiHeaderModel.getClasses()} {$$props.class}" style="{$$props.style};">
		<slot />
	</h4>
{:else if tanoshiHeaderModel.tag === 'h5'}
	<h5 class="{tanoshiHeaderModel.getClasses()} {$$props.class}" style="{$$props.style};">
		<slot />
	</h5>
{:else}
	<h6 class="{tanoshiHeaderModel.getClasses()} {$$props.class}" style="{$$props.style};">
		<slot />
	</h6>
{/if}

<style>
	h1.tanoshi-header.text-header-black,
	h2.tanoshi-header.text-header-black,
	h3.tanoshi-header.text-header-black,
	h4.tanoshi-header.text-header-black,
	h5.tanoshi-header.text-header-black,
	h6.tanoshi-header.text-header-black {
		color: rgba(var(--header-black));
	}

	h1.tanoshi-header.text-header-white,
	h2.tanoshi-header.text-header-white,
	h3.tanoshi-header.text-header-white,
	h4.tanoshi-header.text-header-white,
	h5.tanoshi-header.text-header-white,
	h6.tanoshi-header.text-header-white {
		color: rgba(var(--header-white));
	}

	h1.tanoshi-header.text-header-primary,
	h2.tanoshi-header.text-header-primary,
	h3.tanoshi-header.text-header-primary,
	h4.tanoshi-header.text-header-primary,
	h5.tanoshi-header.text-header-primary,
	h6.tanoshi-header.text-header-primary {
		color: rgba(var(--header-primary));
	}

	h1.tanoshi-header.text-header-secondary,
	h2.tanoshi-header.text-header-secondary,
	h3.tanoshi-header.text-header-secondary,
	h4.tanoshi-header.text-header-secondary,
	h5.tanoshi-header.text-header-secondary,
	h6.tanoshi-header.text-header-secondary {
		color: rgba(var(--header-secondary));
	}

	h1.tanoshi-header.text-header-success,
	h2.tanoshi-header.text-header-success,
	h3.tanoshi-header.text-header-success,
	h4.tanoshi-header.text-header-success,
	h5.tanoshi-header.text-header-success,
	h6.tanoshi-header.text-header-success {
		color: rgba(var(--header-success));
	}

	h1.tanoshi-header.text-header-danger,
	h2.tanoshi-header.text-header-danger,
	h3.tanoshi-header.text-header-danger,
	h4.tanoshi-header.text-header-danger,
	h5.tanoshi-header.text-header-danger,
	h6.tanoshi-header.text-header-danger {
		color: rgba(var(--header-danger));
	}

	h1.tanoshi-header.text-header-warning,
	h2.tanoshi-header.text-header-warning,
	h3.tanoshi-header.text-header-warning,
	h4.tanoshi-header.text-header-warning,
	h5.tanoshi-header.text-header-warning,
	h6.tanoshi-header.text-header-warning {
		color: rgba(var(--header-warning));
	}

	h1.tanoshi-header.text-header-info,
	h2.tanoshi-header.text-header-info,
	h3.tanoshi-header.text-header-info,
	h4.tanoshi-header.text-header-info,
	h5.tanoshi-header.text-header-info,
	h6.tanoshi-header.text-header-info {
		color: rgba(var(--header-info));
	}
</style>
