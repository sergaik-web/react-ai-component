import React, { ReactNode, ReactElement, useEffect, useState } from 'react';

interface AIComponentProps {
  context: string;
  children: ReactElement | ReactElement[];
}

const AIComponent = ({ context, children }: AIComponentProps) => {
  const [aiContent, setAiContent] = useState<ReactNode>(null);

  useEffect(() => {
    setAiContent(children);
  }, [context, children]);

  return aiContent || <>{children}</>;
};

export default AIComponent;
