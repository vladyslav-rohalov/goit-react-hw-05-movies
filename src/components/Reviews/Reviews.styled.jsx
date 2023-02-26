import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding-bottom: 20px;
  padding-top: 20px;
  @media (min-width: 768px) {
    gap: 32px;
    padding-top: 28px;
    padding-bottom: 28px;
  }
  @media (min-width: 1280px) {
    gap: 16px;
    padding-top: 28px;
    padding-bottom: 28px;
  }
`;

export const Review = styled.li`
  display: flex;
  flex-direction: column;
  align-self: baseline;
  justify-content: space-between;
  width: 100%;
  padding: 8px
  border: 1px solid #eeeeee;
  transform: scale(1);
  transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  &:hover,
  &:focus {
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);
    transform: scale(1.03);
  }
`;

export const P = styled.p`
  text-align: center;
  font-weight: 500;
  font-size: 20px;
  padding-bottom: 40px;
`;

export const Author = styled.p`
  font-weight: 400;
  font-size: 18px;
  padding-bottom: 8px;
`;

export const Post = styled.p`
  font-weight: 400;
  font-size: 14px;
  text-align: justify;
`;
