import React from "react";

export interface DetailHeaderField {
  label: string;
  value: React.ReactNode;
  /** クリック時のハンドラ（値をリンク風にする） */
  onClick?: () => void;
  /** モノスペースフォントで表示 */
  mono?: boolean;
}

export interface DetailHeaderAction {
  label: string;
  onClick: () => void;
  variant?: "primary" | "default" | "outline" | "danger";
  icon?: React.ReactNode;
  disabled?: boolean;
}

export interface DetailHeaderProps {
  /** タイトル左のアイコン */
  icon?: React.ReactNode;
  /** タイトル */
  title: string;
  /** タイトル右のバッジ等 */
  badge?: React.ReactNode;
  /** 情報フィールド */
  fields: DetailHeaderField[];
  /** アクションボタン */
  actions?: DetailHeaderAction[];
  /** レイアウトバリアント */
  variant?: "compact" | "split" | "minimal";
}

/** コンパクト: 1カード、縦積みラベル・値 + ボタン行 */
function CompactLayout({ icon, title, badge, fields, actions }: DetailHeaderProps) {
  return (
    <div className="bg-(--color-card-bg) shadow rounded-lg p-4" data-component="detail-header" data-variant="compact">
      {/* タイトル行 */}
      <div className="flex items-center gap-2 mb-3">
        {icon && <span className="text-[18px] shrink-0">{icon}</span>}
        <h2 className="text-[16px] font-bold text-(--color-text) truncate">{title}</h2>
        {badge}
      </div>

      {/* フィールド */}
      <div className="flex flex-col gap-1.5 mb-3">
        {fields.map((f, i) => (
          <div key={i} className="flex items-baseline gap-2 text-[12px]">
            <span className="w-20 text-(--color-text-muted) shrink-0">{f.label}</span>
            {f.onClick ? (
              <button
                type="button"
                className={`text-(--color-accent) hover:underline cursor-pointer truncate text-left ${f.mono ? "font-mono" : ""}`}
                onClick={f.onClick}
              >
                {f.value}
              </button>
            ) : (
              <span className={`text-(--color-text) truncate ${f.mono ? "font-mono" : ""}`}>
                {f.value}
              </span>
            )}
          </div>
        ))}
      </div>

      {/* アクション */}
      {actions && actions.length > 0 && (
        <div className="flex flex-wrap gap-2 pt-2 border-t border-(--color-border)">
          {actions.map((a, i) => (
            <button
              key={i}
              type="button"
              disabled={a.disabled}
              className={`px-3 py-1 text-[12px] rounded font-medium transition-colors ${
                a.disabled
                  ? "opacity-50 cursor-not-allowed"
                  : `cursor-pointer ${
                      a.variant === "danger"
                        ? "bg-(--color-error) text-white hover:opacity-90"
                        : a.variant === "primary"
                          ? "bg-(--color-accent) text-white hover:opacity-90"
                          : a.variant === "outline"
                            ? "border border-(--color-border) text-(--color-text) hover:bg-(--color-hover-bg)"
                            : "bg-(--color-bg) text-(--color-text) hover:bg-(--color-hover-bg)"
                    }`
              }`}
              onClick={a.disabled ? undefined : a.onClick}
            >
              <span className="flex items-center gap-1.5">
                {a.icon}
                {a.label}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/** スプリット: 左に情報、右にアクション */
function SplitLayout({ icon, title, badge, fields, actions }: DetailHeaderProps) {
  return (
    <div className="bg-(--color-card-bg) shadow rounded-lg p-4" data-component="detail-header" data-variant="split">
      <div className="flex gap-4">
        {/* 左: タイトル + フィールド */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            {icon && <span className="text-[18px] shrink-0">{icon}</span>}
            <h2 className="text-[16px] font-bold text-(--color-text) truncate">{title}</h2>
            {badge}
          </div>
          <div className="flex flex-col gap-1">
            {fields.map((f, i) => (
              <div key={i} className="flex items-baseline gap-2 text-[12px]">
                <span className="w-20 text-(--color-text-muted) shrink-0">{f.label}</span>
                {f.onClick ? (
                  <button
                    type="button"
                    className={`text-(--color-accent) hover:underline cursor-pointer truncate text-left ${f.mono ? "font-mono" : ""}`}
                    onClick={f.onClick}
                  >
                    {f.value}
                  </button>
                ) : (
                  <span className={`text-(--color-text) truncate ${f.mono ? "font-mono" : ""}`}>
                    {f.value}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 右: アクション（縦積み） */}
        {actions && actions.length > 0 && (
          <div className="flex flex-col gap-1.5 shrink-0">
            {actions.map((a, i) => (
              <button
                key={i}
                type="button"
                disabled={a.disabled}
                className={`px-3 py-1.5 text-[12px] rounded font-medium transition-colors whitespace-nowrap ${
                  a.disabled
                    ? "opacity-50 cursor-not-allowed"
                    : `cursor-pointer ${
                        a.variant === "danger"
                          ? "bg-(--color-error) text-white hover:opacity-90"
                          : a.variant === "primary"
                            ? "bg-(--color-accent) text-white hover:opacity-90"
                            : a.variant === "outline"
                              ? "border border-(--color-border) text-(--color-text) hover:bg-(--color-hover-bg)"
                              : "bg-(--color-bg) text-(--color-text) hover:bg-(--color-hover-bg)"
                      }`
                }`}
                onClick={a.disabled ? undefined : a.onClick}
              >
                <span className="flex items-center gap-1.5">
                  {a.icon}
                  {a.label}
                </span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/** ミニマル: ボーダーレス、超軽量 */
function MinimalLayout({ icon, title, badge, fields, actions }: DetailHeaderProps) {
  return (
    <div className="px-2 py-3" data-component="detail-header" data-variant="minimal">
      {/* タイトル + バッジ + プライマリアクション */}
      <div className="flex items-center gap-2 mb-2">
        {icon && <span className="text-[16px] shrink-0">{icon}</span>}
        <h2 className="text-[15px] font-bold text-(--color-text) truncate">{title}</h2>
        {badge}
        {actions && actions.length > 0 && (
          <div className="flex gap-1.5 ml-auto shrink-0">
            {actions.map((a, i) => (
              <button
                key={i}
                type="button"
                disabled={a.disabled}
                className={`group/action px-2.5 py-1 text-[11px] rounded font-medium transition-colors ${
                  a.disabled
                    ? "opacity-50 cursor-not-allowed"
                    : `cursor-pointer ${
                        a.variant === "danger"
                          ? "bg-(--color-error) text-white hover:opacity-90"
                          : a.variant === "primary"
                            ? "bg-(--color-accent) text-white hover:opacity-90"
                            : a.variant === "outline"
                              ? "border border-(--color-border) text-(--color-text-muted) hover:bg-(--color-hover-bg)"
                              : "text-(--color-text-muted) hover:bg-(--color-hover-bg)"
                      }`
                }`}
                onClick={a.disabled ? undefined : a.onClick}
              >
                <span className={`flex items-center gap-1 transition-transform ${a.disabled ? "" : "group-hover/action:scale-125"}`}>
                  {a.icon}
                  {a.label}
                </span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* フィールド */}
      <div className="flex flex-col gap-0.5 text-[11px]">
        {fields.map((f, i) => (
          <span key={i} className="flex items-baseline gap-1">
            <span className="text-(--color-text-muted)">{f.label}:</span>
            {f.onClick ? (
              <button
                type="button"
                className={`text-(--color-accent) hover:underline cursor-pointer ${f.mono ? "font-mono" : ""}`}
                onClick={f.onClick}
              >
                {f.value}
              </button>
            ) : (
              <span className={`text-(--color-text) ${f.mono ? "font-mono" : ""}`}>
                {f.value}
              </span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function DetailHeader(props: DetailHeaderProps) {
  const { variant = "compact" } = props;
  switch (variant) {
    case "split":
      return <SplitLayout {...props} />;
    case "minimal":
      return <MinimalLayout {...props} />;
    default:
      return <CompactLayout {...props} />;
  }
}
