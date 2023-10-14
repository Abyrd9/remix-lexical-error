/** @type {import('@remix-run/dev').AppConfig} */
export default {
  ignoredRouteFiles: ["**/.*"],
  serverDependenciesToBundle: [
    "@lexical/react/LexicalComposer",
    "@lexical/react/LexicalContentEditable",
    "@lexical/react/LexicalErrorBoundary",
    "@lexical/react/LexicalHistoryPlugin",
    "@lexical/react/LexicalOnChangePlugin",
    "@lexical/react/LexicalRichTextPlugin"
  ],
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // publicPath: "/build/",
  // serverBuildPath: "build/index.js",
};
