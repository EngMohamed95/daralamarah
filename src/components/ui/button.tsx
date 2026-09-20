import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

export const buttonVariants = cva('ui-button', {
  variants: {
    variant: {
      default: 'ui-button--default',
      secondary: 'ui-button--secondary',
      outline: 'ui-button--outline',
      ghost: 'ui-button--ghost',
      whatsapp: 'ui-button--whatsapp',
    },
    size: {
      default: 'ui-button--md',
      sm: 'ui-button--sm',
      lg: 'ui-button--lg',
      icon: 'ui-button--icon',
    },
  },
  defaultVariants: { variant: 'default', size: 'default' },
});

export interface UIButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const UIButton = React.forwardRef<HTMLButtonElement, UIButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return <Comp className={cn(buttonVariants({ variant, size }), className)} ref={ref} {...props} />;
  },
);
UIButton.displayName = 'UIButton';
