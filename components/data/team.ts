interface TeamProfile {
  name: string;
  title: string;
  description: string;
}

export interface TeamMember extends TeamProfile {
  image?: string;
  ja?: TeamProfile;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Seiya Kobayashi",
    title: "Founder & CEO",
    image: '/images/plenum-team-seiya.jpg',
    description: `
      I've always gravitated toward something magical: from childhood fantasy like Harry Potter
      to the frontier landscapes of AI and blockchain - and now, it is my turn to build products that work like magic.
      Formerly a full-stack software engineer with a focus on blockchain and cryptography. B.A. in Computer Science from Boston University.
    `,
    ja: {
      name: '小林 聖弥',
      title: '創業者・代表取締役',
      description: '2020年より、ソフトウェアエンジニアとして国内外にて多数のプロジェクトに参画。得意領域は、現代暗号技術を中心としたセキュリティ・プライバシー技術の理論と応用。AIが人類にもたらす影響のスケールに大きな可能性を感じつつも、日本におけるAXのベロシティに危機感を覚え、2026年に株式会社Plenumを創業。米国ボストン大学卒業（コンピューターサイエンス専攻・哲学副専攻）。',
    },
  },
];
