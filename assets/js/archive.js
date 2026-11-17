/* Archive: filtro por categoria, ano e tag. Sem dependências.
   Aceita na URL: ?cat=ruby-rails&year=2026&tag=rails */
(function () {
  'use strict';

  var root = document.querySelector('[data-archive]');
  if (!root) return;

  var rows = root.querySelectorAll('[data-row]');
  var sections = root.querySelectorAll('[data-year-section]');
  var chips = root.querySelectorAll('[data-filter]');
  var countEl = root.querySelector('[data-count]');
  var emptyEl = root.querySelector('[data-empty]');
  var tagBox = root.querySelector('[data-tag-box]');
  var tagName = root.querySelector('[data-tag-name]');
  var tagClear = root.querySelector('[data-tag-clear]');

  var state = { cat: 'all', year: 'all', tag: '' };

  try {
    var q = new URLSearchParams(window.location.search);
    state.cat = q.get('cat') || 'all';
    state.year = q.get('year') || 'all';
    state.tag = q.get('tag') || '';
  } catch (e) {}

  function writeUrl() {
    if (!window.history || !history.replaceState) return;
    var parts = [];
    if (state.cat !== 'all') parts.push('cat=' + encodeURIComponent(state.cat));
    if (state.year !== 'all') parts.push('year=' + encodeURIComponent(state.year));
    if (state.tag) parts.push('tag=' + encodeURIComponent(state.tag));
    history.replaceState(null, '', window.location.pathname + (parts.length ? '?' + parts.join('&') : ''));
  }

  function render() {
    var visible = 0;

    rows.forEach(function (row) {
      var tags = (row.getAttribute('data-tags') || '').split(' ');
      var ok =
        (state.cat === 'all' || row.getAttribute('data-cat') === state.cat) &&
        (state.year === 'all' || row.getAttribute('data-year') === state.year) &&
        (!state.tag || tags.indexOf(state.tag) !== -1);
      row.hidden = !ok;
      if (ok) visible += 1;
    });

    sections.forEach(function (s) {
      s.hidden = !s.querySelector('[data-row]:not([hidden])');
    });

    chips.forEach(function (c) {
      var on = state[c.getAttribute('data-filter')] === c.getAttribute('data-value');
      c.setAttribute('aria-pressed', on ? 'true' : 'false');
    });

    if (tagBox) {
      tagBox.hidden = !state.tag;
      if (tagName) tagName.textContent = '#' + state.tag;
    }
    if (countEl) countEl.textContent = visible + (visible === 1 ? ' ENTRY' : ' ENTRIES');
    if (emptyEl) emptyEl.hidden = visible > 0;
  }

  chips.forEach(function (c) {
    c.addEventListener('click', function () {
      state[c.getAttribute('data-filter')] = c.getAttribute('data-value');
      writeUrl();
      render();
    });
  });

  if (tagClear) {
    tagClear.addEventListener('click', function () {
      state.tag = '';
      writeUrl();
      render();
    });
  }

  render();
})();
