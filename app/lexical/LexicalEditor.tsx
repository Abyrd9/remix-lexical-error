// import { type InitialConfigType, LexicalComposer } from "@lexical/react/LexicalComposer"
// import { ContentEditable } from "@lexical/react/LexicalContentEditable"
// import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary"
// import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin"
// import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin"
// import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin"

/*
  1. Comment out the below.
  2. Uncomment the above.
  3. Uncomment out the serverDependenciesToBundle on remix.config.js
*/

import LexicalComposerPkg from "@lexical/react/LexicalComposer.js";
import ContentEditablePkg from "@lexical/react/LexicalContentEditable.js";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary.js";
import HistoryPluginPkg from "@lexical/react/LexicalHistoryPlugin.js";
import OnChangePluginPkg from "@lexical/react/LexicalOnChangePlugin.js";
import RichTextPluginPkg from "@lexical/react/LexicalRichTextPlugin.js";
import type { InitialConfigType } from "@lexical/react/LexicalComposer";

const LexicalComposer = LexicalComposerPkg.LexicalComposer;
const ContentEditable = ContentEditablePkg.ContentEditable;
const HistoryPlugin = HistoryPluginPkg.HistoryPlugin;
const OnChangePlugin = OnChangePluginPkg.OnChangePlugin;
const RichTextPlugin = RichTextPluginPkg.RichTextPlugin;

type LexicalEditorProps = {};

const Content = () => (
  <ContentEditable className="lexical-editor min-h-[200px] outline-none selection:bg-blue-100" />
);

const Placeholder = ({
  placeholder = "Enter your content here..."
}: {
  placeholder?: string;
}) => (
  <p className="absolute left-3 top-3 z-[-1] text-muted-foreground text-primary-700/60">
    {placeholder}
  </p>
);

const initial = {
  namespace: "lexical-editor",
  theme: {},
  nodes: [],
  onError: () => {
    console.error("There was an error");
  }
} satisfies InitialConfigType

export const LexicalEditor = ({}: LexicalEditorProps) => {
  return (
    <LexicalComposer initialConfig={initial}>
      <div className="border-input rounded-md border text-sm">
        <div className="relative z-[0] p-3">
          <RichTextPlugin
            contentEditable={<Content />}
            placeholder={<Placeholder placeholder="Placeholder text..." />}
            ErrorBoundary={LexicalErrorBoundary}
          />
        </div>
      </div>

      <HistoryPlugin />
      <OnChangePlugin onChange={() => {}} />
    </LexicalComposer>
  );
};
