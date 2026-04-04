import svgPaths from "./svg-g7o1cnf3mk";
import imgAdobeStock57688175 from "figma:asset/f9d9ce44a898283bc5fc18ff18b56905cb56eaba.png";
import imgLogo from "figma:asset/dd07ee17a32b9aae1d1c51007fda08b45f38f57c.png";
import imgImage1 from "figma:asset/fcce4ef2d0024fdf83ded2684570d383a86033af.png";
import imgImage2 from "figma:asset/48958a54bd10b82f83683a1fa7892ac9259eca38.png";
import imgImage3 from "figma:asset/ccfa288effed98a342d5cbd4aa42814f08bf816e.png";
import imgImage4 from "figma:asset/3d8b0beb12f4d220f2691b5a1e85c88607fbf942.png";
import imgImage5 from "figma:asset/81e72f16d8d4e89394473cf11c10fed516470985.png";
import imgRectangle89 from "figma:asset/823add6a6109871ee9273e038fa411db18939bc2.png";

function Group() {
  return (
    <div className="absolute contents left-0 top-[54px]">
      <div className="absolute h-[710px] left-0 top-[54px] w-[1080px]" data-name="AdobeStock_57688175">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[117.56%] left-[-3.01%] max-w-none top-[-17.51%] w-[106.02%]" src={imgAdobeStock57688175} />
        </div>
      </div>
    </div>
  );
}

function ScrollGroup() {
  return (
    <div className="absolute contents left-0 top-[54px]" data-name="Scroll Group 1">
      <Group />
    </div>
  );
}

function Social() {
  return (
    <div className="absolute contents left-[973px] top-[44px]" data-name="Social">
      <div className="absolute h-[14px] left-[1012px] top-[44px] w-[7.311px]" data-name="Path 38">
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 7.31111 14">
          <path d={svgPaths.p2bdca100} fill="var(--fill-0, #C68A2A)" id="Path 38" />
        </svg>
      </div>
      <a className="absolute block cursor-pointer left-[973px] size-[14px] top-[44px]" data-name="Path 40" href="https://www.instagram.com/">
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
          <path d={svgPaths.p34b83500} fill="var(--fill-0, #C68A2A)" id="Path 40" />
        </svg>
      </a>
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute h-[146px] left-0 overflow-clip top-[3776px] w-[1080px]" data-name="Footer 7">
      <div className="absolute h-[146px] left-0 top-0 w-[1080px]" data-name="Base">
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 1080 146">
          <path d="M0 0H1080V146H0V0Z" fill="var(--fill-0, #03045E)" id="Base" />
        </svg>
      </div>
      <p className="absolute font-['Rethink_Sans:Bold',sans-serif] font-bold leading-[12px] left-[212px] text-[#c68a2a] text-[10px] top-[45px] uppercase">Find A Home</p>
      <div className="absolute font-['Rethink_Sans:Regular',sans-serif] font-normal leading-[24px] left-[212px] text-[14px] text-white top-[63px] whitespace-nowrap">
        <p className="mb-0">We are ready for the challenge</p>
        <p>adobexd@mail.com</p>
      </div>
      <div className="absolute font-['Rethink_Sans:Regular',sans-serif] font-normal leading-[24px] left-[506px] text-[14px] text-white top-[63px] whitespace-nowrap">
        <p className="mb-0">497 Evergreen Rd. Roseville, CA 95673</p>
        <p>+44 345 678 903</p>
      </div>
      <p className="absolute font-['Rethink_Sans:Bold',sans-serif] font-bold leading-[12px] left-[506px] text-[#c68a2a] text-[10px] top-[45px]">SAY HELLO</p>
      <Social />
      <div className="absolute left-[47px] size-[84px] top-[31px]" data-name="logo">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogo} />
      </div>
    </div>
  );
}

