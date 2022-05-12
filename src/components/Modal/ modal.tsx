import ReactDOM from 'react-dom'
import { Button } from '../../styles/globalStyle'
import {
  StyledModalBody,
  StyledModalHeader,
  StyledModalTitle,
  StyledModal,
  WrapperButtom,
  StyledModalOverlay,
} from './ modal.styles'

const Modal = ({ show, onClose, children, title, onClickSave }: any) => {
  const handleCloseClick = (e: any) => {
    e.preventDefault()
    onClose()
  }

  const modalContent = show ? (
    <StyledModalOverlay>
      <StyledModal>
        <StyledModalHeader>
          <Button
            className="without-border  small-desktop small-bottom-gap "
            onClick={handleCloseClick}
            type="button"
          >
            x
          </Button>
        </StyledModalHeader>
        {title && <StyledModalTitle>{title}</StyledModalTitle>}
        <StyledModalBody>{children}</StyledModalBody>
        <WrapperButtom>
          <Button
            type="button"
            onClick={onClickSave}
            className="secondary medium-desktop small-bottom-gap "
          >
            Save
          </Button>
        </WrapperButtom>
      </StyledModal>
    </StyledModalOverlay>
  ) : null

  const content = document.querySelector('#modal-root')
  return content ? ReactDOM.createPortal(modalContent, content) : null
}

export default Modal
