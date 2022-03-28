export default <T>(url: string, callback: (data: T) => void) => {
  const callbackName = 'jsonp_callback_' + Math.round(100000 * Math.random());
  window[callbackName] = function (data: any) {
    delete window[callbackName];
    document.body.removeChild(script);
    callback(data);
  };

  const script = document.createElement('script');
  script.src = url + (url.indexOf('?') >= 0 ? '&' : '?') + 'callback=' + callbackName;
  document.body.appendChild(script);
};
