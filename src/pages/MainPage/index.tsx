import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { ROUTES } from 'routes/consts';
import { Button } from 'ui/Button';
import { Text } from 'ui/Text';

import { About } from './components/About';
import { HowTo } from './components/HowTo';
import { MainPageFooter, MainPageInner, MainPageStyled } from './styled';

const MainPage: React.FC = () => {
  const history = useHistory();

  const toLoginPage = useCallback(() => {
    history.push(ROUTES.FORM.PATH);
  }, [history]);

  return (
    <MainPageStyled>
      <MainPageInner>
        <Text $variant="h1Bold" $center pb={4} pt={8}>
          Добро пожаловать в FriendsFinder!
        </Text>
        <Text $variant="h4SemiBold" $center>
          Здесь вы найдете новых друзей и много интересных знакомств
        </Text>
        <MainPageFooter>
          <Button $size="m" onClick={toLoginPage}>
            Начать работу
          </Button>
        </MainPageFooter>
      </MainPageInner>
      <About />
      <HowTo />
    </MainPageStyled>
  );
};

export default MainPage;
