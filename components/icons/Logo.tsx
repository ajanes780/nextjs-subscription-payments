import Image from 'next/image';
import logo from "../../app/assets/rwlogo.png"
const Logo = ({ className = '', ...props }) => (
  <Image src={logo} alt="rw logo"  width={50} height={50}/>
);

export default Logo;
