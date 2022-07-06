import React from 'react';
interface ColProps {
    children: React.ReactNode;
    span: number | string | Array<number | string>;
    offset: number | string | Array<number | string>;
    gutter: number | string;
    animate: boolean;
    className: string;
    style: Object;
    column: number;
}
declare const Col: React.FC<ColProps>;
export { Col, ColProps };
