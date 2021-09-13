import Link from './link';

const Footer = () => (
  <div className="bg-white border border-b-0 flex-shrink-0 mt-5 py-2 text-center shadow-2xl rounded-t-lg">
    Сделано на Next.js + Tailwind CSS (
    <Link href="https://github.com/neandreev/personal-nextjs-site" text="GitHub" />
    ); Развёрнуто на <Link text="Vercel" href="https://vercel.com" />
  </div>
);

export default Footer;
