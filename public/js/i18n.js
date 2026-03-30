/**
 * ThumbPreview — Client-side internationalization (i18n)
 * Auto-detects browser language, translates all UI text.
 * Supported: en, ko, ja, zh, es, pt, fr, de, hi, id, th, vi, tr, ru, ar
 */
(function () {
  'use strict';

  var translations = {
    en: {
      // Header / page
      pageTitle: 'Free YouTube Thumbnail Previewer — Test How Your Thumbnail Looks | ThumbPreview',
      metaDesc: 'Upload your YouTube thumbnail and instantly preview how it looks on desktop, mobile, dark mode, search results, and sidebar — 100% free, no signup required.',

      // Upload section
      sectionTitle: 'Preview Your YouTube Thumbnail',
      sectionSubtitle: 'Upload a thumbnail and see how it looks on real YouTube layouts — all processed in your browser. No uploads to any server.',
      uploadText: 'Drag & drop your thumbnail here',
      uploadHint: 'or click to browse \u00b7 Ctrl+V to paste (PNG, JPG, WebP)',
      videoTitleLabel: 'Video Title',
      channelNameLabel: 'Channel Name',
      videoTitlePlaceholder: 'Enter your video title',
      channelNamePlaceholder: 'Enter your channel name',
      videoTitleDefault: 'Your Amazing Video Title Here',
      channelDefault: 'Your Channel',
      generateBtn: 'Generate Previews',
      resetBtn: 'Reset',

      // Mockups
      mockupsHeading: 'Your Thumbnail on YouTube',
      mockupsSubheading: 'See how viewers will see your thumbnail across different YouTube layouts.',
      compareBtn: 'Compare Light vs Dark',
      downloadBtn: 'Download Previews',
      shareBtn: 'Share',
      copyLink: 'Copy Link',
      copied: 'Copied!',

      // Mockup labels
      desktopViews: 'Desktop Views',
      mobileViews: 'Mobile Views',
      otherLayouts: 'Other Layouts',
      homeFeedLight: 'Home Feed \u2014 Light',
      homeFeedDark: 'Home Feed \u2014 Dark',
      searchResults: 'Search Results',
      sidebarSuggested: 'Sidebar \u2014 Suggested',
      shortsCard: 'Shorts-style Card',
      searchDesc: 'This is a placeholder description for the video. It shows how your video appears in YouTube search results alongside other content.',
      viewsStats: '123K views \u00b7 2 days ago',
      shortsViews: '123K views',

      // FAQ
      faqHeading: 'Frequently Asked Questions',
      faqQ1: 'How do I preview my YouTube thumbnail before uploading?',
      faqA1: 'Drag and drop your thumbnail image onto ThumbPreview, or click to browse. You\'ll instantly see it across 7 real YouTube layouts: desktop home feed, mobile feed, search results, sidebar, and Shorts \u2014 in both light and dark mode. No signup needed.',
      faqQ2: 'Is ThumbPreview really free?',
      faqA2: 'Yes, 100% free with no usage limits, no watermarks, and no premium tiers. There\'s no signup or account required \u2014 just open the site and start previewing.',
      faqQ3: 'Are my thumbnails safe? Is anything uploaded?',
      faqA3: 'Your thumbnails never leave your browser. ThumbPreview processes everything locally using browser APIs. No images are sent to any server. When you close the tab, the data is destroyed.',
      faqQ4: 'What\'s the best YouTube thumbnail size?',
      faqA4: 'YouTube recommends 1280x720 pixels (16:9 aspect ratio) with a minimum width of 640 pixels. Supported formats are JPG, PNG, and WebP, with a max file size of 2MB on YouTube. ThumbPreview supports images up to 10MB for your design drafts.',
      faqQ5: 'Can I test my thumbnail with my actual video title?',
      faqA5: 'Yes! Enter your video title and channel name in the fields above the preview area. They update in real-time across all 7 mockup layouts, so you can see exactly how your title appears at different truncation points.',
      faqQ6: 'Does ThumbPreview work on mobile?',
      faqA6: 'Yes, ThumbPreview is fully responsive and works on phones, tablets, and desktops. You can upload thumbnails using the file picker or by pasting from your clipboard.',

      // Footer
      feedbackBtn: 'Feedback',
      footerTagline: 'Free YouTube Thumbnail Previewer. 100% client-side. Your images never leave your browser.',
      footerHome: 'Home',
      footerAbout: 'About',
      footerHowTo: 'How to Use',
      footerSizeGuide: 'Thumbnail Size Guide',
      footerTips: 'Thumbnail Tips',
      footerPrivacy: 'Privacy Policy',
      footerTerms: 'Terms of Service',
      counterToday: 'Today',
      counterTotal: 'Total',
      footerCopy: '\u00a9 2026 ThumbPreview. All rights reserved.',

      // Upload alerts
      alertNoImage: 'Please upload a thumbnail first.',
    },

    ko: {
      pageTitle: '\ubb34\ub8cc YouTube \uc378\ub124\uc77c \ubbf8\ub9ac\ubcf4\uae30 \u2014 \uc5c5\ub85c\ub4dc \uc804 \ud655\uc778 | ThumbPreview',
      metaDesc: 'YouTube \uc378\ub124\uc77c\uc744 \uc5c5\ub85c\ub4dc\ud558\uace0 \ub370\uc2a4\ud06c\ud1b1, \ubaa8\ubc14\uc77c, \ub2e4\ud06c\ubaa8\ub4dc, \uac80\uc0c9\uacb0\uacfc, \uc0ac\uc774\ub4dc\ubc14\uc5d0\uc11c \uc5b4\ub5bb\uac8c \ubcf4\uc774\ub294\uc9c0 \ubbf8\ub9ac \ud655\uc778\ud558\uc138\uc694.',
      sectionTitle: 'YouTube \uc378\ub124\uc77c \ubbf8\ub9ac\ubcf4\uae30',
      sectionSubtitle: '\uc378\ub124\uc77c\uc744 \uc5c5\ub85c\ub4dc\ud558\uba74 \uc2e4\uc81c YouTube \ub808\uc774\uc544\uc6c3\uc5d0\uc11c \uc5b4\ub5bb\uac8c \ubcf4\uc774\ub294\uc9c0 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ubaa8\ub4e0 \ucc98\ub9ac\ub294 \ube0c\ub77c\uc6b0\uc800\uc5d0\uc11c \uc774\ub8e8\uc5b4\uc9d1\ub2c8\ub2e4.',
      uploadText: '\uc378\ub124\uc77c\uc744 \uc5ec\uae30\uc5d0 \ub4dc\ub798\uadf8 \uc564 \ub4dc\ub86d\ud558\uc138\uc694',
      uploadHint: '\ub610\ub294 \ud074\ub9ad\ud558\uc5ec \ucc3e\uc544\ubcf4\uae30 \u00b7 Ctrl+V\ub85c \ubd99\uc5ec\ub123\uae30 (PNG, JPG, WebP)',
      videoTitleLabel: '\ub3d9\uc601\uc0c1 \uc81c\ubaa9',
      channelNameLabel: '\ucc44\ub110 \uc774\ub984',
      videoTitlePlaceholder: '\ub3d9\uc601\uc0c1 \uc81c\ubaa9\uc744 \uc785\ub825\ud558\uc138\uc694',
      channelNamePlaceholder: '\ucc44\ub110 \uc774\ub984\uc744 \uc785\ub825\ud558\uc138\uc694',
      videoTitleDefault: '\uba4b\uc9c4 \ub3d9\uc601\uc0c1 \uc81c\ubaa9\uc744 \uc785\ub825\ud558\uc138\uc694',
      channelDefault: '\ub0b4 \ucc44\ub110',
      generateBtn: '\ubbf8\ub9ac\ubcf4\uae30 \uc0dd\uc131',
      resetBtn: '\ucd08\uae30\ud654',
      mockupsHeading: 'YouTube\uc5d0\uc11c\uc758 \ub0b4 \uc378\ub124\uc77c',
      mockupsSubheading: '\uc2dc\uccad\uc790\ub4e4\uc774 \ub2e4\uc591\ud55c YouTube \ub808\uc774\uc544\uc6c3\uc5d0\uc11c \uc378\ub124\uc77c\uc744 \uc5b4\ub5bb\uac8c \ubcf4\uac8c \ub418\ub294\uc9c0 \ud655\uc778\ud558\uc138\uc694.',
      compareBtn: '\ub77c\uc774\ud2b8/\ub2e4\ud06c \ubaa8\ub4dc \ube44\uad50',
      downloadBtn: '\ubbf8\ub9ac\ubcf4\uae30 \ub2e4\uc6b4\ub85c\ub4dc',
      shareBtn: '\uacf5\uc720',
      copyLink: '\ub9c1\ud06c \ubcf5\uc0ac',
      copied: '\ubcf5\uc0ac\ub428!',
      desktopViews: '\ub370\uc2a4\ud06c\ud1b1 \ubcf4\uae30',
      mobileViews: '\ubaa8\ubc14\uc77c \ubcf4\uae30',
      otherLayouts: '\uae30\ud0c0 \ub808\uc774\uc544\uc6c3',
      homeFeedLight: '\ud648 \ud53c\ub4dc \u2014 \ub77c\uc774\ud2b8',
      homeFeedDark: '\ud648 \ud53c\ub4dc \u2014 \ub2e4\ud06c',
      searchResults: '\uac80\uc0c9 \uacb0\uacfc',
      sidebarSuggested: '\uc0ac\uc774\ub4dc\ubc14 \u2014 \ucd94\ucc9c',
      shortsCard: 'Shorts \uc2a4\ud0c0\uc77c \uce74\ub4dc',
      searchDesc: '\ub3d9\uc601\uc0c1\uc758 \uc124\uba85 \ud50c\ub808\uc774\uc2a4\ud640\ub354\uc785\ub2c8\ub2e4. YouTube \uac80\uc0c9 \uacb0\uacfc\uc5d0\uc11c \ub3d9\uc601\uc0c1\uc774 \uc5b4\ub5bb\uac8c \ud45c\uc2dc\ub418\ub294\uc9c0 \ubcf4\uc5ec\uc90d\ub2c8\ub2e4.',
      viewsStats: '\uc870\ud68c\uc218 12.3\ub9cc\ud68c \u00b7 2\uc77c \uc804',
      shortsViews: '\uc870\ud68c\uc218 12.3\ub9cc\ud68c',
      faqHeading: '\uc790\uc8fc \ubb3b\ub294 \uc9c8\ubb38',
      faqQ1: 'YouTube \uc378\ub124\uc77c\uc744 \uc5c5\ub85c\ub4dc \uc804\uc5d0 \uc5b4\ub5bb\uac8c \ubbf8\ub9ac\ubcf4\uae30 \ud558\ub098\uc694?',
      faqA1: 'ThumbPreview\uc5d0 \uc378\ub124\uc77c \uc774\ubbf8\uc9c0\ub97c \ub4dc\ub798\uadf8 \uc564 \ub4dc\ub86d\ud558\uac70\ub098 \ud074\ub9ad\ud558\uc5ec \ucc3e\uc544\ubcf4\uc138\uc694. \ub370\uc2a4\ud06c\ud1b1 \ud648 \ud53c\ub4dc, \ubaa8\ubc14\uc77c \ud53c\ub4dc, \uac80\uc0c9 \uacb0\uacfc, \uc0ac\uc774\ub4dc\ubc14, Shorts \ub4f1 7\uac00\uc9c0 \ub808\uc774\uc544\uc6c3\uc5d0\uc11c \ub77c\uc774\ud2b8/\ub2e4\ud06c \ubaa8\ub4dc\ub85c \ubc14\ub85c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.',
      faqQ2: 'ThumbPreview\ub294 \uc815\ub9d0 \ubb34\ub8cc\uc778\uac00\uc694?',
      faqA2: '\ub124, 100% \ubb34\ub8cc\uc785\ub2c8\ub2e4. \uc0ac\uc6a9 \uc81c\ud55c, \uc6cc\ud130\ub9c8\ud06c, \uc720\ub8cc \ub4f1\uae09\uc774 \uc5c6\uc2b5\ub2c8\ub2e4. \ud68c\uc6d0\uac00\uc785 \uc5c6\uc774 \ubc14\ub85c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.',
      faqQ3: '\ub0b4 \uc378\ub124\uc77c\uc740 \uc548\uc804\ud55c\uac00\uc694? \uc5c5\ub85c\ub4dc\ub418\ub098\uc694?',
      faqA3: '\uc378\ub124\uc77c\uc740 \ube0c\ub77c\uc6b0\uc800\ub97c \ub5a0\ub098\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. ThumbPreview\ub294 \ube0c\ub77c\uc6b0\uc800 API\ub97c \uc0ac\uc6a9\ud558\uc5ec \ubaa8\ub4e0 \uac83\uc744 \ub85c\uceec\uc5d0\uc11c \ucc98\ub9ac\ud569\ub2c8\ub2e4. \uc11c\ubc84\uc5d0 \uc774\ubbf8\uc9c0\uac00 \uc804\uc1a1\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.',
      faqQ4: '\ucd5c\uc801\uc758 YouTube \uc378\ub124\uc77c \ud06c\uae30\ub294?',
      faqA4: 'YouTube\ub294 1280x720 \ud53d\uc140 (16:9 \ube44\uc728), \ucd5c\uc18c \ub108\ube44 640\ud53d\uc140\uc744 \uad8c\uc7a5\ud569\ub2c8\ub2e4. \uc9c0\uc6d0 \ud615\uc2dd\uc740 JPG, PNG, WebP\uc774\uba70 YouTube \ucd5c\ub300 \ud30c\uc77c \ud06c\uae30\ub294 2MB\uc785\ub2c8\ub2e4.',
      faqQ5: '\uc2e4\uc81c \ub3d9\uc601\uc0c1 \uc81c\ubaa9\uc73c\ub85c \ud14c\uc2a4\ud2b8\ud560 \uc218 \uc788\ub098\uc694?',
      faqA5: '\ub124! \ubbf8\ub9ac\ubcf4\uae30 \uc601\uc5ed \uc704\uc758 \uc785\ub825\ub780\uc5d0 \ub3d9\uc601\uc0c1 \uc81c\ubaa9\uacfc \ucc44\ub110 \uc774\ub984\uc744 \uc785\ub825\ud558\uc138\uc694. 7\uac00\uc9c0 \ubaa8\ub4e0 \ubaa8\ud0d5 \ub808\uc774\uc544\uc6c3\uc5d0 \uc2e4\uc2dc\uac04\uc73c\ub85c \ubc18\uc601\ub429\ub2c8\ub2e4.',
      faqQ6: 'ThumbPreview\ub294 \ubaa8\ubc14\uc77c\uc5d0\uc11c\ub3c4 \uc791\ub3d9\ud558\ub098\uc694?',
      faqA6: '\ub124, ThumbPreview\ub294 \uc644\uc804\ud788 \ubc18\uc751\ud615\uc774\uba70 \ud578\ub4dc\ud3f0, \ud0dc\ube14\ub9bf, \ub370\uc2a4\ud06c\ud1b1\uc5d0\uc11c \ubaa8\ub450 \uc791\ub3d9\ud569\ub2c8\ub2e4. \ud30c\uc77c \uc120\ud0dd\uae30 \ub610\ub294 \ud074\ub9bd\ubcf4\ub4dc \ubd99\uc5ec\ub123\uae30\ub85c \uc378\ub124\uc77c\uc744 \uc5c5\ub85c\ub4dc\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.',
      feedbackBtn: '\ud53c\ub4dc\ubc31',
      footerTagline: '\ubb34\ub8cc YouTube \uc378\ub124\uc77c \ubbf8\ub9ac\ubcf4\uae30. 100% \ud074\ub77c\uc774\uc5b8\ud2b8 \ucc98\ub9ac. \uc774\ubbf8\uc9c0\uac00 \uc808\ub300 \uc11c\ubc84\ub85c \uc804\uc1a1\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.',
      footerHome: '\ud648',
      footerAbout: '\uc18c\uac1c',
      footerHowTo: '\uc0ac\uc6a9 \ubc29\ubc95',
      footerSizeGuide: '\uc378\ub124\uc77c \ud06c\uae30 \uac00\uc774\ub4dc',
      footerTips: '\uc378\ub124\uc77c \ud301',
      footerPrivacy: '\uac1c\uc778\uc815\ubcf4\ucc98\ub9ac\ubc29\uce68',
      footerTerms: '\uc774\uc6a9\uc57d\uad00',
      counterToday: '\uc624\ub298',
      counterTotal: '\uc804\uccb4',
      footerCopy: '\u00a9 2026 ThumbPreview. All rights reserved.',
      alertNoImage: '\uc378\ub124\uc77c\uc744 \uba3c\uc800 \uc5c5\ub85c\ub4dc\ud574\uc8fc\uc138\uc694.',
    },

    ja: {
      pageTitle: '\u7121\u6599 YouTube \u30b5\u30e0\u30cd\u30a4\u30eb\u30d7\u30ec\u30d3\u30e5\u30fc\u30a2\u30fc \u2014 \u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u524d\u306b\u78ba\u8a8d | ThumbPreview',
      metaDesc: 'YouTube\u30b5\u30e0\u30cd\u30a4\u30eb\u3092\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3057\u3066\u3001\u30c7\u30b9\u30af\u30c8\u30c3\u30d7\u3001\u30e2\u30d0\u30a4\u30eb\u3001\u30c0\u30fc\u30af\u30e2\u30fc\u30c9\u3067\u3069\u306e\u3088\u3046\u306b\u898b\u3048\u308b\u304b\u77ac\u6642\u306b\u30d7\u30ec\u30d3\u30e5\u30fc\u3002',
      sectionTitle: 'YouTube\u30b5\u30e0\u30cd\u30a4\u30eb\u3092\u30d7\u30ec\u30d3\u30e5\u30fc',
      sectionSubtitle: '\u30b5\u30e0\u30cd\u30a4\u30eb\u3092\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3059\u308b\u3068\u3001\u5b9f\u969b\u306eYouTube\u30ec\u30a4\u30a2\u30a6\u30c8\u3067\u3069\u3046\u898b\u3048\u308b\u304b\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002\u3059\u3079\u3066\u30d6\u30e9\u30a6\u30b6\u5185\u3067\u51e6\u7406\u3055\u308c\u307e\u3059\u3002',
      uploadText: '\u30b5\u30e0\u30cd\u30a4\u30eb\u3092\u3053\u3053\u306b\u30c9\u30e9\u30c3\u30b0\uff06\u30c9\u30ed\u30c3\u30d7',
      uploadHint: '\u307e\u305f\u306f\u30af\u30ea\u30c3\u30af\u3057\u3066\u53c2\u7167 \u00b7 Ctrl+V\u3067\u8cbc\u308a\u4ed8\u3051 (PNG, JPG, WebP)',
      videoTitleLabel: '\u52d5\u753b\u30bf\u30a4\u30c8\u30eb',
      channelNameLabel: '\u30c1\u30e3\u30f3\u30cd\u30eb\u540d',
      videoTitlePlaceholder: '\u52d5\u753b\u30bf\u30a4\u30c8\u30eb\u3092\u5165\u529b',
      channelNamePlaceholder: '\u30c1\u30e3\u30f3\u30cd\u30eb\u540d\u3092\u5165\u529b',
      videoTitleDefault: '\u3042\u306a\u305f\u306e\u7d20\u6674\u3089\u3057\u3044\u52d5\u753b\u30bf\u30a4\u30c8\u30eb',
      channelDefault: '\u3042\u306a\u305f\u306e\u30c1\u30e3\u30f3\u30cd\u30eb',
      generateBtn: '\u30d7\u30ec\u30d3\u30e5\u30fc\u3092\u751f\u6210',
      resetBtn: '\u30ea\u30bb\u30c3\u30c8',
      mockupsHeading: 'YouTube\u3067\u306e\u30b5\u30e0\u30cd\u30a4\u30eb\u8868\u793a',
      mockupsSubheading: '\u8996\u8074\u8005\u304c\u3055\u307e\u3056\u307e\u306aYouTube\u30ec\u30a4\u30a2\u30a6\u30c8\u3067\u30b5\u30e0\u30cd\u30a4\u30eb\u3092\u3069\u3046\u898b\u308b\u304b\u78ba\u8a8d\u3057\u307e\u3057\u3087\u3046\u3002',
      compareBtn: '\u30e9\u30a4\u30c8/\u30c0\u30fc\u30af\u30e2\u30fc\u30c9\u3092\u6bd4\u8f03',
      downloadBtn: '\u30d7\u30ec\u30d3\u30e5\u30fc\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9',
      shareBtn: '\u5171\u6709',
      copyLink: '\u30ea\u30f3\u30af\u3092\u30b3\u30d4\u30fc',
      copied: '\u30b3\u30d4\u30fc\u3057\u307e\u3057\u305f\uff01',
      desktopViews: '\u30c7\u30b9\u30af\u30c8\u30c3\u30d7\u8868\u793a',
      mobileViews: '\u30e2\u30d0\u30a4\u30eb\u8868\u793a',
      otherLayouts: '\u305d\u306e\u4ed6\u306e\u30ec\u30a4\u30a2\u30a6\u30c8',
      homeFeedLight: '\u30db\u30fc\u30e0\u30d5\u30a3\u30fc\u30c9 \u2014 \u30e9\u30a4\u30c8',
      homeFeedDark: '\u30db\u30fc\u30e0\u30d5\u30a3\u30fc\u30c9 \u2014 \u30c0\u30fc\u30af',
      searchResults: '\u691c\u7d22\u7d50\u679c',
      sidebarSuggested: '\u30b5\u30a4\u30c9\u30d0\u30fc \u2014 \u304a\u3059\u3059\u3081',
      shortsCard: 'Shorts\u30b9\u30bf\u30a4\u30eb\u30ab\u30fc\u30c9',
      searchDesc: '\u52d5\u753b\u306e\u8aac\u660e\u30d7\u30ec\u30fc\u30b9\u30db\u30eb\u30c0\u30fc\u3067\u3059\u3002YouTube\u691c\u7d22\u7d50\u679c\u3067\u306e\u8868\u793a\u3092\u793a\u3057\u3066\u3044\u307e\u3059\u3002',
      viewsStats: '12.3\u4e07\u56de\u8996\u8074 \u00b7 2\u65e5\u524d',
      shortsViews: '12.3\u4e07\u56de\u8996\u8074',
      faqHeading: '\u3088\u304f\u3042\u308b\u8cea\u554f',
      faqQ1: 'YouTube\u30b5\u30e0\u30cd\u30a4\u30eb\u3092\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u524d\u306b\u30d7\u30ec\u30d3\u30e5\u30fc\u3059\u308b\u65b9\u6cd5\u306f\uff1f',
      faqA1: 'ThumbPreview\u306b\u30b5\u30e0\u30cd\u30a4\u30eb\u753b\u50cf\u3092\u30c9\u30e9\u30c3\u30b0\uff06\u30c9\u30ed\u30c3\u30d7\u3059\u308b\u304b\u3001\u30af\u30ea\u30c3\u30af\u3057\u3066\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u30027\u3064\u306e\u30ec\u30a4\u30a2\u30a6\u30c8\u3067\u30e9\u30a4\u30c8/\u30c0\u30fc\u30af\u30e2\u30fc\u30c9\u4e21\u65b9\u3067\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002',
      faqQ2: 'ThumbPreview\u306f\u672c\u5f53\u306b\u7121\u6599\u3067\u3059\u304b\uff1f',
      faqA2: '\u306f\u3044\u3001100%\u7121\u6599\u3067\u3059\u3002\u5229\u7528\u5236\u9650\u3001\u30a6\u30a9\u30fc\u30bf\u30fc\u30de\u30fc\u30af\u3001\u6709\u6599\u30d7\u30e9\u30f3\u306f\u3042\u308a\u307e\u305b\u3093\u3002\u30a2\u30ab\u30a6\u30f3\u30c8\u767b\u9332\u4e0d\u8981\u3067\u3059\u3002',
      faqQ3: '\u30b5\u30e0\u30cd\u30a4\u30eb\u306f\u5b89\u5168\u3067\u3059\u304b\uff1f\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3055\u308c\u307e\u3059\u304b\uff1f',
      faqA3: '\u30b5\u30e0\u30cd\u30a4\u30eb\u306f\u30d6\u30e9\u30a6\u30b6\u3092\u96e2\u308c\u307e\u305b\u3093\u3002\u3059\u3079\u3066\u30ed\u30fc\u30ab\u30eb\u3067\u51e6\u7406\u3055\u308c\u3001\u30b5\u30fc\u30d0\u30fc\u306b\u306f\u4f55\u3082\u9001\u4fe1\u3055\u308c\u307e\u305b\u3093\u3002',
      faqQ4: 'YouTube\u30b5\u30e0\u30cd\u30a4\u30eb\u306e\u6700\u9069\u30b5\u30a4\u30ba\u306f\uff1f',
      faqA4: 'YouTube\u306f1280x720\u30d4\u30af\u30bb\u30eb\uff0816:9\u306e\u30a2\u30b9\u30da\u30af\u30c8\u6bd4\uff09\u3092\u63a8\u5968\u3057\u3066\u3044\u307e\u3059\u3002\u5bfe\u5fdc\u5f62\u5f0f\u306fJPG\u3001PNG\u3001WebP\u3067\u3001\u6700\u5927\u30d5\u30a1\u30a4\u30eb\u30b5\u30a4\u30ba\u306f2MB\u3067\u3059\u3002',
      faqQ5: '\u5b9f\u969b\u306e\u52d5\u753b\u30bf\u30a4\u30c8\u30eb\u3067\u30c6\u30b9\u30c8\u3067\u304d\u307e\u3059\u304b\uff1f',
      faqA5: '\u306f\u3044\uff01\u52d5\u753b\u30bf\u30a4\u30c8\u30eb\u3068\u30c1\u30e3\u30f3\u30cd\u30eb\u540d\u3092\u5165\u529b\u3059\u308b\u3068\u30017\u3064\u306e\u30e2\u30c3\u30af\u30a2\u30c3\u30d7\u5168\u3066\u306b\u30ea\u30a2\u30eb\u30bf\u30a4\u30e0\u3067\u53cd\u6620\u3055\u308c\u307e\u3059\u3002',
      faqQ6: 'ThumbPreview\u306f\u30e2\u30d0\u30a4\u30eb\u3067\u3082\u4f7f\u3048\u307e\u3059\u304b\uff1f',
      faqA6: '\u306f\u3044\u3001\u5b8c\u5168\u306b\u30ec\u30b9\u30dd\u30f3\u30b7\u30d6\u5bfe\u5fdc\u3067\u3001\u30b9\u30de\u30db\u3001\u30bf\u30d6\u30ec\u30c3\u30c8\u3001\u30c7\u30b9\u30af\u30c8\u30c3\u30d7\u3067\u52d5\u4f5c\u3057\u307e\u3059\u3002',
      feedbackBtn: '\u30d5\u30a3\u30fc\u30c9\u30d0\u30c3\u30af',
      footerTagline: '\u7121\u6599YouTube\u30b5\u30e0\u30cd\u30a4\u30eb\u30d7\u30ec\u30d3\u30e5\u30fc\u30a2\u30fc\u3002100%\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u5074\u51e6\u7406\u3002\u753b\u50cf\u306f\u30d6\u30e9\u30a6\u30b6\u3092\u96e2\u308c\u307e\u305b\u3093\u3002',
      footerHome: '\u30db\u30fc\u30e0',
      footerAbout: '\u6982\u8981',
      footerHowTo: '\u4f7f\u3044\u65b9',
      footerSizeGuide: '\u30b5\u30e0\u30cd\u30a4\u30eb\u30b5\u30a4\u30ba\u30ac\u30a4\u30c9',
      footerTips: '\u30b5\u30e0\u30cd\u30a4\u30eb\u30c6\u30a3\u30c3\u30d7\u30b9',
      footerPrivacy: '\u30d7\u30e9\u30a4\u30d0\u30b7\u30fc\u30dd\u30ea\u30b7\u30fc',
      footerTerms: '\u5229\u7528\u898f\u7d04',
      counterToday: '\u4eca\u65e5',
      counterTotal: '\u5408\u8a08',
      footerCopy: '\u00a9 2026 ThumbPreview. All rights reserved.',
      alertNoImage: '\u30b5\u30e0\u30cd\u30a4\u30eb\u3092\u5148\u306b\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3057\u3066\u304f\u3060\u3055\u3044\u3002',
    },

    zh: {
      pageTitle: '\u514d\u8d39 YouTube \u7f29\u7565\u56fe\u9884\u89c8\u5668 \u2014 \u4e0a\u4f20\u524d\u67e5\u770b\u6548\u679c | ThumbPreview',
      metaDesc: '\u4e0a\u4f20 YouTube \u7f29\u7565\u56fe\uff0c\u5373\u65f6\u9884\u89c8\u5728\u684c\u9762\u3001\u79fb\u52a8\u7aef\u3001\u6697\u9ed1\u6a21\u5f0f\u3001\u641c\u7d22\u7ed3\u679c\u548c\u4fa7\u8fb9\u680f\u4e2d\u7684\u6548\u679c\u3002',
      sectionTitle: '\u9884\u89c8\u60a8\u7684 YouTube \u7f29\u7565\u56fe',
      sectionSubtitle: '\u4e0a\u4f20\u7f29\u7565\u56fe\uff0c\u67e5\u770b\u5b83\u5728\u771f\u5b9e YouTube \u5e03\u5c40\u4e2d\u7684\u6548\u679c \u2014 \u5168\u90e8\u5728\u6d4f\u89c8\u5668\u4e2d\u5904\u7406\uff0c\u4e0d\u4e0a\u4f20\u5230\u4efb\u4f55\u670d\u52a1\u5668\u3002',
      uploadText: '\u5c06\u7f29\u7565\u56fe\u62d6\u653e\u5230\u8fd9\u91cc',
      uploadHint: '\u6216\u70b9\u51fb\u6d4f\u89c8 \u00b7 Ctrl+V \u7c98\u8d34 (PNG, JPG, WebP)',
      videoTitleLabel: '\u89c6\u9891\u6807\u9898',
      channelNameLabel: '\u9891\u9053\u540d\u79f0',
      videoTitlePlaceholder: '\u8f93\u5165\u89c6\u9891\u6807\u9898',
      channelNamePlaceholder: '\u8f93\u5165\u9891\u9053\u540d\u79f0',
      videoTitleDefault: '\u60a8\u7684\u7cbe\u5f69\u89c6\u9891\u6807\u9898',
      channelDefault: '\u60a8\u7684\u9891\u9053',
      generateBtn: '\u751f\u6210\u9884\u89c8',
      resetBtn: '\u91cd\u7f6e',
      mockupsHeading: '\u60a8\u7684\u7f29\u7565\u56fe\u5728 YouTube \u4e0a\u7684\u6548\u679c',
      mockupsSubheading: '\u67e5\u770b\u89c2\u4f17\u5728\u4e0d\u540c YouTube \u5e03\u5c40\u4e2d\u5982\u4f55\u770b\u5230\u60a8\u7684\u7f29\u7565\u56fe\u3002',
      compareBtn: '\u5bf9\u6bd4\u4eae\u8272/\u6697\u8272\u6a21\u5f0f',
      downloadBtn: '\u4e0b\u8f7d\u9884\u89c8',
      shareBtn: '\u5206\u4eab',
      copyLink: '\u590d\u5236\u94fe\u63a5',
      copied: '\u5df2\u590d\u5236\uff01',
      desktopViews: '\u684c\u9762\u89c6\u56fe',
      mobileViews: '\u79fb\u52a8\u89c6\u56fe',
      otherLayouts: '\u5176\u4ed6\u5e03\u5c40',
      homeFeedLight: '\u9996\u9875\u4fe1\u606f\u6d41 \u2014 \u4eae\u8272',
      homeFeedDark: '\u9996\u9875\u4fe1\u606f\u6d41 \u2014 \u6697\u8272',
      searchResults: '\u641c\u7d22\u7ed3\u679c',
      sidebarSuggested: '\u4fa7\u8fb9\u680f \u2014 \u63a8\u8350',
      shortsCard: 'Shorts\u98ce\u683c\u5361\u7247',
      searchDesc: '\u8fd9\u662f\u89c6\u9891\u7684\u5360\u4f4d\u63cf\u8ff0\u3002\u5b83\u5c55\u793a\u4e86\u60a8\u7684\u89c6\u9891\u5728 YouTube \u641c\u7d22\u7ed3\u679c\u4e2d\u7684\u663e\u793a\u6548\u679c\u3002',
      viewsStats: '12.3\u4e07\u6b21\u89c2\u770b \u00b7 2\u5929\u524d',
      shortsViews: '12.3\u4e07\u6b21\u89c2\u770b',
      faqHeading: '\u5e38\u89c1\u95ee\u9898',
      faqQ1: '\u5982\u4f55\u5728\u4e0a\u4f20\u524d\u9884\u89c8 YouTube \u7f29\u7565\u56fe\uff1f',
      faqA1: '\u5c06\u7f29\u7565\u56fe\u56fe\u7247\u62d6\u653e\u5230 ThumbPreview\uff0c\u6216\u70b9\u51fb\u6d4f\u89c8\u3002\u60a8\u53ef\u4ee5\u5728 7 \u79cd\u5e03\u5c40\u4e2d\u5373\u65f6\u67e5\u770b\u6548\u679c\uff0c\u5305\u62ec\u4eae\u8272\u548c\u6697\u8272\u6a21\u5f0f\u3002\u65e0\u9700\u6ce8\u518c\u3002',
      faqQ2: 'ThumbPreview \u771f\u7684\u514d\u8d39\u5417\uff1f',
      faqA2: '\u662f\u7684\uff0c100% \u514d\u8d39\u3002\u6ca1\u6709\u4f7f\u7528\u9650\u5236\u3001\u6c34\u5370\u6216\u4ed8\u8d39\u7b49\u7ea7\u3002\u65e0\u9700\u6ce8\u518c\u8d26\u53f7\u3002',
      faqQ3: '\u6211\u7684\u7f29\u7565\u56fe\u5b89\u5168\u5417\uff1f\u4f1a\u88ab\u4e0a\u4f20\u5417\uff1f',
      faqA3: '\u60a8\u7684\u7f29\u7565\u56fe\u4e0d\u4f1a\u79bb\u5f00\u6d4f\u89c8\u5668\u3002ThumbPreview \u4f7f\u7528\u6d4f\u89c8\u5668 API \u5728\u672c\u5730\u5904\u7406\u6240\u6709\u5185\u5bb9\u3002\u4e0d\u4f1a\u5411\u670d\u52a1\u5668\u53d1\u9001\u4efb\u4f55\u56fe\u7247\u3002',
      faqQ4: 'YouTube \u7f29\u7565\u56fe\u7684\u6700\u4f73\u5c3a\u5bf8\u662f\u591a\u5c11\uff1f',
      faqA4: 'YouTube \u5efa\u8bae 1280x720 \u50cf\u7d20\uff0816:9 \u6bd4\u4f8b\uff09\uff0c\u6700\u5c0f\u5bbd\u5ea6 640 \u50cf\u7d20\u3002\u652f\u6301\u683c\u5f0f\uff1aJPG\u3001PNG\u3001WebP\uff0c\u6700\u5927\u6587\u4ef6\u5927\u5c0f 2MB\u3002',
      faqQ5: '\u53ef\u4ee5\u7528\u5b9e\u9645\u89c6\u9891\u6807\u9898\u6d4b\u8bd5\u5417\uff1f',
      faqA5: '\u53ef\u4ee5\uff01\u8f93\u5165\u89c6\u9891\u6807\u9898\u548c\u9891\u9053\u540d\u79f0\uff0c\u5b83\u4eec\u4f1a\u5b9e\u65f6\u53cd\u6620\u5728\u6240\u6709 7 \u4e2a\u6a21\u62df\u5e03\u5c40\u4e2d\u3002',
      faqQ6: 'ThumbPreview \u5728\u624b\u673a\u4e0a\u80fd\u7528\u5417\uff1f',
      faqA6: '\u53ef\u4ee5\uff0cThumbPreview \u5b8c\u5168\u54cd\u5e94\u5f0f\uff0c\u652f\u6301\u624b\u673a\u3001\u5e73\u677f\u548c\u684c\u9762\u8bbe\u5907\u3002',
      feedbackBtn: '\u53cd\u9988',
      footerTagline: '\u514d\u8d39 YouTube \u7f29\u7565\u56fe\u9884\u89c8\u5668\u3002100% \u5ba2\u6237\u7aef\u5904\u7406\u3002\u60a8\u7684\u56fe\u7247\u4e0d\u4f1a\u79bb\u5f00\u6d4f\u89c8\u5668\u3002',
      footerHome: '\u9996\u9875',
      footerAbout: '\u5173\u4e8e',
      footerHowTo: '\u4f7f\u7528\u65b9\u6cd5',
      footerSizeGuide: '\u7f29\u7565\u56fe\u5c3a\u5bf8\u6307\u5357',
      footerTips: '\u7f29\u7565\u56fe\u6280\u5de7',
      footerPrivacy: '\u9690\u79c1\u653f\u7b56',
      footerTerms: '\u670d\u52a1\u6761\u6b3e',
      counterToday: '\u4eca\u65e5',
      counterTotal: '\u603b\u8ba1',
      footerCopy: '\u00a9 2026 ThumbPreview. All rights reserved.',
      alertNoImage: '\u8bf7\u5148\u4e0a\u4f20\u7f29\u7565\u56fe\u3002',
    },

    es: {
      pageTitle: 'Previsualizador de Miniaturas de YouTube Gratis \u2014 Prueba tu Miniatura | ThumbPreview',
      sectionTitle: 'Previsualiza tu Miniatura de YouTube',
      sectionSubtitle: 'Sube una miniatura y mira c\u00f3mo se ve en los dise\u00f1os reales de YouTube \u2014 todo procesado en tu navegador.',
      uploadText: 'Arrastra y suelta tu miniatura aqu\u00ed',
      uploadHint: 'o haz clic para buscar \u00b7 Ctrl+V para pegar (PNG, JPG, WebP)',
      videoTitleLabel: 'T\u00edtulo del video',
      channelNameLabel: 'Nombre del canal',
      videoTitlePlaceholder: 'Ingresa el t\u00edtulo del video',
      channelNamePlaceholder: 'Ingresa el nombre del canal',
      videoTitleDefault: 'Tu Incre\u00edble T\u00edtulo de Video Aqu\u00ed',
      channelDefault: 'Tu Canal',
      generateBtn: 'Generar Previsualizaciones',
      resetBtn: 'Reiniciar',
      mockupsHeading: 'Tu Miniatura en YouTube',
      mockupsSubheading: 'Mira c\u00f3mo los espectadores ver\u00e1n tu miniatura en diferentes dise\u00f1os de YouTube.',
      compareBtn: 'Comparar Claro vs Oscuro',
      downloadBtn: 'Descargar Previsualizaciones',
      shareBtn: 'Compartir',
      copyLink: 'Copiar Enlace',
      copied: '\u00a1Copiado!',
      desktopViews: 'Vistas de Escritorio',
      mobileViews: 'Vistas M\u00f3viles',
      otherLayouts: 'Otros Dise\u00f1os',
      homeFeedLight: 'Inicio \u2014 Claro',
      homeFeedDark: 'Inicio \u2014 Oscuro',
      searchResults: 'Resultados de B\u00fasqueda',
      sidebarSuggested: 'Barra Lateral \u2014 Sugeridos',
      shortsCard: 'Tarjeta Estilo Shorts',
      searchDesc: 'Esta es una descripci\u00f3n de marcador del video. Muestra c\u00f3mo aparece tu video en los resultados de b\u00fasqueda de YouTube.',
      viewsStats: '123K vistas \u00b7 hace 2 d\u00edas',
      shortsViews: '123K vistas',
      faqHeading: 'Preguntas Frecuentes',
      faqQ1: '\u00bfC\u00f3mo previsualizo mi miniatura de YouTube antes de subirla?',
      faqA1: 'Arrastra y suelta tu imagen de miniatura en ThumbPreview, o haz clic para buscar. Ver\u00e1s instant\u00e1neamente c\u00f3mo se ve en 7 dise\u00f1os reales de YouTube.',
      faqQ2: '\u00bfThumbPreview es realmente gratis?',
      faqA2: 'S\u00ed, 100% gratis sin l\u00edmites de uso, marcas de agua ni planes premium. No se requiere registro.',
      faqQ3: '\u00bfMis miniaturas est\u00e1n seguras?',
      faqA3: 'Tus miniaturas nunca salen de tu navegador. Todo se procesa localmente. No se env\u00edan im\u00e1genes a ning\u00fan servidor.',
      faqQ4: '\u00bfCu\u00e1l es el mejor tama\u00f1o de miniatura de YouTube?',
      faqA4: 'YouTube recomienda 1280x720 p\u00edxeles (proporci\u00f3n 16:9) con un ancho m\u00ednimo de 640 p\u00edxeles. Formatos compatibles: JPG, PNG, WebP.',
      faqQ5: '\u00bfPuedo probar con mi t\u00edtulo real?',
      faqA5: '\u00a1S\u00ed! Ingresa tu t\u00edtulo y nombre de canal. Se actualizan en tiempo real en los 7 dise\u00f1os.',
      faqQ6: '\u00bfFunciona en m\u00f3vil?',
      faqA6: 'S\u00ed, ThumbPreview es totalmente responsivo y funciona en tel\u00e9fonos, tablets y escritorios.',
      feedbackBtn: 'Comentarios',
      footerTagline: 'Previsualizador de Miniaturas de YouTube Gratis. 100% en el cliente. Tus im\u00e1genes nunca salen del navegador.',
      footerHome: 'Inicio',
      footerAbout: 'Acerca de',
      footerHowTo: 'C\u00f3mo Usar',
      footerSizeGuide: 'Gu\u00eda de Tama\u00f1os',
      footerTips: 'Consejos de Miniaturas',
      footerPrivacy: 'Pol\u00edtica de Privacidad',
      footerTerms: 'T\u00e9rminos de Servicio',
      counterToday: 'Hoy',
      counterTotal: 'Total',
      footerCopy: '\u00a9 2026 ThumbPreview. Todos los derechos reservados.',
      alertNoImage: 'Por favor sube una miniatura primero.',
    },

    pt: {
      pageTitle: 'Previsualizador de Miniaturas do YouTube Gr\u00e1tis \u2014 Teste sua Miniatura | ThumbPreview',
      sectionTitle: 'Pr\u00e9-visualize sua Miniatura do YouTube',
      sectionSubtitle: 'Envie uma miniatura e veja como ela fica nos layouts reais do YouTube \u2014 tudo processado no seu navegador.',
      uploadText: 'Arraste e solte sua miniatura aqui',
      uploadHint: 'ou clique para procurar \u00b7 Ctrl+V para colar (PNG, JPG, WebP)',
      videoTitleLabel: 'T\u00edtulo do V\u00eddeo',
      channelNameLabel: 'Nome do Canal',
      videoTitlePlaceholder: 'Digite o t\u00edtulo do v\u00eddeo',
      channelNamePlaceholder: 'Digite o nome do canal',
      videoTitleDefault: 'Seu T\u00edtulo Incr\u00edvel de V\u00eddeo Aqui',
      channelDefault: 'Seu Canal',
      generateBtn: 'Gerar Pr\u00e9-visualiza\u00e7\u00f5es',
      resetBtn: 'Redefinir',
      mockupsHeading: 'Sua Miniatura no YouTube',
      mockupsSubheading: 'Veja como os espectadores ver\u00e3o sua miniatura em diferentes layouts do YouTube.',
      compareBtn: 'Comparar Claro vs Escuro',
      downloadBtn: 'Baixar Pr\u00e9-visualiza\u00e7\u00f5es',
      shareBtn: 'Compartilhar',
      copyLink: 'Copiar Link',
      copied: 'Copiado!',
      desktopViews: 'Vis\u00f5es Desktop',
      mobileViews: 'Vis\u00f5es Mobile',
      otherLayouts: 'Outros Layouts',
      homeFeedLight: 'Feed Inicial \u2014 Claro',
      homeFeedDark: 'Feed Inicial \u2014 Escuro',
      searchResults: 'Resultados de Busca',
      sidebarSuggested: 'Barra Lateral \u2014 Sugeridos',
      shortsCard: 'Cart\u00e3o Estilo Shorts',
      faqHeading: 'Perguntas Frequentes',
      feedbackBtn: 'Feedback',
      footerHome: 'In\u00edcio',
      footerAbout: 'Sobre',
      footerHowTo: 'Como Usar',
      footerSizeGuide: 'Guia de Tamanhos',
      footerTips: 'Dicas de Miniaturas',
      footerPrivacy: 'Pol\u00edtica de Privacidade',
      footerTerms: 'Termos de Servi\u00e7o',
      counterToday: 'Hoje',
      counterTotal: 'Total',
      alertNoImage: 'Por favor, envie uma miniatura primeiro.',
    },

    fr: {
      pageTitle: 'Aper\u00e7u Gratuit de Miniatures YouTube \u2014 Testez votre Miniature | ThumbPreview',
      sectionTitle: 'Pr\u00e9visualisez votre Miniature YouTube',
      sectionSubtitle: 'T\u00e9l\u00e9chargez une miniature et voyez \u00e0 quoi elle ressemble sur les vrais layouts YouTube \u2014 tout est trait\u00e9 dans votre navigateur.',
      uploadText: 'Glissez-d\u00e9posez votre miniature ici',
      uploadHint: 'ou cliquez pour parcourir \u00b7 Ctrl+V pour coller (PNG, JPG, WebP)',
      videoTitleLabel: 'Titre de la vid\u00e9o',
      channelNameLabel: 'Nom de la cha\u00eene',
      videoTitlePlaceholder: 'Entrez le titre de la vid\u00e9o',
      channelNamePlaceholder: 'Entrez le nom de la cha\u00eene',
      videoTitleDefault: 'Votre Super Titre de Vid\u00e9o Ici',
      channelDefault: 'Votre Cha\u00eene',
      generateBtn: 'G\u00e9n\u00e9rer les Aper\u00e7us',
      resetBtn: 'R\u00e9initialiser',
      mockupsHeading: 'Votre Miniature sur YouTube',
      mockupsSubheading: 'Voyez comment les spectateurs verront votre miniature sur diff\u00e9rents layouts YouTube.',
      compareBtn: 'Comparer Clair vs Sombre',
      downloadBtn: 'T\u00e9l\u00e9charger les Aper\u00e7us',
      shareBtn: 'Partager',
      copyLink: 'Copier le Lien',
      copied: 'Copi\u00e9 !',
      desktopViews: 'Vues Bureau',
      mobileViews: 'Vues Mobile',
      otherLayouts: 'Autres Layouts',
      homeFeedLight: 'Accueil \u2014 Clair',
      homeFeedDark: 'Accueil \u2014 Sombre',
      searchResults: 'R\u00e9sultats de Recherche',
      sidebarSuggested: 'Barre Lat\u00e9rale \u2014 Sugg\u00e9r\u00e9s',
      shortsCard: 'Carte Style Shorts',
      faqHeading: 'Questions Fr\u00e9quentes',
      feedbackBtn: 'Commentaires',
      footerHome: 'Accueil',
      footerAbout: '\u00c0 Propos',
      footerHowTo: 'Comment Utiliser',
      footerSizeGuide: 'Guide des Tailles',
      footerTips: 'Conseils Miniatures',
      footerPrivacy: 'Politique de Confidentialit\u00e9',
      footerTerms: 'Conditions d\'Utilisation',
      counterToday: 'Aujourd\'hui',
      counterTotal: 'Total',
      alertNoImage: 'Veuillez d\'abord t\u00e9l\u00e9charger une miniature.',
    },

    de: {
      pageTitle: 'Kostenloser YouTube-Thumbnail-Vorschau \u2014 Testen Sie Ihr Thumbnail | ThumbPreview',
      sectionTitle: 'Vorschau Ihres YouTube-Thumbnails',
      sectionSubtitle: 'Laden Sie ein Thumbnail hoch und sehen Sie, wie es in echten YouTube-Layouts aussieht \u2014 alles wird in Ihrem Browser verarbeitet.',
      uploadText: 'Ziehen Sie Ihr Thumbnail hierher',
      uploadHint: 'oder klicken zum Durchsuchen \u00b7 Strg+V zum Einf\u00fcgen (PNG, JPG, WebP)',
      videoTitleLabel: 'Videotitel',
      channelNameLabel: 'Kanalname',
      videoTitlePlaceholder: 'Videotitel eingeben',
      channelNamePlaceholder: 'Kanalname eingeben',
      videoTitleDefault: 'Ihr Toller Videotitel Hier',
      channelDefault: 'Ihr Kanal',
      generateBtn: 'Vorschau Erstellen',
      resetBtn: 'Zur\u00fccksetzen',
      mockupsHeading: 'Ihr Thumbnail auf YouTube',
      mockupsSubheading: 'Sehen Sie, wie Zuschauer Ihr Thumbnail in verschiedenen YouTube-Layouts sehen werden.',
      compareBtn: 'Hell/Dunkel Vergleichen',
      downloadBtn: 'Vorschau Herunterladen',
      shareBtn: 'Teilen',
      copyLink: 'Link Kopieren',
      copied: 'Kopiert!',
      desktopViews: 'Desktop-Ansichten',
      mobileViews: 'Mobile Ansichten',
      otherLayouts: 'Andere Layouts',
      homeFeedLight: 'Startseite \u2014 Hell',
      homeFeedDark: 'Startseite \u2014 Dunkel',
      searchResults: 'Suchergebnisse',
      sidebarSuggested: 'Seitenleiste \u2014 Vorschl\u00e4ge',
      shortsCard: 'Shorts-Karte',
      faqHeading: 'H\u00e4ufig Gestellte Fragen',
      feedbackBtn: 'Feedback',
      footerHome: 'Startseite',
      footerAbout: '\u00dcber Uns',
      footerHowTo: 'Anleitung',
      footerSizeGuide: 'Gr\u00f6\u00dfenleitfaden',
      footerTips: 'Thumbnail-Tipps',
      footerPrivacy: 'Datenschutz',
      footerTerms: 'Nutzungsbedingungen',
      counterToday: 'Heute',
      counterTotal: 'Gesamt',
      alertNoImage: 'Bitte laden Sie zuerst ein Thumbnail hoch.',
    },

    hi: {
      sectionTitle: '\u0905\u092a\u0928\u093e YouTube \u0925\u092e\u094d\u092c\u0928\u0947\u0932 \u092a\u094d\u0930\u0940\u0935\u094d\u092f\u0942 \u0915\u0930\u0947\u0902',
      sectionSubtitle: '\u0925\u092e\u094d\u092c\u0928\u0947\u0932 \u0905\u092a\u0932\u094b\u0921 \u0915\u0930\u0947\u0902 \u0914\u0930 \u0926\u0947\u0916\u0947\u0902 \u0915\u093f YouTube \u092a\u0930 \u0915\u0948\u0938\u093e \u0926\u093f\u0916\u0947\u0917\u093e \u2014 \u0938\u092c \u0906\u092a\u0915\u0947 \u092c\u094d\u0930\u093e\u0909\u091c\u093c\u0930 \u092e\u0947\u0902 \u092a\u094d\u0930\u094b\u0938\u0947\u0938 \u0939\u094b\u0924\u093e \u0939\u0948\u0964',
      uploadText: '\u0905\u092a\u0928\u093e \u0925\u092e\u094d\u092c\u0928\u0947\u0932 \u092f\u0939\u093e\u0901 \u0921\u094d\u0930\u0948\u0917 \u0914\u0930 \u0921\u094d\u0930\u0949\u092a \u0915\u0930\u0947\u0902',
      uploadHint: '\u092f\u093e \u0915\u094d\u0932\u093f\u0915 \u0915\u0930\u0947\u0902 \u00b7 Ctrl+V \u092a\u0947\u0938\u094d\u091f \u0915\u0930\u0947\u0902 (PNG, JPG, WebP)',
      videoTitleLabel: '\u0935\u0940\u0921\u093f\u092f\u094b \u0936\u0940\u0930\u094d\u0937\u0915',
      channelNameLabel: '\u091a\u0948\u0928\u0932 \u0915\u093e \u0928\u093e\u092e',
      generateBtn: '\u092a\u094d\u0930\u0940\u0935\u094d\u092f\u0942 \u092c\u0928\u093e\u090f\u0902',
      resetBtn: '\u0930\u0940\u0938\u0947\u091f',
      compareBtn: '\u0932\u093e\u0907\u091f/\u0921\u093e\u0930\u094d\u0915 \u0915\u0940 \u0924\u0941\u0932\u0928\u093e',
      downloadBtn: '\u092a\u094d\u0930\u0940\u0935\u094d\u092f\u0942 \u0921\u093e\u0909\u0928\u0932\u094b\u0921',
      shareBtn: '\u0936\u0947\u092f\u0930',
      copyLink: '\u0932\u093f\u0902\u0915 \u0915\u0949\u092a\u0940',
      copied: '\u0915\u0949\u092a\u0940 \u0939\u094b \u0917\u092f\u093e!',
      faqHeading: '\u0905\u0915\u094d\u0938\u0930 \u092a\u0942\u091b\u0947 \u091c\u093e\u0928\u0947 \u0935\u093e\u0932\u0947 \u0938\u0935\u093e\u0932',
      feedbackBtn: '\u092b\u0940\u0921\u092c\u0948\u0915',
      footerHome: '\u0939\u094b\u092e',
      counterToday: '\u0906\u091c',
      counterTotal: '\u0915\u0941\u0932',
      alertNoImage: '\u092a\u0939\u0932\u0947 \u0925\u092e\u094d\u092c\u0928\u0947\u0932 \u0905\u092a\u0932\u094b\u0921 \u0915\u0930\u0947\u0902\u0964',
    },

    id: {
      sectionTitle: 'Pratinjau Thumbnail YouTube Anda',
      sectionSubtitle: 'Unggah thumbnail dan lihat tampilannya di tata letak YouTube asli \u2014 semua diproses di browser Anda.',
      uploadText: 'Seret & lepas thumbnail Anda di sini',
      uploadHint: 'atau klik untuk menelusuri \u00b7 Ctrl+V untuk menempel (PNG, JPG, WebP)',
      videoTitleLabel: 'Judul Video',
      channelNameLabel: 'Nama Channel',
      generateBtn: 'Buat Pratinjau',
      resetBtn: 'Reset',
      compareBtn: 'Bandingkan Terang vs Gelap',
      downloadBtn: 'Unduh Pratinjau',
      shareBtn: 'Bagikan',
      copyLink: 'Salin Link',
      copied: 'Disalin!',
      faqHeading: 'Pertanyaan yang Sering Diajukan',
      feedbackBtn: 'Masukan',
      footerHome: 'Beranda',
      counterToday: 'Hari Ini',
      counterTotal: 'Total',
      alertNoImage: 'Silakan unggah thumbnail terlebih dahulu.',
    },

    th: {
      sectionTitle: '\u0e14\u0e39\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e20\u0e32\u0e1e\u0e22\u0e48\u0e2d YouTube \u0e02\u0e2d\u0e07\u0e04\u0e38\u0e13',
      uploadText: '\u0e25\u0e32\u0e01\u0e41\u0e25\u0e30\u0e27\u0e32\u0e07\u0e20\u0e32\u0e1e\u0e22\u0e48\u0e2d\u0e02\u0e2d\u0e07\u0e04\u0e38\u0e13\u0e17\u0e35\u0e48\u0e19\u0e35\u0e48',
      generateBtn: '\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07',
      resetBtn: '\u0e23\u0e35\u0e40\u0e0b\u0e47\u0e15',
      shareBtn: '\u0e41\u0e0a\u0e23\u0e4c',
      faqHeading: '\u0e04\u0e33\u0e16\u0e32\u0e21\u0e17\u0e35\u0e48\u0e1e\u0e1a\u0e1a\u0e48\u0e2d\u0e22',
      feedbackBtn: '\u0e04\u0e27\u0e32\u0e21\u0e04\u0e34\u0e14\u0e40\u0e2b\u0e47\u0e19',
      alertNoImage: '\u0e01\u0e23\u0e38\u0e13\u0e32\u0e2d\u0e31\u0e1b\u0e42\u0e2b\u0e25\u0e14\u0e20\u0e32\u0e1e\u0e22\u0e48\u0e2d\u0e01\u0e48\u0e2d\u0e19',
    },

    vi: {
      sectionTitle: 'Xem tr\u01b0\u1edbc Thumbnail YouTube c\u1ee7a b\u1ea1n',
      uploadText: 'K\u00e9o v\u00e0 th\u1ea3 thumbnail c\u1ee7a b\u1ea1n v\u00e0o \u0111\u00e2y',
      generateBtn: 'T\u1ea1o xem tr\u01b0\u1edbc',
      resetBtn: '\u0110\u1eb7t l\u1ea1i',
      shareBtn: 'Chia s\u1ebb',
      faqHeading: 'C\u00e2u h\u1ecfi th\u01b0\u1eddng g\u1eb7p',
      feedbackBtn: 'G\u00f3p \u00fd',
      alertNoImage: 'Vui l\u00f2ng t\u1ea3i l\u00ean thumbnail tr\u01b0\u1edbc.',
    },

    tr: {
      sectionTitle: 'YouTube K\u00fc\u00e7\u00fck Resminizi \u00d6nizleyin',
      uploadText: 'K\u00fc\u00e7\u00fck resminizi buraya s\u00fcr\u00fckleyip b\u0131rak\u0131n',
      generateBtn: '\u00d6nizleme Olu\u015ftur',
      resetBtn: 'S\u0131f\u0131rla',
      shareBtn: 'Payla\u015f',
      faqHeading: 'S\u0131k Sorulan Sorular',
      feedbackBtn: 'Geri Bildirim',
      alertNoImage: 'L\u00fctfen \u00f6nce bir k\u00fc\u00e7\u00fck resim y\u00fckleyin.',
    },

    ru: {
      sectionTitle: '\u041f\u0440\u0435\u0434\u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440 \u043c\u0438\u043d\u0438\u0430\u0442\u044e\u0440\u044b YouTube',
      uploadText: '\u041f\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u0435 \u043c\u0438\u043d\u0438\u0430\u0442\u044e\u0440\u0443 \u0441\u044e\u0434\u0430',
      generateBtn: '\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043f\u0440\u0435\u0432\u044c\u044e',
      resetBtn: '\u0421\u0431\u0440\u043e\u0441',
      shareBtn: '\u041f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f',
      faqHeading: '\u0427\u0430\u0441\u0442\u043e \u0437\u0430\u0434\u0430\u0432\u0430\u0435\u043c\u044b\u0435 \u0432\u043e\u043f\u0440\u043e\u0441\u044b',
      feedbackBtn: '\u041e\u0431\u0440\u0430\u0442\u043d\u0430\u044f \u0441\u0432\u044f\u0437\u044c',
      alertNoImage: '\u0421\u043d\u0430\u0447\u0430\u043b\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u043c\u0438\u043d\u0438\u0430\u0442\u044e\u0440\u0443.',
    },

    ar: {
      sectionTitle: '\u0645\u0639\u0627\u064a\u0646\u0629 \u0635\u0648\u0631\u0629 \u0645\u0635\u063a\u0631\u0629 YouTube',
      uploadText: '\u0627\u0633\u062d\u0628 \u0648\u0623\u0641\u0644\u062a \u0627\u0644\u0635\u0648\u0631\u0629 \u0627\u0644\u0645\u0635\u063a\u0631\u0629 \u0647\u0646\u0627',
      generateBtn: '\u0625\u0646\u0634\u0627\u0621 \u0645\u0639\u0627\u064a\u0646\u0629',
      resetBtn: '\u0625\u0639\u0627\u062f\u0629 \u0636\u0628\u0637',
      shareBtn: '\u0645\u0634\u0627\u0631\u0643\u0629',
      faqHeading: '\u0627\u0644\u0623\u0633\u0626\u0644\u0629 \u0627\u0644\u0634\u0627\u0626\u0639\u0629',
      feedbackBtn: '\u0645\u0644\u0627\u062d\u0638\u0627\u062a',
      alertNoImage: '\u064a\u0631\u062c\u0649 \u0631\u0641\u0639 \u0627\u0644\u0635\u0648\u0631\u0629 \u0627\u0644\u0645\u0635\u063a\u0631\u0629 \u0623\u0648\u0644\u0627\u064b.',
    },
  };

  // Mapping from i18n keys to CSS selectors and what to update
  var selectors = [
    // Upload section
    { key: 'sectionTitle', sel: '.section-title', prop: 'textContent' },
    { key: 'sectionSubtitle', sel: '.section-subtitle', prop: 'textContent' },
    { key: 'uploadText', sel: '.upload-text', prop: 'textContent' },
    { key: 'uploadHint', sel: '#uploadHint', prop: 'textContent' },
    { key: 'videoTitleLabel', sel: 'label[for="videoTitle"]', prop: 'textContent' },
    { key: 'channelNameLabel', sel: 'label[for="channelName"]', prop: 'textContent' },
    { key: 'videoTitlePlaceholder', sel: '#videoTitle', prop: 'placeholder' },
    { key: 'channelNamePlaceholder', sel: '#channelName', prop: 'placeholder' },
    { key: 'generateBtn', sel: '#previewBtn span', prop: 'textContent' },
    { key: 'resetBtn', sel: '#resetBtn span', prop: 'textContent' },

    // Mockups section
    { key: 'mockupsHeading', sel: '.mockups-heading', prop: 'textContent' },
    { key: 'mockupsSubheading', sel: '.mockups-subheading', prop: 'textContent' },

    // Toolbar buttons — select by ID to avoid matching wrong spans
    { key: 'downloadBtn', sel: '#downloadAllBtn', prop: 'lastText' },
    { key: 'shareBtn', sel: '#shareBtn', prop: 'lastText' },
    { key: 'compareBtn', sel: '#compareToggle', prop: 'lastText' },

    // Share dropdown
    { key: 'copyLink', sel: '#copyLinkBtn', prop: 'textContent' },

    // Mockup group headings (by index)
    { key: 'desktopViews', sel: '.mockup-group-heading', prop: 'textContent', idx: 0 },
    { key: 'mobileViews', sel: '.mockup-group-heading', prop: 'textContent', idx: 1 },
    { key: 'otherLayouts', sel: '.mockup-group-heading', prop: 'textContent', idx: 2 },

    // Mockup labels (by index)
    { key: 'homeFeedLight', sel: '.mockup-label', prop: 'textContent', idx: 0 },
    { key: 'homeFeedDark', sel: '.mockup-label', prop: 'textContent', idx: 1 },
    { key: 'searchResults', sel: '.mockup-label', prop: 'textContent', idx: 2 },
    { key: 'sidebarSuggested', sel: '.mockup-label', prop: 'textContent', idx: 3 },
    { key: 'homeFeedLight', sel: '.mockup-label', prop: 'textContent', idx: 4 },
    { key: 'homeFeedDark', sel: '.mockup-label', prop: 'textContent', idx: 5 },
    { key: 'shortsCard', sel: '.mockup-label', prop: 'textContent', idx: 6 },

    // FAQ
    { key: 'faqHeading', sel: '.faq-heading', prop: 'textContent' },

    // Footer
    { key: 'feedbackBtn', sel: '.feedback-fab-label', prop: 'textContent' },
    { key: 'footerTagline', sel: '.footer-tagline', prop: 'textContent' },
    { key: 'counterToday', sel: '.counter-label', prop: 'textContent', idx: 0 },
    { key: 'counterTotal', sel: '.counter-label', prop: 'textContent', idx: 1 },
    { key: 'footerCopy', sel: '.footer-copy', prop: 'textContent' },
  ];

  // Footer nav links (by index in .footer-nav)
  var footerNavKeys = ['footerHome', 'footerAbout', 'footerHowTo', 'footerSizeGuide', 'footerTips', 'footerPrivacy', 'footerTerms'];

  // FAQ items (by index)
  var faqKeys = [
    { q: 'faqQ1', a: 'faqA1' },
    { q: 'faqQ2', a: 'faqA2' },
    { q: 'faqQ3', a: 'faqA3' },
    { q: 'faqQ4', a: 'faqA4' },
    { q: 'faqQ5', a: 'faqA5' },
    { q: 'faqQ6', a: 'faqA6' },
  ];

  function detectLanguage() {
    var lang = navigator.language || navigator.userLanguage || 'en';
    var base = lang.split('-')[0].toLowerCase();
    // Special case: zh-TW/zh-HK use zh (simplified serves as fallback)
    if (translations[base]) return base;
    return 'en';
  }

  function t(lang, key) {
    // Fallback chain: requested lang -> en
    if (translations[lang] && translations[lang][key]) return translations[lang][key];
    return translations.en[key] || '';
  }

  function applyTranslations() {
    var lang = detectLanguage();
    if (lang === 'en') return; // English is already the default, no need to translate

    // Set html lang attribute
    document.documentElement.lang = lang;

    // Update page title
    if (t(lang, 'pageTitle')) document.title = t(lang, 'pageTitle');

    // Apply selector-based translations
    selectors.forEach(function (item) {
      var val = t(lang, item.key);
      if (!val) return;

      var els = document.querySelectorAll(item.sel);
      var el = (typeof item.idx === 'number') ? els[item.idx] : els[0];
      if (!el) return;

      if (item.prop === 'textContent') {
        el.textContent = val;
      } else if (item.prop === 'placeholder') {
        el.placeholder = val;
      } else if (item.prop === 'lastText') {
        // For buttons with icon span + text: replace the text node after the span
        var nodes = el.childNodes;
        for (var i = nodes.length - 1; i >= 0; i--) {
          if (nodes[i].nodeType === 3 && nodes[i].textContent.trim()) {
            nodes[i].textContent = ' ' + val;
            break;
          }
        }
      }
    });

    // Update default input values (only if user hasn't changed them)
    var videoTitleEl = document.getElementById('videoTitle');
    var channelNameEl = document.getElementById('channelName');
    if (videoTitleEl && videoTitleEl.value === 'Your Amazing Video Title Here') {
      videoTitleEl.value = t(lang, 'videoTitleDefault') || videoTitleEl.value;
    }
    if (channelNameEl && channelNameEl.value === 'Your Channel') {
      channelNameEl.value = t(lang, 'channelDefault') || channelNameEl.value;
    }

    // Translate footer nav links
    var footerLinks = document.querySelectorAll('.footer-nav a');
    footerNavKeys.forEach(function (key, i) {
      if (footerLinks[i] && t(lang, key)) {
        footerLinks[i].textContent = t(lang, key);
      }
    });

    // Translate FAQ items
    var faqItems = document.querySelectorAll('.faq-item');
    faqKeys.forEach(function (pair, i) {
      if (!faqItems[i]) return;
      var summary = faqItems[i].querySelector('summary');
      var answer = faqItems[i].querySelector('.faq-answer p');
      if (summary && t(lang, pair.q)) summary.textContent = t(lang, pair.q);
      if (answer && t(lang, pair.a)) answer.textContent = t(lang, pair.a);
    });

    // Translate search description
    var searchDescEl = document.querySelector('.yt-search-desc');
    if (searchDescEl && t(lang, 'searchDesc')) {
      searchDescEl.textContent = t(lang, 'searchDesc');
    }

    // Translate view stats
    var statsEls = document.querySelectorAll('.yt-stats');
    var shortsViewsEl = document.querySelector('.yt-shorts-views');
    if (t(lang, 'viewsStats')) {
      statsEls.forEach(function (el) { el.textContent = t(lang, 'viewsStats'); });
    }
    if (shortsViewsEl && t(lang, 'shortsViews')) {
      shortsViewsEl.textContent = t(lang, 'shortsViews');
    }

    // Store the current language so app.js can use translated alert messages
    window.__tp_lang = lang;
    window.__tp_t = function (key) { return t(lang, key); };
  }

  // Run after DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyTranslations);
  } else {
    applyTranslations();
  }
})();
