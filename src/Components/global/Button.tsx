import React, { ReactNode } from 'react';
import { Button, useTheme } from 'react-native-paper';

interface IButtonContainerProps {
  children: ReactNode;
  onPress: () => void;
  style?: Record<string, string | number>;
}

const ButtonContainer: React.FC<IButtonContainerProps> = props => {
  const theme = useTheme();
  const { style, children, onPress } = props;
  return (
    <Button
      onPress={onPress}
      theme={theme}
      mode="contained"
      style={{
        height: 48,
        width: '100%',
        ...style,
      }}
      contentStyle={{ width: '100%', height: '100%' }}>
      {children}
    </Button>
  );
};

export default ButtonContainer;
