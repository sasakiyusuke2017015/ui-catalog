/**
 * 開発環境専用デバッグユーティリティ（日本語対応 & 時間計測付き)
 */

// 時間計測用のマップ
const timers = new Map<string, number>();

export const debugLog = (data: unknown, label: string) => {
  if (import.meta.env.DEV) {
    const time = new Date().toLocaleTimeString('ja-JP');
    console.log(`🔍 【${label}】 (${time})`, data);
  }
};

export const debugLogGroup = (label: string, callback: () => void) => {
  if (import.meta.env.DEV) {
    console.group(`📊 【${label}】`);
    callback();
    console.groupEnd();
  }
};

export const debugCompare = (
  rawData: unknown,
  processedData: unknown,
  label: string = 'データ比較'
) => {
  if (import.meta.env.DEV) {
    const time = new Date().toLocaleTimeString('ja-JP');
    console.group(`⚖️ 【${label}】 (${time})`);
    console.log('📥 生データ:', rawData);
    console.log('📤 処理済データ:', processedData);

    // データ数の比較
    if (Array.isArray(processedData)) {
      console.log(`📊 処理結果: ${processedData.length}件のデータを生成`);
    }

    console.groupEnd();
  }
};

// 時間計測開始
export const debugTimeStart = (processName: string) => {
  if (import.meta.env.DEV) {
    timers.set(processName, window.performance.now());
    console.log(`⏱️ 【処理開始】 ${processName}`);
  }
};

// 時間計測終了
export const debugTimeEnd = (processName: string) => {
  if (import.meta.env.DEV) {
    const startTime = timers.get(processName);
    if (startTime) {
      const duration = (window.performance.now() - startTime) / 1000;
      const emoji = duration < 0.1 ? '⚡' : duration < 0.5 ? '🔥' : '🐌';
      console.log(
        `${emoji} 【処理完了】 ${processName}: ${duration.toFixed(3)}s`
      );
      timers.delete(processName);
    }
  }
};

// 時間計測付きデータ処理
export const debugWithTime = <T>(
  processName: string,
  data: T,
  label: string
): T => {
  if (import.meta.env.DEV) {
    debugTimeStart(processName);
    debugLog(data, label);
    debugTimeEnd(processName);
  }
  return data;
};
