import styled from 'styled-components'

export const HeaderLayout = styled.div`
  width: 100%;
  height: 88px;
  z-index: 9999;
  top: 0;
  box-shadow: 0 0 5px #8b949e;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.bgColor.header};
  color: ${({ theme }) => theme.fontColor.header};
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  transition: all 0.5s ease;
  font-family: Arial;
  font-size: 18px;
  font-weight: 700;
  line-height:13.8px;
  justify-content: center;

`
