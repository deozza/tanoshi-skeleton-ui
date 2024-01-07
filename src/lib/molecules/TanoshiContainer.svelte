<script lang="ts">
	import '../styles/reset.css';
	import '../styles/container.css';

	import { TanoshiContainerModel } from 'tanoshi-models';

	export let tanoshiContainerModel: TanoshiContainerModel;
</script>

<div class="{tanoshiContainerModel.getClasses()} {$$props.class}" style="{$$props.style};">
	<slot />
</div>

<style>
	div.tanoshi-container {
		display: flex;
		box-sizing: border-box;
		border-width: 1px;
		border-style: solid;
	}

	div.tanoshi-container.justifyContent-start {
		justify-content: flex-start;
	}

	div.tanoshi-container.justifyContent-end {
		justify-content: flex-end;
	}

	div.tanoshi-container.justifyContent-center {
		justify-content: center;
	}

	div.tanoshi-container.justifyContent-between {
		justify-content: space-between;
	}

	div.tanoshi-container.justifyContent-around {
		justify-content: space-around;
	}

	div.tanoshi-container.justifyContent-evenly {
		justify-content: space-evenly;
	}

	div.tanoshi-container.alignItems-start {
		align-items: flex-start;
	}

	div.tanoshi-container.alignItems-end {
		align-items: flex-end;
	}

	div.tanoshi-container.alignItems-center {
		align-items: center;
	}

	div.tanoshi-container.alignItems-baseline {
		align-items: baseline;
	}

	div.tanoshi-container.alignItems-stretch {
		align-items: stretch;
	}

	div.tanoshi-container.alignContent-start {
		align-content: flex-start;
	}

	div.tanoshi-container.alignContent-end {
		align-content: flex-end;
	}

	div.tanoshi-container.alignContent-center {
		align-content: center;
	}

	div.tanoshi-container.alignContent-between {
		align-content: space-between;
	}

	div.tanoshi-container.alignContent-around {
		align-content: space-around;
	}

	div.tanoshi-container.alignContent-stretch {
		align-content: stretch;
	}

	div.tanoshi-container.wrap {
		flex-wrap: wrap;
	}

	div.tanoshi-container.no-wrap {
		flex-wrap: nowrap;
	}

	div.tanoshi-container.wrap-reverse {
		flex-wrap: wrap-reverse;
	}

	div.tanoshi-container.background-container-background-black {
		background-color: rgba(var(--container-background-black));
	}

	div.tanoshi-container.background-container-background-white {
		background-color: rgba(var(--container-background-white));
	}

	div.tanoshi-container.background-container-background-primary {
		background-color: rgba(var(--container-background-primary));
	}

	div.tanoshi-container.background-container-background-secondary {
		background-color: rgba(var(--container-background-secondary));
	}

	div.tanoshi-container.background-container-background-success {
		background-color: rgba(var(--container-background-success));
	}

	div.tanoshi-container.background-container-background-danger {
		background-color: rgba(var(--container-background-danger));
	}

	div.tanoshi-container.background-container-background-warning {
		background-color: rgba(var(--container-background-warning));
	}

	div.tanoshi-container.background-container-background-info {
		background-color: rgba(var(--container-background-info));
	}

	div.tanoshi-container.border-cotnainer-border-black {
		border-color: rgba(var(--container-border-black));
	}

	div.tanoshi-container.border-cotnainer-border-white {
		border-color: rgba(var(--container-border-white));
	}

	div.tanoshi-container.border-cotnainer-border-primary {
		border-color: rgba(var(--container-border-primary));
	}

	div.tanoshi-container.border-cotnainer-border-secondary {
		border-color: rgba(var(--container-border-secondary));
	}

	div.tanoshi-container.border-cotnainer-border-success {
		border-color: rgba(var(--container-border-success));
	}

	div.tanoshi-container.border-cotnainer-border-danger {
		border-color: rgba(var(--container-border-danger));
	}

	div.tanoshi-container.border-cotnainer-border-warning {
		border-color: rgba(var(--container-border-warning));
	}

	div.tanoshi-container.border-cotnainer-border-info {
		border-color: rgba(var(--container-border-info));
	}

	@media (min-width: 768px) {
		div.tanoshi-container.desktop-row {
			flex-direction: row;
		}

		div.tanoshi-container.desktop-row-reverse {
			flex-direction: row-reverse;
		}

		div.tanoshi-container.desktop-column {
			flex-direction: column;
		}

		div.tanoshi-container.desktop-column-reverse {
			flex-direction: column-reverse;
		}
	}

	@media (max-width: 767px) {
		div.tanoshi-container.mobile-row {
			flex-direction: row;
		}

		div.tanoshi-container.mobile-row-reverse {
			flex-direction: row-reverse;
		}

		div.tanoshi-container.mobile-column {
			flex-direction: column;
		}

		div.tanoshi-container.mobile-column-reverse {
			flex-direction: column-reverse;
		}
	}
</style>
