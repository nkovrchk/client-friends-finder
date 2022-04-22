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
          Практический опыт показывает, что выбранный нами инновационный путь позволяет выполнить важнейшие задания по
          разработке модели развития. Не следует, однако, забывать о том, что курс на социально-ориентированный
          национальный проект влечет за собой процесс внедрения и модернизации ключевых компонентов планируемого
          обновления! Разнообразный и богатый опыт курс на социально-ориентированный национальный проект требует от нас
          системного анализа соответствующих условий активизации!
        </Text>
      </HowToBlock>
      <HowToBlock>
        <Text $variant="h4SemiBold">2. Укажите входные параметры</Text>
        <Text $variant="body1Regular">
          Дорогие друзья, рамки и место обучения кадров требует от нас анализа дальнейших направлений развитая системы
          массового участия. Не следует, однако, забывать о том, что повышение уровня гражданского сознания способствует
          подготовке и реализации дальнейших направлений развития проекта! Таким образом, постоянный количественный рост
          и сфера нашей активности влечет за собой процесс внедрения и модернизации всесторонне сбалансированных
          нововведений. Дорогие друзья, постоянное информационно-техническое обеспечение нашей деятельности играет
          важную роль в формировании дальнейших направлений развития проекта.
        </Text>
      </HowToBlock>
      <HowToBlock>
        <Text $variant="h4SemiBold">3. Готово!</Text>
        <Text $variant="body1Regular">
          {`После построения графа  Вы будете перенаправлены на страницу с результатами, где Вы можете посмотреть найденых
          друзей. Кликните по его иконке, чтобы получить подобную информацию и перейти на страницу в социальной сети. Вы
          всегда можете вернуться к результатам, нажав кнопку "Посмотреть результаты" на главной странциу.`}
        </Text>
      </HowToBlock>
    </HowToStyled>
  </FullWidthContainer>
);
