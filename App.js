import React from 'react';

import { 
  Body,
  Container,
  Content,
  Header, 
  Text 
} from 'native-base'

import SwitchSelector from 'react-native-switch-selector';
import { useTranslation } from 'react-i18next';

const options = [
  {label: 'English', value: 'en'},
  {label: 'Portuguese', value: 'pt'},
  {label: 'Italian', value: 'it'},
]

const App = () => {
  
  const { t, i18n} = useTranslation();

  return (
    <Container>
      <Header>
        <Body>
          <SwitchSelector 
            options={options} 
            hasPadding 
            initial={0}
            onPress={(language) => {
              i18n.changeLanguage(language);
            }}
          />
        </Body>
      </Header>
      <Content
        padder
        contentContainerStyle={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Text style={{fontSize: 26, textAlign: 'center'}}>
          {t('WelcomeText')}
        </Text>
      </Content>
    </Container>
  );

};

export default App;