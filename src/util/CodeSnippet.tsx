import { CopyBlock, CodeBlock, dracula } from "react-code-blocks";

type Props = {
  children: string;
  language?: string;
  showLineNumbers?: boolean;
};
const CodeSnippet = ({
  children,
  language = "tsx",
  showLineNumbers = true,
}: Props) => {
  return (
    <CodeBlock
      text={children as string}
      language={language}
      showLineNumbers={showLineNumbers}
      theme={dracula}
    />
  );
};

export default CodeSnippet;
