<script lang="ts">
    import '$lib/styles/reset.css';
    import '$lib/styles/text.css';

    import type { TanoshiParagraphModel } from 'tanoshi-models'

    export let tanoshiParagraphModel: TanoshiParagraphModel;

</script>

<p
    class="
        text-{tanoshiParagraphModel.fontSize} 
        {tanoshiParagraphModel.fontWeight} 
        text-{tanoshiParagraphModel.textAlignment} 
        {tanoshiParagraphModel.textTransform}
        {tanoshiParagraphModel.textDecoration}
        {$$props.class}
    "
    style="{$$props.style};--p-color: rgba(var(--{tanoshiParagraphModel.textTheme}));"
>
    <slot/>
</p>

<style>
    p {
        color: var(--p-color);
    }

</style>