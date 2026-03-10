import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Card } from './Card';

describe('Card', () => {
  it('子要素が表示される', () => {
    render(<Card>カード内容</Card>);
    expect(screen.getByText('カード内容')).toBeInTheDocument();
  });

  it('data-component属性が設定される', () => {
    const { container } = render(<Card>内容</Card>);
    expect(container.querySelector('[data-component="card"]')).toBeInTheDocument();
  });

  it('onClickが指定された場合、role="button"が付与される', () => {
    const { container } = render(<Card onClick={() => {}}>クリッカブル</Card>);
    const card = container.querySelector('[data-component="card"]');
    expect(card).toHaveAttribute('role', 'button');
  });

  it('onClickが未指定の場合、role属性は付与されない', () => {
    const { container } = render(<Card>通常</Card>);
    const card = container.querySelector('[data-component="card"]');
    expect(card).not.toHaveAttribute('role');
  });

  it('クリック時にonClickが呼ばれる', async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();
    render(<Card onClick={handleClick}>クリック</Card>);
    await user.click(screen.getByText('クリック'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('カスタムclassNameが適用される', () => {
    const { container } = render(<Card className="custom-class">内容</Card>);
    const card = container.querySelector('[data-component="card"]');
    expect(card).toHaveClass('custom-class');
  });
});
