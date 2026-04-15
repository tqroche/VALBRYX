import { Link } from "react-router";
import imgLogo from "figma:asset/dd07ee17a32b9aae1d1c51007fda08b45f38f57c.png";

function SocialLinks() {
  return (
    <div className="flex items-center gap-6">
      <a
        className="text-[#c68a2a] hover:text-[#b07a24] transition-colors"
        href="https://www.facebook.com/profile.php?id=61585576907441"
        aria-label="Facebook"
        target="_blank"
        rel="noreferrer"
      >
        <svg className="size-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M13.5 8H16V5h-2.5C10.9 5 9 6.9 9 9.5V12H6v3h3v7h3v-7h3l1-3h-4V9.5c0-.8.7-1.5 1.5-1.5Z" />
        </svg>
      </a>
      <a
        className="text-[#c68a2a] hover:text-[#b07a24] transition-colors"
        href="https://www.instagram.com/valbryx.curtis"
        aria-label="Instagram"
        target="_blank"
        rel="noreferrer"
      >
        <svg className="size-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
        </svg>
      </a>
    </div>
  );
}

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen w-full bg-[#03045e] text-white">
      <div className="mx-auto flex min-h-screen w-full max-w-[1920px] flex-col items-center justify-center px-6 py-12 text-center">
        <Link to="/" className="mb-10 block h-[140px] w-[140px] sm:h-[170px] sm:w-[170px]">
          <img alt="VALBRYX logo" className="h-full w-full object-contain" src={imgLogo} />
        </Link>

        <p className="font-['Rethink Sans',sans-serif] text-[16px] font-medium tracking-[0.25em] text-[#c68a2a] uppercase">
          VALBRYX™ Investments
        </p>

        <h1 className="mt-4 font-['DM Serif Display',sans-serif] text-[54px] leading-[1.05] sm:text-[76px]">
          Coming Soon
        </h1>

        <p className="mt-6 max-w-[760px] font-['Rethink Sans',sans-serif] text-[18px] leading-[1.6] text-[#f1f9ff] sm:text-[21px]">
          We are preparing something exceptional. Our next experience is currently in development and will be launching soon.
        </p>

        <div className="mt-12 flex flex-col items-center gap-6">
          <SocialLinks />
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-[4px] border-2 border-[#c68a2a] px-6 py-2 font-['Rethink Sans',sans-serif] text-[11px] font-semibold tracking-[0.08em] text-[#c68a2a] uppercase transition-colors hover:bg-[#c68a2a] hover:text-white"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}
