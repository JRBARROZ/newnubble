import React, {useState} from 'react';
import {TextInput, TextInputProps} from '../TextInput';
import IconButton from '../IconButton/IconButton';

interface IPasswordInputProps
  extends Omit<TextInputProps, 'RightComponent' | 'secureTextEntry'> {}

function PasswordInput({...props}: IPasswordInputProps) {
  const [isSecureEntry, setIsSecuryEntry] = useState(true);

  function toggleSecuryEntry() {
    setIsSecuryEntry(currentSecuryEntry => !currentSecuryEntry);
  }

  return (
    <TextInput
      {...props}
      secureTextEntry={isSecureEntry}
      RightComponent={
        isSecureEntry ? (
          <IconButton name="EyeOn" onPress={toggleSecuryEntry} />
        ) : (
          <IconButton name="EyeOff" onPress={toggleSecuryEntry} />
        )
      }
    />
  );
}

export default PasswordInput;
