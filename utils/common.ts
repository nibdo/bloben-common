export const MOBILE_MAX_WIDTH: number = 750;

// @ts-ignore
export const checkIfIsSafari = () => {
  return (
    [
      'iPad Simulator',
      'iPhone Simulator',
      'iPod Simulator',
      'iPad',
      'iPhone',
      'iPod',
    ].includes(navigator.platform) ||
    // iPad on iOS 13 detection
    navigator.userAgent.includes('Mac')
  );
};

export const parseCssDark = (className: string, isDark: boolean): string =>
    isDark ? `${className}-dark` : className;

/**
 * Basic log filtering for development
 * @param logA
 * @param logB
 */
export const logger = (logA: any, logB?: any): void => {
    if (process.env.NODE_ENV !== 'production') {
        if (logB) {
            console.log(logA, logB)
        } else {
            console.log(logA);
        }
    }
}

export const alerter = (value: string): void => {
        if (window.localStorage.getItem('isReactNative') === 'true') {
            alert(value === 'string' ? value : JSON.stringify(value))
    }
}
