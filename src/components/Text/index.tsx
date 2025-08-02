import {createText} from '@shopify/restyle';
import React from 'react';
import {TextStyle} from 'react-native';
import {Theme} from '../../theme/theme';

const SRText = createText<Theme>();

type SRTextProps = React.ComponentProps<typeof SRText>;

type TextVariants =
  | 'headingLarge'
  | 'headingMedium'
  | 'headingSmall'
  | 'paragraphLarge'
  | 'paragraphMedium'
  | 'paragraphSmall'
  | 'paragraphCaption'
  | 'paragraphyCaptionSmall';

interface TextProps extends Omit<SRTextProps, 'variant'> {
  variant?: TextVariants;
  bold?: boolean;
  italic?: boolean;
  semiBold?: boolean;
}

export const $fontFamily = {
  black: 'Satoshi-Black',
  blackItalic: 'Satoshi-BlackItalic',
  bold: 'Satoshi-Bold',
  boldItalic: 'Satoshi-BoldItalic',
  italic: 'Satoshi-Italic',
  light: 'Satoshi-Light',
  lightItalic: 'Satoshi-LightItalic',
  medium: 'Satoshi-Medium',
  mediumItalic: 'Satoshi-MediumItalic',
  regular: 'Satoshi-Regular',
};

export const $fontSizes: Record<
  TextVariants,
  Pick<TextStyle, 'fontSize' | 'lineHeight'>
> = {
  headingLarge: {
    fontSize: 32,
    lineHeight: 38.4,
  },
  headingMedium: {
    fontSize: 22,
    lineHeight: 26.4,
  },
  headingSmall: {
    fontSize: 18,
    lineHeight: 23.4,
  },
  paragraphLarge: {
    fontSize: 18,
    lineHeight: 25.2,
  },
  paragraphMedium: {
    fontSize: 16,
    lineHeight: 22.4,
  },
  paragraphSmall: {
    fontSize: 14,
    lineHeight: 19.6,
  },
  paragraphCaption: {
    fontSize: 12,
    lineHeight: 16.8,
  },
  paragraphyCaptionSmall: {
    fontSize: 10,
    lineHeight: 14,
  },
};

function getFontFamily({
  variant = 'paragraphSmall',
  bold,
  italic,
  semiBold,
}: {
  variant?: TextVariants;
  bold?: boolean;
  italic?: boolean;
  semiBold?: boolean;
}): Pick<TextStyle, 'fontFamily' | 'fontStyle'> {
  if (['headingLarge', 'headingMedium', 'headingSmall'].includes(variant)) {
    return {
      fontFamily: italic ? $fontFamily.blackItalic : $fontFamily.bold,
    };
  }
  if (bold && italic) {
    return {
      fontFamily: $fontFamily.boldItalic,
      fontStyle: 'italic',
    };
  }
  if (semiBold && italic) {
    return {
      fontFamily: $fontFamily.mediumItalic,
      fontStyle: 'italic',
    };
  }
  if (bold) {
    return {
      fontFamily: $fontFamily.bold,
    };
  }
  if (italic) {
    return {
      fontFamily: $fontFamily.italic,
      fontStyle: 'italic',
    };
  }
  return {
    fontFamily: $fontFamily.regular,
  };
}

export function Text({
  children,
  bold,
  italic,
  style,
  semiBold,
  variant = 'paragraphMedium',
  ...srTextProps
}: Omit<TextProps, 'fontSize' | 'lineHeight'>) {
  const fontStyle = $fontSizes[variant];
  const fontFamily = getFontFamily({variant, bold, italic, semiBold});
  return (
    <SRText
      color="backgroundContrast"
      style={[fontStyle, fontFamily, style]}
      {...srTextProps}>
      {children}
    </SRText>
  );
}
