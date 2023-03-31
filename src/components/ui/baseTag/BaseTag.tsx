import React from 'react';
import './index.scss';

type BaseTagProps = {
  className?: string;
  value: string;
};

export default function BaseTag({ className, value }: BaseTagProps) {
  return (
    <div className={`base-tag text--xs ${className}`}>
      <div className="base-tag__line"></div>
      <div className={`base-tag__text-container ${className}`}>
        <p>{value}</p>
      </div>
    </div>
  );
}
