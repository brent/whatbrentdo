import React from 'react';

export const Emoji = ({ className='', label, symbol }) => (
  <span
    className={className}
    role="img"
    aria-label={label ? label: ""}
    aria-hidden={label ? "false" : "true"}
  >
    {symbol}
  </span>
);
