import React from 'react';
import Screen from '../../components/Screen/Screen';
import {Text} from '../../components/Text';
import {TextInput} from '../../components/TextInput';
import {Icon} from '../../components/Icon';
import {Box} from '../../components/Box';
import Button from '../../components/Button';
import PasswordInput from '../../components/PasswordInput/PasswordInput';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../routes/Routes';

type SignUpScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'SignUpScreen'
>;
function SignUpScreen({navigation}: SignUpScreenProps) {
  function submitForm() {
    navigation.navigate('SuccessScreen', {
      title: 'Sua conta foi criada com sucesso',
      description: 'Agora é só fazer login na nossa plataforma',
      icon: {
        name: 'CheckRoundIcon',
        color: 'success',
      },
    });
  }
  return (
    <Screen>
      <Text variant="headingLarge" mb="s20">
        Criar uma conta
      </Text>
      <Box gap="s20">
        <TextInput label="Seu username" placeholder="@" />
        <TextInput label="Nome Completo" placeholder="@" />
        <TextInput label="E-mail" placeholder="@" />
        <TextInput label="E-mail" placeholder="@" />
        <TextInput label="E-mail" placeholder="@" />
        <TextInput label="E-mail" placeholder="@" />
        <TextInput label="E-mail" placeholder="@" />
        <TextInput
          label="Senha"
          placeholder="@"
          RightComponent={<Icon name="EyeOn" />}
        />
        <PasswordInput />
      </Box>
      <Button mt="s48" onPress={submitForm}>
        Criar uma conta
      </Button>
    </Screen>
  );
}

export default SignUpScreen;
