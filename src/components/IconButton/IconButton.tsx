import React from 'react';
import {Pressable} from 'react-native';

import {Icon, IconProps} from '../Icon';

interface IIconButtonProps extends IconProps {
  onPress: () => any;
}

function IconButton({onPress, ...props}: IIconButtonProps) {
  return (
    <Pressable onPress={onPress} hitSlop={10}>
      <Icon {...props} />
    </Pressable>
  );
}

export default IconButton;
