<script lang="ts">
	import '../styles/reset.css';
	import '../styles/container.css';

	import type { TanoshiPillModel } from 'tanoshi-models';

	export let tanoshiPillModel: TanoshiPillModel;
</script>

<span class="{tanoshiPillModel.getClasses()} {$$props.class}" style="{$$props.style};">
	<slot />
</span>

<style>
	span.tanoshi-pill {
		border-style: solid;
		border-width: 1px;
		display: flex;
		align-items: center;
	}

	span.tanoshi-pill.text-pill-text-black {
		color: rgba(var(--pill-text-black));
	}

	span.tanoshi-pill.text-pill-text-white {
		color: rgba(var(--pill-text-white));
	}

	span.tanoshi-pill.text-pill-text-primary {
		color: rgba(var(--pill-text-primary));
	}

	span.tanoshi-pill.text-pill-text-secondary {
		color: rgba(var(--pill-text-secondary));
	}

	span.tanoshi-pill.text-pill-text-success {
		color: rgba(var(--pill-text-success));
	}

	span.tanoshi-pill.text-pill-text-danger {
		color: rgba(var(--pill-text-danger));
	}

	span.tanoshi-pill.text-pill-text-warning {
		color: rgba(var(--pill-text-warning));
	}

	span.tanoshi-pill.text-pill-text-info {
		color: rgba(var(--pill-text-info));
	}

	span.tanoshi-pill.background-pill-background-black {
		background-color: rgba(var(--pill-background-black));
	}

	span.tanoshi-pill.background-pill-background-white {
		background-color: rgba(var(--pill-background-white));
	}

	span.tanoshi-pill.background-pill-background-primary {
		background-color: rgba(var(--pill-background-primary));
	}

	span.tanoshi-pill.background-pill-background-secondary {
		background-color: rgba(var(--pill-background-secondary));
	}

	span.tanoshi-pill.background-pill-background-success {
		background-color: rgba(var(--pill-background-success));
	}

	span.tanoshi-pill.background-pill-background-danger {
		background-color: rgba(var(--pill-background-danger));
	}

	span.tanoshi-pill.background-pill-background-warning {
		background-color: rgba(var(--pill-background-warning));
	}

	span.tanoshi-pill.background-pill-background-info {
		background-color: rgba(var(--pill-background-info));
	}

	span.tanoshi-pill.border-pill-border-black {
		border-color: rgba(var(--pill-border-black));
	}

	span.tanoshi-pill.border-pill-border-white {
		border-color: rgba(var(--pill-border-white));
	}

	span.tanoshi-pill.border-pill-border-primary {
		border-color: rgba(var(--pill-border-primary));
	}

	span.tanoshi-pill.border-pill-border-secondary {
		border-color: rgba(var(--pill-border-secondary));
	}

	span.tanoshi-pill.border-pill-border-success {
		border-color: rgba(var(--pill-border-success));
	}

	span.tanoshi-pill.border-pill-border-danger {
		border-color: rgba(var(--pill-border-danger));
	}

	span.tanoshi-pill.border-pill-border-warning {
		border-color: rgba(var(--pill-border-warning));
	}

	span.tanoshi-pill.border-pill-border-info {
		border-color: rgba(var(--pill-border-info));
	}
</style>
