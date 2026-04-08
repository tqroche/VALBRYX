import svgPaths from "./svg-pntfhcwwrf";
import imgLogo from "figma:asset/dd07ee17a32b9aae1d1c51007fda08b45f38f57c.png";
import imgRectangle470 from "figma:asset/3123562e01cefeb3863fa717981903a7fa27b2ed.png";
import imgRectangle471 from "figma:asset/465b513d5b29c781e55ab1d9107c08803597abe9.png";

function CallToAction() {
  return (
    <div className="absolute contents left-[97px] top-[2234px]" data-name="Call to Action">
      <p className="-translate-x-1/2 absolute font-['Rethink Sans',sans-serif] font-normal h-[52px] leading-[0] left-[530px] overflow-hidden text-[#03035e] text-[42px] text-center text-ellipsis top-[2234px] w-[866px] whitespace-nowrap">
        <span className="leading-[44px]">{`What’s the Next Opportunity? `}</span>
        <span className="font-['DM Serif Display',sans-serif] leading-[44px] not-italic">Let’s Define It.</span>
      </p>
    </div>
  );
}

function Social() {
  return (
    <div className="absolute contents left-[973px] top-[63px]" data-name="Social">
      <a className="absolute block cursor-pointer h-[14px] left-[1012px] top-[63px] w-[7.311px]" data-name="Path 38" href="https://facebook.com" target="_self">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.31111 14">
          <path d={svgPaths.p2bdca100} fill="var(--fill-0, #C68A2A)" id="Path 38" />
        </svg>
      </a>
      <div className="absolute left-[973px] size-[14px] top-[63px]" data-name="Path 40">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
          <path d={svgPaths.p34b83500} fill="var(--fill-0, #C68A2A)" id="Path 40" />
        </svg>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute h-[146px] left-0 overflow-clip top-[2478px] w-[1080px]" data-name="Footer 7">
      <div className="absolute h-[146px] left-0 top-0 w-[1080px]" data-name="Base">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1080 146">
          <path d="M0 0H1080V146H0V0Z" fill="var(--fill-0, #03045E)" id="Base" />
        </svg>
      </div>
      <p className="absolute font-['Rethink Sans',sans-serif] font-normal leading-[24px] left-[561px] text-[14px] text-white top-[63px] whitespace-nowrap">© 2026 VALBRYX™. All Rights Reserved.</p>
      <p className="absolute font-['Rethink Sans',sans-serif] font-normal leading-[24px] left-[162px] text-[14px] text-white top-[63px] whitespace-nowrap">“Where strategy meets opportunity.”</p>
      <Social />
      <div className="absolute h-[83px] left-[47px] top-[32px] w-[84px]" data-name="logo">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogo} />
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[193px] top-[2310px]">
      <p className="-translate-x-1/2 absolute font-['Rethink Sans',sans-serif] font-normal h-[19px] leading-[19px] left-[540px] overflow-hidden text-[#03035e] text-[21px] text-center text-ellipsis top-[2310px] w-[694px] whitespace-nowrap">Let’s Secure Your Next Asset.</p>
      <div className="absolute bg-[#c68a2a] border-2 border-[#c68a2a] border-solid h-[40px] left-[471px] rounded-[4px] top-[2370px] w-[120px]" />
      <p className="-translate-x-1/2 absolute font-['Rethink Sans',sans-serif] font-bold leading-[12px] left-[531px] text-[10px] text-center text-white top-[2384px] whitespace-nowrap">LET’S GET STARTED</p>
    </div>
  );
}

function NavBar() {
  return (
    <div className="absolute h-[134px] left-0 overflow-clip top-0 w-[1080px]" data-name="Nav bar 2">
      <div className="absolute bg-[#03045e] h-[54px] left-0 top-0 w-[1080px]" data-name="Base" />
      <p className="absolute font-['Rethink Sans',sans-serif] font-normal leading-[12px] left-[673px] text-[10px] text-white top-[21px] whitespace-nowrap">ABOUT</p>
      <p className="absolute font-['Rethink Sans',sans-serif] font-normal leading-[12px] left-[750px] text-[10px] text-white top-[21px] whitespace-nowrap">INVESTMENTS</p>
      <p className="absolute font-['Rethink Sans',sans-serif] font-normal leading-[12px] left-[859px] text-[10px] text-white top-[21px] whitespace-nowrap">CONTACT</p>
      <a className="absolute block cursor-pointer font-['Inter',sans-serif] leading-[0] left-[986px] not-italic text-[#c68a2a] text-[10px] top-[22.09px] whitespace-nowrap" href="https://facebook.com" target="_self">
        <p className="leading-[12px]">Facebook</p>
      </a>
      <p className="absolute font-['Inter',sans-serif] leading-[12px] left-[1010px] not-italic text-[#c68a2a] text-[10px] top-[22.09px] whitespace-nowrap">Instagram</p>
      <div className="absolute left-[50px] size-[134px] top-0" data-name="logo">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogo} />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute contents left-[99.03px] top-[442.1px]" data-name="Header">
      <p className="absolute capitalize font-['Instrument Sans',sans-serif] font-normal leading-[52px] left-[99.03px] text-[#f1f9ff] text-[41px] top-[442.1px] w-[631.967px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Strategic Real Estate Investments
      </p>
    </div>
  );
}

