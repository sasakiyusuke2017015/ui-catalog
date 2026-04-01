import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Question from './Question';

describe('Question', () => {
  it('タイトルと内容が表示される', () => {
    render(
      <Question
        variant="textbox"
        questionId={1}
        title="お名前"
        content="お名前を入力してください"
        required={true}
        value=""
        onChange={() => {}}
      />
    );
    expect(screen.getByText('お名前')).toBeInTheDocument();
    expect(screen.getByText('お名前を入力してください')).toBeInTheDocument();
  });

  it('必須の場合「必須」ラベルが表示される', () => {
    render(
      <Question
        variant="textbox"
        questionId={1}
        title="テスト"
        content="内容"
        required={true}
        value=""
        onChange={() => {}}
      />
    );
    expect(screen.getByText('必須')).toBeInTheDocument();
  });

  it('任意の場合「任意」ラベルが表示される', () => {
    render(
      <Question
        variant="textbox"
        questionId={1}
        title="テスト"
        content="内容"
        required={false}
        value=""
        onChange={() => {}}
      />
    );
    expect(screen.getByText('任意')).toBeInTheDocument();
  });

  it('data-component属性とdata-variant属性が設定される', () => {
    const { container } = render(
      <Question
        variant="textarea"
        questionId={1}
        title="テスト"
        content="内容"
        required={false}
        value=""
        onChange={() => {}}
      />
    );
    const el = container.querySelector('[data-component="question"]');
    expect(el).toBeInTheDocument();
    expect(el).toHaveAttribute('data-variant', 'textarea');
  });
});
