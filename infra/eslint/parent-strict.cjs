/**
 * 親アプリの src/ui/ ゾーンを ui-catalog 規約で縛るための ESLint 設定。
 *
 * 親アプリ側の使い方（例）:
 *
 *   // .eslintrc.cjs
 *   module.exports = {
 *     overrides: [
 *       {
 *         files: ['apps/*\/src/ui/**\/*.{ts,tsx}'],
 *         extends: ['./packages/ui-catalog/infra/eslint/parent-strict.cjs'],
 *       },
 *     ],
 *   }
 *
 * 縛るもの:
 *   - 深い import 禁止（ui-catalog の内部実装に依存しない）
 *   - 親アプリ固有モジュールの import 禁止（業務ロジック混入の防止）
 *   - Tailwind の className 禁止（SCSS Module を強制）
 *
 * 縛らないもの（現状）:
 *   - 依存方向違反（atoms → molecules）— カスタムルールが必要、後日
 *   - ビジネスロジック検出（fetch / axios 禁止）— 親アプリ依存度が高い、後日
 */

module.exports = {
  rules: {
    // ui-catalog の公開 entry より深い import を禁止する
    'no-restricted-imports': [
      'error',
      {
        patterns: [
          {
            group: ['@ui-catalog/core/*/*'],
            message:
              'ui-catalog の深い内部パスへの import は禁止。公開 entry（@ui-catalog/core/atoms など）を使ってください。',
          },
          {
            group: ['@/*', '~/*'],
            message:
              'src/ui/ 配下では親アプリ固有モジュールの import を禁止。業務ロジックは props で受け取ってください。',
          },
        ],
      },
    ],

    // Tailwind class の使用を簡易検出（className に空白区切りの英数字が並ぶケース）
    // 厳密ではないが、初手として目立つ Tailwind 直書きを止める
    'no-restricted-syntax': [
      'warn',
      {
        selector:
          "JSXAttribute[name.name='className'] Literal[value=/\\b(flex|grid|p-\\d|m-\\d|w-\\d|h-\\d|text-\\w+|bg-\\w+)\\b/]",
        message:
          'src/ui/ 配下では Tailwind class の直書きを避け、SCSS Module を使ってください。',
      },
    ],
  },
}
