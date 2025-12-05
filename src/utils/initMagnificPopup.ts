'use client';

export const initGalleryLightbox = () => {
  if (typeof window === 'undefined') return;
  
  const $ = (window as any).$;
  if (!$ || !$.fn || !$.fn.magnificPopup) {
    console.log('Magnific Popup not ready');
    return false;
  }

  // EXACT same code from original main.js
  $('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: true,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300
    }
  });
  
  return true;
};