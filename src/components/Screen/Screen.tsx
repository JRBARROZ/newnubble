import React from 'react';
import {Box} from '../Box';
import {Text} from '../Text';
import {Icon} from '../Icon';
import {KeyboardAvoidingView, Platform, Pressable} from 'react-native';
import useAppSafeArea from '../../hooks/useAppSafeArea';
import {ScrollViewContainer, ViewContainer} from './components/ScreenContainer';
import {useAppTheme} from '../../hooks/useAppTheme';
import {useNavigation} from '@react-navigation/native';
interface ScreenProps {
  children: React.ReactNode;
  canGoBack?: boolean;
  scrollabe?: boolean;
}
function Screen({children, canGoBack, scrollabe = true}: ScreenProps) {
  const {top, bottom} = useAppSafeArea();
  const {
    colors: {background},
  } = useAppTheme();

  const {goBack} = useNavigation();

  const Container = scrollabe ? ScrollViewContainer : ViewContainer;

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={{flex: 1}}>
      <Container backgroundColor={background}>
        <Box
          paddingHorizontal="s20"
          marginBottom="s20"
          style={{
            paddingTop: top,
            paddingBottom: bottom,
          }}>
          {canGoBack && (
            <Pressable onPress={goBack}>
              <Box mb="s20" flexDirection="row" alignItems="center" gap="s8">
                <Icon name="ArrowLeftIcon" />
                <Text>Voltar</Text>
              </Box>
            </Pressable>
          )}

          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  );
}

export default Screen;
