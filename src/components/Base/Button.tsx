import { ReactNode } from 'react';

interface IButtonProps {
  style?: {};
  onClick?: Function | any;
  children?: ReactNode;
  className?: string;
  autoFocus?: boolean | undefined;
  disabled?: boolean | undefined;
  form?: string | undefined;
  formAction?: string | undefined;
  formEncType?: string | undefined;
  formMethod?: string | undefined;
  formNoValidate?: boolean | undefined;
  formTarget?: string | undefined;
  name?: string | undefined;
  type?: 'submit' | 'reset' | 'button' | undefined;
  value?: string | ReadonlyArray<string> | number | undefined;
}

function Button({
  onClick,
  className,
  style,
  children,
  disabled,
}: IButtonProps) {
  return (
    <button
      disabled={disabled}
      style={style}
      onClick={onClick}
      className={`focus:outline-none text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-900 ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
