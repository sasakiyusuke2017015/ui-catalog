import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import StatisticPanel, { type StatisticItem } from './StatisticPanel';

describe('StatisticPanel', () => {
  const mockItems: StatisticItem[] = [
    {
      statusDef: { code: 1, color: 'blue', shortLabel: '完了' },
      value: 10,
    },
    {
      statusDef: { code: 2, color: 'green', shortLabel: '進行中' },
      value: 5,
    },
  ];

  it('基本的なレンダリングができる', () => {
    const { container } = render(
      <StatisticPanel items={mockItems} totalValue={15} />
    );
    // コンポーネントはdata-testid="statistics-panel"を使用
    expect(container.querySelector('[data-testid="statistics-panel"]')).toBeInTheDocument();
  });

  it('items が表示される', () => {
    render(<StatisticPanel items={mockItems} totalValue={15} />);
    expect(screen.getByText('完了')).toBeInTheDocument();
    expect(screen.getByText('進行中')).toBeInTheDocument();
  });

  it('totalLabel が表示される', () => {
    render(
      <StatisticPanel items={mockItems} totalLabel="全" totalValue={15} />
    );
    expect(screen.getByText('全')).toBeInTheDocument();
  });

  it('totalValue が表示される', () => {
    render(
      <StatisticPanel items={mockItems} totalLabel="全" totalValue={15} />
    );
    expect(screen.getByText('15')).toBeInTheDocument();
  });

  it('totalUnit が表示される', () => {
    const { container } = render(
      <StatisticPanel
        items={mockItems}
        totalLabel="全"
        totalValue={15}
        totalUnit="件"
      />
    );
    expect(container.textContent).toContain('15件');
  });

  it('totalValue が 0 の場合、emptyMessage が表示される', () => {
    render(
      <StatisticPanel items={mockItems} totalValue={0} emptyMessage="データなし" />
    );
    expect(screen.getByText('データなし')).toBeInTheDocument();
  });

  it('totalValue が undefined の場合、emptyMessage が表示される', () => {
    render(
      <StatisticPanel items={mockItems} emptyMessage="該当データなし" />
    );
    expect(screen.getByText('該当データなし')).toBeInTheDocument();
  });

  it('loading=true の場合、LoadingZone が表示される', () => {
    render(
      <StatisticPanel items={mockItems} totalValue={15} loading={true} />
    );
    // LoadingZone が表示されるため、データは非表示
    expect(screen.queryByText('完了')).not.toBeInTheDocument();
  });

  it('pieChartData（後方互換）が使用できる', () => {
    const pieChartData = [
      { name: 'テスト', value: 10, color: '#3b82f6' },
    ];
    const { container } = render(
      <StatisticPanel pieChartData={pieChartData} totalValue={10} />
    );
    // コンポーネントはdata-testid="statistics-panel"を使用
    expect(container.querySelector('[data-testid="statistics-panel"]')).toBeInTheDocument();
  });

  it('statisticsItems（後方互換）が使用できる', () => {
    const statisticsItems = [
      {
        dotColor: 'bg-blue-500',
        label: '項目',
        labelColor: 'text-blue-600',
        value: 5,
        unit: '件',
      },
    ];
    render(
      <StatisticPanel statisticsItems={statisticsItems} totalValue={5} />
    );
    expect(screen.getByText('項目')).toBeInTheDocument();
  });
});
