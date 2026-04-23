import { Link } from "react-router";
import { useState } from "react";
import svgPaths from "../../imports/svg-g7o1cnf3mk";
import imgLogo from "figma:asset/dd07ee17a32b9aae1d1c51007fda08b45f38f57c.png";
import imgRectangle470 from "figma:asset/3123562e01cefeb3863fa717981903a7fa27b2ed.png";
import imgRectangle471 from "figma:asset/465b513d5b29c781e55ab1d9107c08803597abe9.png";
import websiteLogos from "/website-logos.png";

function CallToAction() {
  return (
    <div className="w-full bg-white px-[16px] py-[48px] mt-8 lg:mt-0 lg:absolute lg:left-0 lg:top-[2160px] lg:py-[60px]">
      <div className="max-w-[1920px] mx-auto text-center">
        <p className="font-['Rethink Sans',sans-serif] font-normal text-[28px] sm:text-[36px] lg:text-[42px] text-[#03035e] mb-4 leading-[1.3]">
          <span>What's the Next Opportunity? </span>
          <span className="font-['DM Serif Display',sans-serif]">Let's Define It.</span>
        </p>
        <p className="font-['Rethink Sans',sans-serif] font-normal text-[18px] lg:text-[21px] leading-[1.4] text-[#03035e] mb-8">
          Let's Secure Your Next Asset.
        </p>
        <Link 
          to="/contact" 
          className="inline-flex items-center justify-center bg-[#c68a2a] border-2 border-[#c68a2a] border-solid h-[48px] rounded-[4px] px-8 hover:bg-[#b07a24] transition-colors"
        >
          <span className="font-['Rethink Sans',sans-serif] font-bold text-[12px] text-center text-white uppercase tracking-wide">
            Let's Get Started
          </span>
        </Link>
      </div>
    </div>
  );
}

function Social() {
  return (
    <div className="flex gap-6 items-center lg:absolute lg:right-[2%] lg:top-[63px]" data-name="Social">
      <div className="w-[96px] flex items-center justify-center lg:hidden">
        <img
          src="/website-logos.png"
          alt="Partner logo"
          className="h-[28px] w-auto object-contain object-center"
        />
      </div>
      <a className="block cursor-pointer h-[14px] w-[7.311px] hover:opacity-80 transition-opacity" data-name="Path 38" href="https://www.facebook.com/profile.php?id=61585576907441">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.31111 14">
          <path d={svgPaths.p2bdca100} fill="var(--fill-0, #C68A2A)" id="Path 38" />
        </svg>
      </a>
      <a className="block cursor-pointer size-[14px] hover:opacity-80 transition-opacity" data-name="Path 40" href="https://www.instagram.com/valbryx.curtis">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
          <path d={svgPaths.p34b83500} fill="var(--fill-0, #C68A2A)" id="Path 40" />
        </svg>
      </a>
    </div>
  );
}

