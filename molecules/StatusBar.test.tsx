import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import StatusBar from './StatusBar';

describe('StatusBar', () => {
  it('メッセージが表示される', () => {
    render(<StatusBar message="接続完了" />);
    expect(screen.getByText('接続完了')).toBeInTheDocument();
  });

  it('messageが空の場合、何もレンダリングされない', () => {
    const { container } = render(<StatusBar message="" />);
    expect(container.querySelector('[data-component="status-bar"]')).not.toBeInTheDocument();
  });

  it('data-component属性が設定される', () => {
    const { container } = render(<StatusBar message="テスト" />);
    expect(container.querySelector('[data-component="status-bar"]')).toBeInTheDocument();
  });

  it('footer要素としてレンダリングされる', () => {
    render(<StatusBar message="テスト" />);
    expect(screen.getByText('テスト').tagName).toBe('FOOTER');
  });
});
