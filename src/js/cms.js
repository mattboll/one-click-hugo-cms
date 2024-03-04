import CMS from "decap-cms-app";

// Import main site styles as a string to inject into the CMS preview pane
// TODO fix import with resolve-url-loader
// eslint-disable-next-line import/no-unresolved
// import styles from "!to-string-loader!css-loader!resolve-url-loader!postcss-loader!sass-loader!../css/main.scss";

import HomePreview from "./cms-preview-templates/home";
import PostPreview from "./cms-preview-templates/post";
import FooterPreview from "./cms-preview-templates/footer";

// CMS.registerPreviewStyle(styles, { raw: true });
CMS.registerPreviewTemplate("home", HomePreview);
CMS.registerPreviewTemplate("post", PostPreview);
CMS.registerPreviewTemplate("footer", FooterPreview);
CMS.init();
