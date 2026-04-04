import svgPaths from "./svg-jjvfpy9d58";
import imgImage from "figma:asset/cece3e56b8a2b0a0fca76b18d5b0adad4235e0df.png";
import imgLogo from "figma:asset/dd07ee17a32b9aae1d1c51007fda08b45f38f57c.png";
import imgRectangle89 from "figma:asset/823add6a6109871ee9273e038fa411db18939bc2.png";

function Header() {
  return (
    <div className="absolute contents left-[86.03px] top-[442.1px]" data-name="Header">
      <p className="absolute capitalize font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[52px] left-[86.03px] text-[#f1f9ff] text-[41px] top-[442.1px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Real Estate Proficiencies
      </p>
    </div>
  );
}

function Title() {
  return (
    <div className="absolute contents left-[86.03px] top-[442.1px]" data-name="Title">
      <Header />
    </div>
  );
}

function Main() {
  return (
    <div className="absolute contents left-0 top-[54px]" data-name="Main">
      <div className="absolute h-[536px] left-0 top-[54px] w-[1080px]" data-name="Image">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[110%] left-[-0.71%] max-w-none top-[-8.73%] w-[101.41%]" src={imgImage} />
        </div>
      </div>
      <div className="absolute bg-[rgba(198,138,42,0.75)] h-[108px] left-[64px] top-[416px] w-[704px]" />
      <Title />
    </div>
  );
}

function CallToAction() {
  return (
    <div className="absolute contents left-[97px] top-[2414px]" data-name="Call to Action">
      <p className="-translate-x-1/2 absolute font-['Rethink_Sans:Regular',sans-serif] font-normal h-[52px] leading-[0] left-[530px] overflow-hidden text-[#03035e] text-[42px] text-center text-ellipsis top-[2414px] w-[866px] whitespace-nowrap">
        <span className="leading-[44px]">{`What’s the Next Opportunity? `}</span>
        <span className="font-['DM_Serif_Display:Regular',sans-serif] leading-[44px] not-italic">Let’s Define It.</span>
      </p>
    </div>
  );
}

function NavBar() {
  return (
    <div className="absolute h-[134px] left-0 overflow-clip top-0 w-[1080px]" data-name="Nav bar 2">
      <div className="absolute bg-[#03045e] h-[54px] left-0 top-0 w-[1080px]" data-name="Base" />
      <p className="absolute font-['Rethink_Sans:Regular',sans-serif] font-normal leading-[12px] left-[765px] text-[10px] text-white top-[21px] whitespace-nowrap">FIND A HOME</p>
      <p className="absolute font-['Rethink_Sans:Regular',sans-serif] font-normal leading-[12px] left-[859px] text-[10px] text-white top-[21px] whitespace-nowrap">CONTACT</p>
      <a className="absolute block cursor-pointer font-['Font_Awesome_5_Brands:Regular',sans-serif] leading-[0] left-[986px] not-italic text-[#c68a2a] text-[10px] top-[22.09px] whitespace-nowrap" href="https://facebook.com" target="_self">
        <p className="leading-[12px]">Facebook</p>
      </a>
      <p className="absolute font-['Font_Awesome_5_Brands:Regular',sans-serif] leading-[12px] left-[1010px] not-italic text-[#c68a2a] text-[10px] top-[22.09px] whitespace-nowrap">Instagram</p>
      <div className="absolute left-[50px] size-[134px] top-0" data-name="logo">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogo} />
      </div>
    </div>
  );
}

