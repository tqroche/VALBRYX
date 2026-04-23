import { Link } from "react-router";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import svgPaths from "../../imports/svg-tmhkbkaqcm";
import imgCurologyTiTp0O0Ue70Unsplash from "figma:asset/f9cd38cf9e3f8c835748a32133d2e9607f918871.png";
import imgLogo from "figma:asset/dd07ee17a32b9aae1d1c51007fda08b45f38f57c.png";

function ContactInfoColumn() {
  return (
    <div className="w-full lg:w-[28%] lg:max-w-[320px] lg:ml-[20%] lg:pl-6 lg:self-stretch pb-[64px] p-0 text-[#03045e] lg:border-l lg:border-[#9aa6b2]">
      <h3 className="font-['DM Serif Display',sans-serif] text-[28px] leading-[1.2] mb-6 text-[#03045e]">
        Contact
      </h3>

      <div className="space-y-5">
        <div className="flex items-start gap-3">
          <svg
            className="w-5 h-5 mt-0.5 shrink-0 text-[#36454f]"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M4 6h16v12H4z" />
            <path d="m4 7 8 6 8-6" />
          </svg>
          <a
            className="font-['Rethink Sans',sans-serif] text-[16px] leading-[1.5] break-words text-[#03045e] hover:text-[#1d2d78] transition-colors"
            href="mailto:valbryxrealty@gmail.com"
          >
            valbryxrealty@gmail.com
          </a>
        </div>

        <div className="flex items-start gap-3">
          <svg
            className="w-5 h-5 mt-0.5 shrink-0 text-[#36454f]"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M22 16.92v2a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 3.18 2 2 0 0 1 4.11 1h2a2 2 0 0 1 2 1.72c.12.9.34 1.78.65 2.62a2 2 0 0 1-.45 2.11L7.09 8.67a16 16 0 0 0 8.24 8.24l1.22-1.22a2 2 0 0 1 2.11-.45c.84.31 1.72.53 2.62.65A2 2 0 0 1 22 16.92z" />
          </svg>
          <a
            className="font-['Rethink Sans',sans-serif] text-[16px] leading-[1.5] text-[#03045e] hover:text-[#1d2d78] transition-colors"
            href="tel:8506535250"
          >
            850-653-5250
          </a>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-[#d5d9e3]">
        <img
          src="/exp-realty-black-01.png"
          alt="eXp Realty black logo"
          className="h-auto w-full max-w-[220px] object-contain"
        />
      </div>
    </div>
  );
}

function ScrollGroup() {
  return (
    <div
      className="absolute top-0 left-0 w-full h-[282px] lg:h-[282px] lg:top-0 lg:left-0 lg:w-full z-10"
      data-name="Scroll Group 2"
    >
      <div
        className="w-full h-full overflow-hidden relative"
        data-name="curology-TITp0O0Ue70-unsplash"
      >
        <img
          alt=""
          className="w-full h-full object-cover opacity-100"
          src={imgCurologyTiTp0O0Ue70Unsplash}
        />
        <img
          alt="eXp Realty white logo"
          className="absolute top-[5%] right-[5%] w-[150px] lg:w-[260px] h-auto object-contain pointer-events-none"
          src="/exp-realty-white-01.png"
        />
      </div>
    </div>
  );
}

function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [emailError, setEmailError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setEmailError(true);
      return;
    }
    setEmailError(false);
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // EmailJS configuration
      // You need to replace these with your actual EmailJS credentials from https://www.emailjs.com/
      const serviceId = "YOUR_SERVICE_ID"; // Get from EmailJS dashboard
      const templateId = "YOUR_TEMPLATE_ID"; // Get from EmailJS dashboard
      const publicKey = "YOUR_PUBLIC_KEY"; // Get from EmailJS dashboard

      // Template parameters that will be sent to valbryxrealty@gmail.com
      const templateParams = {
        to_email: "valbryxrealty@gmail.com",
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        reply_to: formData.email,
      };

      await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey,
      );

      setSubmitStatus("success");
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
      });

      // Hide success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");

      // Hide error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === "email" && emailError) {
      setEmailError(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full pb-5">
      {/* Success/Error Message */}
      {submitStatus !== "idle" && (
        <div
          className={`w-full px-[20px] py-[15px] rounded-[4px] mb-4 ${
            submitStatus === "success"
              ? "bg-green-100 border border-green-500"
              : "bg-red-100 border border-red-500"
          }`}
        >
          <p
            className={`font-['Rethink Sans',sans-serif] font-medium text-[14px] ${
              submitStatus === "success"
                ? "text-green-700"
                : "text-red-700"
            }`}
          >
            {submitStatus === "success"
              ? "✓ Message Sent! We'll get back to you soon."
              : "✗ Failed to send message. Please try again."}
          </p>
        </div>
      )}

      {/* First Name */}
      <div className="mb-4">
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="First Name"
          required
          disabled={isSubmitting}
          className="w-full bg-white border border-[#03035e] border-solid h-[50px] px-[20px] font-['Inter',sans-serif] font-normal text-[14px] text-[#03035e] outline-none focus:border-2 disabled:opacity-50"
        />
      </div>

      {/* Last Name */}
      <div className="mb-4">
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Last Name"
          required
          disabled={isSubmitting}
          className="w-full bg-white border border-[#03035e] border-solid h-[50px] px-[20px] font-['Inter',sans-serif] font-normal text-[14px] text-[#03035e] outline-none focus:border-2 disabled:opacity-50"
        />
      </div>

      {/* Email */}
      <div className="mb-4">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="email@mail.com"
          required
          disabled={isSubmitting}
          className={`w-full bg-white border ${emailError ? "border-red-500" : "border-[#03035e]"} border-solid h-[50px] px-[20px] font-['Inter',sans-serif] font-normal text-[14px] text-[#03035e] outline-none focus:border-2 disabled:opacity-50`}
        />
        {emailError && (
          <div className="mt-2 flex items-center gap-2">
            <svg
              className="w-4 h-4"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 16 16"
            >
              <g clipPath="url(#clip0_1_74)">
                <path
                  d={svgPaths.pbdf4e00}
                  fill="#EF4444"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_74">
                  <rect fill="white" height="16" width="16" />
                </clipPath>
              </defs>
            </svg>
            <p className="font-['Inter',sans-serif] font-normal text-red-500 text-[14px]">
              Please enter a valid email
            </p>
          </div>
        )}
      </div>

      {/* Subject */}
      <div className="mb-4">
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Subject"
          required
          disabled={isSubmitting}
          className="w-full bg-white border border-[#03035e] border-solid h-[50px] px-[20px] font-['Inter',sans-serif] font-normal text-[14px] text-[#03035e] outline-none focus:border-2 disabled:opacity-50"
        />
      </div>

      {/* Message */}
      <div className="mb-4">
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
          required
          disabled={isSubmitting}
          className="w-full bg-white border border-[#03035e] border-solid h-[140px] px-[20px] py-[19px] font-['Inter',sans-serif] font-normal text-[14px] text-[#03035e] outline-none focus:border-2 resize-none disabled:opacity-50"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="relative h-[40px] w-[120px] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden mb-5"
      >
        <div className="absolute bg-[#c68a2a] border-2 border-[#c68a2a] border-solid h-[40px] left-0 rounded-[4px] top-0 w-[120px] hover:bg-[#b07a24] transition-colors" />
        <p className="absolute left-1/2 -translate-x-1/2 font-['Inter',sans-serif] font-bold text-[10px] text-center text-white top-[14px] uppercase">
          {isSubmitting ? "SENDING..." : "Submit"}
        </p>
      </button>
    </form>
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
    <div
      className="flex gap-6 items-center lg:absolute lg:right-[2%] lg:top-[63px]"
      data-name="Social"
    >
      <a
        className="block cursor-pointer h-[14px] w-[7.311px] hover:opacity-80 transition-opacity"
        data-name="Path 38"
        href="https://www.facebook.com/profile.php?id=61585576907441"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 7.31111 14"
        >
          <path
            d={svgPaths.p135323c0}
            fill="#C68A2A"
            id="Path 38"
          />
        </svg>
      </a>
      <a
        className="block cursor-pointer size-[14px] hover:opacity-80 transition-opacity"
        data-name="Path 40"
        href="https://www.instagram.com/valbryx.curtis"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 14 14"
        >
          <path
            d={svgPaths.p34b83500}
            fill="#C68A2A"
            id="Path 40"
          />
        </svg>
      </a>
    </div>
  );
}

