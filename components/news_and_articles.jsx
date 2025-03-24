import { Dancing_Script } from 'next/font/google';
import { BackgroundGradientAnimation } from './ui/background-gradient-animation';

const scriptFont = Dancing_Script({ subsets: ['latin'], weight: ['400', '700'] });

export default function NewsArticles() {
  const articles = [
    {
      title: 'HALLIE STERN: MCCAIN INSTITUTE',
      content: 'The McCain Institute at Arizona State University is proud to welcome Hallie Stern as the inaugural American Democracy & Technology Policy Translation Fellow.',
    },
    {
      title: 'HALLIE STERN: INTEGRITY INSTITUTE',
      content: 'Diagnosing Networked Harassment in its Connection to Online Violence Against Women in Politics.',
    },
    {
      title: 'AI & DEMOCRACY: POLICY IMPACT',
      content: 'Exploring the intersection of AI and policy to safeguard democratic values in the digital age.',
    },
    {
      title: 'TECHNOLOGY AND ETHICS',
      content: 'How emerging technologies influence ethical frameworks in governance and daily life.',
    },
  ];

  return (
    <div className="relative flex items-center justify-center min-h-screen w-full bg-black text-[#D0DCE2] px-6 py-12">
      <div className="absolute inset-0">
        <BackgroundGradientAnimation />
      </div>
      <div className="relative z-10 w-full max-w-3xl flex flex-col items-center text-center">
        <h2 className={`text-4xl sm:text-5xl mb-8 text-[#E8DFE7] ${scriptFont.className}`}>
          News & Articles
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          {articles.map((article, index) => (
            <div key={index} className="p-4">
              <h3 className="text-xl font-bold text-[#4ABFBB]">{article.title}</h3>
              <hr className="my-3 border-gray-500" />
              <p className="text-lg text-[#D0DCE2]">{article.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
