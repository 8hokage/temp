import React, { CSSProperties } from 'react';

interface IconInterface {
  link?: string;
  width?: number;
  height?: number;
  className?: string;
  style?: CSSProperties;
}

export const Icon: React.FC<IconInterface> = ({ link, width, height, className, style }) => (
  <object
    style={{fill: "red", stroke: "blue"}}
    className={className} 
    width="24" 
    height="24" 
    type="image/svg+xml" 
    data={link}
  >
  </object>
);

export const IconWallet = (props: IconInterface) => (
  <Icon {...props} link="../../assets/img/wallet.svg" />
)

export const IconExchange = (props: IconInterface) => (
  <Icon {...props} link="../../assets/img/exchange.svg" />
)