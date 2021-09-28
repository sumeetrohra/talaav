import React from 'react';
import { TextInput, useTheme } from 'react-native-paper';
import Text from './Text';

interface ITextInputContainerProps {
  value: string;
  onChangeText: (value: string) => void;
  label: string;
  placeholder?: string;
  errorText?: string;
  style?: Record<any, any>;
  focus?: boolean;
}

const TextInputContainer: React.FC<ITextInputContainerProps> = props => {
  const { value, onChangeText, label, placeholder, style, errorText, focus } = props;

  const theme = useTheme();

  return (
    <>
      <TextInput
        theme={theme}
        mode="outlined"
        label={label}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        error={!!errorText}
        style={{ width: '100%', height: 48, marginBottom: 16, ...style }}
      />
      {errorText && <Text style={{ fontSize: 8, color: theme.colors.error }}>{errorText}</Text>}
    </>
  );
};

export default TextInputContainer;
