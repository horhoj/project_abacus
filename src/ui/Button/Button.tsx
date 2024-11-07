import { ButtonHTMLAttributes, ReactNode, forwardRef } from 'react';
import classNames from 'classnames';
import styles from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  isActive?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ isActive, children, className, ...props }, ref) => {
  return (
    <button {...props} className={classNames(styles.Button, className, isActive && styles.isActive)} ref={ref}>
      {children}
    </button>
  );
});

Button.displayName = 'Button';
