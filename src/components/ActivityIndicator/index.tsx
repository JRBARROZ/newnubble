import React from 'react';
import {
  ActivityIndicator as RNActivityIndicator,
  ActivityIndicatorProps,
} from 'react-native';
import {ThemeColors} from '../../theme/theme';
import {useAppTheme} from '../../hooks/useAppTheme';

interface IActivityIndicatorProps {
  size?: ActivityIndicatorProps['size'];
  color?: ThemeColors;
}

function ActivityIndicator({
  size,
  color = 'backgroundContrast',
}: IActivityIndicatorProps) {
  const {colors} = useAppTheme();
  return <RNActivityIndicator size={size} color={colors[color]} />;
}

export default ActivityIndicator;