function Social() {
  return (
    <div className="absolute contents left-[973px] top-[44px]" data-name="Social">
      <a className="absolute block cursor-pointer h-[14px] left-[1012px] top-[44px] w-[7.311px]" data-name="Path 38" href="https://facebook.com" target="_self">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.31111 14">
          <path d={svgPaths.p2bdca100} fill="var(--fill-0, #C68A2A)" id="Path 38" />
        </svg>
      </a>
      <div className="absolute left-[973px] size-[14px] top-[44px]" data-name="Path 40">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
          <path d={svgPaths.p34b83500} fill="var(--fill-0, #C68A2A)" id="Path 40" />
        </svg>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute h-[146px] left-0 overflow-clip top-[2658px] w-[1080px]" data-name="Footer 7">
      <div className="absolute h-[146px] left-0 top-0 w-[1080px]" data-name="Base">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1080 146">
          <path d="M0 0H1080V146H0V0Z" fill="var(--fill-0, #03045E)" id="Base" />
        </svg>
      </div>
      <p className="absolute font-['Rethink_Sans:Bold',sans-serif] font-bold leading-[12px] left-[212px] text-[#c68a2a] text-[10px] top-[45px] uppercase whitespace-nowrap">Find A Home</p>
      <div className="absolute font-['Rethink_Sans:Regular',sans-serif] font-normal leading-[0] left-[212px] text-[14px] text-white top-[63px] whitespace-nowrap">
        <p className="leading-[24px] mb-0">We are ready for the challenge</p>
        <p className="leading-[24px]">adobexd@mail.com</p>
      </div>
      <div className="absolute font-['Rethink_Sans:Regular',sans-serif] font-normal leading-[0] left-[506px] text-[14px] text-white top-[63px] whitespace-nowrap">
        <p className="leading-[24px] mb-0">497 Evergreen Rd. Roseville, CA 95673</p>
        <p className="leading-[24px]">+44 345 678 903</p>
      </div>
      <p className="absolute font-['Rethink_Sans:Bold',sans-serif] font-bold leading-[12px] left-[506px] text-[#c68a2a] text-[10px] top-[45px] whitespace-nowrap">SAY HELLO</p>
      <Social />
      <div className="absolute h-[83px] left-[47px] top-[32px] w-[84px]" data-name="logo">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogo} />
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[193px] top-[2490px]">
      <p className="-translate-x-1/2 absolute font-['Rethink_Sans:Regular',sans-serif] font-normal h-[19px] leading-[19px] left-[540px] overflow-hidden text-[#03035e] text-[21px] text-center text-ellipsis top-[2490px] w-[694px] whitespace-nowrap">Let’s Secure Your Next Asset.</p>
      <div className="absolute bg-[#c68a2a] border-2 border-[#c68a2a] border-solid h-[40px] left-[471px] rounded-[4px] top-[2550px] w-[120px]" />
      <p className="-translate-x-1/2 absolute font-['Rethink_Sans:Bold',sans-serif] font-bold leading-[12px] left-[531px] text-[10px] text-center text-white top-[2564px] whitespace-nowrap">LET’S GET STARTED</p>
    </div>
  );
}

function Team() {
  return (
    <div className="absolute contents left-0 top-[1765px]" data-name="Team">
      <div className="absolute bg-[#03035e] h-[546px] left-[530px] top-[1765px] w-[550px]" />
      <div className="absolute h-[546px] left-0 top-[1765px] w-[530px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[145.64%] left-0 max-w-none top-[-0.93%] w-[100.03%]" src={imgRectangle89} />
        </div>
      </div>
      <p className="absolute font-['Rethink_Sans:Regular',sans-serif] font-normal leading-[normal] left-[614px] text-[#c68a2a] text-[40px] top-[1959px] whitespace-nowrap">Curtis Williams</p>
      <p className="absolute font-['Rethink_Sans:Medium',sans-serif] font-medium leading-[23px] left-[614px] text-[21px] text-white top-[2010px] whitespace-nowrap">{`Owner, Broker & Realtor`}</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[189px] leading-[21px] left-[614px] not-italic overflow-hidden text-[14px] text-ellipsis text-white top-[2070px] w-[387px]">I am a real estate professional and investor serving Northwest Florida. I am the founder of VALBRYX™, where I’ve gained hands-on experience in acquisitions, property management, and long-term strategy. My military background shaped my discipline and attention to detail, and I bring that same focus into helping clients and investors navigate real estate decisions with confidence. I am committed to clear communication, integrity, and reliable guidance.</p>
      <div className="absolute font-['DM_Serif_Display:Regular',sans-serif] leading-[0] left-[614px] not-italic text-[0px] text-white top-[1816px] whitespace-nowrap">
        <p className="mb-0 text-[54px] whitespace-pre">
          <span className="font-['Rethink_Sans:Regular',sans-serif] font-normal leading-[48px] text-white">Meet Your</span>
          <span className="font-['Inter:Regular',sans-serif] font-normal leading-[48px] not-italic text-white">{` `}</span>
          <span className="leading-[48px]">{`Real `}</span>
        </p>
        <p className="leading-[48px] text-[54px] whitespace-pre">Estate Expert</p>
      </div>
    </div>
  );
}

