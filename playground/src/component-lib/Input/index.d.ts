import React from 'react';
interface InputProps {
    children: React.ReactNode | undefined;
    placeholder: string | undefined;
    label: string | undefined;
    type: string | undefined;
    regexes: Array<{
        regex: string | object;
        message: string | undefined;
    }> | undefined;
    defaultValue: string | undefined;
    required: boolean | undefined;
    fixed: boolean | undefined;
    minChar: number | undefined;
    maxChar: number | undefined;
    style: object | undefined;
    className: string | undefined;
    labelStyle: object | undefined;
    labelClassName: string | undefined;
    onChange: Function;
}
declare const Input: React.FC<InputProps>;
export { Input, InputProps };
