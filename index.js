exports.decorateConfig = config => {
  const hyperCursorFade = config.hyperCursorFade || {};
  const fadeDuration = hyperCursorFade.fadeDuration || 250;

  return Object.assign({}, config, {
    termCSS: `
      ${config.termCSS || ''}
      .cursor-node {
        transition: opacity ${fadeDuration}ms !important;
      }
    `
  });
};
