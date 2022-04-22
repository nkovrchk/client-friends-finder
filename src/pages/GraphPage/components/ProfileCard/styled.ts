import styled from 'styled-components';

export const ProfileCardStyled = styled.div`
  width: 192px;
`;

export const ProfileTitleStyled = styled.div`
  display: flex;
`;

export const ProfileAvatarStyled = styled.div`
  width: 64px;
  height: 64px;
  border: 1px solid ${({ theme }) => theme.colors.textSecondary};
  border-radius: 50%;
  margin-right: 16px;
`;
