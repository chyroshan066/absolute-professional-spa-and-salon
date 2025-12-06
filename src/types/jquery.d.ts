import 'jquery';

interface JQueryTween {
  elem: Element;
  prop: string;
  now: number;
  end: number;
  unit: string;
}

interface MagnificPopupOptions {
  type?: string;
  closeOnContentClick?: boolean;
  closeBtnInside?: boolean;
  fixedContentPos?: boolean;
  mainClass?: string;
  gallery?: {
    enabled?: boolean;
    navigateByImgClick?: boolean;
    preload?: [number, number];
  };
  image?: {
    verticalFit?: boolean;
    titleSrc?: string | ((item: HTMLElement) => string);
  };
  zoom?: {
    enabled?: boolean;
    duration?: number;
  };
  callbacks?: {
    open?: () => void;
    close?: () => void;
    beforeOpen?: () => void;
    afterClose?: () => void;
  };
}

interface MagnificPopupInstance {
  close: () => void;
  open: (options?: MagnificPopupOptions) => void;
  updateStatus: (status: string) => void;
}

declare global {
  interface Window {
    $: JQueryStatic;
    jQuery: JQueryStatic;
    jQueryLoadPromise?: Promise<void>;
    jQueryLoadResolve?: () => void;
  }

  interface JQuery {
    animateNumber(options: {
      number: number | string;
      numberStep?: (now: number, tween: JQueryTween) => void;
    }, duration?: number): JQuery;

    magnificPopup(options?: MagnificPopupOptions | 'destroy'): JQuery;
  }

  interface JQueryStatic {
    animateNumber?: {
      numberStepFactories?: {
        separator?: (separator: string) => (now: number,  tween: JQueryTween) => void;
      };
    };

    magnificPopup?: {
      open?: (options: MagnificPopupOptions) => void;
      close?: () => void;
      instance?: MagnificPopupInstance;
    };
  }
}

export {};
