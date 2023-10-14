import {
  LexicalComposer,
} from "@lexical/react/LexicalComposer.prod.js";
import { ContentEditable } from "@lexical/react/LexicalContentEditable.prod.js";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary.prod.js";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin.prod.js";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin.prod.js";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin.prod.js";
import type { InitialConfigType } from "@lexical/react/LexicalComposer";

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
