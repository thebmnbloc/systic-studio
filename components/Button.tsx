import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  onClick?: () => void;
  icon?: React.ElementType;
  type?: 'button' | 'submit';
  disabled?: boolean; // ✅ Add this
}

export default function Button({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick, 
  icon: Icon,
  type = 'button',
  disabled // ✅ Add this
}: ButtonProps) {
  const baseStyle = "px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100"; // ✅ Add disabled styles
  const variants = {
    primary: "bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg shadow-emerald-500/20 hover:disabled:bg-emerald-500", // ✅ Prevent hover change when disabled
    secondary: "bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100",
    outline: "border-2 border-slate-200 dark:border-slate-700 hover:border-emerald-500 dark:hover:border-emerald-500 text-slate-600 dark:text-slate-300 hover:text-emerald-500 dark:hover:text-emerald-400"
  };

  return (
    <button 
      type={type} 
      onClick={onClick} 
      disabled={disabled} // ✅ Pass it here
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      {children}
      {Icon && <Icon size={18} />}
    </button>
  );
}