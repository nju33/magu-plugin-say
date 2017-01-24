import marked from 'marked';
import pupa from 'pupa';

const defaultOpts = {
  icon: null,
  selector: 'say',
  markup: `
<aside class=say__box>
  <div class=say__img style="{backgroundImage}"></div>
  <div class=say__text>{inner}</div>
  </div>
</aside>
  `
};
export {defaultOpts};

export default function say(opts = {}) {
  opts = Object.assign({}, defaultOpts, opts);
  return $ => {
    if (!opts.icon) {
      console.log('[magu-plugin-say] Specify icon option');
      return;
    }

    $(opts.selector).each((idx, elem) => {
      const $elem = $(elem);
      const text = $elem.text();
      const inner = marked(text);
      const backgroundImage = `background-image:url(${opts.icon})`;
      const result = pupa(opts.markup, {inner, backgroundImage});
      $elem.replaceWith(result);
    });

    return $;
  };
}
