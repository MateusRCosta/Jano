"use client";

import clsx from 'clsx';
import Image from 'next/image';
import { InputHTMLAttributes, useState, useEffect } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    variant: 'default' | 'filled' | 'outlined';
    sizeUi?: 'sm' | 'md' | 'lg';
    icon?: string;
    bgColor?: 'bg-primary' | 'bg-secondary' | 'bg-transparent' | 'bg-white' ;
    textColor?: 'text-primary' | 'text-secondary' | 'text-transparent' | 'text-white' | 'text-black';
    borderColor?: 'border-primary' | 'border-secondary' | 'border-transparent' | 'border-white' | 'border-black';
    alt?: string;
}

export const Input = ({
    label,
    variant,
    bgColor = 'bg-transparent',
    textColor = 'text-black',
    borderColor = 'border-black',
    sizeUi = 'md',
    icon,
    alt,
    value,
    onChange,
    ...rest
}: InputProps) => {

    const [isFocused, setIsFocused] = useState(false);
    const [hasValue, setHasValue] = useState(false);

    useEffect(() => {
        if (value && String(value).trim() !== '') {
            setHasValue(true);
        } else {
            setHasValue(false);
        }
    }, [value]);

    const sizeUiClass = clsx({
        'h-8 px-2 text-sm': sizeUi === 'sm',
        'h-10 px-3 text-base': sizeUi === 'md',
        'h-12 px-4 text-lg': sizeUi === 'lg'
    });

    const containerClass = clsx(
        variant === 'default' ? `border-b-2 ${borderColor}` :
            variant === 'filled' ? `${bgColor}` :
                variant === 'outlined' ? `border-2 ${borderColor} rounded-lg` : ''
    );


    const wrapperClasses = `relative ${containerClass} ${textColor} w-full`

    const inputClasses = clsx(
        `bg-transparent w-full ${textColor} ${sizeUiClass} border-none focus:outline-none`,
        icon ? 'pl-6' : ''
    );

    const labelBaseClasses = `
    absolute pointer-events-none transition-all duration-200
    bg-transparent text-gray-600 ${bgColor}
  `;

    const labelPosition = clsx(
        'absolute left-2 transition-all duration-200',
        {
            'text-xs -top-3 bg-transparent px-2': isFocused || hasValue,
            'text-base top-1/2 transform -translate-y-1/2': !(isFocused || hasValue),
            'pl-6': !(isFocused || hasValue) && icon,
        }
    );

    return (
        <div className={wrapperClasses}>
            {icon && (
                <Image
                    width={16}
                    height={16}
                    src={icon}
                    alt={alt || 'Ícone input'}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 mr-4"
                />
            )}
            {label && (
                <label className={`${labelBaseClasses} ${labelPosition}`}>
                    {label}
                </label>
            )}
            <input
                className={inputClasses}
                value={value}
                onChange={onChange}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                {...rest}
            />
        </div>
    );
}