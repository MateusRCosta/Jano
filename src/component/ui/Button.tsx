import { HTMLAttributes } from "react";
import clsx from "clsx";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    size: 'sm' | 'md' | 'lg';
    bgColor: 'bg-primary' | 'bg-secondary' | 'bg-transparent';
    textColor: 'text-primary' | 'text-secondary' | 'text-transparent' | 'text-white' | 'text-black';
    borderColor: 'border-primary' | 'border-secondary' | 'border-transparent' | 'border-white' | 'border-black';
    hoverColor: 'bg-primary' | 'bg-secondary' | 'bg-transparent' | 'bg-white' | 'bg-black';
    variant: 'outlined' | 'default';
}

export const Button = ({
    size,
    bgColor,
    textColor,
    borderColor,
    hoverColor,
    className,
    variant,
    ...rest
}: ButtonProps) => {
    const sizeClass = clsx({
        'px-2 py-1 text-sm border': size === 'sm',
        'px-4 py-2 text-base border-2': size === 'md',
        'px-6 py-3 text-lg border-2': size === 'lg',
    });

    const variantClass = clsx(
        variant === 'outlined'
            ? 'bg-transparent'
            : `border-transparent border-none ${bgColor}`
    );
    const classes = clsx(
        'rounded transition-colors duration-300',
        'transition-shadow shadow-sm hover:shadow-lg cursor-pointer',
        sizeClass,
        variantClass,
        variant !== 'outlined' && bgColor,
        textColor,
        borderColor,
        hoverColor ? 'border-none hover:${hoverColor}':'',
        className
    );

    return (
        <button className={classes} {...rest} />
    );
};
