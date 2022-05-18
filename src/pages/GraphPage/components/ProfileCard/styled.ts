import styled from 'styled-components';

import { Text } from 'ui/Text';

interface IProfileAvatarStyled {
  image: string;
}

export const ProfileCardInnerStyled = styled.div`
  position: relative;
  padding: ${({ theme }) => theme.space[3]}px;
`;

export const ProfileCardStyled = styled.div`
  position: absolute;
  border-radius: ${({ theme }) => theme.space[2]}px;
  border: 1px solid ${({ theme }) => theme.colors.cardStroke};
  background-color: ${({ theme }) => theme.colors.bgPrimary};
  top: 16px;
  left: 8px;
`;

export const ProfileTitleStyled = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const ProfileNameStyled = styled(Text)`
  cursor: pointer;

  ${({ theme }) => ({ ...theme.typography.body1Regular })}
`;

export const ProfileAvatarStyled = styled.div<IProfileAvatarStyled>`
  width: 48px;
  height: 48px;
  border: 1px solid ${({ theme }) => theme.colors.textSecondary};
  border-radius: 50%;
  margin-right: ${({ theme }) => theme.space[2]}px;

  background-image: url(${({ image }) => image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`;
