/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-use-before-define */
import React from 'react'
import { Button } from '../styles/globalStyle'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
text: string
className: string
onClick?: React.MouseEventHandler<HTMLButtonElement>
icon?: any
}
const ButtonForm: React.FC<ButtonProps> = ({
text,
icon,
type,
onClick = (): void => {},
className,
...props
}: any) => (
<Button type={type} className={className} onClick={onClick} {...props}>
{icon}
{text}
</Button>
)
export default ButtonForm