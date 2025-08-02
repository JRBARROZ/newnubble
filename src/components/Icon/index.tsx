import * as icons from '../../assets/icons';
import {ThemeColors} from '../../theme/theme';
import {useAppTheme} from '../../hooks/useAppTheme';

export interface IconProps {
  name: keyof typeof icons;
  size?: number;
  color?: ThemeColors;
}

export function Icon({name, color = 'black', size}: IconProps) {
  const {colors} = useAppTheme();
  const SvgIcon = icons[name];

  return <SvgIcon color={colors[color]} size={size} />;
}
