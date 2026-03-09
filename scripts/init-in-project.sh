#!/bin/bash
# ui-catalog を新規プロジェクトに導入するスクリプト
# 使用方法: curl -sSL <url>/init-in-project.sh | bash

set -e

UI_CATALOG_REPO="https://1on1.sdt-autolabo.com:8929/sasaki_yusuke/ui-catalog.git"

echo "=== ui-catalog セットアップ ==="
echo ""

# 1. Git リポジトリかどうか確認
if [ ! -d ".git" ]; then
  echo "❌ エラー: Git リポジトリではありません"
  echo "   git init を実行してからやり直してください"
  exit 1
fi

# 2. packages ディレクトリ確認
if [ -d "packages/ui-catalog" ]; then
  echo "❌ エラー: packages/ui-catalog は既に存在します"
  exit 1
fi

echo "1. ui-catalog を subtree として追加..."
git subtree add --prefix=packages/ui-catalog "$UI_CATALOG_REPO" main --squash

# 3. pnpm-workspace.yaml の作成/更新
echo "2. pnpm-workspace.yaml を設定..."
if [ ! -f "pnpm-workspace.yaml" ]; then
  cat > pnpm-workspace.yaml << 'EOF'
packages:
  - 'apps/*'
  - 'packages/*'
EOF
  echo "   ✅ pnpm-workspace.yaml を作成しました"
else
  if ! grep -q "packages/\*" pnpm-workspace.yaml; then
    echo "  - 'packages/*'" >> pnpm-workspace.yaml
    echo "   ✅ packages/* を追加しました"
  else
    echo "   ✅ pnpm-workspace.yaml は既に設定済みです"
  fi
fi

# 4. package.json に script を追加
echo "3. npm scripts を追加..."
if [ -f "package.json" ]; then
  if ! grep -q "ui:push" package.json; then
    # jq がある場合は使用、なければ手動追加を案内
    if command -v jq &> /dev/null; then
      tmp=$(mktemp)
      jq '.scripts["ui:push"] = "git subtree push --prefix=packages/ui-catalog '"$UI_CATALOG_REPO"' main" | .scripts["ui:pull"] = "git subtree pull --prefix=packages/ui-catalog '"$UI_CATALOG_REPO"' main --squash"' package.json > "$tmp" && mv "$tmp" package.json
      echo "   ✅ ui:push / ui:pull を追加しました"
    else
      echo "   ⚠️  jq がインストールされていません"
      echo "   以下を package.json の scripts に手動で追加してください:"
      echo ""
      echo '   "ui:push": "git subtree push --prefix=packages/ui-catalog '"$UI_CATALOG_REPO"' main",'
      echo '   "ui:pull": "git subtree pull --prefix=packages/ui-catalog '"$UI_CATALOG_REPO"' main --squash"'
    fi
  else
    echo "   ✅ ui:push / ui:pull は既に設定済みです"
  fi
else
  echo "   ⚠️  package.json が見つかりません"
fi

echo ""
echo "=== セットアップ完了 ==="
echo ""
echo "次のステップ:"
echo "  1. アプリの package.json に依存関係を追加:"
echo '     "@ui-catalog/core": "workspace:*"'
echo ""
echo "  2. 依存関係をインストール:"
echo "     pnpm install"
echo ""
echo "  3. 日常の同期:"
echo "     pnpm ui:pull   # 最新を取り込む"
echo "     pnpm ui:push   # 変更を push"
