<script lang="ts">
    import '$lib/styles/reset.css';
    import '$lib/styles/text.css';

	import type { TanoshiLabelModel } from "tanoshi-models";

	export let tanoshiLabelModel: TanoshiLabelModel;
</script>


{#if tanoshiLabelModel.isVisibile}
    <label 
        class="
            text-{tanoshiLabelModel.fontSize} 
            {tanoshiLabelModel.fontWeight} 
            text-{tanoshiLabelModel.textAlignment} 
            {tanoshiLabelModel.textTransform}
            {tanoshiLabelModel.textDecoration}
            {$$props.class}
        "
        style="{$$props.style};"
        for={tanoshiLabelModel.forAttr}
    >
        <slot/>
    </label>
{/if}

<style>
    label.black {
        color: rgba(var(--black));
    }

    label.label-black {
        color: rgba(var(--label-black));
    }

    label.white {
        color: rgba(var(--white));
    }

    label.label-white {
        color: rgba(var(--label-white));
    }

    label.primary {
        color: rgba(var(--primary));
    }

    label.label-primary {
        color: rgba(var(--label-primary));
    }

    label.secondary {
        color: rgba(var(--secondary));
    }

    label.label-secondary {
        color: rgba(var(--label-secondary));
    }

    label.success {
        color: rgba(var(--success));
    }

    label.label-success {
        color: rgba(var(--label-success));
    }

    label.danger {
        color: rgba(var(--danger));
    }

    label.label-danger {
        color: rgba(var(--label-danger));
    }

    label.warning {
        color: rgba(var(--warning));
    }

    label.label-warning {
        color: rgba(var(--label-warning));
    }

    label.info {
        color: rgba(var(--info));
    }

    label.label-info {
        color: rgba(var(--label-info));
    }
</style>