<script lang="ts">
    import '../styles/reset.css';
    import '../styles/text.css';

	import type { TanoshiLabelModel } from "tanoshi-models";

	export let tanoshiLabelModel: TanoshiLabelModel;
</script>

{#if tanoshiLabelModel.isVisibile}
    <label 
        class="
            tanoshi-label
            font-size-{tanoshiLabelModel.fontSize} 
            font-weight{tanoshiLabelModel.fontWeight} 
            text-alignment-{tanoshiLabelModel.textAlignment} 
            text-transform-{tanoshiLabelModel.textTransform}
            text-decoration-{tanoshiLabelModel.textDecoration}
            text-{tanoshiLabelModel.textTheme}
            {$$props.class}
        "
        style="{$$props.style};"
        for={tanoshiLabelModel.forAttr}
    >
        <slot/>
    </label>
{/if}

<style>
   label.tanoshi-label.text-label-black {
        color: rgba(var(--label-black));
    }

    label.tanoshi-label.text-label-white {
        color: rgba(var(--label-white));
    }

    label.tanoshi-label.text-label-primary {
        color: rgba(var(--label-primary));
    }

    label.tanoshi-label.text-label-secondary {
        color: rgba(var(--label-secondary));
    }

    label.tanoshi-label.text-label-success {
        color: rgba(var(--label-success));
    }

    label.tanoshi-label.text-label-danger {
        color: rgba(var(--label-danger));
    }

    label.tanoshi-label.text-label-warning {
        color: rgba(var(--label-warning));
    }

    label.tanoshi-label.text-label-info {
        color: rgba(var(--label-info));
    }
</style>