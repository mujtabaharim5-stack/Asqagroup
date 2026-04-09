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
      whileTap={{ scale: 0.95, y: 2 }}
      className={`
        relative px-8 py-3 rounded-xl overflow-hidden
        ${isPrimary
          ? 'bg-gradient-to-br from-blue-500/90 to-blue-600/90 text-white'
          : 'bg-white/80 text-[#1E3A8A] border-2 border-blue-500/30'
        }
        backdrop-blur-md
        shadow-[0_8px_32px_rgba(30,58,138,0.3),0_2px_8px_rgba(30,58,138,0.2)]
        hover:shadow-[0_12px_40px_rgba(30,58,138,0.4),0_4px_12px_rgba(30,58,138,0.3)]
        active:shadow-[0_4px_16px_rgba(30,58,138,0.3),0_1px_4px_rgba(30,58,138,0.2)]
        transition-all duration-200
        ${className}
      `}
      onClick={onClick}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-white/10" />
      <div className="relative z-10 font-medium">
        {children}
      </div>
    </motion.button>
  );
}
