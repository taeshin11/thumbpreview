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
