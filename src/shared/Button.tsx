import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type PropsType = DefaultButtonPropsType

export const Button: React.FC<PropsType> = (props) => {
    return (
        <button className={'button' + (props.disabled ? ' disabled' : ' default')} {...props}/>
    );
};

