import logo from "@/assets/logo.png";
import size from "@/types/size";

import styles from "./Logo.module.css";

interface LogoProps {
  logoSize?: size;
}

export default function Logo({ logoSize }: LogoProps) {
  const getSize = () => {
    switch (logoSize) {
      case size.SMALL:
        return styles.logoSmall;
      case size.MEDIUM:
        return styles.logoMedium;
      case size.LARGE:
        return styles.logoLarge;
      default:
        return styles.logoMedium;
    }
  };

  return <img className={getSize()} src={logo} alt="logo" data-testid="logo" />;
}
