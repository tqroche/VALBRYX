import svgPaths from "./svg-m07us6c3e3";
import imgImage from "figma:asset/cece3e56b8a2b0a0fca76b18d5b0adad4235e0df.png";
import imgAdobeStock78609622 from "figma:asset/81e72f16d8d4e89394473cf11c10fed516470985.png";
import imgLogo from "figma:asset/dd07ee17a32b9aae1d1c51007fda08b45f38f57c.png";

function Header() {
  return (
    <div className="absolute contents left-[85.6px] top-[313.1px]" data-name="Header">
      <p className="absolute capitalize font-['DM Serif Display',sans-serif] leading-[0] left-[86.03px] not-italic text-[#f1f9ff] text-[0px] text-[41px] top-[313.1px]">
        <span className="font-['Instrument Sans',sans-serif] font-normal leading-[52px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          WHAT’S HAPPENING
        </span>
        <span className="leading-[52px]">{` IN THE AREA`}</span>
      </p>
      <div className="absolute h-0 left-[85.6px] top-[387.47px] w-[649.725px]" data-name="divider">
        <div className="absolute inset-[-1px_-0.15%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 651.725 2">
            <path d="M1 1H650.725" id="divider" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Title() {
  return (
    <div className="absolute contents left-[85.6px] top-[313.1px]" data-name="Title">
      <p className="absolute font-['DM Serif Display',sans-serif] h-[47.645px] leading-[20px] left-[86.03px] not-italic text-[16px] text-white top-[441.86px] w-[659.444px] whitespace-pre-wrap">For some reason — this country, this city, this neighborhood, this particular street — is the place you are living a majority of your life in.</p>
      <p className="absolute font-['Instrument Sans',sans-serif] font-medium h-[31.402px] leading-[34px] left-[86.03px] text-[24px] text-white top-[406.37px] w-[659.444px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>{`Amazing Homes in Panama City & Bay County`}</p>
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
      <div className="absolute bg-[rgba(198,138,42,0.5)] h-[234px] left-[64px] top-[287px] w-[704px]" />
      <Title />
    </div>
  );
}

function Base() {
  return (
    <div className="absolute contents left-[-1807px] top-[-809px]" data-name="Base">
      <div className="absolute bg-white h-[170px] left-0 rounded-bl-[6px] rounded-br-[6px] top-[530px] w-[270px]" data-name="Base" />
      <div className="absolute bg-[#a6adb4] h-[180px] left-0 rounded-tl-[6px] rounded-tr-[6px] top-[350px] w-[270px]" data-name="Image" />
      <div className="absolute h-[2630px] left-[-1807px] top-[-809px] w-[4000px]" data-name="AdobeStock_78609622">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-[45.12%] max-w-none size-[6.93%] top-[44.08%]" src={imgAdobeStock78609622} />
        </div>
      </div>
    </div>
  );
}

function Time1() {
  return <div className="absolute left-[-1px] size-[16px] top-[644px]" data-name="time" />;
}

function Time() {
  return (
    <div className="absolute contents left-[-1px] top-[638px]" data-name="time">
      <p className="absolute font-['Inter',sans-serif] font-normal leading-[26px] left-[23px] not-italic text-[#777] text-[13px] top-[638px]">2m ago</p>
      <Time1 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[-1807px] top-[-809px]">
      <Base />
      <p className="absolute font-['Rethink Sans',sans-serif] font-medium h-[16px] leading-[19px] left-[-1px] overflow-hidden text-[#03035e] text-[16px] text-ellipsis top-[570px] w-[230px] whitespace-nowrap">Dolore magna aliqua</p>
      <p className="absolute font-['DM Serif Display',sans-serif] h-[38px] leading-[16px] left-[-1px] not-italic text-[#03035e] text-[12px] top-[596px] w-[230px] whitespace-pre-wrap">Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat.</p>
      <Time />
    </div>
  );
}

function Base1() {
  return (
    <div className="absolute contents left-[-1477px] top-[-809px]" data-name="Base">
      <div className="absolute bg-white h-[170px] left-[330px] rounded-bl-[6px] rounded-br-[6px] top-[530px] w-[270px]" data-name="Base" />
      <div className="absolute bg-[#a6adb4] h-[180px] left-[330px] rounded-tl-[6px] rounded-tr-[6px] top-[350px] w-[270px]" data-name="7" />
      <div className="absolute h-[2630px] left-[-1477px] top-[-809px] w-[4000px]" data-name="AdobeStock_78609622">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-[45.12%] max-w-none size-[6.93%] top-[44.08%]" src={imgAdobeStock78609622} />
        </div>
      </div>
    </div>
  );
}

function Time3() {
  return <div className="absolute left-[329px] size-[16px] top-[644px]" data-name="time" />;
}

function Time2() {
  return (
    <div className="absolute contents left-[329px] top-[638px]" data-name="time">
      <p className="absolute font-['Inter',sans-serif] font-normal leading-[26px] left-[353px] not-italic text-[#777] text-[13px] top-[638px]">2m ago</p>
      <Time3 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[-1477px] top-[-809px]">
      <Base1 />
      <p className="absolute font-['Rethink Sans',sans-serif] font-medium h-[16px] leading-[19px] left-[329px] text-[#03035e] text-[16px] top-[570px] w-[230px] whitespace-pre-wrap">Morbi eleifend a libero</p>
      <p className="absolute font-['DM Serif Display',sans-serif] h-[38px] leading-[16px] left-[329px] not-italic text-[#03035e] text-[12px] top-[596px] w-[230px] whitespace-pre-wrap">Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat.</p>
      <Time2 />
    </div>
  );
}

function Base2() {
  return (
    <div className="absolute contents left-[-1147px] top-[-809px]" data-name="Base">
      <div className="absolute bg-white h-[170px] left-[660px] rounded-bl-[6px] rounded-br-[6px] top-[530px] w-[270px]" data-name="Base" />
      <div className="absolute bg-[#a6adb4] h-[180px] left-[660px] rounded-tl-[6px] rounded-tr-[6px] top-[350px] w-[270px]" data-name="stephen-leonardi-416243-unsplash" />
      <div className="absolute h-[2630px] left-[-1147px] top-[-809px] w-[4000px]" data-name="AdobeStock_78609622">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-[45.12%] max-w-none size-[6.93%] top-[44.08%]" src={imgAdobeStock78609622} />
        </div>
      </div>
    </div>
  );
}

function Time5() {
  return (
    <div className="absolute left-[659px] size-[16px] top-[644px]" data-name="time">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_205)" id="time">
          <path d={svgPaths.p27dc4880} fill="var(--fill-0, #777777)" id="Path 5" />
        </g>
        <defs>
          <clipPath id="clip0_1_205">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Time4() {
  return (
    <div className="absolute contents left-[659px] top-[638px]" data-name="time">
      <p className="absolute font-['Inter',sans-serif] font-normal leading-[26px] left-[683px] not-italic text-[#777] text-[13px] top-[638px]">2m ago</p>
      <Time5 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[-1147px] top-[-809px]">
      <Base2 />
      <p className="absolute font-['Rethink Sans',sans-serif] font-medium h-[16px] leading-[19px] left-[659px] text-[#03035e] text-[16px] top-[570px] w-[230px] whitespace-pre-wrap">Morbi eleifend a libero</p>
      <p className="absolute font-['DM Serif Display',sans-serif] h-[38px] leading-[16px] left-[659px] not-italic text-[#03035e] text-[12px] top-[596px] w-[230px] whitespace-pre-wrap">Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat.</p>
      <Time4 />
    </div>
  );
}

function RepeatGrid() {
  return (
    <div className="absolute contents left-[-1807px] top-[-809px]" data-name="Repeat Grid 8">
      <Group />
      <Group1 />
      <Group2 />
    </div>
  );
}

function Base3() {
  return (
    <div className="absolute contents left-[-1805px] top-[-1163px]" data-name="Base">
      <div className="absolute bg-white h-[170px] left-0 rounded-bl-[6px] rounded-br-[6px] top-[180px] w-[270px]" data-name="Base" />
      <div className="absolute bg-[#a6adb4] h-[180px] left-0 rounded-tl-[6px] rounded-tr-[6px] top-0 w-[270px]" data-name="Image" />
      <div className="absolute h-[2630px] left-[-1805px] top-[-1163px] w-[4000px]" data-name="AdobeStock_78609622">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-[44.93%] max-w-none size-[6.93%] top-[44.14%]" src={imgAdobeStock78609622} />
        </div>
      </div>
    </div>
  );
}

function Time7() {
  return (
    <div className="absolute left-0 size-[16px] top-[294px]" data-name="time">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_202)" id="time">
          <path d={svgPaths.p27dc4880} fill="var(--fill-0, #CBD0D3)" id="Path 5" />
        </g>
        <defs>
          <clipPath id="clip0_1_202">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Time6() {
  return (
    <div className="absolute contents left-0 top-[288px]" data-name="time">
      <p className="absolute font-['Inter',sans-serif] font-normal leading-[26px] left-[24px] not-italic text-[#777] text-[13px] top-[288px]">2m ago</p>
      <Time7 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[-1805px] top-[-1163px]">
      <Base3 />
      <p className="absolute font-['Rethink Sans',sans-serif] font-bold h-[16px] leading-[19px] left-0 overflow-hidden text-[#03035e] text-[16px] text-ellipsis top-[220px] w-[230px] whitespace-nowrap">Dolore magna aliqua</p>
      <p className="absolute font-['DM Serif Display',sans-serif] h-[38px] leading-[16px] left-0 not-italic text-[#03035e] text-[12px] top-[246px] w-[230px] whitespace-pre-wrap">Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat.</p>
      <Time6 />
    </div>
  );
}

function Base4() {
  return (
    <div className="absolute contents left-[-1475px] top-[-1163px]" data-name="Base">
      <div className="absolute bg-white h-[170px] left-[330px] rounded-bl-[6px] rounded-br-[6px] top-[180px] w-[270px]" data-name="Base" />
      <div className="absolute bg-[#a6adb4] h-[180px] left-[330px] rounded-tl-[6px] rounded-tr-[6px] top-0 w-[270px]" data-name="7" />
      <div className="absolute h-[2630px] left-[-1475px] top-[-1163px] w-[4000px]" data-name="AdobeStock_78609622">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-[44.93%] max-w-none size-[6.93%] top-[44.14%]" src={imgAdobeStock78609622} />
        </div>
      </div>
    </div>
  );
}

function Time9() {
  return (
    <div className="absolute left-[330px] size-[16px] top-[294px]" data-name="time">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_202)" id="time">
          <path d={svgPaths.p27dc4880} fill="var(--fill-0, #CBD0D3)" id="Path 5" />
        </g>
        <defs>
          <clipPath id="clip0_1_202">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Time8() {
  return (
    <div className="absolute contents left-[330px] top-[288px]" data-name="time">
      <p className="absolute font-['Inter',sans-serif] font-normal leading-[26px] left-[354px] not-italic text-[#777] text-[13px] top-[288px]">2m ago</p>
      <Time9 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-[-1475px] top-[-1163px]">
      <Base4 />
      <p className="absolute font-['Rethink Sans',sans-serif] font-bold h-[16px] leading-[19px] left-[330px] text-[#03035e] text-[16px] top-[220px] w-[230px] whitespace-pre-wrap">Morbi eleifend a libero</p>
      <p className="absolute font-['DM Serif Display',sans-serif] h-[38px] leading-[16px] left-[330px] not-italic text-[#03035e] text-[12px] top-[246px] w-[230px] whitespace-pre-wrap">Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat.</p>
      <Time8 />
    </div>
  );
}

function Base5() {
  return (
    <div className="absolute contents left-[-1145px] top-[-1163px]" data-name="Base">
      <div className="absolute bg-white h-[170px] left-[660px] rounded-bl-[6px] rounded-br-[6px] top-[180px] w-[270px]" data-name="Base" />
      <div className="absolute bg-[#a6adb4] h-[180px] left-[660px] rounded-tl-[6px] rounded-tr-[6px] top-0 w-[270px]" data-name="stephen-leonardi-416243-unsplash" />
      <div className="absolute h-[2630px] left-[-1145px] top-[-1163px] w-[4000px]" data-name="AdobeStock_78609622">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-[45.12%] max-w-none size-[6.93%] top-[44.08%]" src={imgAdobeStock78609622} />
        </div>
      </div>
    </div>
  );
}

function Time11() {
  return (
    <div className="absolute left-[660px] size-[16px] top-[294px]" data-name="time">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_205)" id="time">
          <path d={svgPaths.p27dc4880} fill="var(--fill-0, #777777)" id="Path 5" />
        </g>
        <defs>
          <clipPath id="clip0_1_205">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Time10() {
  return (
    <div className="absolute contents left-[660px] top-[288px]" data-name="time">
      <p className="absolute font-['Inter',sans-serif] font-normal leading-[26px] left-[684px] not-italic text-[#777] text-[13px] top-[288px]">2m ago</p>
      <Time11 />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents left-[-1145px] top-[-1163px]">
      <Base5 />
      <p className="absolute font-['Rethink Sans',sans-serif] font-bold h-[16px] leading-[19px] left-[660px] text-[#03035e] text-[16px] top-[220px] w-[230px] whitespace-pre-wrap">Morbi eleifend a libero</p>
      <p className="absolute font-['DM Serif Display',sans-serif] h-[38px] leading-[16px] left-[660px] not-italic text-[#03035e] text-[12px] top-[246px] w-[230px] whitespace-pre-wrap">Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat.</p>
      <Time10 />
    </div>
  );
}

function RepeatGrid1() {
  return (
    <div className="absolute contents left-[-1805px] top-[-1163px]" data-name="Repeat Grid 9">
      <Group3 />
      <Group4 />
      <Group5 />
    </div>
  );
}

function Component() {
  return (
    <div className="absolute h-[700px] left-[74px] overflow-clip top-[757px] w-[932px]" data-name="Component 2">
      <RepeatGrid />
      <RepeatGrid1 />
    </div>
  );
}

function Component1() {
  return (
    <div className="absolute h-[40px] left-[410px] overflow-clip top-[1655px] w-[120px]" data-name="Component 209 – 2">
      <div className="absolute bg-[rgba(0,0,0,0)] border-2 border-[#c68a2a] border-solid h-[40px] left-0 rounded-[4px] top-0 w-[120px]" />
      <p className="-translate-x-1/2 absolute font-['Rethink Sans',sans-serif] font-bold leading-[12px] left-[60.5px] text-[#c68a2a] text-[10px] text-center top-[14px]">MORE</p>
    </div>
  );
}

function Component2() {
  return (
    <div className="absolute h-[40px] left-[550px] overflow-clip top-[1655px] w-[120px]" data-name="Component 210 – 2">
      <div className="absolute bg-[#c68a2a] border-2 border-[#c68a2a] border-solid h-[40px] left-0 rounded-[4px] top-0 w-[120px]" />
      <p className="-translate-x-1/2 absolute font-['Rethink Sans',sans-serif] font-bold leading-[12px] left-[60px] text-[10px] text-center text-white top-[14px]">LET’S TRY</p>
    </div>
  );
}

function CallToAction() {
  return (
    <div className="absolute contents left-[193px] top-[1531px]" data-name="Call to Action">
      <p className="-translate-x-1/2 absolute font-['DM Serif Display',sans-serif] h-[52px] leading-[0] left-[540px] not-italic overflow-hidden text-[#03035e] text-[48px] text-center text-ellipsis top-[1531px] w-[694px] whitespace-nowrap">
        <span className="font-['Rethink Sans',sans-serif] font-normal leading-[44px]">What Comes Next?</span>
        <span className="font-['Inter',sans-serif] font-normal leading-[44px]">{` `}</span>
        <span className="leading-[44px]">You Tell Me.</span>
      </p>
      <p className="-translate-x-1/2 absolute font-['Rethink Sans',sans-serif] font-normal h-[19px] leading-[19px] left-[540px] overflow-hidden text-[#03035e] text-[21px] text-center text-ellipsis top-[1607px] w-[694px] whitespace-nowrap">Let Me Help You Find the Home of Your Dreams.</p>
      <Component1 />
      <Component2 />
    </div>
  );
}

function NavBar() {
  return (
    <div className="absolute h-[134px] left-0 overflow-clip top-0 w-[1080px]" data-name="Nav bar 2">
      <div className="absolute bg-[#03045e] h-[54px] left-0 top-0 w-[1080px]" data-name="Base" />
      <p className="absolute font-['Rethink Sans',sans-serif] font-normal leading-[12px] left-[765px] text-[10px] text-white top-[21px]">FIND A HOME</p>
      <p className="absolute font-['Rethink Sans',sans-serif] font-normal leading-[12px] left-[859px] text-[10px] text-white top-[21px]">CONTACT</p>
      <a className="absolute block cursor-pointer font-['Inter',sans-serif] leading-[0] left-[986px] not-italic text-[#c68a2a] text-[10px] top-[22.09px] whitespace-nowrap" href="https://facebook.com">
        <p className="leading-[12px]">Facebook</p>
      </a>
      <p className="absolute font-['Inter',sans-serif] leading-[12px] left-[1010px] not-italic text-[#c68a2a] text-[10px] top-[22.09px]">Instagram</p>
      <div className="absolute left-[50px] size-[134px] top-0" data-name="logo">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogo} />
      </div>
    </div>
  );
}

function Social() {
  return (
    <div className="absolute contents left-[973px] top-[44px]" data-name="Social">
      <a className="absolute block cursor-pointer h-[14px] left-[1012px] top-[44px] w-[7.311px]" data-name="Path 38" href="https://facebook.com">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.31111 14">
          <path d={svgPaths.p2bdca100} fill="var(--fill-0, #C68A2A)" id="Path 38" />
        </svg>
      </a>
      <div className="absolute left-[973px] size-[14px] top-[44px]" data-name="Path 40">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
          <path d={svgPaths.p34b83500} fill="var(--fill-0, #C68A2A)" id="Path 40" />
        </svg>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute h-[146px] left-0 overflow-clip top-[1775px] w-[1080px]" data-name="Footer 7">
      <div className="absolute h-[146px] left-0 top-0 w-[1080px]" data-name="Base">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1080 146">
          <path d="M0 0H1080V146H0V0Z" fill="var(--fill-0, #03045E)" id="Base" />
        </svg>
      </div>
      <p className="absolute font-['Rethink Sans',sans-serif] font-bold leading-[12px] left-[212px] text-[#c68a2a] text-[10px] top-[45px] uppercase">Find A Home</p>
      <div className="absolute font-['Rethink Sans',sans-serif] font-normal leading-[24px] left-[212px] text-[14px] text-white top-[63px] whitespace-nowrap">
        <p className="mb-0">We are ready for the challenge</p>
        <p>adobexd@mail.com</p>
      </div>
      <div className="absolute font-['Rethink Sans',sans-serif] font-normal leading-[24px] left-[506px] text-[14px] text-white top-[63px] whitespace-nowrap">
        <p className="mb-0">497 Evergreen Rd. Roseville, CA 95673</p>
        <p>+44 345 678 903</p>
      </div>
      <p className="absolute font-['Rethink Sans',sans-serif] font-bold leading-[12px] left-[506px] text-[#c68a2a] text-[10px] top-[45px]">SAY HELLO</p>
      <Social />
      <div className="absolute h-[83px] left-[47px] top-[32px] w-[84px]" data-name="logo">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogo} />
      </div>
    </div>
  );
}

export default function Web() {
  return (
    <div className="bg-white relative size-full" data-name="Web 1920 – 2">
      <Main />
      <Component />
      <p className="absolute font-['DM Serif Display',sans-serif] h-[49px] leading-[20px] left-[74px] not-italic text-[#03035e] text-[44px] top-[669px] w-[375px] whitespace-pre-wrap">Available Listings</p>
      <CallToAction />
      <NavBar />
      <Footer />
    </div>
  );
}