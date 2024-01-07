<script lang="ts">
	import '../styles/reset.css';
	import '../styles/text.css';

	import type { TanoshiParagraphModel } from 'tanoshi-models';

	export let tanoshiParagraphModel: TanoshiParagraphModel;
</script>

<p class=" {tanoshiParagraphModel.getClasses()} {$$props.class}" style="{$$props.style};">
	<slot />
</p>

<style>
	p.tanoshi-paragraph.text-theme-paragraph-text-black {
		color: rgba(var(--paragraph-text-black));
	}

	p.tanoshi-paragraph.text-theme-paragraph-text-white {
		color: rgba(var(--paragraph-text-white));
	}

	p.tanoshi-paragraph.text-theme-paragraph-text-primary {
		color: rgba(var(--paragraph-text-primary));
	}

	p.tanoshi-paragraph.text-theme-paragraph-text-secondary {
		color: rgba(var(--paragraph-text-secondary));
	}

	p.tanoshi-paragraph.text-theme-paragraph-text-success {
		color: rgba(var(--paragraph-text-success));
	}

	p.tanoshi-paragraph.text-theme-paragraph-text-danger {
		color: rgba(var(--paragraph-text-danger));
	}

	p.tanoshi-paragraph.text-theme-paragraph-text-warning {
		color: rgba(var(--paragraph-text-warning));
	}

	p.tanoshi-paragraph.text-theme-paragraph-text-info {
		color: rgba(var(--paragraph-text-info));
	}
</style>
