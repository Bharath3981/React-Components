import { CodeBlock, dracula } from "react-code-blocks";

type Props = {
  children: string;
  language?: string;
  showLineNumbers?: boolean;
};
const CodeSnippet = ({
  children,
  language = "jsx",
  showLineNumbers = true,
}: Props) => {
  return (
    <div className="pt-3">
      <CodeBlock
        text={children}
        language={language}
        showLineNumbers={showLineNumbers}
        theme={dracula}
      />
    </div>
  );
};

export default CodeSnippet;
