// Renders the publication list from data/publications.js.
function el(tag, attrs = {}, children = []) {
  const node = document.createElement(tag);
  for (const [key, value] of Object.entries(attrs)) node.setAttribute(key, value);
  for (const child of [].concat(children)) {
    node.append(typeof child === 'string' ? document.createTextNode(child) : child);
  }
  return node;
}

function renderPublication(pub) {
  const meta = [el('span', { class: 'venue' }, pub.venue)];
  if (pub.award) meta.push(el('span', { class: 'award' }, `🏆 ${pub.award}`));
  for (const [label, url] of pub.links || []) meta.push(el('a', { href: url }, label));
  return el('li', {}, [
    el('a', { class: 'title', href: pub.url }, pub.title),
    el('div', { class: 'authors' }, pub.authors.join(', ')),
    el('div', { class: 'meta' }, meta),
  ]);
}

document.getElementById('publication-list').replaceChildren(...PUBLICATIONS.map(renderPublication));
