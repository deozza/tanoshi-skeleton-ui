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
        style="{$$props.style};--label-color: rgba(var(--{tanoshiLabelModel.textTheme}));"
        for={tanoshiLabelModel.forAttr}
    >
        <slot/>
    </label>
{/if}




<style>
label{
    color: var(--label-color);

}
</style>