import React from 'react';

import { FullWidthContainer } from 'styled';
import { Text } from 'ui/Text';

import { HowToBlock, HowToStyled } from './styled';

export const HowTo: React.FC = () => (
  <FullWidthContainer id="howto">
    <HowToStyled>
      <Text $variant="h3SemiBold" pt={8}>
        Как пользоваться?
      </Text>
      <HowToBlock>
        <Text $variant="h4SemiBold">1. Авторизация</Text>
        <Text $variant="body1Regular">
          Для работы с приложением необходимо автризоваться в социальной сети. Перейдите на страницу авторизации,
          выполните вход в социальную сеть и предоставьте права на чтение данных профиля. После окончания процесса
          авторизации Вы будете перенаправлены на страницу с формой, где сможете приступить к работе.
        </Text>
      </HowToBlock>
      <HowToBlock>
        <Text $variant="h4SemiBold">2. Укажите входные параметры</Text>
        <Text $variant="body1Regular">
          {`На странице с формой укажите параметры запроса для построения графа. Вы можете задать ширину и глубину графа,
          указать ключевые слова, а также их приоритет при поиске совпадений. Нажмите кнопку \u00abПостроить граф\u00bb, чтобы
          начать поиск друзей.`}
        </Text>
      </HowToBlock>
      <HowToBlock>
        <Text $variant="h4SemiBold">3. Готово!</Text>
        <Text $variant="body1Regular">
          {`После построения графа Вы будете перенаправлены на страницу с результатами, где Вы можете посмотреть найденых
          друзей. Кликните на вершину, чтобы получить подобную информацию о друге и перейти на его страницу в социальной сети. Вы
          всегда можете вернуться к результатам, нажав кнопку \u00abПосмотреть результаты\u00bb на главной странице.`}
        </Text>
      </HowToBlock>
    </HowToStyled>
  </FullWidthContainer>
);
