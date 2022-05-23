
interface IconProps {
  stroke: string;
}

const ShopIcon  = ({stroke}: IconProps) => {
  
  return (
<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.87554 7.86696C2.94558 6.81637 3.81818 6 4.87111 6H17.1289C18.1818 6 19.0544 6.81637 19.1245 7.86696L19.8578 18.867C19.9348 20.0213 19.0192 21 17.8622 21H4.13777C2.98084 21 2.06524 20.0213 2.1422 18.867L2.87554 7.86696Z" stroke={stroke} stroke-width="2"/>
<path d="M14 8V4C14 2.34315 12.6569 1 11 1V1C9.34315 1 8 2.34315 8 4V8" stroke={stroke} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


  )
}


export default ShopIcon