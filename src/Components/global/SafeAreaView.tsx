import React, { ReactNode } from 'react';
import { useTheme } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

interface ISafeAreaContainerProps {
  children: ReactNode;
  style?: Record<string, string | number>;
}

const SafeAreaContainer: React.FC<ISafeAreaContainerProps> = props => {
  const theme = useTheme();

  const { children, style } = props;

  return (
    <SafeAreaView
      style={{ backgroundColor: theme.colors.background, flex: 1, width: '100%', height: '100%', ...style }}>
      {children}
    </SafeAreaView>
  );
};

export default SafeAreaContainer;
