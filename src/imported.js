import Worker from './file.worker.js';

console.log('The imported.js module has loaded!');

(async () => {
  window.onclick = async (e) => {
    let btn = await import(/* webpackChunkName: "lazy" */ './lazy')
    // document.body.innerHTML += btn.default();
  }
  /*
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js').then(registration => {
        console.log('SW registered: ', registration);
      }).catch(registrationError => {
        console.log('SW registration failed: ', registrationError);
      });
    });1
  }*/
  
} )();
