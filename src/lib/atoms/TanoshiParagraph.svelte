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
        {tanoshiParagraphModel.textTheme}
    "
    style="{$$props.style};"
>
{tanoshiParagraphModel.textTheme}
    <slot/>
</p>

<style>
    p.black {
        color: rgba(var(--black));
    }

    p.paragraph-black {
        color: rgba(var(--paragraph-black));
    }

    p.white {
        color: rgba(var(--white));
    }

    p.paragraph-white {
        color: rgba(var(--paragraph-white));
    }

    p.primary {
        color: rgba(var(--primary));
    }

    p.paragraph-primary {
        color: rgba(var(--paragraph-primary));
    }

    p.secondary {
        color: rgba(var(--secondary));
    }

    p.paragraph-secondary {
        color: rgba(var(--paragraph-secondary));
    }

    p.success {
        color: rgba(var(--success));
    }

    p.paragraph-success {
        color: rgba(var(--paragraph-success));
    }

    p.danger {
        color: rgba(var(--danger));
    }

    p.paragraph-danger {
        color: rgba(var(--paragraph-danger));
    }

    p.warning {
        color: rgba(var(--warning));
    }

    p.paragraph-warning {
        color: rgba(var(--paragraph-warning));
    }

    p.info {
        color: rgba(var(--info));
    }

    p.paragraph-info {
        color: rgba(var(--paragraph-info));
    }

</style>