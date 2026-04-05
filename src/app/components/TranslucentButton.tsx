import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface TranslucentButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export function TranslucentButton({
  children,
  onClick,
  variant = 'primary',
  className = ''
}: TranslucentButtonProps) {
  const isPrimary = variant === 'primary';

  return (
    <motion.button
      type="submit"
      whileTap={{
        scale: 0.96,
        y: 4,
        boxShadow: isPrimary
          ? '0 2px 16px rgba(59, 130, 246, 0.3), inset 0 -2px 4px rgba(0, 0, 0, 0.3)'
          : '0 2px 16px rgba(59, 130, 246, 0.15), inset 0 -2px 4px rgba(0, 0, 0, 0.15)'
      }}
      className={`
        relative px-8 py-4 rounded-2xl
        ${isPrimary
          ? 'bg-blue-500/90 text-white'
          : 'bg-white/90 text-[#1E3A8A] border-2 border-blue-500'
        }
        backdrop-blur-md
        overflow-hidden
        transition-all duration-200
        ${className}
      `}
      onClick={onClick}
      style={{
        boxShadow: isPrimary
          ? '0 8px 32px rgba(59, 130, 246, 0.5), inset 0 -4px 8px rgba(0, 0, 0, 0.2)'
          : '0 8px 32px rgba(59, 130, 246, 0.2), inset 0 -4px 8px rgba(0, 0, 0, 0.1)'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />
      <span className="relative z-10 font-medium">{children}</span>
    </motion.button>
  );
}
