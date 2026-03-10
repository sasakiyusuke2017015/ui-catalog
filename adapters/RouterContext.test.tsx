import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { RouterProvider, useRouterAdapter } from './RouterContext';
import type { RouterAdapter } from './types';

const mockAdapter: RouterAdapter = {
  Link: ({ children, href, ...props }) => <a href={href} {...props}>{children}</a>,
  useNavigate: () => () => {},
  usePathname: () => '/',
};

function TestConsumer() {
  const adapter = useRouterAdapter();
  return <div>adapter: {adapter ? 'found' : 'not found'}</div>;
}

describe('RouterContext', () => {
  it('RouterProviderの子要素が表示される', () => {
    render(
      <RouterProvider adapter={mockAdapter}>
        <div>子要素</div>
      </RouterProvider>
    );
    expect(screen.getByText('子要素')).toBeInTheDocument();
  });

  it('useRouterAdapterでadapterが取得できる', () => {
    render(
      <RouterProvider adapter={mockAdapter}>
        <TestConsumer />
      </RouterProvider>
    );
    expect(screen.getByText('adapter: found')).toBeInTheDocument();
  });

  it('RouterProvider外でuseRouterAdapterを使用するとエラーが発生する', () => {
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    expect(() => render(<TestConsumer />)).toThrow('useRouterAdapter must be used within a RouterProvider');
    consoleSpy.mockRestore();
  });
});
