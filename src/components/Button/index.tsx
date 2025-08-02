import React from 'react';
import {
  TouchableOpacityBox,
  TouchableOpacityBoxProps,
} from '../Box/TouchableOpacityBox';
import {Text} from '../Text';
import {buttonVariants} from './buttonPresets';
import ActivityIndicator from '../ActivityIndicator';

interface IButtonProps extends TouchableOpacityBoxProps {
  children?: React.ReactNode;
  variant?: ButtonPreset;
  onPress?: () => void;
  disabled?: boolean;
  loading?: boolean;
}

export type ButtonPreset = 'primary' | 'outline';

function Button({
  children,
  variant = 'primary',
  loading = false,
  disabled,
  ...touchableOpacityBoxProps
}: IButtonProps) {
  const buttonVariant = !disabled
    ? buttonVariants[variant].default
    : buttonVariants[variant].disabled;

  const isButtonDisabled = disabled || loading;

  return (
    <TouchableOpacityBox
      height={50}
      disabled={isButtonDisabled}
      backgroundColor="primary"
      borderRadius={'r16'}
      justifyContent="center"
      alignItems="center"
      {...touchableOpacityBoxProps}
      {...buttonVariant.container}>
      {loading ? (
        <ActivityIndicator color={buttonVariant.content} />
      ) : (
        <Text variant="paragraphMedium" bold color={buttonVariant.content}>
          {children}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}

export default Button;
