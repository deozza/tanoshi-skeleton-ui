<script lang="ts">
    import TanoshiParagraph from "$lib/atoms/TanoshiParagraph.svelte";
    import { TanoshiParagraphModel } from "tanoshi-models";

    const tanoshiParagraphModel: TanoshiParagraphModel = new TanoshiParagraphModel();

</script>

<TanoshiParagraph {tanoshiParagraphModel}>
  Paragraph
</TanoshiParagraph>