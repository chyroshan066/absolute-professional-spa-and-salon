import 'jquery';

declare global {
  interface Window {
    $: JQueryStatic;
    jQuery: JQueryStatic;
    jQueryLoadPromise?: Promise<void>;
    jQueryLoadResolve?: () => void;
  }
}

interface JQuery {
  animateNumber(options: {
    number: number | string;
    numberStep?: (now: number, tween: any) => void;
  }, duration?: number): JQuery;
}

interface JQueryStatic {
  animateNumber?: {
    numberStepFactories?: {
      separator?: (separator: string) => (now: number, tween: any) => void;
    };
  };
}

export {};
