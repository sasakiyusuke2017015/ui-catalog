/**
 * 統合質問コンポーネント
 * variantプロパティで質問の種類を切り替え
 */
import { FC } from 'react';

import { useOperationLog } from '../../../infra/devtools';

import type { QuestionProps } from './types';

/**
 * 統合質問コンポーネント
 * variantで質問の種類を切り替え、各種UIを内部で実装
 */
const Question: FC<QuestionProps> = ({
  variant,
  questionId,
  title,
  content,
  required,
  value,
  onChange,
  disabled = false,
  options = [],
  error,
  borderRadius = '0.375rem', // デフォルト値
  focusBorderColor: customFocusBorderColor = '#3b82f6', // デフォルト値（blue-500）
  focusRingColor: customFocusRingColor = '#93c5fd', // デフォルト値（blue-300）
  accentBgColor = '#3b82f6', // デフォルト値（blue-500）
  accentContrastText = '#ffffff', // デフォルト値（white）
  secondaryBgColorHover = '#e0e7ff', // デフォルト値（indigo-100）
}) => {
  const log = useOperationLog('Question');
  // エラー時のボーダースタイル
  const errorBorderClass = error ? 'border-red-500' : 'border-gray-300';

  // フォーカス時の色
  const focusBorderColor = error ? '#ef4444' : customFocusBorderColor;
  const focusRingColor = error ? '#ef4444' : customFocusRingColor;

  // 入力欄のフォーカスハンドラ
  const handleInputFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.target.style.borderColor = focusBorderColor;
    e.target.style.boxShadow = `0 0 0 1px ${focusRingColor}`;
    e.target.style.outline = 'none';
  };

  const handleInputBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.target.style.borderColor = error ? '#ef4444' : '#d1d5db';
    e.target.style.boxShadow = 'none';
  };
  // チェックボックス用のハンドラ
  const handleCheckboxChange = (option: string, checked: boolean) => {
    log('change', { variant: 'checkbox', questionId, option, checked });
    const selectedValues = value ? value.split(',') : [];
    let newValues: string[];
    if (checked) {
      newValues = [...selectedValues, option];
    } else {
      newValues = selectedValues.filter((v) => v !== option);
    }
    onChange(newValues.join(','));
  };

  // 電話番号・郵便番号用のハンドラ（数字とハイフンのみ許可）
  const handleNumericChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value.replace(/[^\d-]/g, '');
    log('change', { variant, questionId, value: newValue });
    onChange(newValue);
  };

  // 入力欄部分をvariantに応じてレンダリング
  const renderInputField = () => {
    switch (variant) {
      case 'textbox':
        return (
          <div className="bg-gray-50 p-3" style={{ borderRadius: borderRadius }}>
            <div className="mt-2">
              <input
                type="text"
                name={`question_${questionId}`}
                value={value}
                onChange={(e) => {
                  log('change', { variant, questionId, value: e.target.value });
                  onChange(e.target.value);
                }}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                disabled={disabled}
                placeholder="回答を入力してください"
                className={`w-full border-2 ${errorBorderClass} px-3 py-2 text-fluid-sm text-gray-700 placeholder-gray-400 transition-colors duration-200 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-500`}
                style={{ borderRadius: borderRadius }}
              />
              {error && (
                <p className="mt-1 text-fluid-sm text-red-600">{error}</p>
              )}
            </div>
          </div>
        );

      case 'textarea':
        return (
          <div className="bg-gray-50 p-3" style={{ borderRadius: borderRadius }}>
            <div className="mt-2">
              <textarea
                name={`question_${questionId}`}
                value={value}
                onChange={(e) => {
                  log('change', { variant, questionId, value: e.target.value });
                  onChange(e.target.value);
                }}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                disabled={disabled}
                placeholder="回答を入力してください"
                rows={6}
                className={`w-full border-2 ${errorBorderClass} px-3 py-2 text-fluid-sm text-gray-700 placeholder-gray-400 transition-colors duration-200 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-500`}
                style={{ borderRadius: borderRadius }}
              />
              {error && (
                <p className="mt-1 text-fluid-sm text-red-600">{error}</p>
              )}
            </div>
          </div>
        );

      case 'radio':
        return (
          <div
            className={`p-3 ${error ? 'border-2 border-red-500 bg-red-50' : 'bg-gray-50'}`}
            style={{ borderRadius: borderRadius }}
          >
            <div className="grid grid-cols-1 gap-y-2 md:grid-cols-2 lg:grid-cols-3">
              {options.map((option, index) => {
                const optionId = `opt_${questionId}_${index}`;
                const isSelected = value === option;
                return (
                  <div key={optionId} className="my-2">
                    <label
                      className={`
                        flex items-center px-3 py-2
                        transition-all duration-200 ease-out
                        ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}
                      `}
                      style={{
                        borderRadius: borderRadius,
                        backgroundColor: isSelected ? accentBgColor : undefined,
                        color: isSelected ? accentContrastText : undefined,
                      }}
                      onMouseEnter={(e) => {
                        if (!isSelected && !disabled) {
                          e.currentTarget.style.backgroundColor = secondaryBgColorHover;
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isSelected && !disabled) {
                          e.currentTarget.style.backgroundColor = '';
                        }
                      }}
                    >
                      <input
                        type="radio"
                        id={optionId}
                        name={`question_${questionId}`}
                        value={option}
                        checked={isSelected}
                        onChange={(e) => {
                  log('change', { variant, questionId, value: e.target.value });
                  onChange(e.target.value);
                }}
                        disabled={disabled}
                        className="h-4 w-4 border-gray-300 disabled:cursor-not-allowed disabled:opacity-50"
                        style={{ accentColor: accentBgColor }}
                      />
                      <span
                        className={`ml-2 text-fluid-sm transition-colors duration-200 ${
                          isSelected ? 'font-medium' : disabled ? 'text-gray-500' : 'text-gray-700'
                        }`}
                        style={{ color: isSelected ? accentContrastText : undefined }}
                      >
                        {option}
                      </span>
                    </label>
                  </div>
                );
              })}
            </div>
            {error && (
              <p className="mt-2 text-fluid-sm font-semibold text-red-600">{error}</p>
            )}
          </div>
        );

      case 'select':
        return (
          <div className="bg-gray-50 p-3" style={{ borderRadius: borderRadius }}>
            <div className="mt-2">
              <select
                name={`question_${questionId}`}
                value={value}
                onChange={(e) => {
                  log('change', { variant, questionId, value: e.target.value });
                  onChange(e.target.value);
                }}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                disabled={disabled}
                className={`w-full border ${errorBorderClass} px-3 py-2 text-fluid-sm text-gray-700 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-500`}
                style={{ borderRadius: borderRadius }}
              >
                <option value="">選択してください</option>
                {options.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {error && (
                <p className="mt-1 text-fluid-sm text-red-600">{error}</p>
              )}
            </div>
          </div>
        );

      case 'checkbox': {
        const selectedValues = value ? value.split(',') : [];
        return (
          <div
            className={`p-3 ${error ? 'border-2 border-red-500 bg-red-50' : 'bg-gray-50'}`}
            style={{ borderRadius: borderRadius }}
          >
            <div className="grid grid-cols-1 gap-y-2 md:grid-cols-2 lg:grid-cols-3">
              {options.map((option, index) => {
                const optionId = `opt_${questionId}_${index}`;
                const isChecked = selectedValues.includes(option);
                return (
                  <div key={optionId} className="my-2">
                    <label
                      className={`
                        flex items-center px-3 py-2
                        transition-all duration-200 ease-out
                        ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}
                      `}
                      style={{
                        borderRadius: borderRadius,
                        backgroundColor: isChecked ? accentBgColor : undefined,
                        color: isChecked ? accentContrastText : undefined,
                      }}
                      onMouseEnter={(e) => {
                        if (!isChecked && !disabled) {
                          e.currentTarget.style.backgroundColor = secondaryBgColorHover;
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isChecked && !disabled) {
                          e.currentTarget.style.backgroundColor = '';
                        }
                      }}
                    >
                      <input
                        type="checkbox"
                        id={optionId}
                        name={`question_${questionId}`}
                        value={option}
                        checked={isChecked}
                        onChange={(e) =>
                          handleCheckboxChange(option, e.target.checked)
                        }
                        disabled={disabled}
                        className="h-4 w-4 border-gray-300 disabled:cursor-not-allowed disabled:opacity-50"
                        style={{ accentColor: accentBgColor, borderRadius: borderRadius }}
                      />
                      <span
                        className={`ml-2 text-fluid-sm transition-colors duration-200 ${
                          isChecked ? 'font-medium' : disabled ? 'text-gray-500' : 'text-gray-700'
                        }`}
                        style={{ color: isChecked ? accentContrastText : undefined }}
                      >
                        {option}
                      </span>
                    </label>
                  </div>
                );
              })}
            </div>
            {error && (
              <p className="mt-2 text-fluid-sm font-semibold text-red-600">{error}</p>
            )}
          </div>
        );
      }

      case 'phone':
        return (
          <div className="bg-gray-50 p-3" style={{ borderRadius: borderRadius }}>
            <div className="mt-2">
              <input
                type="tel"
                name={`question_${questionId}`}
                value={value}
                onChange={handleNumericChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                disabled={disabled}
                placeholder="例: 03-1234-5678 または 090-1234-5678"
                className={`w-full border ${errorBorderClass} px-3 py-2 text-fluid-sm text-gray-700 placeholder-gray-400 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-500`}
                style={{ borderRadius: borderRadius }}
              />
              {error ? (
                <p className="mt-1 text-fluid-sm text-red-600">{error}</p>
              ) : (
                <p className="mt-1 text-fluid-xs text-gray-500">
                  ハイフン（-）を含めて入力してください
                </p>
              )}
            </div>
          </div>
        );

      case 'postalcode':
        return (
          <div className="bg-gray-50 p-3" style={{ borderRadius: borderRadius }}>
            <div className="mt-2">
              <input
                type="text"
                name={`question_${questionId}`}
                value={value}
                onChange={handleNumericChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                disabled={disabled}
                placeholder="例: 123-4567 または 1234567"
                maxLength={8}
                className={`w-full border ${errorBorderClass} px-3 py-2 text-fluid-sm text-gray-700 placeholder-gray-400 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-500`}
                style={{ borderRadius: borderRadius }}
              />
              {error ? (
                <p className="mt-1 text-fluid-sm text-red-600">{error}</p>
              ) : (
                <p className="mt-1 text-fluid-xs text-gray-500">
                  7桁の数字で入力してください（ハイフンあり・なし両方可）
                </p>
              )}
            </div>
          </div>
        );

      default:
        return (
          <div
            className="border-2 border-red-500 bg-red-50 p-3 text-red-700"
            style={{ borderRadius: borderRadius }}
          >
            <strong>エラー:</strong> 未対応の質問タイプ「{variant}」が指定されました。
          </div>
        );
    }
  };

  return (
    <div
      className="mb-6 border border-gray-200 bg-white p-3 shadow-sm"
      style={{ borderRadius: borderRadius }}
      data-component="question"
      data-variant={variant}
    >
      {/* 質問タイトル */}
      <div className="mb-2">
        <p className="font-semibold text-gray-900">
          {required ? (
            <span
              className="mr-2 bg-red-100 px-2 py-1 text-fluid-xs font-semibold text-red-800"
              style={{ borderRadius: borderRadius }}
            >
              必須
            </span>
          ) : (
            <span
              className="mr-2 px-2 py-1 text-fluid-xs font-semibold"
              style={{
                borderRadius: borderRadius,
                backgroundColor: accentBgColor,
                color: accentContrastText,
              }}
            >
              任意
            </span>
          )}
          {title}
        </p>
      </div>

      {/* 質問内容 */}
      <div className="mb-4">
        <p className="whitespace-pre-wrap text-gray-700">
          <i className="bi bi-quora mr-1 text-blue-600"></i>
          {content}
        </p>
      </div>

      {/* 入力欄（variantに応じて切り替え） */}
      {renderInputField()}
    </div>
  );
};

export default Question;
