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
    <CodeBlock
      text={children}
      language={language}
      showLineNumbers={showLineNumbers}
      theme={dracula}
    />
  );
};

export default CodeSnippet;
