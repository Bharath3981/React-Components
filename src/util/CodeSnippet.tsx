import { CopyBlock, CodeBlock, dracula } from "react-code-blocks";

type Props = {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
};
const CodeSnippet = ({
  code,
  language = "tsx",
  showLineNumbers = true,
}: Props) => {
  return (
    <CodeBlock
      text={code as string}
      language={language}
      showLineNumbers={showLineNumbers}
      theme={dracula}
    />
  );
};

export default CodeSnippet;
