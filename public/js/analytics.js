/* ============================================
   ThumbPreview — Visitor Counter
   Fetches today + total visitor counts
   ============================================ */

(function () {
  'use strict';

  // REPLACE WITH YOUR DEPLOYED APPS SCRIPT WEB APP URL
  var COUNTER_URL = '';

  var todayEl = document.getElementById('todayCount');
  var totalEl = document.getElementById('totalCount');

  async function fetchVisitorCount() {
    if (!COUNTER_URL) {
      console.warn('[ThumbPreview] Visitor counter URL not set. See SETUP_GUIDE.md for instructions.');
      return;
    }

    try {
      var response = await fetch(COUNTER_URL);
      if (!response.ok) throw new Error('Counter request failed');
      var data = await response.json();
      if (todayEl) todayEl.textContent = formatNumber(data.today || 0);
      if (totalEl) totalEl.textContent = formatNumber(data.total || 0);
    } catch (err) {
      console.warn('[ThumbPreview] Visitor counter error:', err.message);
    }
  }

  function formatNumber(num) {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return String(num);
  }

  fetchVisitorCount();
})();
