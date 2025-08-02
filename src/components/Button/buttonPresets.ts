import {ButtonPreset} from '.';
import {ThemeColors} from '../../theme/theme';
import {TouchableOpacityBoxProps} from '../Box/TouchableOpacityBox';

type ButtonInterfaceVariant = {
  container: TouchableOpacityBoxProps;
  content: ThemeColors;
};

interface ButtonUI {
  default: ButtonInterfaceVariant;
  disabled: ButtonInterfaceVariant;
}

export const buttonVariants: Record<ButtonPreset, ButtonUI> = {
  primary: {
    default: {
      container: {
        backgroundColor: 'primary',
      },
      content: 'primaryContrast',
    },
    disabled: {
      container: {
        backgroundColor: 'disabled',
      },
      content: 'disabledContrast',
    },
  },
  outline: {
    default: {
      container: {
        borderWidth: 1,
        backgroundColor: 'white',
        borderColor: 'primary',
      },
      content: 'primary',
    },
    disabled: {
      container: {
        borderWidth: 1,
        backgroundColor: 'white',
        borderColor: 'disabled',
      },
      content: 'disabledContrast',
    },
  },
};