function NavBar() {
  return (
    <div className="absolute h-[134px] left-0 overflow-clip top-0 w-[1080px]" data-name="Nav bar 2">
      <div className="absolute bg-[#03045e] h-[54px] left-0 top-0 w-[1080px]" data-name="Base" />
      <p className="absolute font-['Rethink_Sans:Regular',sans-serif] font-normal leading-[12px] left-[765px] text-[10px] text-white top-[21px]">FIND A HOME</p>
      <p className="absolute font-['Rethink_Sans:Regular',sans-serif] font-normal leading-[12px] left-[859px] text-[10px] text-white top-[21px]">CONTACT</p>
      <p className="absolute font-['Font_Awesome_5_Brands:Regular',sans-serif] leading-[12px] left-[986px] not-italic text-[#c68a2a] text-[10px] top-[22.09px]">Facebook</p>
      <a className="absolute block cursor-pointer font-['Font_Awesome_5_Brands:Regular',sans-serif] leading-[0] left-[1010px] not-italic text-[#c68a2a] text-[10px] top-[22.09px] whitespace-nowrap" href="https://www.instagram.com/">
        <p className="leading-[12px]">Instagram</p>
      </a>
      <div className="absolute left-[50px] size-[134px] top-0" data-name="logo">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogo} />
      </div>
    </div>
  );
}

