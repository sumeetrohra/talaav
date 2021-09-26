import React, { ReactNode } from 'react';
import { Text, useTheme } from 'react-native-paper';

interface ITextContainerProps {
  children: ReactNode;
  style?: Record<string, string | number>;
}

const TextContainer: React.FC<ITextContainerProps> = props => {
  const theme = useTheme();
  return (
    <Text theme={theme} style={props.style}>
      {props.children}
    </Text>
  );
};

export default TextContainer;