function Title() {
  return (
    <div className="absolute contents left-[99.03px] top-[442.1px]" data-name="Title">
      <Header />
    </div>
  );
}

export default function Web() {
  return (
    <div className="bg-white relative size-full" data-name="Web 1920 – 5">
      <CallToAction />
      <Footer />
      <Group />
      <div className="absolute h-[533px] left-0 top-[53px] w-[1080px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[126.64%] left-0 max-w-none top-[-7.04%] w-full" src={imgRectangle470} />
        </div>
      </div>
      <NavBar />
      <p className="-translate-x-1/2 absolute font-['Rethink Sans',sans-serif] font-normal h-[180px] leading-[30px] left-[540px] text-[21px] text-black text-center top-[669px] w-[912px]">VALBRYX™ is a real estate investment firm focused on identifying and executing strategic opportunities with a disciplined, hands-on approach. Built on a foundation of real-world investing experience, the firm sources and evaluates assets with a focus on long-term growth, thoughtful risk management, and strong market insight. Through careful selection and intentional execution, VALBRYX™ provides access to well-aligned investment opportunities while maintaining a commitment to transparency, clarity, and building lasting partnerships.</p>
      <div className="absolute h-[1215px] left-0 top-[940px] w-[1080px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle471} />
      </div>
      <div className="absolute bg-[rgba(198,138,42,0.75)] h-[108px] left-[61px] top-[416px] w-[704px]" />
      <Title />
      <div className="absolute bg-[#03035e] h-[1215px] left-0 mix-blend-hard-light top-[940px] w-[1080px]" />
      <p className="absolute font-['Rethink Sans',sans-serif] font-normal h-[53px] leading-[normal] left-[102px] text-[#c68a2a] text-[41px] top-[1028px] w-[333px]">Venture Property</p>
      <p className="absolute font-['Rethink Sans',sans-serif] font-normal h-[53px] leading-[normal] left-[102px] text-[#c68a2a] text-[41px] top-[1602px] w-[428px]">Property Management</p>
      <p className="absolute font-['Rethink Sans',sans-serif] font-normal h-[420px] leading-[30px] left-[102px] text-[21px] text-white top-[1108px] w-[404px]">VALBRYX™ focuses on identifying underperforming and overlooked real estate opportunities with strong potential for value creation. The firm targets assets in growing markets where thoughtful repositioning, operational improvements, and strategic oversight can unlock long-term performance. By combining a hands-on investment approach with disciplined asset management, VALBRYX™ seeks to enhance property value and generate meaningful returns while adapting to evolving market conditions.</p>
      <p className="absolute font-['Rethink Sans',sans-serif] font-normal h-[360px] leading-[30px] left-[102px] text-[21px] text-white top-[1682px] w-[404px]">VALBRYX™ approaches property management with a focus on consistency, responsiveness, and operational efficiency. Through attentive oversight, strong communication, and the use of modern management tools, the firm works to maintain well-run properties and positive resident experiences. This hands-on approach supports day-to-day performance while helping to preserve and enhance long-term asset value.</p>
      <p className="absolute font-['Rethink Sans',sans-serif] font-normal h-[80px] leading-[45px] left-[577px] text-[#c68a2a] text-[41px] top-[1197px] w-[404px]">Multi-Family Residences</p>
      <p className="absolute font-['Rethink Sans',sans-serif] font-normal h-[570px] leading-[30px] left-[577px] text-[21px] text-white top-[1329px] w-[404px]">VALBRYX™ targets multifamily assets with clear upside potential, focusing on opportunities where strategic renovations, operational improvements, and disciplined asset management can drive accelerated value creation. The firm prioritizes properties in growth-oriented markets where demand for housing remains strong, positioning each investment to benefit from both immediate enhancements and long-term performance. With a value-add approach rooted in hands-on execution, VALBRYX™ seeks to capitalize on the resilience of multifamily real estate—an asset class historically known for its stability through market cycles—while delivering strong, risk-adjusted returns through thoughtful repositioning and active oversight.</p>
    </div>
  );
}