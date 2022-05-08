import React, { useCallback } from 'react';

import { IFriendAtom } from 'store/graph/types';
import { Box } from 'ui/Box';
import { Text } from 'ui/Text';

import {
  ProfileCardStyled,
  ProfileAvatarStyled,
  ProfileTitleStyled,
  ProfileNameStyled,
  ProfileCardInnerStyled,
} from './styled';

export const ProfileCard: React.FC<IFriendAtom> = ({ name, id, imageUrl, matched, wall, groups, info }) => {
  const toProfilePage = useCallback(() => {
    const url = `https://vk.com/id${id}`;

    window.open(url);
  }, [id]);

  return (
    <ProfileCardStyled>
      <ProfileCardInnerStyled>
        <ProfileTitleStyled onClick={toProfilePage}>
          <ProfileAvatarStyled image={imageUrl} />
          <ProfileNameStyled>{name}</ProfileNameStyled>
        </ProfileTitleStyled>
        {matched ? (
          <Box>
            <Text pb={2} pt={4} $variant="body1SemiBold">
              Совпадения
            </Text>
            {info.length > 0 ? <Text>{`О себе: ${info.join(', ')}`}</Text> : null}
            {wall.length > 0 ? <Text>{`Стена: ${wall.join(', ')}`}</Text> : null}
            {groups.length > 0 ? <Text>{`Сообщества: ${groups.join(', ')}`}</Text> : null}
          </Box>
        ) : null}
      </ProfileCardInnerStyled>
    </ProfileCardStyled>
  );
};
