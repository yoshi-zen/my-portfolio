import { TechWrapperProps } from '@/components/TechWrapper';
import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

type Props = {
  imgSrc: string;
  title: string;
  href: string;
  peers: number;
  startDate: string;
  description: string;
  tech: TechWrapperProps[];
};

export const myWork: Props[] = [
  {
    imgSrc: '/techsphere01.png',
    title: 'TechSphere',
    tech: [
      {
        Icon: <SiHtml5 />,
        name: 'HTML',
      },
      {
        Icon: <SiCss3 />,
        name: 'CSS',
      },
      {
        Icon: <SiSupabase />,
        name: 'Supabase',
      },
      {
        Icon: <SiJavascript />,
        name: 'JavaScript',
      },
      {
        Icon: <SiReact />,
        name: 'React',
      },
      {
        Icon: <SiNextdotjs />,
        name: 'Next.js 12',
      },
    ],
    peers: 1,
    startDate: '2023/2',
    description:
      'このWebサイトは、自分がWeb開発を始めた原点です。理系の友人たちをライターとして招待し、その記事を掲載しています。現在はUIをより改善できるよう日々更新を続けています。',
    href: 'https://techsphere.vercel.app/',
  },
  {
    imgSrc: '/yuito01.png',
    title: 'Yuito Hiura Portfolio Site',
    tech: [
      {
        Icon: <SiHtml5 />,
        name: 'HTML',
      },
      {
        Icon: <SiCss3 />,
        name: 'CSS',
      },
      {
        Icon: <SiTailwindcss />,
        name: 'Tailwind CSS',
      },
      {
        Icon: <SiTypescript />,
        name: 'TypeScript',
      },
      {
        Icon: <SiReact />,
        name: 'React',
      },
      {
        Icon: <SiNextdotjs />,
        name: 'Next.js 14',
      },
    ],
    peers: 1,
    startDate: '2023/12',
    description:
      '学生写真家として活躍していらっしゃる、樋浦結人さんのポートフォリオサイトを制作しました。デザインはFigmaで行い、そのデザインを元にコーディングを行いました。',
    href: 'https://yuito-hiura.vercel.app/',
  },
];
