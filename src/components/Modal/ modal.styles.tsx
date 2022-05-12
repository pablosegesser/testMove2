import styled from 'styled-components'

export const StyledModalBody = styled.div`
  padding: 20px 10px;
  overflow: scroll;
  height: 400px;
`

export const StyledModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 25px;
`

export const StyledModalTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 15px;
`

export const StyledModal = styled.div`
  background: white;
  width: 500px;
  height: 600px;
  border-radius: 15px;
  padding: 15px;
`
export const WrapperButtom = styled.div`
  display: flex;
  justify-content: center;
`
export const StyledModalOverlay = styled.div`
  position: fixed;
  z-index: 99999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`
