/* ============================================
   ThumbPreview — Core Application Logic
   Upload, preview, mockup rendering
   ============================================ */

(function () {
  'use strict';

  // DOM Elements
  const uploadArea = document.getElementById('uploadArea');
  const fileInput = document.getElementById('fileInput');
  const uploadPreview = document.getElementById('uploadPreview');
  const uploadPlaceholder = document.getElementById('uploadPlaceholder');
  const previewBtn = document.getElementById('previewBtn');
  const resetBtn = document.getElementById('resetBtn');
  const videoTitle = document.getElementById('videoTitle');
  const channelName = document.getElementById('channelName');
  const mockupsSection = document.getElementById('mockupsSection');
  const themeToggle = document.getElementById('themeToggle');

  let currentImageURL = null;

  // --- Theme Toggle ---
  function initTheme() {
    const saved = localStorage.getItem('tp-theme');
    if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }

  themeToggle.addEventListener('click', function () {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    if (isDark) {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('tp-theme', 'light');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('tp-theme', 'dark');
    }
  });

  initTheme();

  // --- File Upload ---
  uploadArea.addEventListener('click', function () {
    fileInput.click();
  });

  uploadArea.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      fileInput.click();
    }
  });

  // Drag and drop
  uploadArea.addEventListener('dragover', function (e) {
    e.preventDefault();
    uploadArea.classList.add('drag-over');
  });

  uploadArea.addEventListener('dragleave', function () {
    uploadArea.classList.remove('drag-over');
  });

  uploadArea.addEventListener('drop', function (e) {
    e.preventDefault();
    uploadArea.classList.remove('drag-over');
    var files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFile(files[0]);
    }
  });

  fileInput.addEventListener('change', function () {
    if (fileInput.files.length > 0) {
      handleFile(fileInput.files[0]);
    }
  });

  // Clipboard paste (Ctrl+V anywhere on the page)
  document.addEventListener('paste', function (e) {
    var items = e.clipboardData && e.clipboardData.items;
    if (!items) return;
    for (var i = 0; i < items.length; i++) {
      if (items[i].type.indexOf('image/') === 0) {
        e.preventDefault();
        var file = items[i].getAsFile();
        if (file) handleFile(file);
        return;
      }
    }
  });

  function handleFile(file) {
    var validTypes = ['image/png', 'image/jpeg', 'image/webp'];
    if (!validTypes.includes(file.type)) {
      alert('Please upload a PNG, JPG, or WebP image.');
      return;
    }

    // Max 10MB
    if (file.size > 10 * 1024 * 1024) {
      alert('File is too large. Please upload an image under 10MB.');
      return;
    }

    // Revoke previous URL
    if (currentImageURL) {
      URL.revokeObjectURL(currentImageURL);
    }

    currentImageURL = URL.createObjectURL(file);
    uploadPreview.src = currentImageURL;
    uploadPreview.style.display = 'block';
    uploadPlaceholder.style.display = 'none';
    uploadArea.classList.add('has-image');
    previewBtn.disabled = false;

    // Store filename for data collection
    previewBtn.dataset.filename = file.name;

    // Immediately render previews (PRD: "Immediately render the uploaded thumbnail")
    renderPreviews();
  }

  // --- Generate Previews ---
  function renderPreviews() {
    if (!currentImageURL) return;

    var title = videoTitle.value.trim() || 'Your Amazing Video Title Here';
    var channel = channelName.value.trim() || 'Your Channel';

    // Update all mockup thumbnails
    var thumbEls = document.querySelectorAll('[data-mockup="thumb"]');
    thumbEls.forEach(function (img) {
      img.src = currentImageURL;
    });

    // Update all mockup titles
    var titleEls = document.querySelectorAll('[data-mockup="title"]');
    titleEls.forEach(function (el) {
      el.textContent = title;
    });

    // Update all mockup channel names
    var channelEls = document.querySelectorAll('[data-mockup="channel"]');
    channelEls.forEach(function (el) {
      el.textContent = channel;
    });

    // Show mockups section
    mockupsSection.style.display = 'block';
    mockupsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });

    // Show reset button
    resetBtn.style.display = 'inline-flex';

    // Trigger data collection
    if (typeof window.collectData === 'function') {
      window.collectData(previewBtn.dataset.filename, title, channel);
    }
  }

  previewBtn.addEventListener('click', renderPreviews);

  // --- Live Title & Channel Updates ---
  videoTitle.addEventListener('input', function () {
    var title = videoTitle.value.trim() || 'Your Amazing Video Title Here';
    var titleEls = document.querySelectorAll('[data-mockup="title"]');
    titleEls.forEach(function (el) {
      el.textContent = title;
    });
  });

  channelName.addEventListener('input', function () {
    var channel = channelName.value.trim() || 'Your Channel';
    var channelEls = document.querySelectorAll('[data-mockup="channel"]');
    channelEls.forEach(function (el) {
      el.textContent = channel;
    });
  });

  // --- Comparison Mode ---
  var compareToggle = document.getElementById('compareToggle');
  if (compareToggle) {
    compareToggle.addEventListener('click', function () {
      var section = document.getElementById('mockupsSection');
      var isCompare = section.classList.toggle('compare-mode');
      compareToggle.innerHTML = isCompare
        ? '<span>&#10005;</span> Exit Comparison'
        : '<span>&#8644;</span> Compare Light vs Dark';
    });
  }

  // --- Share Dropdown ---
  var shareBtn = document.getElementById('shareBtn');
  var shareDropdown = document.getElementById('shareDropdown');
  var copyLinkBtn = document.getElementById('copyLinkBtn');

  if (shareBtn && shareDropdown) {
    shareBtn.addEventListener('click', function () {
      var isVisible = shareDropdown.style.display !== 'none';
      shareDropdown.style.display = isVisible ? 'none' : 'flex';
    });
  }

  if (copyLinkBtn) {
    copyLinkBtn.addEventListener('click', function () {
      navigator.clipboard.writeText('https://public-nine-swart.vercel.app').then(function () {
        copyLinkBtn.textContent = 'Copied!';
        setTimeout(function () { copyLinkBtn.textContent = 'Copy Link'; }, 2000);
      });
    });
  }

  // --- Download All Previews ---
  var downloadAllBtn = document.getElementById('downloadAllBtn');
  if (downloadAllBtn) {
    downloadAllBtn.addEventListener('click', function () {
      if (!currentImageURL) {
        alert('Please upload a thumbnail first.');
        return;
      }

      // Use html2canvas-like approach: capture mockup section as canvas
      var mockups = document.querySelectorAll('.mockup-card');
      if (mockups.length === 0) return;

      // Create a canvas with all mockup screenshots
      var canvas = document.createElement('canvas');
      var ctx = canvas.getContext('2d');
      var padding = 24;
      var cardWidth = 400;
      var cols = Math.min(mockups.length, 3);
      var rows = Math.ceil(mockups.length / cols);

      // Estimate card height
      var cardHeight = 300;
      canvas.width = cols * (cardWidth + padding) + padding;
      canvas.height = rows * (cardHeight + padding) + padding + 60;

      // Background
      ctx.fillStyle = document.documentElement.getAttribute('data-theme') === 'dark' ? '#1A1A2E' : '#F5F3EF';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Title
      ctx.fillStyle = document.documentElement.getAttribute('data-theme') === 'dark' ? '#E8E6E1' : '#2D2A26';
      ctx.font = 'bold 20px Outfit, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('ThumbPreview — YouTube Thumbnail Test', canvas.width / 2, 36);

      // Draw each thumbnail in grid
      var img = new Image();
      img.crossOrigin = 'anonymous';
      img.src = currentImageURL;
      img.onload = function () {
        var labels = [];
        mockups.forEach(function (card) {
          var labelEl = card.querySelector('.mockup-label');
          labels.push(labelEl ? labelEl.textContent : '');
        });

        for (var i = 0; i < mockups.length; i++) {
          var col = i % cols;
          var row = Math.floor(i / cols);
          var x = padding + col * (cardWidth + padding);
          var y = 60 + padding + row * (cardHeight + padding);

          // Card background
          ctx.fillStyle = document.documentElement.getAttribute('data-theme') === 'dark' ? '#2A2A44' : '#FDFCFA';
          ctx.beginPath();
          ctx.roundRect(x, y, cardWidth, cardHeight, 12);
          ctx.fill();

          // Label
          ctx.fillStyle = document.documentElement.getAttribute('data-theme') === 'dark' ? '#A8A4A0' : '#6B6560';
          ctx.font = '600 11px Outfit, sans-serif';
          ctx.textAlign = 'left';
          ctx.fillText(labels[i].toUpperCase(), x + 12, y + 24);

          // Thumbnail (16:9)
          var thumbW = cardWidth - 24;
          var thumbH = thumbW * 9 / 16;
          ctx.drawImage(img, x + 12, y + 36, thumbW, thumbH);

          // Title text
          ctx.fillStyle = document.documentElement.getAttribute('data-theme') === 'dark' ? '#E8E6E1' : '#2D2A26';
          ctx.font = '500 13px Roboto, Arial, sans-serif';
          var titleText = videoTitle.value.trim() || 'Your Amazing Video Title Here';
          ctx.fillText(titleText.substring(0, 45) + (titleText.length > 45 ? '...' : ''), x + 12, y + thumbH + 56);

          // Channel
          ctx.fillStyle = '#606060';
          ctx.font = '400 11px Roboto, Arial, sans-serif';
          var channelText = channelName.value.trim() || 'Your Channel';
          ctx.fillText(channelText + '  ·  123K views  ·  2 days ago', x + 12, y + thumbH + 72);
        }

        // Watermark
        ctx.fillStyle = '#9E9790';
        ctx.font = '500 12px DM Sans, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('Made with ThumbPreview — public-nine-swart.vercel.app', canvas.width / 2, canvas.height - 12);

        // Download
        var link = document.createElement('a');
        link.download = 'thumbpreview-' + Date.now() + '.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
      };
    });
  }

  // --- Reset ---
  resetBtn.addEventListener('click', function () {
    if (currentImageURL) {
      URL.revokeObjectURL(currentImageURL);
      currentImageURL = null;
    }

    uploadPreview.src = '';
    uploadPreview.style.display = 'none';
    uploadPlaceholder.style.display = '';
    uploadArea.classList.remove('has-image');
    previewBtn.disabled = true;
    resetBtn.style.display = 'none';
    mockupsSection.style.display = 'none';
    fileInput.value = '';

    // Reset mockup images
    var thumbEls = document.querySelectorAll('[data-mockup="thumb"]');
    thumbEls.forEach(function (img) {
      img.src = '';
    });
  });

})();
