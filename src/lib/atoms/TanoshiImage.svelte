<script lang="ts">
	import '../styles/reset.css';

	import type { TanoshiImageModel } from 'tanoshi-models';

	export let tanoshiImageModel: TanoshiImageModel;

	const desktopWidth: string =
		tanoshiImageModel.desktopWidth !== null
			? tanoshiImageModel.desktopWidth
			: tanoshiImageModel.width + 'px';
	const desktopHeight: string =
		tanoshiImageModel.desktopHeight !== null
			? tanoshiImageModel.desktopHeight
			: tanoshiImageModel.height + 'px';
	const mobileWidth: string =
		tanoshiImageModel.mobileWidth !== null
			? tanoshiImageModel.mobileWidth
			: tanoshiImageModel.width + 'px';
	const mobileHeight: string =
		tanoshiImageModel.mobileHeight !== null
			? tanoshiImageModel.mobileHeight
			: tanoshiImageModel.height + 'px';
</script>

<img
	src={tanoshiImageModel.src}
	alt={tanoshiImageModel.alt}
	width={tanoshiImageModel.width}
	height={tanoshiImageModel.height}
	loading={tanoshiImageModel.loadingMethod}
	class="tanoshi-image cursor-{tanoshiImageModel.cursor} {$$props.class}"
	style="--desktop-width:{desktopWidth}; --desktop-height:{desktopHeight}; --mobile-width:{mobileWidth}; --mobile-height:{mobileHeight} ; {$$props.style}"
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
