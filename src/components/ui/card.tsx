import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '../../lib/utils';

type CardProps = React.HTMLAttributes<HTMLElement> & { asChild?: boolean };

export const Card = React.forwardRef<HTMLElement, CardProps>(({ className, asChild, ...props }, ref) => {
  const Comp = asChild ? Slot : 'article';
  return <Comp ref={ref as React.Ref<HTMLElement>} className={cn('ui-card', className)} {...props} />;
});
Card.displayName = 'Card';

export const CardHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => <div className={cn('ui-card__header', className)} {...props} />;
export const CardContent = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => <div className={cn('ui-card__content', className)} {...props} />;
export const CardFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => <div className={cn('ui-card__footer', className)} {...props} />;
