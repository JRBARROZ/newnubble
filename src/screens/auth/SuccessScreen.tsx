import Button from '../../components/Button';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Icon} from '../../components/Icon';
import Screen from '../../components/Screen/Screen';
import {Text} from '../../components/Text';
import {RootStackParamList} from '../../routes/Routes';

type ScreenSuccessProps = NativeStackScreenProps<
  RootStackParamList,
  'SuccessScreen'
>;
export function SuccessScreen({
  route: {params},
  navigation,
}: ScreenSuccessProps) {
  return (
    <Screen>
      <Icon name={params.icon.name} />
      <Text variant="headingLarge" mt="s20">
        {params.title}
      </Text>
      <Text variant="paragraphLarge" mt="s16">
        {params.description}
      </Text>
      <Button onPress={navigation.goBack} mt="s48">
        Voltar ao início
      </Button>
    </Screen>
  );
}
