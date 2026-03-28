/* ============================================
   ThumbPreview — Google Sheets Data Collection
   POSTs usage data to Apps Script webhook
   ============================================ */

(function () {
  'use strict';

  // REPLACE WITH YOUR DEPLOYED APPS SCRIPT WEB APP URL
  var WEBHOOK_URL = '';

  window.collectData = async function (filename, title, channel) {
    if (!WEBHOOK_URL) {
      console.warn('[ThumbPreview] Webhook URL not set. See SETUP_GUIDE.md for instructions.');
      return;
    }

    var payload = {
      thumbnailFilename: filename || '',
      videoTitle: title || '',
      channelName: channel || '',
      userAgent: navigator.userAgent,
      screenResolution: window.screen.width + 'x' + window.screen.height,
      referrer: document.referrer || 'direct'
    };

    try {
      await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        mode: 'no-cors'
      });
    } catch (err) {
      console.warn('[ThumbPreview] Data collection error:', err.message);
    }
  };
})();
