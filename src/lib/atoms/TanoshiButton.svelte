<script lang="ts">
	import '../styles/reset.css';
	import '../styles/container.css';
	import '../styles/text.css';

	import type { TanoshiButtonModel } from 'tanoshi-models';

	export let tanoshiButtonModel: TanoshiButtonModel;
</script>

<button
	type={tanoshiButtonModel.type}
	aria-label={tanoshiButtonModel.label}
	disabled={tanoshiButtonModel.isDisabled}
	on:click
	class="{tanoshiButtonModel.getClasses()} {$$props.class}"
	style="{$$props.style};"
>
	<slot />
</button>

<style>
	button.tanoshi-button {
		border-style: solid;
		border-width: 1px;
		transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-duration: 150ms;
		transition-duration: 300ms;
		cursor: pointer;
		display: flex;
		align-items: center;
	}

	button.tanoshi-button:disabled {
		opacity: 0.8;
		cursor: not-allowed;
	}

	button.tanoshi-button:hover:not([disabled]) {
		cursor: pointer;
	}

	button.tanoshi-button.text-button-text-black {
		color: rgba(var(--button-text-black));
	}

	button.tanoshi-button.hover-text-button-hover-text-black:hover:not([disabled]) {
		color: rgba(var(--button-hover-text-black));
	}

	button.tanoshi-button.text-button-text-white {
		color: rgba(var(--button-text-white));
	}

	button.tanoshi-button.hover-text-button-hover-text-white:hover:not([disabled]) {
		color: rgba(var(--button-hover-text-white));
	}

	button.tanoshi-button.text-button-text-primary {
		color: rgba(var(--button-text-primary));
	}

	button.tanoshi-button.hover-text-button-hover-text-primary:hover:not([disabled]) {
		color: rgba(var(--button-hover-text-primary));
	}

	button.tanoshi-button.text-button-text-secondary {
		color: rgba(var(--button-text-secondary));
	}

	button.tanoshi-button.hover-text-button-hover-text-secondary:hover:not([disabled]) {
		color: rgba(var(--button-hover-text-secondary));
	}

	button.tanoshi-button.text-button-text-success {
		color: rgba(var(--button-text-success));
	}

	button.tanoshi-button.hover-text-button-hover-text-success:hover:not([disabled]) {
		color: rgba(var(--button-hover-text-success));
	}

	button.tanoshi-button.text-button-text-danger {
		color: rgba(var(--button-text-danger));
	}

	button.tanoshi-button.hover-text-button-hover-text-danger:hover:not([disabled]) {
		color: rgba(var(--button-hover-text-danger));
	}

	button.tanoshi-button.text-button-text-warning {
		color: rgba(var(--button-text-warning));
	}

	button.tanoshi-button.hover-text-button-hover-text-warning:hover:not([disabled]) {
		color: rgba(var(--button-hover-text-warning));
	}

	button.tanoshi-button.text-button-text-info {
		color: rgba(var(--button-text-info));
	}

	button.tanoshi-button.hover-text-button-hover-text-info:hover:not([disabled]) {
		color: rgba(var(--button-hover-text-info));
	}

	button.tanoshi-button.bg-theme-button-bg-black {
		background-color: rgba(var(--button-background-black));
	}

	button.tanoshi-button.hover-bg-theme-button-hover-bg-black:hover:not([disabled]) {
		background-color: rgba(var(--button-hover-background-black));
	}

	button.tanoshi-button.bg-theme-button-bg-white {
		background-color: rgba(var(--button-background-white));
	}

	button.tanoshi-button.hover-bg-theme-button-hover-bg-white:hover:not([disabled]) {
		background-color: rgba(var(--button-hover-background-white));
	}

	button.tanoshi-button.bg-theme-button-bg-primary {
		background-color: rgba(var(--button-background-primary));
	}

	button.tanoshi-button.hover-bg-theme-button-hover-bg-primary:hover:not([disabled]) {
		background-color: rgba(var(--button-hover-background-primary));
	}

	button.tanoshi-button.bg-theme-button-bg-secondary {
		background-color: rgba(var(--button-background-secondary));
	}

	button.tanoshi-button.hover-bg-theme-button-hover-bg-secondary:hover:not([disabled]) {
		background-color: rgba(var(--button-hover-background-secondary));
	}

	button.tanoshi-button.bg-theme-button-bg-success {
		background-color: rgba(var(--button-background-success));
	}

	button.tanoshi-button.hover-bg-theme-button-hover-bg-success:hover:not([disabled]) {
		background-color: rgba(var(--button-hover-background-success));
	}

	button.tanoshi-button.bg-theme-button-bg-danger {
		background-color: rgba(var(--button-background-danger));
	}

	button.tanoshi-button.hover-bg-theme-button-hover-bg-danger:hover:not([disabled]) {
		background-color: rgba(var(--button-hover-background-danger));
	}

	button.tanoshi-button.bg-theme-button-bg-warning {
		background-color: rgba(var(--button-background-warning));
	}

	button.tanoshi-button.hover-bg-theme-button-hover-bg-warning:hover:not([disabled]) {
		background-color: rgba(var(--button-hover-background-warning));
	}

	button.tanoshi-button.bg-theme-button-bg-info {
		background-color: rgba(var(--button-background-info));
	}

	button.tanoshi-button.hover-bg-theme-button-hover-bg-info:hover:not([disabled]) {
		background-color: rgba(var(--button-hover-background-info));
	}

	button.tanoshi-button.bd-theme-button-bd-black {
		border-color: rgba(var(--button-border-black));
	}

	button.tanoshi-button.hover-bd-theme-button-hover-bd-black:hover:not([disabled]) {
		border-color: rgba(var(--button-hover-border-black));
	}

	button.tanoshi-button.bd-theme-button-bd-white {
		border-color: rgba(var(--button-border-white));
	}

	button.tanoshi-button.hover-bd-theme-button-hover-bd-white:hover:not([disabled]) {
		border-color: rgba(var(--button-hover-border-white));
	}

	button.tanoshi-button.bd-theme-button-bd-primary {
		border-color: rgba(var(--button-border-primary));
	}

	button.tanoshi-button.hover-bd-theme-button-hover-bd-primary:hover:not([disabled]) {
		border-color: rgba(var(--button-hover-border-primary));
	}

	button.tanoshi-button.bd-theme-button-bd-secondary {
		border-color: rgba(var(--button-border-secondary));
	}

	button.tanoshi-button.hover-bd-theme-button-hover-bd-secondary:hover:not([disabled]) {
		border-color: rgba(var(--button-hover-border-secondary));
	}

	button.tanoshi-button.bd-theme-button-bd-success {
		border-color: rgba(var(--button-border-success));
	}

	button.tanoshi-button.hover-bd-theme-button-hover-bd-success:hover:not([disabled]) {
		border-color: rgba(var(--button-hover-border-success));
	}

	button.tanoshi-button.bd-theme-button-bd-danger {
		border-color: rgba(var(--button-border-danger));
	}

	button.tanoshi-button.hover-bd-theme-button-hover-bd-danger:hover:not([disabled]) {
		border-color: rgba(var(--button-hover-border-danger));
	}

	button.tanoshi-button.bd-theme-button-bd-warning {
		border-color: rgba(var(--button-border-warning));
	}

	button.tanoshi-button.hover-bd-theme-button-hover-bd-warning:hover:not([disabled]) {
		border-color: rgba(var(--button-hover-border-warning));
	}

	button.tanoshi-button.bd-theme-button-bd-info {
		border-color: rgba(var(--button-border-info));
	}

	button.tanoshi-button.hover-bd-theme-button-hover-bd-info:hover:not([disabled]) {
		border-color: rgba(var(--button-hover-border-info));
	}
</style>
