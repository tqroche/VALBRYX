import { Link } from "react-router";
import { useState } from "react";
import svgPaths from "../../imports/svg-g7o1cnf3mk";
import imgImage from "figma:asset/cece3e56b8a2b0a0fca76b18d5b0adad4235e0df.png";
import imgLogo from "figma:asset/dd07ee17a32b9aae1d1c51007fda08b45f38f57c.png";
import imgRectangle89 from "figma:asset/823add6a6109871ee9273e038fa411db18939bc2.png";

function Header() {
  return (
    <div className="absolute left-[6%] top-1/2 -translate-y-1/2 w-[88%] lg:left-[86.03px] lg:top-[370px] lg:translate-y-0 lg:w-auto" data-name="Header">
      <p className="capitalize font-['Instrument Sans',sans-serif] font-normal text-[28px] sm:text-[36px] lg:text-[41px] leading-[1.2] sm:leading-[52px] text-[#f1f9ff] text-center lg:text-left px-4 lg:px-0 lg:whitespace-nowrap lg:relative lg:left-[3%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Real Estate Proficiencies
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

function Main() {
  return (
    <div className="relative w-full h-[300px] sm:h-[400px] lg:h-auto lg:absolute lg:left-0 lg:top-0" data-name="Main">
      <div className="absolute h-full w-full lg:h-[536px] lg:top-0" data-name="Image">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full w-full object-cover lg:h-[110%] lg:left-[-0.71%] lg:max-w-none lg:top-[-8.73%] lg:w-[101.41%]" src={imgImage} />
        </div>
      </div>
      <div className="absolute bg-[rgba(198,138,42,0.75)] h-[80px] sm:h-[100px] lg:h-[108px] left-[6%] top-1/2 -translate-y-1/2 lg:top-[344px] lg:translate-y-0 w-[88%] lg:w-[65%] max-w-[704px]" />
      <Title />
    </div>
  );
}

function CallToAction() {
  return (
    <div className="w-full bg-white px-[16px] py-[48px] mt-8 lg:mt-0 lg:absolute lg:left-0 lg:top-[2430px] lg:py-[60px]">
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
    <div className="w-full bg-[#03045e] pb-8 px-4 mt-12 lg:mt-0 lg:absolute lg:h-[146px] lg:left-0 lg:top-[2730px] lg:px-0" data-name="Footer 7">
      <div className="max-w-[1920px] mx-auto relative h-full flex flex-col lg:block items-center gap-4 lg:gap-0 pt-[5%] lg:pt-0">
        <Link to="/" className="w-[60px] h-[60px] lg:absolute lg:h-[83px] lg:left-[4%] lg:top-[32px] lg:w-[84px]" data-name="logo">
          <img alt="" className="w-full h-full object-contain pointer-events-none" src={imgLogo} />
        </Link>
        <p className="font-['Rethink Sans',sans-serif] font-normal leading-[24px] text-[14px] text-white text-center lg:absolute lg:left-[15%] lg:top-[63px]">"Where strategy meets opportunity."</p>
        <p className="font-['Rethink Sans',sans-serif] font-normal leading-[24px] text-[14px] text-white text-center lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:top-[63px]">© 2026 VALBRYX™. All Rights Reserved.</p>
        <div className="hidden lg:flex lg:absolute lg:left-[73%] lg:top-[63px] lg:-translate-x-1/2 lg:items-center lg:justify-center lg:w-[96px]">
          <img
            src="/website-logos.png"
            alt="Partner logo"
            className="h-[28px] w-auto object-contain object-center"
          />
        </div>
        <Social />
      </div>
    </div>
  );
}

function Team() {
  return (
    <div className="w-full mt-8 lg:mt-0 lg:absolute lg:left-0 lg:top-[1850px]" data-name="Team">
      {/* Desktop Layout */}
      <div className="hidden lg:block relative h-[546px]">
        <div className="absolute bg-[#03045e] h-[546px] left-1/2 top-0 w-1/2" />
        <div className="absolute h-[546px] left-0 top-0 w-1/2">
          <img alt="" className="w-full h-full object-cover object-top" src={imgRectangle89} />
        </div>
        <div className="absolute font-['DM Serif Display',sans-serif] leading-[0] left-[57%] not-italic text-[0px] text-white top-[51px]">
          <p className="mb-0 text-[54px] whitespace-pre"><span className="font-['Rethink Sans',sans-serif] font-normal leading-[48px] text-white">Meet Your</span></p>
          <p className="leading-[48px] text-[54px] whitespace-pre">Investing Expert</p>
        </div>
        <p className="absolute font-['Rethink Sans',sans-serif] font-normal leading-[normal] left-[57%] text-[#c68a2a] text-[40px] top-[194px] whitespace-nowrap">Curtis Williams</p>
        <p className="absolute font-['Rethink Sans',sans-serif] font-medium leading-[23px] left-[57%] text-[21px] text-white top-[245px] whitespace-nowrap">Owner & Investor</p>
        <p className="absolute font-['Inter',sans-serif] font-normal h-[189px] leading-[21px] left-[57%] not-italic overflow-hidden text-[14px] text-ellipsis text-white top-[305px] w-[36%] max-w-[387px]">I am a real estate professional and investor serving Northwest Florida. I am the founder of VALBRYX™, where I've gained hands-on experience in acquisitions, property management, and long-term strategy. My military background shaped my discipline and attention to detail, and I bring that same focus into helping clients and investors navigate real estate decisions with confidence. I am committed to clear communication, integrity, and reliable guidance.</p>
      </div>
      
      {/* Mobile Layout */}
      <div className="lg:hidden bg-[#03045e] px-[24px] pt-[32px] pb-[40px]">
        <div className="w-full mb-6">
          <img alt="" className="w-full h-auto object-cover rounded-[0px]" src={imgRectangle89} />
        </div>
        <div className="font-['DM Serif Display',sans-serif] text-center mb-6">
          <p className="mb-0 text-[36px] sm:text-[48px] leading-[1.1]"><span className="font-['Rethink Sans',sans-serif] font-normal text-white">Meet Your</span></p>
          <p className="text-[36px] sm:text-[48px] leading-[1.1] text-white">Investing Expert</p>
        </div>
        <p className="font-['Rethink Sans',sans-serif] font-normal text-[32px] sm:text-[36px] leading-[normal] text-[#c68a2a] text-center mb-2">Curtis Williams</p>
        <p className="font-['Rethink Sans',sans-serif] font-medium text-[18px] sm:text-[21px] leading-[23px] text-white text-center mb-6">Owner & Investor</p>
        <p className="font-['Inter',sans-serif] font-normal text-[14px] leading-[21px] text-white text-center max-w-[600px] mx-auto">I am a real estate professional and investor serving Northwest Florida. I am the founder of VALBRYX™, where I've gained hands-on experience in acquisitions, property management, and long-term strategy. My military background shaped my discipline and attention to detail, and I bring that same focus into helping clients and investors navigate real estate decisions with confidence. I am committed to clear communication, integrity, and reliable guidance.</p>
      </div>
    </div>
  );
}

const accordionItems = [
  {
    id: "home-acquisition",
    title: "Home Acquisition",
    description: "Finding a home is one of life's most meaningful moments and you don't have to do it alone. I'm with you every step of the way helping you explore your options, answer your questions, and confidently choose a home that truly fits your life and dreams."
  },
  {
    id: "property-selling",
    title: "Property Selling",
    description: "I honor that letting go of a home is emotional so my goal is to make the selling process feels clear, supported, and rewarding. With thoughtful pricing, intentional marketing, and strong negotiation, I work diligently to help you move forward with confidence and peace."
  },
  {
    id: "coordination",
    title: "Coordination with Other Professionals",
    description: "I make the multiple moving parts of real estate feel simple. From lenders and inspectors to attorneys and contractors, I coordinate with trusted professionals to ensure everything flows smoothly. I strive for an inclusionary process to so that you'll never feel left in the dark."
  },
  {
    id: "real-estate-investment",
    title: "Real Estate Investment",
    description: "Building wealth through real estate should feel empowering, not overwhelming. Whether you're just getting started or growing your portfolio, I provide guidance to help you identify smart opportunities that align with your goals and vision for the future."
  },
  {
    id: "market-analysis",
    title: "Market Analysis & Lead Generation",
    description: "I stay on top of trends, pricing shifts, and buyer activity so that confident decisions are made. Through thoughtful strategy and targeted outreach, I connect the right people with the right opportunities at the right time."
  },
  {
    id: "paperwork",
    title: "Paperwork & Compliance",
    description: "I carefully manage contracts, disclosures, and every required detail to ensure everything is less intimidating and handled properly. You can move forward knowing your transaction is protected and professionally guided."
  }
];

function ServicesAccordion() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  return (
    <div className="w-full max-w-[683px] mx-auto px-4 lg:px-0">
      {accordionItems.map((item, index) => {
        const isOpen = openItem === item.id;
        const isLastItem = index === accordionItems.length - 1;
        
        return (
          <div 
            key={item.id} 
            className="relative" 
            style={{ 
              marginTop: index === 0 ? 0 : 10,
              marginBottom: isLastItem ? (isOpen ? 60 : 0) : 0
            }}
          >
            <button
              onClick={() => setOpenItem(isOpen ? null : item.id)}
              className="w-full text-left flex items-center justify-between cursor-pointer"
            >
              <p className="capitalize font-['Inter',sans-serif] font-normal text-[20px] sm:text-[22px] lg:text-[24px] leading-[1.5] sm:leading-[2] lg:leading-[62px] not-italic text-[#c68a2a]">
                {item.title}
              </p>
              <div className="overflow-clip size-[20px] flex-shrink-0 ml-4">
                <svg 
                  className={`block size-full transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}
                  fill="none" 
                  preserveAspectRatio="none" 
                  viewBox="0 0 20 20"
                >
                  <path d={svgPaths.p140c3b2} fill="#202020" />
                </svg>
              </div>
            </button>
            
            <div 
              className="overflow-hidden transition-all duration-300 ease-in-out"
              style={{ 
                maxHeight: isOpen ? '300px' : '0',
                opacity: isOpen ? 1 : 0
              }}
            >
              <p className="font-['Inter',sans-serif] font-normal leading-[21px] not-italic text-[#03035e] text-[14px] mt-4 mb-6">
                {item.description}
              </p>
            </div>
            
            <div className="h-0 w-full mt-4">
              <svg className="block w-full h-[2px]" fill="none" preserveAspectRatio="none" viewBox="0 0 685 2">
                <path d="M1 1H684" stroke="#03035E" strokeLinecap="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function Accordion() {
  return (
    <div className="w-full px-4 py-8 mt-8 lg:mt-0 lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:top-[1000px] lg:px-0 lg:py-0 lg:max-w-[683px]" data-name="Accordion">
      <p className="font-['DM Serif Display',sans-serif] text-center lg:text-left not-italic text-[#03045e] mb-6 lg:mb-[93px]">
        <span className="leading-[normal] text-[36px] sm:text-[48px] lg:text-[54px]">How</span>
        <span className="font-['Inter',sans-serif] font-normal leading-[normal] text-[36px] sm:text-[48px] lg:text-[54px]">{` `}</span>
        <span className="font-['Rethink Sans',sans-serif] font-normal leading-[normal] text-[36px] sm:text-[48px] lg:text-[54px]">VALBRYX™</span>
        <span className="font-['Inter',sans-serif] font-normal leading-[normal] text-[36px] sm:text-[48px] lg:text-[54px]">{` `}</span>
        <span className="leading-[normal] text-[36px] sm:text-[48px] lg:text-[54px]">Serves You</span>
      </p>
      <ServicesAccordion />
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen w-full overflow-x-hidden">
      <div className="bg-white relative w-full max-w-[1920px] mx-auto min-h-screen" data-name="Web 1920 – 4">
        <NavBar />
        <Main />
        
        {/* Intro Paragraph */}
        <p className="font-['Rethink Sans',sans-serif] font-normal text-[16px] sm:text-[18px] lg:text-[21px] leading-[26px] sm:leading-[28px] lg:leading-[30px] text-black text-center mx-auto px-4 py-6 mt-8 lg:mt-0 lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:top-[630px] w-full max-w-[90%] lg:max-w-[912px]">
          Built on a foundation of real estate investing since 2022, VALBRYX™ operates with a disciplined & strategic approach to identifying and executing high-value opportunities. VALBRYX™ began with the acquisition and management of a growing property portfolio and has evolved into an investment philosophy centered on market insight, calculated risk, and long-term asset performance. VALBRYX™ partners with clients and stakeholders to navigate the complexities of real estate investing with confidence to deliver thoughtful execution from acquisition through stabilization and beyond.
        </p>
        
        <Accordion />
        <Team />
        <CallToAction />
        <Footer />
      </div>
    </div>
  );
}