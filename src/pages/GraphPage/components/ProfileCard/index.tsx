import React, { useCallback } from 'react';

import { IFriendAtom } from 'store/graph/types';

import {
  ProfileCardStyled,
  ProfileAvatarStyled,
  ProfileTitleStyled,
  ProfileNameStyled,
  ProfileCardInnerStyled,
} from './styled';

export const ProfileCard: React.FC<IFriendAtom> = ({ name, id, imageUrl }) => {
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
      </ProfileCardInnerStyled>
    </ProfileCardStyled>
  );
};
