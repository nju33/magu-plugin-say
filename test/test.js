import fs from 'fs';
import test from 'ava';
import marked from 'marked';
import cheerio from 'cheerio';
import say from '../dist/magu-plugin-say';

test.beforeEach(t => {
  t.context.md = fs.readFileSync(`${__dirname}/fixtures.md`, 'utf-8');
  t.context.$ = cheerio.load(marked(t.context.md));
});

test('transform', t => {
  const result = say({
    icon: 'http://example.com'
  })(t.context.$).html();

  const $ = cheerio.load(result);
  t.is($('.say__box').length, 1);
  t.is($('.say__img').length, 1);
  t.regex($('.say__img').attr('style'), /http:\/\/example\.com/);
  t.is($('.say__text').length, 1);
  t.is($('.say__text').text().trim(), 'aiueo');
});