function TextLayout() {
  return (
    <div className="absolute contents left-[393px] not-italic top-[1185px] whitespace-pre-wrap" data-name="Text Layout">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[53px] leading-[28px] left-[393px] text-[#03035e] text-[28px] top-[1185px] w-[287px]">Investor Experience. Realtor Guidance.</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[168px] leading-[21px] left-[393px] text-[#222] text-[14px] top-[1254px] w-[287px]">Since 2020, VALBRYX™ has been actively investing in real estate, building hands-on experience in identifying strong opportunities, and what drives long-term value. This foundation informs a disciplined approach rooted in strategy, precision, and market insight.</p>
    </div>
  );
}

function TextLayout1() {
  return (
    <div className="absolute contents left-[41px] not-italic top-[1514px] whitespace-pre-wrap" data-name="Text Layout">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[54px] leading-[28px] left-[41px] text-[#03035e] text-[28px] top-[1514px] w-[288px]">Real Guidance. Genuine Care.</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[210px] leading-[21px] left-[41.28px] text-[#222] text-[14px] top-[1584.16px] w-[287px]">VALBRYX™ brings a strong mix of investing experience and practical execution to the acquisition and management of real estate assets. With completed transactions and experience as an active property owner, VALBRYX™ understands what it takes to move opportunities forward efficiently while maintaining a focus on performance.</p>
    </div>
  );
}

function TextLayout2() {
  return (
    <div className="absolute contents left-[751px] not-italic top-[1545px] whitespace-pre-wrap" data-name="Text Layout">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[54px] leading-[28px] left-[751px] text-[#03035e] text-[28px] top-[1545px] w-[288px]">Experience You Can Trust.</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[147px] leading-[21px] left-[751px] text-[#222] text-[14px] top-[1615px] w-[288px]">The foundation of VALBRYX™ is built on years of real estate investing, including ownership of multiple properties and firsthand experience navigating transactions. This background provides a clear, inside-out understanding of the investment process and supports confident, well-informed decision-making.</p>
    </div>
  );
}

function TextLayout3() {
  return (
    <div className="absolute contents left-[393px] not-italic top-[1875px] whitespace-pre-wrap" data-name="Text Layout">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[53px] leading-[28px] left-[393px] text-[#03035e] text-[28px] top-[1875px] w-[287px]">Support You Can Count On.</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[189px] leading-[21px] left-[393px] text-[#222] text-[14px] top-[1944.89px] w-[287px]">Real estate can feel overwhelming, but it doesn’t have to be. With a background rooted in investing and a passion for helping others, I’m committed to providing honest guidance, strong communication, and dependable support. Whether you’re buying, selling, or exploring investment opportunities, I’m here to help make your next move a successful one.</p>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute contents left-[199px] top-[2332.96px]" data-name="Header">
      <p className="absolute capitalize font-['Inter:Regular',sans-serif] font-normal inset-[59.48%_61.39%_38.94%_20.19%] leading-[62px] not-italic text-[#c68a2a] text-[24px]">Home Acquisition</p>
      <div className="absolute h-0 left-[199px] top-[2513.63px] w-[683px]" data-name="divider">
        <div className="absolute inset-[-1px_-0.15%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 685 2">
            <path d="M1 1H684" id="divider" stroke="var(--stroke-0, #03035E)" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[61.27%_22.31%_36.77%_20.19%] leading-[21px] not-italic overflow-hidden text-[#03035e] text-[14px] text-ellipsis whitespace-pre-wrap">{`We believe the best adventures and activities are those that are accessible to everyone. WKND is designed to be inclusive of all age ranges, abilities, and budget-levels. We strive to cater to the thrill-seeking adrenaline junkie BASE-jumpers as well as novices that have a spare weekend and interest in trying something new.  `}</p>
    </div>
  );
}

function WkndIcon() {
  return (
    <div className="absolute inset-[60.02%_19.44%_39.47%_78.7%] overflow-clip" data-name="WKND-icon">
      <div className="absolute bg-[rgba(0,0,0,0)] left-0 size-[20px] top-0" data-name="background" />
      <div className="absolute bg-[#202020] h-[2px] left-0 top-[9px] w-[20px]" />
    </div>
  );
}

function Title() {
  return (
    <div className="absolute contents left-[199px] top-[2332.96px]" data-name="Title">
      <Header />
      <WkndIcon />
    </div>
  );
}

function Icons() {
  return (
    <div className="absolute left-0 size-[20px] top-0" data-name="icons">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="icons">
          <path d={svgPaths.p140c3b2} fill="var(--fill-0, #202020)" id="plus-[#1512]" />
        </g>
      </svg>
    </div>
  );
}

function WkndIcon1() {
  return (
    <div className="absolute left-[853px] overflow-clip size-[20px] top-[2743.96px]" data-name="WKND-icon">
      <div className="absolute bg-[rgba(0,0,0,0)] left-0 size-[20px] top-0" data-name="background" />
      <Icons />
    </div>
  );
}

function Header1() {
  return (
    <div className="absolute contents left-[199px] top-[2730.96px]" data-name="Header">
      <p className="absolute capitalize font-['Inter:Regular',sans-serif] font-normal leading-[62px] left-[221.43px] not-italic text-[#c68a2a] text-[24px] top-[2730.96px]">{`Market Analysis & lead Generation`}</p>
      <div className="absolute h-0 left-[199px] top-[2789.63px] w-[683px]" data-name="divider">
        <div className="absolute inset-[-1px_-0.15%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 685 2">
            <path d="M1 1H684" id="divider" stroke="var(--stroke-0, #03035E)" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <WkndIcon1 />
    </div>
  );
}

function Title1() {
  return (
    <div className="absolute contents left-[199px] top-[2730.96px]" data-name="Title">
      <Header1 />
    </div>
  );
}

function Header2() {
  return (
    <div className="absolute contents left-[199px] top-[2519.96px]" data-name="Header">
      <p className="absolute capitalize font-['Inter:Regular',sans-serif] font-normal leading-[62px] left-[218.43px] not-italic text-[#c68a2a] text-[24px] top-[2519.96px]">Property Selling</p>
      <div className="absolute h-0 left-[199px] top-[2578.63px] w-[683px]" data-name="divider">
        <div className="absolute inset-[-1px_-0.15%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 685 2">
            <path d="M1 1H684" id="divider" stroke="var(--stroke-0, #03035E)" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icons1() {
  return (
    <div className="absolute left-0 size-[20px] top-0" data-name="icons">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="icons">
          <path d={svgPaths.p140c3b2} fill="var(--fill-0, #202020)" id="plus-[#1512]" />
        </g>
      </svg>
    </div>
  );
}

function WkndIcon2() {
  return (
    <div className="absolute left-[850px] overflow-clip size-[20px] top-[2536.96px]" data-name="WKND-icon">
      <div className="absolute bg-[rgba(0,0,0,0)] left-0 size-[20px] top-0" data-name="background" />
      <Icons1 />
    </div>
  );
}

function Title2() {
  return (
    <div className="absolute contents left-[199px] top-[2519.96px]" data-name="Title">
      <Header2 />
      <WkndIcon2 />
    </div>
  );
}

function Icons2() {
  return (
    <div className="absolute left-0 size-[20px] top-0" data-name="icons">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="icons">
          <path d={svgPaths.p140c3b2} fill="var(--fill-0, #202020)" id="plus-[#1512]" />
        </g>
      </svg>
    </div>
  );
}

function WkndIcon3() {
  return (
    <div className="absolute left-[853px] overflow-clip size-[20px] top-[2816.96px]" data-name="WKND-icon">
      <div className="absolute bg-[rgba(0,0,0,0)] left-0 size-[20px] top-0" data-name="background" />
      <Icons2 />
    </div>
  );
}

function Header3() {
  return (
    <div className="absolute contents left-[199px] top-[2800.96px]" data-name="Header">
      <p className="absolute capitalize font-['Inter:Regular',sans-serif] font-normal leading-[62px] left-[220.43px] not-italic text-[#c68a2a] text-[24px] top-[2800.96px]">{`Paperwork & Compliance`}</p>
      <div className="absolute h-0 left-[199px] top-[2859.63px] w-[683px]" data-name="divider">
        <div className="absolute inset-[-1px_-0.15%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 685 2">
            <path d="M1 1H684" id="divider" stroke="var(--stroke-0, #03035E)" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <WkndIcon3 />
    </div>
  );
}

function Title3() {
  return (
    <div className="absolute contents left-[199px] top-[2800.96px]" data-name="Title">
      <Header3 />
    </div>
  );
}

function Icons3() {
  return (
    <div className="absolute left-0 size-[20px] top-0" data-name="icons">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="icons">
          <path d={svgPaths.p140c3b2} fill="var(--fill-0, #202020)" id="plus-[#1512]" />
        </g>
      </svg>
    </div>
  );
}

function WkndIcon4() {
  return (
    <div className="absolute left-[851px] overflow-clip size-[20px] top-[2607.96px]" data-name="WKND-icon">
      <div className="absolute bg-[rgba(0,0,0,0)] left-0 size-[20px] top-0" data-name="background" />
      <Icons3 />
    </div>
  );
}

function Header4() {
  return (
    <div className="absolute contents left-[199px] top-[2589.96px]" data-name="Header">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[62px] left-[219.43px] not-italic text-[#c68a2a] text-[24px] top-[2589.96px]">Coordination with Other Professionals</p>
      <div className="absolute h-0 left-[199px] top-[2648.63px] w-[683px]" data-name="divider">
        <div className="absolute inset-[-1px_-0.15%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 685 2">
            <path d="M1 1H684" id="divider" stroke="var(--stroke-0, #03035E)" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <WkndIcon4 />
    </div>
  );
}

function Title4() {
  return (
    <div className="absolute contents left-[199px] top-[2589.96px]" data-name="Title">
      <Header4 />
    </div>
  );
}

function Icons4() {
  return (
    <div className="absolute left-0 size-[20px] top-0" data-name="icons">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="icons">
          <path d={svgPaths.p140c3b2} fill="var(--fill-0, #202020)" id="plus-[#1512]" />
        </g>
      </svg>
    </div>
  );
}

function WkndIcon5() {
  return (
    <div className="absolute left-[852px] overflow-clip size-[20px] top-[2682.96px]" data-name="WKND-icon">
      <div className="absolute bg-[rgba(0,0,0,0)] left-0 size-[20px] top-0" data-name="background" />
      <Icons4 />
    </div>
  );
}

function Header5() {
  return (
    <div className="absolute contents left-[199px] top-[2659.96px]" data-name="Header">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[0] left-[220.43px] not-italic text-[#c68a2a] text-[24px] top-[2659.96px]">
        <span className="capitalize leading-[62px]">Real Estate Inve</span>
        <span className="leading-[62px]">stment</span>
      </p>
      <div className="absolute h-0 left-[199px] top-[2718.63px] w-[683px]" data-name="divider">
        <div className="absolute inset-[-1px_-0.15%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 685 2">
            <path d="M1 1H684" id="divider" stroke="var(--stroke-0, #03035E)" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <WkndIcon5 />
    </div>
  );
}

function Title5() {
  return (
    <div className="absolute contents left-[199px] top-[2659.96px]" data-name="Title">
      <Header5 />
    </div>
  );
}

export default function Web() {
  return (
    <div className="bg-white relative size-full" data-name="Web 1920 – 1">
      <ScrollGroup />
      <Footer />
      <NavBar />
      <div className="absolute h-[305.238px] left-[734.31px] top-[1151.09px] w-[345.69px]" data-name="Image 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[176%] left-[-1.81%] max-w-none top-[-38%] w-[103.62%]" src={imgImage1} />
        </div>
      </div>
      <div className="absolute h-[305.238px] left-0 top-[1151.09px] w-[345.096px]" data-name="Image 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[102.63%] left-[-5.21%] max-w-none top-[-1.32%] w-[136%]" src={imgImage2} />
        </div>
      </div>
      <TextLayout />
      <div className="absolute h-[305.238px] left-[363.72px] top-[1501.36px] w-[345.69px]" data-name="Image 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[102.69%] left-[-25.8%] max-w-none top-[-1.35%] w-[136%]" src={imgImage3} />
        </div>
      </div>
      <TextLayout1 />
      <TextLayout2 />
      <div className="absolute h-[305.238px] left-[734.31px] top-[1851.64px] w-[345.69px]" data-name="Image 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[102.68%] left-[-28.64%] max-w-none top-[-1.34%] w-[136%]" src={imgImage4} />
        </div>
      </div>
      <div className="absolute h-[305.238px] left-0 top-[1851.64px] w-[345.096px]" data-name="Image 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[102.58%] left-[-12.6%] max-w-none top-[-1.29%] w-[138%]" src={imgImage5} />
        </div>
      </div>
      <TextLayout3 />
      <p className="-translate-x-1/2 absolute font-['DM_Serif_Display:Regular',sans-serif] h-[52px] leading-[0] left-[538px] not-italic overflow-hidden text-[#03035e] text-[48px] text-center text-ellipsis top-[3547px] w-[694px] whitespace-nowrap">
        <span className="font-['Rethink_Sans:Regular',sans-serif] font-normal leading-[44px]">What Comes Next?</span>
        <span className="font-['Inter:Regular',sans-serif] font-normal leading-[44px]">{` `}</span>
        <span className="leading-[44px]">You Tell Me.</span>
      </p>
      <p className="-translate-x-1/2 absolute font-['Rethink_Sans:Regular',sans-serif] font-normal h-[19px] leading-[19px] left-[538px] overflow-hidden text-[#03035e] text-[21px] text-center text-ellipsis top-[3623px] w-[694px] whitespace-nowrap">Let Me Help You Find the Home of Your Dreams.</p>
      <div className="absolute bg-[#c68a2a] border-2 border-[#c68a2a] border-solid h-[40px] left-[469px] rounded-[4px] top-[3683px] w-[120px]" />
      <p className="-translate-x-1/2 absolute font-['Rethink_Sans:Bold',sans-serif] font-bold leading-[12px] left-[529px] text-[10px] text-center text-white top-[3697px]">LET’S GET STARTED</p>
      <p className="absolute font-['DM_Serif_Display:Regular',sans-serif] h-[122px] leading-[0] left-[69px] not-italic overflow-hidden text-[72px] text-ellipsis text-white top-[572px] w-[563px] whitespace-pre-wrap">
        <span className="font-['Rethink_Sans:Regular',sans-serif] font-normal leading-[60px]">{`Find A Home to `}</span>
        <span className="leading-[60px]">Suit Your Life</span>
      </p>
      <div className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal h-[146px] leading-[24px] left-[540px] not-italic text-[#222] text-[0px] text-center top-[924px] w-[832px] whitespace-pre-wrap">
        <p className="font-['Rethink_Sans:SemiBold',sans-serif] font-semibold mb-0 text-[22px]">Our mission is to guide you into discovering the perfect haven, delivering exceptional service, and at every step of the journey.</p>
        <p className="mb-0 text-[22px]">&nbsp;</p>
        <p className="font-['Rethink_Sans:Regular',sans-serif] text-[18px]">Areas Serviced: Panama City, FL; Panama City Beach, FL; Lynn Haven, FL; Callaway, FL; Springfield, FL; Parker, FL; Chipley, FL; Bonifay, FL; Vernon, FL; Ebro, FL; Glenwood, FL; Marianna, FL; Blountstown, FL; Freeport, FL; Miramar Beach, FL.</p>
      </div>
      <p className="absolute font-['DM_Serif_Display:Regular',sans-serif] leading-[0] left-[199px] not-italic text-[#03035e] text-[0px] text-[54px] top-[2239.96px]">
        <span className="leading-[normal]">How</span>
        <span className="font-['Inter:Regular',sans-serif] font-normal leading-[normal]">{` `}</span>
        <span className="font-['Rethink_Sans:Regular',sans-serif] font-normal leading-[normal]">VALBRYX™</span>
        <span className="font-['Inter:Regular',sans-serif] font-normal leading-[normal]">{` `}</span>
        <span className="leading-[normal]">Serves You</span>
      </p>
      <Title />
      <Title1 />
      <Title2 />
      <Title3 />
      <Title4 />
      <Title5 />
      <p className="absolute font-['DM_Serif_Display:Regular',sans-serif] leading-[0] left-[147px] not-italic text-[#03035e] text-[0px] text-[54px] top-[803px]">
        <span className="font-['Rethink_Sans:Regular',sans-serif] font-normal leading-[normal]">Servicing the</span>
        <span className="font-['Inter:Regular',sans-serif] font-normal leading-[normal]">{` `}</span>
        <span className="leading-[normal]">North Florida Area</span>
      </p>
      <div className="absolute bg-[#03035e] h-[546px] left-[530px] top-[2937px] w-[550px]" />
      <div className="absolute h-[546px] left-0 top-[2937px] w-[530px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[145.64%] left-0 max-w-none top-[-0.93%] w-[100.03%]" src={imgRectangle89} />
        </div>
      </div>
      <p className="absolute font-['Rethink_Sans:Regular',sans-serif] font-normal leading-[normal] left-[614px] text-[#c68a2a] text-[40px] top-[3131px]">Curtis Williams</p>
      <p className="absolute font-['Rethink_Sans:Medium',sans-serif] font-medium leading-[23px] left-[614px] text-[21px] text-white top-[3182px]">{`Owner, Broker & Realtor`}</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[189px] leading-[21px] left-[614px] not-italic overflow-hidden text-[14px] text-ellipsis text-white top-[3242px] w-[387px] whitespace-pre-wrap">I am a real estate professional and investor serving Northwest Florida. I am the founder of VALBRYX™, where I’ve gained hands-on experience in acquisitions, property management, and long-term strategy. My military background shaped my discipline and attention to detail, and I bring that same focus into helping clients and investors navigate real estate decisions with confidence. I am committed to clear communication, integrity, and reliable guidance.</p>
      <div className="absolute font-['DM_Serif_Display:Regular',sans-serif] leading-[0] left-[614px] not-italic text-[0px] text-[54px] text-white top-[2988px] whitespace-nowrap">
        <p className="mb-0">
          <span className="font-['Rethink_Sans:Regular',sans-serif] font-normal leading-[48px] text-white">Meet Your</span>
          <span className="font-['Inter:Regular',sans-serif] font-normal leading-[48px] not-italic text-white">{` `}</span>
          <span className="leading-[48px]">{`Real `}</span>
        </p>
        <p className="leading-[48px]">Estate Expert</p>
      </div>
    </div>
  );
}