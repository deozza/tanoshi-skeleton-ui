<script lang="ts">
    import TanoshiParagraph from "$lib/atoms/TanoshiParagraph.svelte";
    import { FONT_SIZES, FONT_WEIGHTS, PARAGRAPH_TEXT_THEMES, TEXT_ALIGNMENT, TEXT_DECORATIONS, TEXT_TRANSFORMS, THEMES, TanoshiParagraphModel } from "tanoshi-models";

    export let theme: THEMES|PARAGRAPH_TEXT_THEMES = THEMES.Black;
    export let fontSize: FONT_SIZES = FONT_SIZES.Md;
    export let fontWeight: FONT_WEIGHTS = FONT_WEIGHTS.Regular;
    export let textAlignment: TEXT_ALIGNMENT = TEXT_ALIGNMENT.Left;
    export let textTransform: TEXT_TRANSFORMS;
    export let textDecoration: TEXT_DECORATIONS;
    const tanoshiParagraphModel: TanoshiParagraphModel = new TanoshiParagraphModel()
      .setTextTheme(theme)
      .setFontSize(fontSize)
      .setFontWeight(fontWeight)
      .setTextAlignment(textAlignment);

    if(textTransform) {
      tanoshiParagraphModel.setTextTransform(textTransform);
    }

    if(textDecoration) {
      tanoshiParagraphModel.setTextDecoration(textDecoration);
    }

</script>

<TanoshiParagraph {tanoshiParagraphModel}>
  Paragraph
</TanoshiParagraph>