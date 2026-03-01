import { Button, ButtonProps } from '@chakra-ui/react';
import { Link, LinkProps, useMatchRoute } from '@tanstack/react-router';

interface Props extends Omit<ButtonProps, 'as'> {
  to: LinkProps['to'];
  children: React.ReactNode;
}

export const MenuButton = ({ to, children, ...props }: Props) => {
  const matchRoute = useMatchRoute();
  const isActive = !!matchRoute({ to, fuzzy: false });

  return (
    <Button
      as={Link}
      // @ts-expect-error: 'to' is valid when 'as' is Link
      to={to}
      variant="ghost"
      css={{
        color: isActive ? 'accent.500' : 'text.primary',
        fontWeight: 600,
        fontSize: '1rem',
        borderRadius: 8,
        px: '1.2rem',
        py: '0.5rem',
        transition: 'background 0.2s',
        _hover: {
          bg: 'bg.hover',
          color: 'accent.500',
        },
      }}
      {...props}
    >
      {children}
    </Button>
  );
};
