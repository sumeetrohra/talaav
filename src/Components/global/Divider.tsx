import React from 'react';
import { Divider, useTheme } from 'react-native-paper';

const DividerContainer: React.FC = () => {
  const theme = useTheme();
  return <Divider theme={theme} />;
};

export default DividerContainer;