function Footer() {
  return (
    <div className="w-full bg-[#03045e] pb-8 px-4 mt-12 lg:mt-0 lg:absolute lg:h-[146px] lg:left-0 lg:top-[2489px] lg:px-0" data-name="Footer 7">
      <div className="max-w-[1920px] mx-auto relative h-full flex flex-col lg:block items-center gap-4 lg:gap-0 pt-[5%] lg:pt-0">
        <Link to="/" className="w-[60px] h-[60px] lg:absolute lg:h-[83px] lg:left-[4%] lg:top-[32px] lg:w-[84px]" data-name="logo">
          <img alt="" className="w-full h-full object-contain pointer-events-none" src={imgLogo} />
        </Link>
        <p className="font-['Rethink Sans',sans-serif] font-normal leading-[24px] text-[14px] text-white text-center lg:absolute lg:left-[15%] lg:top-[63px]">"Where strategy meets opportunity."</p>
        <p className="font-['Rethink Sans',sans-serif] font-normal leading-[24px] text-[14px] text-white text-center lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:top-[63px]">© 2026 VALBRYX™. All Rights Reserved.</p>
        <div className="hidden lg:flex lg:absolute lg:left-[67%] lg:top-[63px] lg:-translate-x-1/2 lg:items-center lg:justify-center lg:w-[204px]">
          <img alt="Website logo" className="h-[28px] w-auto object-contain" src={websiteLogos} />
        </div>
        <Social />
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="w-full lg:absolute lg:left-0 lg:top-[2310px] px-[16px] pt-[10px] pb-[16px]">
      <p className="font-['Rethink Sans',sans-serif] font-normal text-[18px] lg:text-[21px] leading-[19px] text-center text-[#03035e] mx-auto max-w-[90%] lg:max-w-[694px] mb-6 lg:mb-8">Let's Secure Your Next Asset.</p>
      <div className="flex justify-center">
        <Link to="/contact" className="bg-[#c68a2a] border-2 border-[#c68a2a] border-solid h-[40px] rounded-[4px] w-[120px] hover:bg-[#b07a24] transition-colors flex items-center justify-center">
          <span className="font-['Rethink Sans',sans-serif] font-bold text-[10px] text-center text-white uppercase">Let's Get Started</span>
        </Link>
      </div>
    </div>
  );
}

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative w-full z-50 lg:absolute lg:h-[134px] lg:left-0 lg:top-0" data-name="Nav bar 2">
      <div className="w-full bg-[#03045e] h-[54px]" data-name="Base" />
      <div className="absolute left-0 right-0 top-0 h-[54px] flex items-center justify-between px-4 lg:px-0">
        <Link to="/" className="relative z-[100] top-[24px] lg:top-0 lg:absolute lg:left-[4%] lg:top-[3px] w-[100px] h-[100px] lg:w-[134px] lg:h-[134px]" data-name="logo">
          <img alt="" className="w-full h-full object-contain pointer-events-none" src={imgLogo} />
        </Link>
        
        {/* Hamburger Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden relative z-50 w-8 h-8 flex flex-col items-center justify-center gap-1.5"
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-white transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-white transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-white transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>

        {/* Mobile Menu */}
        <div className={`lg:hidden fixed inset-0 bg-[#03045e] transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} flex flex-col items-center justify-center gap-8 z-40`}>
          <Link to="/about" onClick={() => setIsMenuOpen(false)} className="font-['Rethink Sans',sans-serif] font-normal text-[24px] text-white hover:text-[#c68a2a] transition-colors">ABOUT</Link>
          <Link to="/investments" onClick={() => setIsMenuOpen(false)} className="font-['Rethink Sans',sans-serif] font-normal text-[24px] text-white hover:text-[#c68a2a] transition-colors">INVESTMENTS</Link>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="font-['Rethink Sans',sans-serif] font-normal text-[24px] text-white hover:text-[#c68a2a] transition-colors">CONTACT</Link>
          <div className="flex items-center gap-6 mt-8">
            <a className="text-[#c68a2a] hover:text-[#b07a24] transition-colors" href="https://www.facebook.com/profile.php?id=61585576907441" aria-label="Facebook" target="_blank" rel="noreferrer"><svg className="size-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M13.5 8H16V5h-2.5C10.9 5 9 6.9 9 9.5V12H6v3h3v7h3v-7h3l1-3h-4V9.5c0-.8.7-1.5 1.5-1.5Z" /></svg></a>
            <a className="text-[#c68a2a] hover:text-[#b07a24] transition-colors" href="https://www.instagram.com/valbryx.curtis" aria-label="Instagram" target="_blank" rel="noreferrer"><svg className="size-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg></a>
          </div>
        </div>
        
        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8 lg:absolute lg:right-[30%] lg:top-[21px]">
          <Link to="/about" className="font-['Rethink Sans',sans-serif] font-normal text-[14px] text-white hover:text-[#c68a2a] transition-colors">ABOUT</Link>
          <Link to="/investments" className="font-['Rethink Sans',sans-serif] font-normal text-[14px] text-white hover:text-[#c68a2a] transition-colors ml-[77px]">INVESTMENTS</Link>
          <Link to="/contact" className="font-['Rethink Sans',sans-serif] font-normal text-[14px] text-white hover:text-[#c68a2a] transition-colors ml-[109px]">CONTACT</Link>
        </nav>

        <div className="hidden lg:flex items-center gap-4 lg:absolute lg:right-[8%] lg:top-[21px]">
          <a className="text-[#c68a2a] hover:text-[#b07a24] transition-colors" href="https://www.facebook.com/profile.php?id=61585576907441" aria-label="Facebook" target="_blank" rel="noreferrer"><svg className="size-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M13.5 8H16V5h-2.5C10.9 5 9 6.9 9 9.5V12H6v3h3v7h3v-7h3l1-3h-4V9.5c0-.8.7-1.5 1.5-1.5Z" /></svg></a>
          <a className="text-[#c68a2a] hover:text-[#b07a24] transition-colors" href="https://www.instagram.com/valbryx.curtis" aria-label="Instagram" target="_blank" rel="noreferrer"><svg className="size-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg></a>
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute left-[6%] top-1/2 -translate-y-1/2 lg:top-[363px] lg:translate-y-0 w-[88%] sm:w-[70%] lg:w-[65%] max-w-[704px] h-[80px] sm:h-[100px] lg:h-[108px] flex items-center justify-center" data-name="Header">
      <p className="capitalize font-['Instrument Sans',sans-serif] font-normal text-[28px] sm:text-[36px] lg:text-[41px] leading-[1.2] text-[#f1f9ff] text-center px-4" style={{ fontVariationSettings: "'wdth' 100" }}>
        Strategic Real Estate Investments
      </p>
    </div>
  );
}

function Title() {
  return (
    <div className="absolute contents" data-name="Title">
      <Header />
    </div>
  );
}

