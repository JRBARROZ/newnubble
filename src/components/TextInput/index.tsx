import {
  Pressable,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  TextStyle,
} from 'react-native';
import {Box, BoxProps} from '../Box';
import {$fontFamily, $fontSizes, Text} from '../Text';
import {useAppTheme} from '../../hooks/useAppTheme';
import {useRef} from 'react';

export interface TextInputProps extends RNTextInputProps {
  label?: string;
  errorMessage?: string;
  RightComponent?: React.ReactElement;
  BoxProps?: BoxProps;
}

export function TextInput(props: TextInputProps) {
  const {colors} = useAppTheme();
  const inputRef = useRef<RNTextInput>(null);

  const toggleInputFocus = () => {
    if (inputRef.current) {
      if (inputRef.current.isFocused()) {
        inputRef.current.blur();
        return;
      }
      inputRef.current.focus();
    }
  };

  const $textInputContainer: BoxProps = {
    borderWidth: props.errorMessage ? 2 : 1,
    padding: 's16',
    borderColor: props.errorMessage ? 'error' : 'gray3',
    borderRadius: 'r12',
    flexDirection: 'row',
    alignItems: 'center',
  };

  return (
    <Box {...props.BoxProps}>
      <Pressable onPress={toggleInputFocus}>
        {props.label && (
          <Text variant="paragraphMedium" mb="s8">
            {props.label}
          </Text>
        )}
        <Box {...$textInputContainer}>
          <RNTextInput
            style={$textInputStyle}
            ref={inputRef}
            placeholderTextColor={colors.gray2}
            {...props}
          />
          {props.RightComponent && props.RightComponent}
        </Box>
        {props.errorMessage && (
          <Text color="error" variant="paragraphSmall" bold>
            {props.errorMessage}
          </Text>
        )}
      </Pressable>
    </Box>
  );
}

const $textInputStyle: TextStyle = {
  padding: 0,
  flex: 1,
  fontFamily: $fontFamily.regular,
  ...$fontSizes.paragraphMedium,
};
