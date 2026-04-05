import { Link } from "react-router";
import { useEffect, useState } from "react";
import svgPaths from "../../imports/svg-g7o1cnf3mk";
import imgAdobeStock57688175 from "figma:asset/f9d9ce44a898283bc5fc18ff18b56905cb56eaba.png";
import imgLogo from "figma:asset/dd07ee17a32b9aae1d1c51007fda08b45f38f57c.png";
import imgImage1 from "figma:asset/fcce4ef2d0024fdf83ded2684570d383a86033af.png";
import imgImage2 from "figma:asset/48958a54bd10b82f83683a1fa7892ac9259eca38.png";
import imgImage3 from "figma:asset/ccfa288effed98a342d5cbd4aa42814f08bf816e.png";
import imgImage4 from "figma:asset/3d8b0beb12f4d220f2691b5a1e85c88607fbf942.png";
import imgImage5 from "figma:asset/81e72f16d8d4e89394473cf11c10fed516470985.png";

function Social() {
  return (
    <div className="flex gap-6 items-center lg:absolute lg:right-[2%] lg:top-[63px]" data-name="Social">
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
    <div className="w-full bg-[#03045e] pb-8 px-4 mt-12 lg:mt-0 lg:absolute lg:h-[146px] lg:left-0 lg:top-[2499px] lg:px-0" data-name="Footer 7">
      <div className="max-w-[1920px] mx-auto relative h-full flex flex-col lg:block items-center gap-4 lg:gap-0 pt-[5%] lg:pt-0">
        <Link to="/" className="w-[60px] h-[60px] lg:absolute lg:h-[83px] lg:left-[4%] lg:top-[32px] lg:w-[84px]" data-name="logo">
          <img alt="" className="w-full h-full object-contain pointer-events-none" src={imgLogo} />
        </Link>
        <p className="font-['Rethink_Sans:Regular',sans-serif] font-normal leading-[24px] text-[14px] text-white text-center lg:absolute lg:left-[15%] lg:top-[63px]">"Where strategy meets opportunity."</p>
        <p className="font-['Rethink_Sans:Regular',sans-serif] font-normal leading-[24px] text-[14px] text-white text-center lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:top-[63px]">© 2026 VALBRYX™. All Rights Reserved.</p>
        <Social />
      </div>
    </div>
  );
}

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    if (!isMenuOpen) {
      document.body.style.overflow = "";
      return;
    }
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="relative w-full z-50 lg:absolute lg:h-[134px] lg:left-0 lg:top-0" data-name="Nav bar 2">
      <div className="w-full bg-[#03045e] h-[54px]" data-name="Base" />
      <div className="absolute left-0 right-0 top-0 h-[54px] flex items-center justify-between px-4 lg:px-0">
        <Link to="/" className="relative z-[100] lg:absolute lg:left-[4%] lg:top-[3px] w-[100px] h-[100px] lg:w-[134px] lg:h-[134px]" data-name="logo">
          <img alt="" className="w-full h-full object-contain pointer-events-none" src={imgLogo} />
        </Link>
        
        {/* Hamburger Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden relative z-50 w-8 h-8 flex flex-col items-center justify-center gap-1.5"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span className={`w-6 h-0.5 bg-white transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-white transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-white transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>

        {/* Mobile Menu */}
        <div className={`lg:hidden fixed inset-0 bg-[#03045e] transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} flex flex-col items-center justify-center gap-8 z-40 overflow-y-auto px-8 pt-24 pb-12 text-center`}>
          <Link to="/about" onClick={closeMenu} className="font-['Rethink_Sans:Regular',sans-serif] font-normal text-[18px] text-white hover:text-[#c68a2a] transition-colors">ABOUT</Link>
          <Link to="/investments" onClick={closeMenu} className="font-['Rethink_Sans:Regular',sans-serif] font-normal text-[18px] text-white hover:text-[#c68a2a] transition-colors">INVESTMENTS</Link>
          <Link to="/contact" onClick={closeMenu} className="font-['Rethink_Sans:Regular',sans-serif] font-normal text-[18px] text-white hover:text-[#c68a2a] transition-colors">CONTACT</Link>
          <div className="flex items-center gap-6 mt-8">
            <a className="font-['Font_Awesome_5_Brands:Regular',sans-serif] text-[14px] text-[#c68a2a] hover:text-[#b07a24] transition-colors" href="https://www.facebook.com/profile.php?id=61585576907441">Facebook</a>
            <a className="font-['Font_Awesome_5_Brands:Regular',sans-serif] text-[14px] text-[#c68a2a] hover:text-[#b07a24] transition-colors" href="https://www.instagram.com/valbryx.curtis">Instagram</a>
          </div>
        </div>
        
        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8 lg:absolute lg:right-[30%] lg:top-[21px]">
          <Link to="/about" className="font-['Rethink_Sans:Regular',sans-serif] font-normal text-[10px] text-white hover:text-[#c68a2a] transition-colors">ABOUT</Link>
          <Link to="/investments" className="font-['Rethink_Sans:Regular',sans-serif] font-normal text-[10px] text-white hover:text-[#c68a2a] transition-colors ml-[77px]">INVESTMENTS</Link>
          <Link to="/contact" className="font-['Rethink_Sans:Regular',sans-serif] font-normal text-[10px] text-white hover:text-[#c68a2a] transition-colors ml-[109px]">CONTACT</Link>
        </nav>

        <div className="hidden lg:flex items-center gap-4 lg:absolute lg:right-[8%] lg:top-[21px]">
          <a className="font-['Font_Awesome_5_Brands:Regular',sans-serif] text-[10px] text-[#c68a2a] hover:text-[#b07a24] transition-colors" href="https://www.facebook.com/profile.php?id=61585576907441">Facebook</a>
          <a className="font-['Font_Awesome_5_Brands:Regular',sans-serif] text-[10px] text-[#c68a2a] hover:text-[#b07a24] transition-colors ml-[24px]" href="https://www.instagram.com/valbryx.curtis">Instagram</a>
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="bg-white min-h-screen w-full overflow-x-hidden">
      {/* Navigation */}
      <NavBar />

      {/* Hero Section */}
      <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[710px]">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-full w-full object-cover" src={imgAdobeStock57688175} />
        </div>
        <div className="absolute inset-x-0 bottom-[5%] px-4 lg:px-0">
          <div className="text-left lg:left-[6%] lg:w-[65%] lg:max-w-[700px] lg:ml-[6%]">
            <p className="font-['DM_Serif_Display:Regular',sans-serif] text-white text-[36px] sm:text-[48px] md:text-[60px] lg:text-[72px] leading-[1.1] sm:leading-[1.2] md:leading-[1.2] lg:leading-[60px] text-left">
              <span className="font-['Rethink_Sans:Regular',sans-serif] font-normal">Driven by </span>
              <span>Collective</span>
              <br />
              <span>Excellence</span>
            </p>
          </div>
        </div>
      </div>

      {/* Service Area Section */}
      <div className="w-full px-4 py-8 lg:py-12 bg-white">
        <div className="max-w-[1920px] mx-auto">
          <h2 className="font-['DM_Serif_Display:Regular',sans-serif] text-[#03035e] text-[32px] sm:text-[42px] lg:text-[54px] leading-[1.2] text-center lg:text-left lg:ml-[14%] mb-6 lg:mb-8">
            <span className="font-['Rethink_Sans:Regular',sans-serif] font-normal">Servicing the </span>
            <span>North Florida Area</span>
          </h2>
          
          {/* Two Column Layout for Desktop, Stack on Mobile */}
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 lg:px-[11%] mt-8">
            <div className="lg:w-1/2">
              <p className="font-['Rethink_Sans:SemiBold',sans-serif] font-semibold text-[18px] sm:text-[20px] lg:text-[22px] leading-[1.4] lg:leading-[28px] text-[#222]">
                VALBRYX™ identifies and executes strategic real estate investments, delivering disciplined guidance and long-term value at every stage.
              </p>
            </div>
            <div className="lg:w-1/2">
              <p className="font-['Rethink_Sans:Regular',sans-serif] font-normal text-[16px] lg:text-[18px] leading-[1.5] lg:leading-[24px] text-[#222]">
                Areas Serviced: Panama City, FL; Panama City Beach, FL; Lynn Haven, FL; Callaway, FL; Springfield, FL; Parker, FL; Chipley, FL; Bonifay, FL; Vernon, FL; Ebro, FL; Glenwood, FL; Marianna, FL; Blountstown, FL; Freeport, FL; Miramar Beach, FL.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section with Images - Mobile: Stack, Desktop: Grid */}
      <div className="w-full px-4 py-8 lg:py-12 bg-white">
        <div className="max-w-[1920px] mx-auto">
          
          {/* Row 1 */}
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-0 mb-8 lg:mb-12">
            {/* Image 1 */}
            <div className="w-full lg:w-[32%] h-[250px] lg:h-[305px]">
              <div className="relative w-full h-full overflow-hidden rounded-lg lg:rounded-none">
                <img alt="" className="absolute h-full w-full object-cover" src={imgImage2} />
              </div>
            </div>
            
            {/* Text 1 */}
            <div className="w-full lg:w-[36%] px-0 lg:px-8 flex items-center">
              <div>
                <h3 className="font-['Inter:Medium',sans-serif] font-medium text-[24px] sm:text-[26px] lg:text-[28px] leading-[1.3] lg:leading-[28px] text-[#03035e] mb-4">
                  Investor Experience. Realtor Guidance.
                </h3>
                <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] leading-[1.5] lg:leading-[21px] text-[#222]">
                  Since 2020, VALBRYX™ has been actively investing in real estate, building hands-on experience in identifying strong opportunities, and what drives long-term value. This foundation informs a disciplined approach rooted in strategy, precision, and market insight.
                </p>
              </div>
            </div>
            
            {/* Image 2 */}
            <div className="w-full lg:w-[32%] h-[250px] lg:h-[305px]">
              <div className="relative w-full h-full overflow-hidden rounded-lg lg:rounded-none">
                <img alt="" className="absolute h-full w-full object-cover" src={imgImage1} />
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-0 mb-8 lg:mb-12">
            {/* Text 2 */}
            <div className="w-full lg:w-[32%] px-0 lg:px-8 flex items-center lg:order-1">
              <div>
                <h3 className="font-['Inter:Medium',sans-serif] font-medium text-[24px] sm:text-[26px] lg:text-[28px] leading-[1.3] lg:leading-[28px] text-[#03035e] mb-4">
                  Real Guidance. Genuine Care.
                </h3>
                <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] leading-[1.5] lg:leading-[21px] text-[#222]">
                  VALBRYX™ brings a strong mix of investing experience and practical execution to the acquisition and management of real estate assets. With completed transactions and experience as an active property owner, VALBRYX™ understands what it takes to move opportunities forward efficiently while maintaining a focus on performance.
                </p>
              </div>
            </div>

            {/* Image 3 */}
            <div className="w-full lg:w-[34%] h-[250px] lg:h-[305px] lg:order-2">
              <div className="relative w-full h-full overflow-hidden rounded-lg lg:rounded-none">
                <img alt="" className="absolute h-full w-full object-cover" src={imgImage3} />
              </div>
            </div>

            {/* Text 3 */}
            <div className="w-full lg:w-[34%] px-0 lg:px-8 flex items-center lg:order-3">
              <div>
                <h3 className="font-['Inter:Medium',sans-serif] font-medium text-[24px] sm:text-[26px] lg:text-[28px] leading-[1.3] lg:leading-[28px] text-[#03035e] mb-4">
                  Experience You Can Trust.
                </h3>
                <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] leading-[1.5] lg:leading-[21px] text-[#222]">
                  The foundation of VALBRYX™ is built on years of real estate investing, including ownership of multiple properties and firsthand experience navigating transactions. This background provides a clear, inside-out understanding of the investment process and supports confident, well-informed decision-making.
                </p>
              </div>
            </div>
          </div>

          {/* Row 3 */}
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-0">
            {/* Image 4 */}
            <div className="w-full lg:w-[32%] h-[250px] lg:h-[305px]">
              <div className="relative w-full h-full overflow-hidden rounded-lg lg:rounded-none">
                <img alt="" className="absolute h-full w-full object-cover" src={imgImage5} />
              </div>
            </div>

            {/* Text 4 */}
            <div className="w-full lg:w-[36%] px-0 lg:px-8 flex items-center">
              <div>
                <h3 className="font-['Inter:Medium',sans-serif] font-medium text-[24px] sm:text-[26px] lg:text-[28px] leading-[1.3] lg:leading-[28px] text-[#03035e] mb-4">
                  Support You Can Count On.
                </h3>
                <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] leading-[1.5] lg:leading-[21px] text-[#222]">
                  Real estate investing can feel complex, but VALBRYX™ approaches each opportunity with clarity and purpose. With a background rooted in collaborative investing, the focus remains on thoughtful strategy, strong communication, and dependable execution to support long-term growth and successful outcomes.
                </p>
              </div>
            </div>

            {/* Image 5 */}
            <div className="w-full lg:w-[32%] h-[250px] lg:h-[305px]">
              <div className="relative w-full h-full overflow-hidden rounded-lg lg:rounded-none">
                <img alt="" className="absolute h-full w-full object-cover" src={imgImage4} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="w-full bg-white px-[16px] py-[48px]">
        <div className="max-w-[1920px] mx-auto text-center">
          <p className="font-['Rethink_Sans:Regular',sans-serif] font-normal text-[28px] sm:text-[36px] lg:text-[42px] text-[#03035e] mb-6 leading-[1.2]">
            <span>What's the Next Opportunity? </span>
            <span className="font-['DM_Serif_Display:Regular',sans-serif]">Let's Define It.</span>
          </p>
          <p className="font-['Rethink_Sans:Regular',sans-serif] font-normal text-[18px] lg:text-[21px] leading-[1.3] lg:leading-[19px] text-[#03035e] mb-8">
            Let's Secure Your Next Asset.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center bg-[#c68a2a] border-2 border-[#c68a2a] border-solid h-[40px] rounded-[4px] px-6 hover:bg-[#b07a24] transition-colors"
          >
            <span className="font-['Rethink_Sans:Bold',sans-serif] font-bold text-[10px] text-center text-white uppercase">
              Let's Get Started
            </span>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}