function Header1() {
  return (
    <div className="absolute contents left-[200px] top-[1113px]" data-name="Header">
      <p className="absolute capitalize font-['Inter:Regular',sans-serif] font-normal inset-[39.69%_61.3%_58.1%_20.28%] leading-[62px] not-italic text-[#c68a2a] text-[24px] whitespace-nowrap">Home Acquisition</p>
      <div className="absolute h-0 left-[200px] top-[1293.67px] w-[683px]" data-name="divider">
        <div className="absolute inset-[-1px_-0.15%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 685 2">
            <path d="M1 1H684" id="divider" stroke="var(--stroke-0, #03035E)" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[42.19%_22.22%_55.06%_20.28%] leading-[21px] not-italic overflow-hidden text-[#03035e] text-[14px] text-ellipsis whitespace-pre-wrap">{`We believe the best adventures and activities are those that are accessible to everyone. WKND is designed to be inclusive of all age ranges, abilities, and budget-levels. We strive to cater to the thrill-seeking adrenaline junkie BASE-jumpers as well as novices that have a spare weekend and interest in trying something new.  `}</p>
    </div>
  );
}

function WkndIcon() {
  return (
    <div className="absolute inset-[40.44%_19.35%_58.84%_78.8%] overflow-clip" data-name="WKND-icon">
      <div className="absolute bg-[rgba(0,0,0,0)] left-0 size-[20px] top-0" data-name="background" />
      <div className="absolute bg-[#202020] h-[2px] left-0 top-[9px] w-[20px]" />
    </div>
  );
}

function Title1() {
  return (
    <div className="absolute contents left-[200px] top-[1113px]" data-name="Title">
      <Header1 />
      <WkndIcon />
    </div>
  );
}

function Icons() {
  return (
    <div className="absolute left-0 size-[20px] top-0" data-name="icons">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="icons">
          <path d={svgPaths.p140c3b2} fill="var(--fill-0, #202020)" id="plus-[#1512]" />
        </g>
      </svg>
    </div>
  );
}

function WkndIcon1() {
  return (
    <div className="absolute left-[854px] overflow-clip size-[20px] top-[1524px]" data-name="WKND-icon">
      <div className="absolute bg-[rgba(0,0,0,0)] left-0 size-[20px] top-0" data-name="background" />
      <Icons />
    </div>
  );
}

function Header2() {
  return (
    <div className="absolute contents left-[200px] top-[1511px]" data-name="Header">
      <p className="absolute capitalize font-['Inter:Regular',sans-serif] font-normal leading-[62px] left-[222.43px] not-italic text-[#c68a2a] text-[24px] top-[1511px] whitespace-nowrap">{`Market Analysis & lead Generation`}</p>
      <div className="absolute h-0 left-[200px] top-[1569.67px] w-[683px]" data-name="divider">
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

function Title2() {
  return (
    <div className="absolute contents left-[200px] top-[1511px]" data-name="Title">
      <Header2 />
    </div>
  );
}

function Header3() {
  return (
    <div className="absolute contents left-[200px] top-[1300px]" data-name="Header">
      <p className="absolute capitalize font-['Inter:Regular',sans-serif] font-normal leading-[62px] left-[219.43px] not-italic text-[#c68a2a] text-[24px] top-[1300px] whitespace-nowrap">Property Selling</p>
      <div className="absolute h-0 left-[200px] top-[1358.67px] w-[683px]" data-name="divider">
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
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="icons">
          <path d={svgPaths.p140c3b2} fill="var(--fill-0, #202020)" id="plus-[#1512]" />
        </g>
      </svg>
    </div>
  );
}

function WkndIcon2() {
  return (
    <div className="absolute left-[851px] overflow-clip size-[20px] top-[1317px]" data-name="WKND-icon">
      <div className="absolute bg-[rgba(0,0,0,0)] left-0 size-[20px] top-0" data-name="background" />
      <Icons1 />
    </div>
  );
}

function Title3() {
  return (
    <div className="absolute contents left-[200px] top-[1300px]" data-name="Title">
      <Header3 />
      <WkndIcon2 />
    </div>
  );
}

function Icons2() {
  return (
    <div className="absolute left-0 size-[20px] top-0" data-name="icons">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="icons">
          <path d={svgPaths.p140c3b2} fill="var(--fill-0, #202020)" id="plus-[#1512]" />
        </g>
      </svg>
    </div>
  );
}

function WkndIcon3() {
  return (
    <div className="absolute left-[854px] overflow-clip size-[20px] top-[1597px]" data-name="WKND-icon">
      <div className="absolute bg-[rgba(0,0,0,0)] left-0 size-[20px] top-0" data-name="background" />
      <Icons2 />
    </div>
  );
}

function Header4() {
  return (
    <div className="absolute contents left-[200px] top-[1581px]" data-name="Header">
      <p className="absolute capitalize font-['Inter:Regular',sans-serif] font-normal leading-[62px] left-[221.43px] not-italic text-[#c68a2a] text-[24px] top-[1581px] whitespace-nowrap">{`Paperwork & Compliance`}</p>
      <div className="absolute h-0 left-[200px] top-[1639.67px] w-[683px]" data-name="divider">
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

function Title4() {
  return (
    <div className="absolute contents left-[200px] top-[1581px]" data-name="Title">
      <Header4 />
    </div>
  );
}

function Icons3() {
  return (
    <div className="absolute left-0 size-[20px] top-0" data-name="icons">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="icons">
          <path d={svgPaths.p140c3b2} fill="var(--fill-0, #202020)" id="plus-[#1512]" />
        </g>
      </svg>
    </div>
  );
}

function WkndIcon4() {
  return (
    <div className="absolute left-[852px] overflow-clip size-[20px] top-[1388px]" data-name="WKND-icon">
      <div className="absolute bg-[rgba(0,0,0,0)] left-0 size-[20px] top-0" data-name="background" />
      <Icons3 />
    </div>
  );
}

function Header5() {
  return (
    <div className="absolute contents left-[200px] top-[1370px]" data-name="Header">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[62px] left-[220.43px] not-italic text-[#c68a2a] text-[24px] top-[1370px] whitespace-nowrap">Coordination with Other Professionals</p>
      <div className="absolute h-0 left-[200px] top-[1428.67px] w-[683px]" data-name="divider">
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

function Title5() {
  return (
    <div className="absolute contents left-[200px] top-[1370px]" data-name="Title">
      <Header5 />
    </div>
  );
}

function Icons4() {
  return (
    <div className="absolute left-0 size-[20px] top-0" data-name="icons">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="icons">
          <path d={svgPaths.p140c3b2} fill="var(--fill-0, #202020)" id="plus-[#1512]" />
        </g>
      </svg>
    </div>
  );
}

function WkndIcon5() {
  return (
    <div className="absolute left-[853px] overflow-clip size-[20px] top-[1463px]" data-name="WKND-icon">
      <div className="absolute bg-[rgba(0,0,0,0)] left-0 size-[20px] top-0" data-name="background" />
      <Icons4 />
    </div>
  );
}

function Header6() {
  return (
    <div className="absolute contents left-[200px] top-[1440px]" data-name="Header">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[0] left-[221.43px] not-italic text-[#c68a2a] text-[24px] top-[1440px] whitespace-nowrap">
        <span className="capitalize leading-[62px]">Real Estate Inve</span>
        <span className="leading-[62px]">stment</span>
      </p>
      <div className="absolute h-0 left-[200px] top-[1498.67px] w-[683px]" data-name="divider">
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

function Title6() {
  return (
    <div className="absolute contents left-[200px] top-[1440px]" data-name="Title">
      <Header6 />
    </div>
  );
}

function Accordion() {
  return (
    <div className="absolute contents left-[200px] top-[1000px]" data-name="Accordion">
      <p className="absolute font-['DM_Serif_Display:Regular',sans-serif] leading-[0] left-[200px] not-italic text-[#03035e] text-[0px] top-[1000px] whitespace-nowrap">
        <span className="leading-[normal] text-[54px]">How</span>
        <span className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] text-[54px]">{` `}</span>
        <span className="font-['Rethink_Sans:Regular',sans-serif] font-normal leading-[normal] text-[54px]">VALBRYX™</span>
        <span className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] text-[54px]">{` `}</span>
        <span className="leading-[normal] text-[54px]">Serves You</span>
      </p>
      <Title1 />
      <Title2 />
      <Title3 />
      <Title4 />
      <Title5 />
      <Title6 />
    </div>
  );
}

export default function Web() {
  return (
    <div className="bg-white relative size-full" data-name="Web 1920 – 4">
      <Main />
      <CallToAction />
      <NavBar />
      <Footer />
      <Group />
      <p className="-translate-x-1/2 absolute font-['Rethink_Sans:Regular',sans-serif] font-normal h-[240px] leading-[30px] left-[542px] text-[21px] text-black text-center top-[674px] w-[912px]">Built on a foundation of real estate investing since 2020, VALBRYX™ operates with a disciplined, strategy-first approach to identifying and executing high-value opportunities. What began through the acquisition and management of a growing property portfolio has evolved into a refined investment philosophy centered on market insight, calculated risk, and long-term asset performance. With a focus on precision, due diligence, and strategic growth, VALBRYX™ partners with clients and stakeholders to navigate the complexities of real estate investing with confidence to deliver thoughtful execution from acquisition through stabilization and beyond.</p>
      <Team />
      <Accordion />
    </div>
  );
}