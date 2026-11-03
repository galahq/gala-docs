import MDXComponents from "@theme-original/MDXComponents";
import Example from "@site/src/components/partnership/Example";
import PhotoStrip from "@site/src/components/partnership/PhotoStrip";

// Components available in every Markdown/MDX page without an import,
// so pages stay editable in TinaCMS (which can't keep import/export lines)
export default {
  ...MDXComponents,
  Example,
  PhotoStrip,
};
