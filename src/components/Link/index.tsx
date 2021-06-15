import { Link as RouterLink } from 'react-router-dom';
import { Wrapper } from './styles';

type LinkProps = {
  href?: string;
  url?: boolean;
  children?: React.ReactNode | JSX.Element | string;
  color?:
    | 'client'
    | 'productOwner'
    | 'developer'
    | 'admin'
    | 'success'
    | 'warning'
    | 'error'
    | 'black'
    | 'white'
    | string;
  selected?: boolean;
  className?: string;
  iconLeft?: React.SVGProps<SVGSVGElement>;
  onClick?: () => void;
  target?: '_self' | '_blank';
};

const Link = ({
  href,
  url = false,
  children,
  iconLeft,
  selected = false,
  target = '_self',
  ...props
}: LinkProps) => {
  return (
    <Wrapper {...props} selected={selected}>
      {href && !url ? (
        <RouterLink to={href} target={target}>
          {iconLeft && <span className='icon left'>{iconLeft}</span>}
          {children}
        </RouterLink>
      ) : (
        <a href={href} target={target}>
          {iconLeft && <span className='icon left'>{iconLeft}</span>}
          {children}
        </a>
      )}
    </Wrapper>
  );
};

export default Link;
