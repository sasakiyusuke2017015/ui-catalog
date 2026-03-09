'use client';

/**
 * React Router 用 RouterAdapter 実装
 *
 * apps/storybook など React Router を使用するアプリケーション向け。
 */

import React from 'react';
import {
  Link as ReactRouterLink,
  useNavigate as useReactRouterNavigate,
  useLocation,
} from 'react-router-dom';

import type { RouterAdapter, LinkProps, NavigateFunction } from './types';

/**
 * React Router の Link をラップ
 */
const Link: React.FC<LinkProps> = ({
  href,
  children,
  className,
  style,
  onClick,
  ...rest
}) => {
  // data-* 属性を抽出
  const dataProps = Object.fromEntries(
    Object.entries(rest).filter(([key]) => key.startsWith('data-'))
  );

  return (
    <ReactRouterLink
      to={href}
      className={className}
      style={style}
      onClick={onClick}
      {...dataProps}
    >
      {children}
    </ReactRouterLink>
  );
};

/**
 * React Router の useNavigate をラップ
 */
const useNavigate = (): NavigateFunction => {
  const navigate = useReactRouterNavigate();

  return (path: string, options?: { replace?: boolean }) => {
    navigate(path, { replace: options?.replace });
  };
};

/**
 * React Router の useLocation().pathname をラップ
 */
const usePathname = (): string => {
  const location = useLocation();
  return location.pathname;
};

/**
 * React Router 用 RouterAdapter
 */
export const reactRouterAdapter: RouterAdapter = {
  Link,
  useNavigate,
  usePathname,
};

export default reactRouterAdapter;
