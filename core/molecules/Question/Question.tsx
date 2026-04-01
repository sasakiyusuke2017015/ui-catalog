/**
 * 統合質問コンポーネント
 * variantプロパティで質問の種類を切り替え
 */
import { FC } from 'react';

import type { QuestionProps } from './types';
import styles from './Question.module.scss';

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
  borderRadius = '0.375rem',
  focusBorderColor: customFocusBorderColor = '#3b82f6',
  focusRingColor: customFocusRingColor = '#93c5fd',
  accentBgColor = '#3b82f6',
  accentContrastText = '#ffffff',
  secondaryBgColorHover = '#e0e7ff',
}) => {
  const errorBorderClass = error ? styles.textInputError : '';

  const focusBorderColor = error ? '#ef4444' : customFocusBorderColor;
  const focusRingColor = error ? '#ef4444' : customFocusRingColor;

  const handleInputFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.target.style.borderColor = focusBorderColor;
    e.target.style.boxShadow = `0 0 0 1px ${focusRingColor}`;
    e.target.style.outline = 'none';
  };

  const handleInputBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.target.style.borderColor = error ? '#ef4444' : '#d1d5db';
    e.target.style.boxShadow = 'none';
  };

  const handleCheckboxChange = (option: string, checked: boolean) => {
    const selectedValues = value ? value.split(',') : [];
    let newValues: string[];
    if (checked) {
      newValues = [...selectedValues, option];
    } else {
      newValues = selectedValues.filter((v) => v !== option);
    }
    onChange(newValues.join(','));
  };

  const handleNumericChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value.replace(/[^\d-]/g, '');
    onChange(newValue);
  };

  const renderInputField = () => {
    switch (variant) {
      case 'textbox':
        return (
          <div className={styles.inputSection} style={{ borderRadius }}>
            <div className={styles.inputInner}>
              <input
                type="text"
                name={`question_${questionId}`}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                disabled={disabled}
                placeholder="回答を入力してください"
                className={`${styles.textInput} ${errorBorderClass}`}
                style={{ borderRadius }}
              />
              {error && <p className={styles.errorText}>{error}</p>}
            </div>
          </div>
        );

      case 'textarea':
        return (
          <div className={styles.inputSection} style={{ borderRadius }}>
            <div className={styles.inputInner}>
              <textarea
                name={`question_${questionId}`}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                disabled={disabled}
                placeholder="回答を入力してください"
                rows={6}
                className={`${styles.textArea} ${error ? styles.textAreaError : ''}`}
                style={{ borderRadius }}
              />
              {error && <p className={styles.errorText}>{error}</p>}
            </div>
          </div>
        );

      case 'radio':
        return (
          <div
            className={error ? styles.inputSectionError : styles.inputSection}
            style={{ borderRadius }}
          >
            <div className={styles.optionsGrid}>
              {options.map((option, index) => {
                const optionId = `opt_${questionId}_${index}`;
                const isSelected = value === option;
                return (
                  <div key={optionId} className={styles.optionItem}>
                    <label
                      className={`${styles.optionLabel} ${disabled ? styles.optionLabelDisabled : ''}`}
                      style={{
                        borderRadius,
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
                        onChange={(e) => onChange(e.target.value)}
                        disabled={disabled}
                        className={styles.optionInput}
                        style={{ accentColor: accentBgColor }}
                      />
                      <span
                        className={`${styles.optionText} ${isSelected ? styles.optionTextSelected : ''} ${disabled ? styles.optionTextDisabled : ''}`}
                        style={{ color: isSelected ? accentContrastText : undefined }}
                      >
                        {option}
                      </span>
                    </label>
                  </div>
                );
              })}
            </div>
            {error && <p className={styles.errorTextBold}>{error}</p>}
          </div>
        );

      case 'select':
        return (
          <div className={styles.inputSection} style={{ borderRadius }}>
            <div className={styles.inputInner}>
              <select
                name={`question_${questionId}`}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                disabled={disabled}
                className={`${styles.selectInput} ${error ? styles.selectInputError : ''}`}
                style={{ borderRadius }}
              >
                <option value="">選択してください</option>
                {options.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {error && <p className={styles.errorText}>{error}</p>}
            </div>
          </div>
        );

      case 'checkbox': {
        const selectedValues = value ? value.split(',') : [];
        return (
          <div
            className={error ? styles.inputSectionError : styles.inputSection}
            style={{ borderRadius }}
          >
            <div className={styles.optionsGrid}>
              {options.map((option, index) => {
                const optionId = `opt_${questionId}_${index}`;
                const isChecked = selectedValues.includes(option);
                return (
                  <div key={optionId} className={styles.optionItem}>
                    <label
                      className={`${styles.optionLabel} ${disabled ? styles.optionLabelDisabled : ''}`}
                      style={{
                        borderRadius,
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
                        onChange={(e) => handleCheckboxChange(option, e.target.checked)}
                        disabled={disabled}
                        className={styles.optionInput}
                        style={{ accentColor: accentBgColor, borderRadius }}
                      />
                      <span
                        className={`${styles.optionText} ${isChecked ? styles.optionTextSelected : ''} ${disabled ? styles.optionTextDisabled : ''}`}
                        style={{ color: isChecked ? accentContrastText : undefined }}
                      >
                        {option}
                      </span>
                    </label>
                  </div>
                );
              })}
            </div>
            {error && <p className={styles.errorTextBold}>{error}</p>}
          </div>
        );
      }

      case 'phone':
        return (
          <div className={styles.inputSection} style={{ borderRadius }}>
            <div className={styles.inputInner}>
              <input
                type="tel"
                name={`question_${questionId}`}
                value={value}
                onChange={handleNumericChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                disabled={disabled}
                placeholder="例: 03-1234-5678 または 090-1234-5678"
                className={`${styles.numericInput} ${error ? styles.numericInputError : ''}`}
                style={{ borderRadius }}
              />
              {error ? (
                <p className={styles.errorText}>{error}</p>
              ) : (
                <p className={styles.hintText}>
                  ハイフン（-）を含めて入力してください
                </p>
              )}
            </div>
          </div>
        );

      case 'postalcode':
        return (
          <div className={styles.inputSection} style={{ borderRadius }}>
            <div className={styles.inputInner}>
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
                className={`${styles.numericInput} ${error ? styles.numericInputError : ''}`}
                style={{ borderRadius }}
              />
              {error ? (
                <p className={styles.errorText}>{error}</p>
              ) : (
                <p className={styles.hintText}>
                  7桁の数字で入力してください（ハイフンあり・なし両方可）
                </p>
              )}
            </div>
          </div>
        );

      default:
        return (
          <div
            className={styles.errorBox}
            style={{ borderRadius }}
          >
            <strong>エラー:</strong> 未対応の質問タイプ「{variant}」が指定されました。
          </div>
        );
    }
  };

  return (
    <div
      className={styles.container}
      style={{ borderRadius }}
      data-component="question"
      data-variant={variant}
    >
      {/* 質問タイトル */}
      <div className={styles.titleWrap}>
        <p className={styles.titleText}>
          {required ? (
            <span
              className={styles.requiredBadge}
              style={{ borderRadius }}
            >
              必須
            </span>
          ) : (
            <span
              className={styles.optionalBadge}
              style={{
                borderRadius,
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
      <div className={styles.contentWrap}>
        <p className={styles.contentText}>
          <i className={`bi bi-quora ${styles.contentIcon}`}></i>
          {content}
        </p>
      </div>

      {/* 入力欄（variantに応じて切り替え） */}
      {renderInputField()}
    </div>
  );
};

export default Question;
