// src/utils/api/errorReporting.ts
// エラー報告用API

export interface ErrorReport {
  errorId: string;
  message: string;
  details?: string;
  code?: string;
  url: string;
  timestamp: string;
}

/**
 * エラー報告APIの仕様
 * 
 * エンドポイント: POST /log/error
 * 
 * リクエストボディ: ErrorReport
 * 
 * レスポンス:
 * - 成功: { success: true, reportId: string }
 * - 失敗: { success: false, error: string }
 */

const ERROR_REPORTING_ENDPOINT = '/api/log/error';

/**
 * エラーをバックエンドに報告する
 */
export async function reportError(errorReport: ErrorReport): Promise<{ success: boolean; reportId?: string; error?: string }> {
  try {
    const response = await fetch(ERROR_REPORTING_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(errorReport),
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const result = await response.json();
    return { success: true, reportId: result.reportId };

  } catch (error) {
    console.error('Failed to report error to backend:', error);
    
    // フォールバック: ローカルログに記録
    console.error('🚨 ERROR REPORT (LOCAL FALLBACK):', {
      ...errorReport,
      fallbackReason: error instanceof Error ? error.message : 'Unknown error'
    });

    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error' 
    };
  }
}


/**
 * エラー報告関数（常に実際のAPIを使用）
 */
export const sendErrorReport = reportError;