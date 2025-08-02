import {
  LayoutProps,
  SpacingProps,
  BackgroundColorProps,
  BorderProps,
  SpacingShorthandProps,
  spacingShorthand,
  createRestyleComponent,
  layout,
  spacing,
  backgroundColor,
  border,
} from '@shopify/restyle';

import {TouchableOpacity, TouchableOpacityProps} from 'react-native';
import {Theme} from '../../../theme/theme';

export type TouchableOpacityBoxProps = SpacingProps<Theme> &
  SpacingShorthandProps<Theme> &
  LayoutProps<Theme> &
  BorderProps<Theme> &
  BackgroundColorProps<Theme> &
  TouchableOpacityProps;

export const TouchableOpacityBox = createRestyleComponent<
  TouchableOpacityBoxProps,
  Theme
>(
  [spacing, spacingShorthand, layout, border, backgroundColor],
  TouchableOpacity,
);