export default function InvestmentsPage() {
  return (
    <div className="bg-white min-h-screen w-full overflow-x-hidden">
      <div className="bg-white relative w-full max-w-[1920px] mx-auto min-h-screen" data-name="Web 1920 – 5">
        <NavBar />
        
        {/* Hero Section */}
        <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[533px] lg:absolute lg:left-0 lg:top-[53px]">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-full w-full object-cover" src={imgRectangle470} />
          </div>
          <div className="absolute bg-[rgba(198,138,42,0.75)] h-[80px] sm:h-[100px] lg:h-[108px] left-[6%] top-1/2 -translate-y-1/2 lg:top-[363px] lg:translate-y-0 w-[88%] sm:w-[70%] lg:w-[65%] max-w-[704px] flex items-center justify-center" />
          <Title />
        </div>

        {/* Intro Text */}
        <p className="font-['Rethink Sans',sans-serif] font-normal text-[16px] sm:text-[18px] lg:text-[21px] leading-[26px] sm:leading-[28px] lg:leading-[30px] text-black text-center mx-auto px-4 py-[5%] mt-12 lg:mt-0 lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:top-[669px] lg:pt-0 w-full max-w-[90%] lg:max-w-[912px]">
          With an emphasis on precision, due diligence, and strategic growth,&nbsp;&nbsp;VALBRYX™ sources and evaluates assets by focusing on long-term growth, thoughtful risk management, and strong market insight. Through careful selection and intentional execution, VALBRYX™ provides access to well-aligned investment opportunities while maintaining a commitment to transparency, clarity, and building lasting partnerships.
        </p>

        {/* Investment Sections Container */}
        <div className="relative w-full mt-8 lg:mt-0 lg:absolute lg:left-0 lg:top-[940px] lg:h-[1178px]">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img alt="" className="w-full h-full object-cover pointer-events-none" src={imgRectangle471} />
          </div>
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-[#03045e] mix-blend-hard-light" />
          
          {/* Content Grid */}
          <div className="relative z-10 px-[35px] py-[48px]">
            {/* Venture Property Section */}
            <div className="mb-12 lg:mb-0 lg:absolute lg:left-[9%] lg:top-[88px] lg:w-[37%] lg:max-w-[404px]">
              <h2 className="font-['Rethink Sans',sans-serif] font-normal text-[32px] sm:text-[36px] lg:text-[41px] leading-[1.2] text-[#c68a2a] mb-6 lg:mb-8">
                Venture Property
              </h2>
              <p className="font-['Rethink Sans',sans-serif] font-normal text-[16px] sm:text-[18px] lg:text-[21px] leading-[26px] sm:leading-[28px] lg:leading-[30px] text-white">
                VALBRYX™ prioritizes identifying underperforming and overlooked real estate opportunities with strong potential for value creation. VALBRYX™ targets assets in growing markets where thoughtful repositioning, operational improvements, and strategic oversight can unlock long-term performance. By utilizing a direct investment approach with disciplined asset management, VALBRYX™ seeks to enhance property value and generate meaningful returns while adapting to evolving market conditions.
              </p>
            </div>

            {/* Multi-Family Residences Section */}
            <div className="mb-12 lg:mb-0 lg:absolute lg:left-[53%] lg:top-[257px] lg:w-[37%] lg:max-w-[404px]">
              <h2 className="font-['Rethink Sans',sans-serif] font-normal text-[32px] sm:text-[36px] lg:text-[41px] leading-[1.1] text-[#c68a2a] mb-6 lg:mb-8">
                Multi-Family Residences
              </h2>
              <p className="font-['Rethink Sans',sans-serif] font-normal text-[16px] sm:text-[18px] lg:text-[21px] leading-[26px] sm:leading-[28px] lg:leading-[30px] text-white">
                VALBRYX™ targets multifamily assets with clear upside potential, focusing on opportunities where strategic renovations, operational improvements, and disciplined asset management can drive accelerated value creation. VALBRYX™ prioritizes properties in growth-oriented markets where demand for housing remains strong, positioning each investment to benefit from both immediate enhancements and long-term performance. VALBRYX™ uses value building techniques to capitalize on the resilience of multifamily real estate while delivering strong, risk-adjusted returns through thoughtful repositioning and active oversight.
              </p>
            </div>

            {/* Property Management Section */}
            <div className="mb-0 lg:mb-0 lg:absolute lg:left-[9%] lg:top-[662px] lg:w-[37%] lg:max-w-[404px]">
              <h2 className="font-['Rethink Sans',sans-serif] font-normal text-[32px] sm:text-[36px] lg:text-[41px] leading-[1.2] text-[#c68a2a] mb-6 lg:mb-8">
                Property Management
              </h2>
              <p className="font-['Rethink Sans',sans-serif] font-normal text-[16px] sm:text-[18px] lg:text-[21px] leading-[26px] sm:leading-[28px] lg:leading-[30px] text-white lg:pb-[5%]">
                VALBRYX™ approaches property management with a focus on consistency, responsiveness, and operational efficiency. Through attentive management, strong communication, and the use of modern administrative tools, VALBRYX™ works to maintain well-run properties and positive resident experiences. These unique procedures supports day-to-day performance while helping to preserve and enhance long-term asset value.
              </p>
            </div>
          </div>
        </div>

        <CallToAction />
        <Footer />
      </div>
    </div>
  );
}