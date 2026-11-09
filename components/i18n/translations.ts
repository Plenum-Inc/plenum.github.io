export type Language = 'ja' | 'en';

export const translations = {
  ja: {
    home: 'Plenum ホーム',
    language: '表示言語',
    sections: { vision: 'ビジョン', products: 'プロダクト', team: 'チーム' },
    productDescription: {
      intro: '業務内容を一番よく知っているのは現場社員',
      detail: 'エンジニアでなくても使える',
      solution: 'ノーコードAXソリューション',
    },
    featuresTitle: '3つの特徴',
    features: [
      {
        title: ['録画ひとつで', '業務アクションをAIネイティブ化'],
        highlight: '録画ひとつ',
        description: '現場社員が面倒に感じた業務のPC録画を提出すると、AIエージェント向けのツールコードを自動生成。APIが存在しないレガシーシステムの操作や、システムを跨ぐ複雑な業務フローなど、あらゆるPC業務に対応。',
      },
      {
        title: ['セキュリティと安全性に', '最大限配慮した設計'],
        highlight: 'セキュリティと安全性',
        description: '業務録画内の機密情報は、利用PC上でマスキング。生成されたツールコードは、業務利用PCとは隔離された環境で実行され、実行成否ログを元に自己改善まで行う。',
      },
      {
        title: ['従来の10倍速で進む', '社内業務のAIエージェント化'],
        highlight: '10倍速',
        description: 'AIエージェント化における、対象業務の発見と社内システムの繋ぎこみを高速化。情シスの懸念を払拭しつつ、AXチームやFDE組織の手間を大幅に削減し、AI ROIをより早く最大化する。',
      },
    ],
    demo: {
      button: 'デモをリクエスト',
      title: 'デモのリクエスト',
      name: '氏名',
      company: '会社名',
      email: 'メールアドレス',
      message: 'お問い合わせ内容',
      send: '送信',
      sending: '送信中…',
      close: '閉じる',
      note: 'ご入力いただいたメールアドレス宛に、3営業日以内にご連絡差し上げます。',
      success: 'お問い合わせを受け付けました。3営業日以内にご連絡差し上げます。',
      error: '送信できませんでした。再度お試しいただくか、contact@plenum.co.jpへ直接ご連絡ください。',
    },
  },
  en: {
    home: 'Plenum home',
    language: 'Display language',
    sections: { vision: 'Our Vision', products: 'Our Products', team: 'Our Team' },
    productDescription: {
      intro: 'Your people know their work best.',
      detail: 'A no-code AX solution. No engineering experience required.',
      solution: '',
    },
    featuresTitle: 'Three key features',
    features: [
      {
        title: ['One recording.', 'AI-native work actions.'],
        highlight: 'One recording',
        description: 'When employees submit a PC recording of a tedious task, automatically generate tool code for AI agents. Support any PC workflow, including legacy systems without APIs and complex workflows that span multiple systems.',
      },
      {
        title: ['Security and safety,', 'by design.'],
        highlight: 'Security and safety',
        description: 'Sensitive information in work recordings is masked locally on the user’s PC. Generated tool code runs in an environment isolated from work PCs and improves itself using execution success and failure logs.',
      },
      {
        title: ['Bring AI agents to work,', '10 times faster.'],
        highlight: '10 times faster',
        description: 'Accelerate workflow discovery and connections to internal systems when adopting AI agents. Address IT teams’ concerns while significantly reducing the workload for AX teams and FDE organizations, and maximize AI ROI sooner.',
      },
    ],
    demo: {
      button: 'Request a demo',
      title: 'Request a demo',
      name: 'Full name',
      company: 'Company',
      email: 'Email address',
      message: 'Your message',
      send: 'Send',
      sending: 'Sending…',
      close: 'Close',
      note: 'We will contact you at the email address provided within three business days.',
      success: 'Thank you for your inquiry. We will contact you within three business days.',
      error: 'Your message could not be sent. Please try again or email contact@plenum.co.jp directly.',
    },
  },
};
