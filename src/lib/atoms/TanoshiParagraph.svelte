<script lang="ts">

    import { TanoshiParagraphModel } from 'tansoshi-model/atoms/TanoshiParagraphModel.js'

    export let tanoshiParagraphModel: TanoshiParagraphModel;

</script>

<p
    class="text-{tanoshiParagraphModel.textAlignment}"
>
    <slot/>
</p>