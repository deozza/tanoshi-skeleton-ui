<script lang="ts">
	import '../styles/reset.css';
	import '../styles/text.css';

	import type { TanoshiLinkModel } from 'tanoshi-models';

	export let tanoshiLinkModel: TanoshiLinkModel;
</script>

<a
	href={tanoshiLinkModel.href}
	aria-label={tanoshiLinkModel.label}
	target={tanoshiLinkModel.target}
	class="
        tanoshi-link
        font-size-{tanoshiLinkModel.fontSize} 
        font-weight-{tanoshiLinkModel.fontWeight} 
        text-alignment-{tanoshiLinkModel.textAlignment} 
        text-transform-{tanoshiLinkModel.textTransform}
        text-decoration-{tanoshiLinkModel.textDecoration}
        text-{tanoshiLinkModel.textTheme}
        hover-text-{tanoshiLinkModel.hoverTextTheme}
        {$$props.class}
    "
	class:disabled={tanoshiLinkModel.isDisabled}
	style="{$$props.style};"
>
	<slot />
</a>

<style>
	a.tanoshi-link.disabled {
		pointer-events: none;
		cursor: default;
	}

	a.tanoshi-link.text-link-black {
		color: rgba(var(--link-black));
	}

	a.tanoshi-link.hover-text-link-hover-black:not(.disabled):hover {
		color: rgba(var(--link-hover-black));
	}

	a.tanoshi-link.text-link-white {
		color: rgba(var(--link-white));
	}

	a.tanoshi-link.hover-text-link-hover-white:not(.disabled):hover {
		color: rgba(var(--link-hover-white));
	}

	a.tanoshi-link.text-link-primary {
		color: rgba(var(--link-primary));
	}

	a.tanoshi-link.hover-text-link-hover-primary:not(.disabled):hover {
		color: rgba(var(--link-hover-primary));
	}

	a.tanoshi-link.text-link-secondary {
		color: rgba(var(--link-secondary));
	}

	a.tanoshi-link.hover-text-link-hover-secondary:not(.disabled):hover {
		color: rgba(var(--link-hover-secondary));
	}

	a.tanoshi-link.text-link-success {
		color: rgba(var(--link-success));
	}

	a.tanoshi-link.hover-text-link-hover-success:not(.disabled):hover {
		color: rgba(var(--link-hover-success));
	}

	a.tanoshi-link.text-link-danger {
		color: rgba(var(--link-danger));
	}

	a.tanoshi-link.hover-text-link-hover-danger:not(.disabled):hover {
		color: rgba(var(--link-hover-danger));
	}

	a.tanoshi-link.text-link-warning {
		color: rgba(var(--link-warning));
	}

	a.tanoshi-link.hover-text-link-hover-warning:not(.disabled):hover {
		color: rgba(var(--link-hover-warning));
	}

	a.tanoshi-link.text-link-info {
		color: rgba(var(--link-info));
	}

	a.tanoshi-link.hover-text-link-hover-info:not(.disabled):hover {
		color: rgba(var(--link-hover-info));
	}
</style>
