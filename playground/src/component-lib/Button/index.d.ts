import React from 'react';
interface ButtonProps {
    children: React.ReactNode | undefined;
    size: number | undefined;
    type: 'button' | 'submit' | 'reset' | undefined;
    disabled: boolean | undefined;
    uppercase: boolean | undefined;
    className: string | undefined;
    style: Object | undefined;
}
declare const Button: React.FC<ButtonProps>;
export { Button, ButtonProps };
