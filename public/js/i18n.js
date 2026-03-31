/**
 * ThumbPreview — Client-side i18n
 * Auto-detects browser language OR uses manual selector.
 * Translates all [data-i18n] elements + special cases.
 * 15 languages: en, ko, ja, zh, es, pt, fr, de, hi, id, th, vi, tr, ru, ar
 */
(function () {
  'use strict';

  var T = {
    en: {
      sectionTitle: 'Preview Your YouTube Thumbnail',
      sectionSubtitle: 'Upload a thumbnail and see how it looks on real YouTube layouts — all processed in your browser. No uploads to any server.',
      uploadText: 'Drag & drop your thumbnail here',
      uploadHint: 'or click to browse · Ctrl+V to paste (PNG, JPG, WebP)',
      videoTitleLabel: 'Video Title',
      channelNameLabel: 'Channel Name',
      videoTitlePlaceholder: 'Enter your video title',
      channelNamePlaceholder: 'Enter your channel name',
      videoTitleDefault: 'Your Amazing Video Title Here',
      channelDefault: 'Your Channel',
      generateBtn: 'Generate Previews',
      resetBtn: 'Reset',
      mockupsHeading: 'Your Thumbnail on YouTube',
      mockupsSubheading: 'See how viewers will see your thumbnail across different YouTube layouts.',
      compareBtn: 'Compare Light vs Dark',
      exitCompare: 'Exit Comparison',
      downloadBtn: 'Download Previews',
      shareBtn: 'Share',
      copyLink: 'Copy Link',
      copied: 'Copied!',
      desktopViews: 'Desktop Views',
      mobileViews: 'Mobile Views',
      otherLayouts: 'Other Layouts',
      homeFeedLight: 'Home Feed — Light',
      homeFeedDark: 'Home Feed — Dark',
      searchResults: 'Search Results',
      sidebarSuggested: 'Sidebar — Suggested',
      shortsCard: 'Shorts-style Card',
      searchDesc: 'This is a placeholder description for the video. It shows how your video appears in YouTube search results alongside other content.',
      viewsStats: '123K views · 2 days ago',
      shortsViews: '123K views',
      faqHeading: 'Frequently Asked Questions',
      faqQ1: 'How do I preview my YouTube thumbnail before uploading?',
      faqA1: 'Drag and drop your thumbnail image onto ThumbPreview, or click to browse. You\'ll instantly see it across 7 real YouTube layouts: desktop home feed, mobile feed, search results, sidebar, and Shorts — in both light and dark mode. No signup needed.',
      faqQ2: 'Is ThumbPreview really free?',
      faqA2: 'Yes, 100% free with no usage limits, no watermarks, and no premium tiers. There\'s no signup or account required — just open the site and start previewing.',
      faqQ3: 'Are my thumbnails safe? Is anything uploaded?',
      faqA3: 'Your thumbnails never leave your browser. ThumbPreview processes everything locally using browser APIs. No images are sent to any server. When you close the tab, the data is destroyed.',
      faqQ4: 'What\'s the best YouTube thumbnail size?',
      faqA4: 'YouTube recommends 1280x720 pixels (16:9 aspect ratio) with a minimum width of 640 pixels. Supported formats are JPG, PNG, and WebP, with a max file size of 2MB on YouTube. ThumbPreview supports images up to 10MB for your design drafts.',
      faqQ5: 'Can I test my thumbnail with my actual video title?',
      faqA5: 'Yes! Enter your video title and channel name in the fields above the preview area. They update in real-time across all 7 mockup layouts, so you can see exactly how your title appears at different truncation points.',
      faqQ6: 'Does ThumbPreview work on mobile?',
      faqA6: 'Yes, ThumbPreview is fully responsive and works on phones, tablets, and desktops. You can upload thumbnails using the file picker or by pasting from your clipboard.',
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
      footerCopy: '© 2026 ThumbPreview. All rights reserved.',
      alertNoImage: 'Please upload a thumbnail first.'
    },

    ko: {
      sectionTitle: 'YouTube 썸네일 미리보기',
      sectionSubtitle: '썸네일을 업로드하면 실제 YouTube 레이아웃에서 어떻게 보이는지 확인할 수 있습니다. 모든 처리는 브라우저에서 이루어집니다.',
      uploadText: '썸네일을 여기에 드래그 앤 드롭하세요',
      uploadHint: '또는 클릭하여 찾아보기 · Ctrl+V로 붙여넣기 (PNG, JPG, WebP)',
      videoTitleLabel: '동영상 제목',
      channelNameLabel: '채널 이름',
      videoTitlePlaceholder: '동영상 제목을 입력하세요',
      channelNamePlaceholder: '채널 이름을 입력하세요',
      videoTitleDefault: '멋진 동영상 제목을 입력하세요',
      channelDefault: '내 채널',
      generateBtn: '미리보기 생성',
      resetBtn: '초기화',
      mockupsHeading: 'YouTube에서의 내 썸네일',
      mockupsSubheading: '시청자들이 다양한 YouTube 레이아웃에서 썸네일을 어떻게 보게 되는지 확인하세요.',
      compareBtn: '라이트/다크 모드 비교',
      exitCompare: '비교 종료',
      downloadBtn: '미리보기 다운로드',
      shareBtn: '공유',
      copyLink: '링크 복사',
      copied: '복사됨!',
      desktopViews: '데스크톱 보기',
      mobileViews: '모바일 보기',
      otherLayouts: '기타 레이아웃',
      homeFeedLight: '홈 피드 — 라이트',
      homeFeedDark: '홈 피드 — 다크',
      searchResults: '검색 결과',
      sidebarSuggested: '사이드바 — 추천',
      shortsCard: 'Shorts 스타일 카드',
      searchDesc: '동영상의 설명 플레이스홀더입니다. YouTube 검색 결과에서 동영상이 어떻게 표시되는지 보여줍니다.',
      viewsStats: '조회수 12.3만회 · 2일 전',
      shortsViews: '조회수 12.3만회',
      faqHeading: '자주 묻는 질문',
      faqQ1: 'YouTube 썸네일을 업로드 전에 어떻게 미리보기 하나요?',
      faqA1: 'ThumbPreview에 썸네일 이미지를 드래그 앤 드롭하거나 클릭하여 찾아보세요. 데스크톱 홈 피드, 모바일 피드, 검색 결과, 사이드바, Shorts 등 7가지 레이아웃에서 라이트/다크 모드로 바로 확인할 수 있습니다.',
      faqQ2: 'ThumbPreview는 정말 무료인가요?',
      faqA2: '네, 100% 무료입니다. 사용 제한, 워터마크, 유료 등급이 없습니다. 회원가입 없이 바로 사용할 수 있습니다.',
      faqQ3: '내 썸네일은 안전한가요? 업로드되나요?',
      faqA3: '썸네일은 브라우저를 떠나지 않습니다. ThumbPreview는 브라우저 API를 사용하여 모든 것을 로컬에서 처리합니다. 서버에 이미지가 전송되지 않습니다.',
      faqQ4: '최적의 YouTube 썸네일 크기는?',
      faqA4: 'YouTube는 1280x720 픽셀 (16:9 비율), 최소 너비 640픽셀을 권장합니다. 지원 형식은 JPG, PNG, WebP이며 YouTube 최대 파일 크기는 2MB입니다.',
      faqQ5: '실제 동영상 제목으로 테스트할 수 있나요?',
      faqA5: '네! 미리보기 영역 위의 입력란에 동영상 제목과 채널 이름을 입력하세요. 7가지 모든 모킹 레이아웃에 실시간으로 반영됩니다.',
      faqQ6: 'ThumbPreview는 모바일에서도 작동하나요?',
      faqA6: '네, ThumbPreview는 완전히 반응형이며 핸드폰, 태블릿, 데스크톱에서 모두 작동합니다. 파일 선택기 또는 클립보드 붙여넣기로 썸네일을 업로드할 수 있습니다.',
      feedbackBtn: '피드백',
      footerTagline: '무료 YouTube 썸네일 미리보기. 100% 클라이언트 처리. 이미지가 절대 서버로 전송되지 않습니다.',
      footerHome: '홈',
      footerAbout: '소개',
      footerHowTo: '사용 방법',
      footerSizeGuide: '썸네일 크기 가이드',
      footerTips: '썸네일 팁',
      footerPrivacy: '개인정보처리방침',
      footerTerms: '이용약관',
      counterToday: '오늘',
      counterTotal: '전체',
      footerCopy: '© 2026 ThumbPreview. All rights reserved.',
      alertNoImage: '썸네일을 먼저 업로드해주세요.'
    },

    ja: {
      sectionTitle: 'YouTubeサムネイルをプレビュー',
      sectionSubtitle: 'サムネイルをアップロードすると、実際のYouTubeレイアウトでどう見えるか確認できます。すべてブラウザ内で処理されます。',
      uploadText: 'サムネイルをここにドラッグ＆ドロップ',
      uploadHint: 'またはクリックして参照 · Ctrl+Vで貼り付け (PNG, JPG, WebP)',
      videoTitleLabel: '動画タイトル',
      channelNameLabel: 'チャンネル名',
      videoTitlePlaceholder: '動画タイトルを入力',
      channelNamePlaceholder: 'チャンネル名を入力',
      videoTitleDefault: 'あなたの素晴らしい動画タイトル',
      channelDefault: 'あなたのチャンネル',
      generateBtn: 'プレビューを生成',
      resetBtn: 'リセット',
      mockupsHeading: 'YouTubeでのサムネイル表示',
      mockupsSubheading: '視聴者がさまざまなYouTubeレイアウトでサムネイルをどう見るか確認しましょう。',
      compareBtn: 'ライト/ダークモードを比較',
      exitCompare: '比較を終了',
      downloadBtn: 'プレビューをダウンロード',
      shareBtn: '共有',
      copyLink: 'リンクをコピー',
      copied: 'コピーしました！',
      desktopViews: 'デスクトップ表示',
      mobileViews: 'モバイル表示',
      otherLayouts: 'その他のレイアウト',
      homeFeedLight: 'ホームフィード — ライト',
      homeFeedDark: 'ホームフィード — ダーク',
      searchResults: '検索結果',
      sidebarSuggested: 'サイドバー — おすすめ',
      shortsCard: 'Shortsスタイルカード',
      viewsStats: '12.3万回視聴 · 2日前',
      shortsViews: '12.3万回視聴',
      faqHeading: 'よくある質問',
      faqQ1: 'YouTubeサムネイルをアップロード前にプレビューする方法は？',
      faqA1: 'ThumbPreviewにサムネイル画像をドラッグ＆ドロップするか、クリックして参照してください。7つのレイアウトでライト/ダークモード両方で確認できます。',
      faqQ2: 'ThumbPreviewは本当に無料ですか？',
      faqA2: 'はい、100%無料です。利用制限、ウォーターマーク、有料プランはありません。アカウント登録不要です。',
      faqQ3: 'サムネイルは安全ですか？アップロードされますか？',
      faqA3: 'サムネイルはブラウザを離れません。すべてローカルで処理され、サーバーには何も送信されません。',
      faqQ4: 'YouTubeサムネイルの最適サイズは？',
      faqA4: 'YouTubeは1280x720ピクセル（16:9のアスペクト比）を推奨しています。対応形式はJPG、PNG、WebPで、最大ファイルサイズは2MBです。',
      faqQ5: '実際の動画タイトルでテストできますか？',
      faqA5: 'はい！動画タイトルとチャンネル名を入力すると、7つのモックアップ全てにリアルタイムで反映されます。',
      faqQ6: 'ThumbPreviewはモバイルでも使えますか？',
      faqA6: 'はい、完全にレスポンシブ対応で、スマホ、タブレット、デスクトップで動作します。',
      feedbackBtn: 'フィードバック',
      footerHome: 'ホーム',
      footerAbout: '概要',
      footerHowTo: '使い方',
      footerSizeGuide: 'サムネイルサイズガイド',
      footerTips: 'サムネイルティップス',
      footerPrivacy: 'プライバシーポリシー',
      footerTerms: '利用規約',
      counterToday: '今日',
      counterTotal: '合計',
      alertNoImage: 'サムネイルを先にアップロードしてください。'
    },

    zh: {
      sectionTitle: '预览您的 YouTube 缩略图',
      sectionSubtitle: '上传缩略图，查看它在真实 YouTube 布局中的效果 — 全部在浏览器中处理，不上传到任何服务器。',
      uploadText: '将缩略图拖放到这里',
      uploadHint: '或点击浏览 · Ctrl+V 粘贴 (PNG, JPG, WebP)',
      videoTitleLabel: '视频标题',
      channelNameLabel: '频道名称',
      videoTitlePlaceholder: '输入视频标题',
      channelNamePlaceholder: '输入频道名称',
      videoTitleDefault: '您的精彩视频标题',
      channelDefault: '您的频道',
      generateBtn: '生成预览',
      resetBtn: '重置',
      mockupsHeading: '您的缩略图在 YouTube 上的效果',
      mockupsSubheading: '查看观众在不同 YouTube 布局中如何看到您的缩略图。',
      compareBtn: '对比亮色/暗色模式',
      exitCompare: '退出对比',
      downloadBtn: '下载预览',
      shareBtn: '分享',
      copyLink: '复制链接',
      copied: '已复制！',
      desktopViews: '桌面视图',
      mobileViews: '移动视图',
      otherLayouts: '其他布局',
      homeFeedLight: '首页信息流 — 亮色',
      homeFeedDark: '首页信息流 — 暗色',
      searchResults: '搜索结果',
      sidebarSuggested: '侧边栏 — 推荐',
      shortsCard: 'Shorts风格卡片',
      viewsStats: '12.3万次观看 · 2天前',
      shortsViews: '12.3万次观看',
      faqHeading: '常见问题',
      faqQ1: '如何在上传前预览 YouTube 缩略图？',
      faqA1: '将缩略图图片拖放到 ThumbPreview，或点击浏览。您可以在 7 种布局中即时查看效果，包括亮色和暗色模式。无需注册。',
      faqQ2: 'ThumbPreview 真的免费吗？',
      faqA2: '是的，100% 免费。没有使用限制、水印或付费等级。无需注册账号。',
      faqQ3: '我的缩略图安全吗？会被上传吗？',
      faqA3: '您的缩略图不会离开浏览器。ThumbPreview 使用浏览器 API 在本地处理所有内容。不会向服务器发送任何图片。',
      faqQ4: 'YouTube 缩略图的最佳尺寸是多少？',
      faqA4: 'YouTube 建议 1280x720 像素（16:9 比例），最小宽度 640 像素。支持格式：JPG、PNG、WebP，最大文件大小 2MB。',
      faqQ5: '可以用实际视频标题测试吗？',
      faqA5: '可以！输入视频标题和频道名称，它们会实时反映在所有 7 个模拟布局中。',
      faqQ6: 'ThumbPreview 在手机上能用吗？',
      faqA6: '可以，ThumbPreview 完全响应式，支持手机、平板和桌面设备。',
      feedbackBtn: '反馈',
      footerHome: '首页',
      footerAbout: '关于',
      footerHowTo: '使用方法',
      footerSizeGuide: '缩略图尺寸指南',
      footerTips: '缩略图技巧',
      footerPrivacy: '隐私政策',
      footerTerms: '服务条款',
      counterToday: '今日',
      counterTotal: '总计',
      alertNoImage: '请先上传缩略图。'
    },

    es: {
      sectionTitle: 'Previsualiza tu Miniatura de YouTube',
      sectionSubtitle: 'Sube una miniatura y mira cómo se ve en los diseños reales de YouTube — todo procesado en tu navegador.',
      uploadText: 'Arrastra y suelta tu miniatura aquí',
      uploadHint: 'o haz clic para buscar · Ctrl+V para pegar (PNG, JPG, WebP)',
      videoTitleLabel: 'Título del video',
      channelNameLabel: 'Nombre del canal',
      videoTitlePlaceholder: 'Ingresa el título del video',
      channelNamePlaceholder: 'Ingresa el nombre del canal',
      videoTitleDefault: 'Tu Increíble Título de Video Aquí',
      channelDefault: 'Tu Canal',
      generateBtn: 'Generar Previsualizaciones',
      resetBtn: 'Reiniciar',
      mockupsHeading: 'Tu Miniatura en YouTube',
      mockupsSubheading: 'Mira cómo los espectadores verán tu miniatura en diferentes diseños de YouTube.',
      compareBtn: 'Comparar Claro vs Oscuro',
      exitCompare: 'Salir de Comparación',
      downloadBtn: 'Descargar Previsualizaciones',
      shareBtn: 'Compartir',
      copyLink: 'Copiar Enlace',
      copied: '¡Copiado!',
      desktopViews: 'Vistas de Escritorio',
      mobileViews: 'Vistas Móviles',
      otherLayouts: 'Otros Diseños',
      homeFeedLight: 'Inicio — Claro',
      homeFeedDark: 'Inicio — Oscuro',
      searchResults: 'Resultados de Búsqueda',
      sidebarSuggested: 'Barra Lateral — Sugeridos',
      shortsCard: 'Tarjeta Estilo Shorts',
      viewsStats: '123K vistas · hace 2 días',
      faqHeading: 'Preguntas Frecuentes',
      faqQ1: '¿Cómo previsualizo mi miniatura de YouTube antes de subirla?',
      faqA1: 'Arrastra y suelta tu imagen de miniatura en ThumbPreview. Verás instantáneamente cómo se ve en 7 diseños reales de YouTube.',
      faqQ2: '¿ThumbPreview es realmente gratis?',
      faqA2: 'Sí, 100% gratis sin límites de uso ni marcas de agua. No se requiere registro.',
      faqQ3: '¿Mis miniaturas están seguras?',
      faqA3: 'Tus miniaturas nunca salen de tu navegador. Todo se procesa localmente.',
      faqQ4: '¿Cuál es el mejor tamaño de miniatura?',
      faqA4: 'YouTube recomienda 1280x720 píxeles (proporción 16:9). Formatos compatibles: JPG, PNG, WebP.',
      faqQ5: '¿Puedo probar con mi título real?',
      faqA5: '¡Sí! Ingresa tu título y nombre de canal. Se actualizan en tiempo real.',
      faqQ6: '¿Funciona en móvil?',
      faqA6: 'Sí, ThumbPreview es totalmente responsivo.',
      feedbackBtn: 'Comentarios',
      footerHome: 'Inicio',
      footerAbout: 'Acerca de',
      footerHowTo: 'Cómo Usar',
      footerSizeGuide: 'Guía de Tamaños',
      footerTips: 'Consejos',
      footerPrivacy: 'Privacidad',
      footerTerms: 'Términos',
      counterToday: 'Hoy',
      counterTotal: 'Total',
      alertNoImage: 'Por favor sube una miniatura primero.'
    },

    pt: {
      sectionTitle: 'Pré-visualize sua Miniatura do YouTube',
      sectionSubtitle: 'Envie uma miniatura e veja como ela fica nos layouts reais do YouTube — tudo processado no seu navegador.',
      uploadText: 'Arraste e solte sua miniatura aqui',
      uploadHint: 'ou clique para procurar · Ctrl+V para colar (PNG, JPG, WebP)',
      videoTitleLabel: 'Título do Vídeo',
      channelNameLabel: 'Nome do Canal',
      generateBtn: 'Gerar Pré-visualizações',
      resetBtn: 'Redefinir',
      compareBtn: 'Comparar Claro vs Escuro',
      exitCompare: 'Sair da Comparação',
      downloadBtn: 'Baixar Pré-visualizações',
      shareBtn: 'Compartilhar',
      copyLink: 'Copiar Link',
      copied: 'Copiado!',
      desktopViews: 'Visões Desktop',
      mobileViews: 'Visões Mobile',
      otherLayouts: 'Outros Layouts',
      faqHeading: 'Perguntas Frequentes',
      feedbackBtn: 'Feedback',
      footerHome: 'Início',
      alertNoImage: 'Por favor, envie uma miniatura primeiro.'
    },

    fr: {
      sectionTitle: 'Prévisualisez votre Miniature YouTube',
      sectionSubtitle: 'Téléchargez une miniature et voyez à quoi elle ressemble sur les vrais layouts YouTube — tout est traité dans votre navigateur.',
      uploadText: 'Glissez-déposez votre miniature ici',
      uploadHint: 'ou cliquez pour parcourir · Ctrl+V pour coller (PNG, JPG, WebP)',
      videoTitleLabel: 'Titre de la vidéo',
      channelNameLabel: 'Nom de la chaîne',
      generateBtn: 'Générer les Aperçus',
      resetBtn: 'Réinitialiser',
      compareBtn: 'Comparer Clair vs Sombre',
      exitCompare: 'Quitter la Comparaison',
      downloadBtn: 'Télécharger les Aperçus',
      shareBtn: 'Partager',
      copyLink: 'Copier le Lien',
      copied: 'Copié !',
      desktopViews: 'Vues Bureau',
      mobileViews: 'Vues Mobile',
      otherLayouts: 'Autres Layouts',
      faqHeading: 'Questions Fréquentes',
      feedbackBtn: 'Commentaires',
      footerHome: 'Accueil',
      alertNoImage: 'Veuillez d\'abord télécharger une miniature.'
    },

    de: {
      sectionTitle: 'Vorschau Ihres YouTube-Thumbnails',
      sectionSubtitle: 'Laden Sie ein Thumbnail hoch und sehen Sie, wie es in echten YouTube-Layouts aussieht — alles wird in Ihrem Browser verarbeitet.',
      uploadText: 'Ziehen Sie Ihr Thumbnail hierher',
      uploadHint: 'oder klicken zum Durchsuchen · Strg+V zum Einfügen (PNG, JPG, WebP)',
      videoTitleLabel: 'Videotitel',
      channelNameLabel: 'Kanalname',
      generateBtn: 'Vorschau Erstellen',
      resetBtn: 'Zurücksetzen',
      compareBtn: 'Hell/Dunkel Vergleichen',
      exitCompare: 'Vergleich Beenden',
      downloadBtn: 'Vorschau Herunterladen',
      shareBtn: 'Teilen',
      copyLink: 'Link Kopieren',
      copied: 'Kopiert!',
      desktopViews: 'Desktop-Ansichten',
      mobileViews: 'Mobile Ansichten',
      otherLayouts: 'Andere Layouts',
      faqHeading: 'Häufig Gestellte Fragen',
      feedbackBtn: 'Feedback',
      footerHome: 'Startseite',
      alertNoImage: 'Bitte laden Sie zuerst ein Thumbnail hoch.'
    },

    hi: {
      sectionTitle: 'अपना YouTube थंबनेल प्रीव्यू करें',
      sectionSubtitle: 'थंबनेल अपलोड करें और देखें कि YouTube पर कैसा दिखेगा — सब आपके ब्राउज़र में प्रोसेस होता है।',
      uploadText: 'अपना थंबनेल यहाँ ड्रैग और ड्रॉप करें',
      uploadHint: 'या क्लिक करें · Ctrl+V पेस्ट करें (PNG, JPG, WebP)',
      videoTitleLabel: 'वीडियो शीर्षक',
      channelNameLabel: 'चैनल का नाम',
      generateBtn: 'प्रीव्यू बनाएं',
      resetBtn: 'रीसेट',
      compareBtn: 'लाइट/डार्क की तुलना',
      downloadBtn: 'प्रीव्यू डाउनलोड',
      shareBtn: 'शेयर',
      copyLink: 'लिंक कॉपी',
      copied: 'कॉपी हो गया!',
      faqHeading: 'अक्सर पूछे जाने वाले सवाल',
      feedbackBtn: 'फीडबैक',
      footerHome: 'होम',
      alertNoImage: 'पहले थंबनेल अपलोड करें।'
    },

    id: {
      sectionTitle: 'Pratinjau Thumbnail YouTube Anda',
      sectionSubtitle: 'Unggah thumbnail dan lihat tampilannya di tata letak YouTube asli — semua diproses di browser Anda.',
      uploadText: 'Seret & lepas thumbnail Anda di sini',
      uploadHint: 'atau klik untuk menelusuri · Ctrl+V untuk menempel (PNG, JPG, WebP)',
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
      alertNoImage: 'Silakan unggah thumbnail terlebih dahulu.'
    },

    th: {
      sectionTitle: 'ดูตัวอย่างภาพย่อ YouTube ของคุณ',
      uploadText: 'ลากและวางภาพย่อของคุณที่นี่',
      generateBtn: 'สร้างตัวอย่าง',
      resetBtn: 'รีเซ็ต',
      shareBtn: 'แชร์',
      faqHeading: 'คำถามที่พบบ่อย',
      feedbackBtn: 'ความคิดเห็น',
      alertNoImage: 'กรุณาอัปโหลดภาพย่อก่อน'
    },

    vi: {
      sectionTitle: 'Xem trước Thumbnail YouTube của bạn',
      uploadText: 'Kéo và thả thumbnail của bạn vào đây',
      generateBtn: 'Tạo xem trước',
      resetBtn: 'Đặt lại',
      shareBtn: 'Chia sẻ',
      faqHeading: 'Câu hỏi thường gặp',
      feedbackBtn: 'Góp ý',
      alertNoImage: 'Vui lòng tải lên thumbnail trước.'
    },

    tr: {
      sectionTitle: 'YouTube Küçük Resminizi Önizleyin',
      uploadText: 'Küçük resminizi buraya sürükleyip bırakın',
      generateBtn: 'Önizleme Oluştur',
      resetBtn: 'Sıfırla',
      shareBtn: 'Paylaş',
      faqHeading: 'Sık Sorulan Sorular',
      feedbackBtn: 'Geri Bildirim',
      alertNoImage: 'Lütfen önce bir küçük resim yükleyin.'
    },

    ru: {
      sectionTitle: 'Предпросмотр миниатюры YouTube',
      sectionSubtitle: 'Загрузите миниатюру и посмотрите, как она выглядит в реальных макетах YouTube — всё обрабатывается в вашем браузере.',
      uploadText: 'Перетащите миниатюру сюда',
      uploadHint: 'или нажмите для выбора · Ctrl+V для вставки (PNG, JPG, WebP)',
      generateBtn: 'Создать превью',
      resetBtn: 'Сброс',
      shareBtn: 'Поделиться',
      faqHeading: 'Часто задаваемые вопросы',
      feedbackBtn: 'Обратная связь',
      alertNoImage: 'Сначала загрузите миниатюру.'
    },

    ar: {
      sectionTitle: 'معاينة صورة مصغرة YouTube',
      uploadText: 'اسحب وأفلت الصورة المصغرة هنا',
      generateBtn: 'إنشاء معاينة',
      resetBtn: 'إعادة ضبط',
      shareBtn: 'مشاركة',
      faqHeading: 'الأسئلة الشائعة',
      feedbackBtn: 'ملاحظات',
      alertNoImage: 'يرجى رفع الصورة المصغرة أولاً.'
    }
  };

  // Mockup label keys in order
  var mockupLabelKeys = ['homeFeedLight', 'homeFeedDark', 'searchResults', 'sidebarSuggested', 'homeFeedLight', 'homeFeedDark', 'shortsCard'];

  // Footer nav keys in order
  var footerNavKeys = ['footerHome', 'footerAbout', 'footerHowTo', 'footerSizeGuide', 'footerTips', 'footerPrivacy', 'footerTerms'];

  // FAQ keys in order
  var faqPairs = [
    { q: 'faqQ1', a: 'faqA1' },
    { q: 'faqQ2', a: 'faqA2' },
    { q: 'faqQ3', a: 'faqA3' },
    { q: 'faqQ4', a: 'faqA4' },
    { q: 'faqQ5', a: 'faqA5' },
    { q: 'faqQ6', a: 'faqA6' }
  ];

  function t(lang, key) {
    return (T[lang] && T[lang][key]) || T.en[key] || '';
  }

  function detectLang() {
    // 1. Check localStorage for manual selection
    var saved = null;
    try { saved = localStorage.getItem('tp-lang'); } catch (e) {}
    if (saved && T[saved]) return saved;

    // 2. Check navigator.languages array (all preferred languages)
    var langs = [];
    try {
      if (navigator.languages && navigator.languages.length) {
        langs = navigator.languages;
      } else if (navigator.language) {
        langs = [navigator.language];
      }
    } catch (e) {}

    for (var i = 0; i < langs.length; i++) {
      var base = langs[i].split('-')[0].toLowerCase();
      if (T[base]) return base;
    }

    return 'en';
  }

  function applyLang(lang) {
    if (!T[lang]) lang = 'en';

    // 1. Set html lang
    document.documentElement.lang = lang;

    // 2. Update language selector
    var sel = document.getElementById('langSelect');
    if (sel) sel.value = lang;

    // 3. Translate all [data-i18n] elements
    var els = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < els.length; i++) {
      var key = els[i].getAttribute('data-i18n');
      var val = t(lang, key);
      if (val) els[i].textContent = val;
    }

    // 4. Translate [data-i18n-placeholder] elements
    var plEls = document.querySelectorAll('[data-i18n-placeholder]');
    for (var i = 0; i < plEls.length; i++) {
      var key = plEls[i].getAttribute('data-i18n-placeholder');
      var val = t(lang, key);
      if (val) plEls[i].placeholder = val;
    }

    // 5. Translate default input values
    var vt = document.getElementById('videoTitle');
    var cn = document.getElementById('channelName');
    if (vt) {
      var vtDef = t('en', 'videoTitleDefault');
      if (vt.value === vtDef || vt.value === t(lang, 'videoTitleDefault') || !vt.dataset.userEdited) {
        vt.value = t(lang, 'videoTitleDefault');
      }
    }
    if (cn) {
      var cnDef = t('en', 'channelDefault');
      if (cn.value === cnDef || cn.value === t(lang, 'channelDefault') || !cn.dataset.userEdited) {
        cn.value = t(lang, 'channelDefault');
      }
    }

    // 6. Toolbar buttons (icon + text)
    var btnMap = {
      compareToggle: 'compareBtn',
      downloadAllBtn: 'downloadBtn',
      shareBtn: 'shareBtn'
    };
    Object.keys(btnMap).forEach(function (id) {
      var el = document.getElementById(id);
      if (!el) return;
      var val = t(lang, btnMap[id]);
      if (!val) return;
      // Find the text node after the icon span
      var nodes = el.childNodes;
      for (var j = nodes.length - 1; j >= 0; j--) {
        if (nodes[j].nodeType === 3 && nodes[j].textContent.trim()) {
          nodes[j].textContent = ' ' + val;
          break;
        }
      }
    });

    // 7. Mockup labels
    var labels = document.querySelectorAll('.mockup-label');
    for (var i = 0; i < labels.length && i < mockupLabelKeys.length; i++) {
      var val = t(lang, mockupLabelKeys[i]);
      if (val) labels[i].textContent = val;
    }

    // 8. Footer nav
    var navLinks = document.querySelectorAll('.footer-nav a');
    for (var i = 0; i < navLinks.length && i < footerNavKeys.length; i++) {
      var val = t(lang, footerNavKeys[i]);
      if (val) navLinks[i].textContent = val;
    }

    // 9. Footer misc
    var tagline = document.querySelector('.footer-tagline');
    if (tagline) tagline.textContent = t(lang, 'footerTagline');
    var copy = document.querySelector('.footer-copy');
    if (copy) copy.textContent = t(lang, 'footerCopy');

    // 10. Counter labels
    var counterLabels = document.querySelectorAll('.counter-label');
    if (counterLabels[0]) counterLabels[0].textContent = t(lang, 'counterToday');
    if (counterLabels[1]) counterLabels[1].textContent = t(lang, 'counterTotal');

    // 11. Feedback button
    var fab = document.querySelector('.feedback-fab-label');
    if (fab) fab.textContent = t(lang, 'feedbackBtn');

    // 12. FAQ items
    var faqItems = document.querySelectorAll('.faq-item');
    for (var i = 0; i < faqItems.length && i < faqPairs.length; i++) {
      var summary = faqItems[i].querySelector('summary');
      var answer = faqItems[i].querySelector('.faq-answer p');
      var qVal = t(lang, faqPairs[i].q);
      var aVal = t(lang, faqPairs[i].a);
      if (summary && qVal) summary.textContent = qVal;
      if (answer && aVal) answer.textContent = aVal;
    }

    // 13. Search description & stats
    var sd = document.querySelector('.yt-search-desc');
    if (sd) { var v = t(lang, 'searchDesc'); if (v) sd.textContent = v; }
    document.querySelectorAll('.yt-stats').forEach(function (el) {
      var v = t(lang, 'viewsStats'); if (v) el.textContent = v;
    });
    var sv = document.querySelector('.yt-shorts-views');
    if (sv) { var v = t(lang, 'shortsViews'); if (v) sv.textContent = v; }

    // 14. Page title
    var pt = t(lang, 'pageTitle');
    if (pt) document.title = pt;

    // Expose to app.js
    window.__tp_lang = lang;
    window.__tp_t = function (key) { return t(lang, key); };

    // Save preference
    try { localStorage.setItem('tp-lang', lang); } catch (e) {}
  }

  function init() {
    var lang = detectLang();
    applyLang(lang);

    // Language selector change handler
    var sel = document.getElementById('langSelect');
    if (sel) {
      sel.addEventListener('change', function () {
        applyLang(this.value);
      });
    }

    // Track if user has manually edited inputs
    var vt = document.getElementById('videoTitle');
    var cn = document.getElementById('channelName');
    if (vt) vt.addEventListener('input', function () { this.dataset.userEdited = '1'; });
    if (cn) cn.addEventListener('input', function () { this.dataset.userEdited = '1'; });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
