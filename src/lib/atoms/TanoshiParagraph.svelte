<script lang="ts">
	import '../styles/reset.css';
	import '../styles/text.css';

	import type { TanoshiParagraphModel } from 'tanoshi-models';

	export let tanoshiParagraphModel: TanoshiParagraphModel;
</script>

<p
	class="
        tanoshi-paragraph
        font-size-{tanoshiParagraphModel.fontSize} 
        font-weigth-{tanoshiParagraphModel.fontWeight} 
        text-alignment-{tanoshiParagraphModel.textAlignment} 
        text-transform-{tanoshiParagraphModel.textTransform}
        text-decoration-{tanoshiParagraphModel.textDecoration}
        text-{tanoshiParagraphModel.textTheme}
        {$$props.class}
    "
	style="{$$props.style};"
>
	<slot />
</p>

<style>
	p.tanoshi-paragraph.text-paragraph-black {
		color: rgba(var(--paragraph-black));
	}

	p.tanoshi-paragraph.text-paragraph-white {
		color: rgba(var(--paragraph-white));
	}

	p.tanoshi-paragraph.text-paragraph-primary {
		color: rgba(var(--paragraph-primary));
	}

	p.tanoshi-paragraph.text-paragraph-secondary {
		color: rgba(var(--paragraph-secondary));
	}

	p.tanoshi-paragraph.text-paragraph-success {
		color: rgba(var(--paragraph-success));
	}

	p.tanoshi-paragraph.text-paragraph-danger {
		color: rgba(var(--paragraph-danger));
	}

	p.tanoshi-paragraph.text-paragraph-warning {
		color: rgba(var(--paragraph-warning));
	}

	p.tanoshi-paragraph.text-paragraph-info {
		color: rgba(var(--paragraph-info));
	}
</style>
