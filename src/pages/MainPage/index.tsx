import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { AuthApi } from 'net/api/auth';
import { ROUTES } from 'routes/consts';
import { Button } from 'ui/Button';
import { Text } from 'ui/Text';

import { useGraphStore } from '../../store/graph';
import { About } from './components/About';
import { HowTo } from './components/HowTo';
import { MainPageFooter, MainPageInner, MainPageStyled } from './styled';

export const MainPage: React.FC = () => {
  const history = useHistory();
  const {
    graph: { root },
  } = useGraphStore();

  const toLoginPage = useCallback(() => {
    AuthApi.checkToken().then(({ isAuthed }) => {
      if (isAuthed) history.push(ROUTES.FORM.PATH);
      else history.push(ROUTES.LOGIN.PATH);
    });
  }, [history]);

  const toResults = useCallback(() => {
    history.push(ROUTES.GRAPH.PATH);
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
          {root !== null ? (
            <Button $size="m" $type="secondary" onClick={toResults}>
              Посмотреть результаты
            </Button>
          ) : null}
        </MainPageFooter>
      </MainPageInner>
      <About />
      <HowTo />
    </MainPageStyled>
  );
};
