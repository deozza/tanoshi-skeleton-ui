<script lang="ts">
	import '../styles/reset.css';

	import type { TanoshiImageModel } from 'tanoshi-models';

	export let tanoshiImageModel: TanoshiImageModel;
</script>

<img
	src={tanoshiImageModel.src}
	alt={tanoshiImageModel.alt}
	width={tanoshiImageModel.width}
	height={tanoshiImageModel.height}
	loading={tanoshiImageModel.loadingMethod}
	class="{tanoshiImageModel.getClasses()} {$$props.class}"
	style="--desktop-width:{tanoshiImageModel.desktopWidth}; --desktop-height:{tanoshiImageModel.desktopHeight}; --mobile-width:{tanoshiImageModel.mobileWidth}; --mobile-height:{tanoshiImageModel.mobileHeight} ; {$$props.style}"
/>

<style>
	img.tanoshi-image.cursor-default {
		cursor: default;
	}

	img.tanoshi-image.cursor-pointer {
		cursor: pointer;
	}

	img.tanoshi-image.cursor-progress {
		cursor: progress;
	}

	img.tanoshi-image.cursor-wait {
		cursor: wait;
	}

	img.tanoshi-image.cursor-not-allowed {
		cursor: not-allowed;
	}

	img.tanoshi-image.cursor-not-allowed {
		cursor: not-allowed;
	}

	@media (min-width: 768px) {
		img.tanoshi-image {
			width: var(--desktop-width);
			height: var(--desktop-height);
		}
	}

	@media (max-width: 767px) {
		img.tanoshi-image {
			width: var(--mobile-width);
			height: var(--mobile-height);
		}
	}
</style>
