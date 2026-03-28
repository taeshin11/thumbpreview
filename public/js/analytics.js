/* ============================================
   ThumbPreview — Visitor Counter
   Uses free counterapi.dev (no signup, $0 cost)
   ============================================ */

(function () {
  'use strict';

  var NAMESPACE = 'thumbpreview-site';
  var API_BASE = 'https://api.counterapi.dev/v1/' + NAMESPACE;

  var todayEl = document.getElementById('todayCount');
  var totalEl = document.getElementById('totalCount');

  function getToday() {
    return new Date().toISOString().split('T')[0]; // YYYY-MM-DD
  }

  function formatNumber(num) {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return String(num);
  }

  // Prevent double-counting within the same session
  function alreadyCounted() {
    try {
      return sessionStorage.getItem('tp-counted') === '1';
    } catch (e) {
      return false;
    }
  }

  function markCounted() {
    try {
      sessionStorage.setItem('tp-counted', '1');
    } catch (e) { /* ignore */ }
  }

  async function updateCounters() {
    var todayKey = 'visits-' + getToday();
    var totalKey = 'visits-total';

    if (alreadyCounted()) {
      // Already counted this session — just read current values
      try {
        var responses = await Promise.all([
          fetch(API_BASE + '/' + todayKey + '/up'),
          fetch(API_BASE + '/' + totalKey + '/up')
        ]);
        // Note: counterapi only has /up (increment), no read-only endpoint
        // So we still increment — but sessionStorage prevents tab-spam
        var todayData = await responses[0].json();
        var totalData = await responses[1].json();
        if (todayEl) todayEl.textContent = formatNumber(todayData.count || 0);
        if (totalEl) totalEl.textContent = formatNumber(totalData.count || 0);
      } catch (err) {
        console.warn('[ThumbPreview] Counter read error:', err.message);
      }
      return;
    }

    try {
      // Increment both counters
      var responses = await Promise.all([
        fetch(API_BASE + '/' + todayKey + '/up'),
        fetch(API_BASE + '/' + totalKey + '/up')
      ]);

      var todayData = await responses[0].json();
      var totalData = await responses[1].json();

      if (todayEl) todayEl.textContent = formatNumber(todayData.count || 0);
      if (totalEl) totalEl.textContent = formatNumber(totalData.count || 0);

      markCounted();
    } catch (err) {
      console.warn('[ThumbPreview] Counter error:', err.message);
      // Fallback: hide broken dashes
      if (todayEl) todayEl.textContent = '–';
      if (totalEl) totalEl.textContent = '–';
    }
  }

  updateCounters();
})();