function Footer() {
  return (
    <div className="w-full bg-[#03045e] pb-8 px-4 mt-12 lg:mt-0 lg:absolute lg:h-[146px] lg:left-0 lg:top-[1275px] lg:px-0" data-name="Footer 7">
      <div className="max-w-[1920px] mx-auto relative h-full flex flex-col lg:block items-center gap-4 lg:gap-0 pt-[5%] lg:pt-0">
        <Link to="/" className="w-[60px] h-[60px] lg:absolute lg:h-[83px] lg:left-[4%] lg:top-[32px] lg:w-[84px]" data-name="logo">
          <img alt="" className="w-full h-full object-contain pointer-events-none" src={imgLogo} />
        </Link>
        <p className="font-['Rethink Sans',sans-serif] font-normal leading-[24px] text-[14px] text-white text-center lg:absolute lg:left-[15%] lg:top-[63px]">"Where strategy meets opportunity."</p>
        <p className="font-['Rethink Sans',sans-serif] font-normal leading-[24px] text-[14px] text-white text-center lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:top-[63px]">© 2026 VALBRYX™. All Rights Reserved.</p>
        <img
          alt="VALBRYX partner logo"
          className="h-[28px] w-auto object-contain lg:absolute lg:left-[64%] lg:top-[63px] lg:-translate-x-1/2"
          src="/website-logos.png"
        />
        <Social />
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen w-full overflow-x-hidden">
      <div
        className="bg-white w-full max-w-[1920px] mx-auto lg:h-[1421px] relative"
        data-name="Web 1920 – 3"
      >
        <ScrollGroup />
        <NavBar />
        
        <div className="relative z-20 px-4 sm:px-6 lg:px-0 pt-[300px] lg:pt-0 lg:absolute lg:left-[10%] lg:top-[382px] lg:w-[82%] lg:max-w-[1560px]">
          <div className="flex flex-col lg:flex-row lg:items-stretch gap-8 lg:gap-8">
            <div className="w-full lg:w-[58%] lg:max-w-[600px]">
              <div className="font-['DM Serif Display',sans-serif] text-[36px] sm:text-[48px] lg:text-[60px] leading-tight text-[#03035e]">
                <p className="font-['Rethink Sans',sans-serif] font-normal mb-0">
                  Your Next Investment{" "}
                </p>
                <p>Starts Here</p>
              </div>
              <p className="font-['Rethink Sans',sans-serif] font-normal text-[18px] lg:text-[21px] leading-[28px] text-[#222] mt-4 lg:mt-6 max-w-[576px] mb-2 pb-[5%]">
                Submit your request today and we'll identify investment opportunities aligned with your goals.
              </p>

              <div className="max-w-[566px] mb-8">
                <ContactForm />
              </div>
            </div>

            <ContactInfoColumn />
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}