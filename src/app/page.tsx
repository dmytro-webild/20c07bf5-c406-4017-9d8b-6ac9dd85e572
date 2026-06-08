"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import AboutMetric from '@/components/sections/about/AboutMetric';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardTwelve from '@/components/sections/feature/FeatureCardTwelve';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroSplitTestimonial from '@/components/sections/hero/HeroSplitTestimonial';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import PricingCardEight from '@/components/sections/pricing/PricingCardEight';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
import { Award, Briefcase, DollarSign, HelpCircle, MessageCircle, Sparkles, Star, Target, TrendingUp, Users, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="directional-hover"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="small"
        sizing="mediumSizeLargeTitles"
        background="noise"
        cardStyle="gradient-mesh"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="glass"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Home",
          id: "#hero",
        },
        {
          name: "Features",
          id: "#features",
        },
        {
          name: "Impact",
          id: "#impact",
        },
        {
          name: "Testimonials",
          id: "#testimonials",
        },
        {
          name: "Pricing",
          id: "#pricing",
        },
        {
          name: "FAQ",
          id: "#faq",
        },
        {
          name: "Contact",
          id: "#contact",
        },
      ]}
      brandName="CareerAI Copilot"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitTestimonial
      useInvertedBackground={false}
      background={{
        variant: "canvas-reveal",
      }}
      title="Land Your Dream Job with AI-Powered Precision"
      description="Our AI Copilot rewrites your resume & cover letter to perfectly match any job description, making your application irresistible. Paste a job URL, and let AI do the rest."
      testimonials={[
        {
          name: "Sarah Chen",
          handle: "@sarahc",
          testimonial: "CareerAI Copilot is a game-changer! My resume used to get overlooked, but now I'm getting interview calls weekly. The AI truly understands what recruiters are looking for.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/surprised-customer-service-operator-talking-phone-office_1301-7547.jpg",
        },
        {
          name: "Michael Rodriguez",
          handle: "@mike_r",
          testimonial: "The tailored cover letters are incredible. I've never felt so confident applying for jobs. This service pays for itself with just one successful application!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/job-career-hiring-recruitment-qualification-graphic_53876-124513.jpg",
        },
        {
          name: "Emily White",
          handle: "@emilyw",
          testimonial: "As a data analyst, precision matters. CareerAI Copilot delivers exactly that. My applications are now perfectly optimized, and I've seen a huge spike in responses.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-female-hr-handshaking-businesswoman-group-meeting-interview_1163-4703.jpg",
        },
        {
          name: "David Kim",
          handle: "@davidk",
          testimonial: "I used to spend hours customizing each application. Now, I paste a URL and let the AI do its magic. It's incredibly efficient and effective. Highly recommend!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/crazy-businessman-happy-expression_1194-3575.jpg",
        },
        {
          name: "Olivia Martinez",
          handle: "@oliviam",
          testimonial: "Finally, an AI tool that genuinely helps job seekers. The resume rewrites are spot-on, and the system is so easy to use. I'm telling all my friends!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/man-woman-dressed-formally_273609-11366.jpg",
        },
      ]}
      testimonialRotationInterval={5000}
      tag="AI-Powered Career Advantage"
      tagIcon={Sparkles}
      buttons={[
        {
          text: "Start Your Free Trial",
          href: "#pricing",
        },
        {
          text: "How It Works",
          href: "#features",
        },
      ]}
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/scientist-factory-using-tablet-check-photovoltaics-materials-parameters_482257-120526.jpg",
          alt: "Sarah Chen avatar",
        },
        {
          src: "http://img.b2bpic.net/free-photo/studio-portrait-redhead-bearded-male-dressed-suit-posing-grey-background_613910-11594.jpg",
          alt: "Michael Rodriguez avatar",
        },
        {
          src: "http://img.b2bpic.net/free-photo/indian-businesswoman-reviews-financial-plans-using-online-tools_482257-123604.jpg",
          alt: "Emily White avatar",
        },
        {
          src: "http://img.b2bpic.net/free-photo/positive-confident-businessman-posing-outside_74855-1183.jpg",
          alt: "David Kim avatar",
        },
        {
          src: "http://img.b2bpic.net/free-photo/student-standing-city-with-tablet_1157-38331.jpg",
          alt: "Business young woman with a tablet",
        },
      ]}
      avatarText="Join 100K+ job seekers"
      imageSrc="http://img.b2bpic.net/free-photo/remotely-working-engineer-home-office-coding-computer-monitor_482257-120137.jpg"
      imageAlt="AI assisting job seeker with resume and cover letter"
      mediaAnimation="slide-up"
      marqueeItems={[
        {
          type: "text-icon",
          text: "Career Growth",
          icon: TrendingUp,
        },
        {
          type: "text-icon",
          text: "Interview Success",
          icon: Users,
        },
        {
          type: "text-icon",
          text: "Application Boost",
          icon: Zap,
        },
        {
          type: "text-icon",
          text: "Personalized Matches",
          icon: Target,
        },
        {
          type: "text-icon",
          text: "Hiring Advantage",
          icon: Award,
        },
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwelve
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          id: "smart-tailoring",
          label: "Precision Matching",
          title: "Smart Resume Tailoring",
          items: [
            "Analyzes job descriptions for keywords",
            "Optimizes phrasing for ATS compatibility",
            "Highlights relevant skills and experiences",
          ],
          buttons: [
            {
              text: "Learn More",
              href: "#",
            },
          ],
        },
        {
          id: "dynamic-letters",
          label: "Personalized Outreach",
          title: "Dynamic Cover Letters",
          items: [
            "Generates unique letters for each application",
            "Integrates company-specific language",
            "Crafts compelling narratives",
          ],
          buttons: [
            {
              text: "Discover How",
              href: "#",
            },
          ],
        },
        {
          id: "optimization",
          label: "Boost Your Chances",
          title: "Instant Application Optimization",
          items: [
            "Identifies gaps in your application",
            "Suggests improvements for impact",
            "Ensures a consistent professional voice",
          ],
          buttons: [
            {
              text: "See Results",
              href: "#",
            },
          ],
        },
      ]}
      title="Unlock Your Career Potential"
      description="Revolutionize your job search with intelligent tools designed to give you an unfair advantage in today's competitive market."
      tag="Key Features"
      tagIcon={Briefcase}
    />
  </div>

  <div id="impact" data-section="impact">
      <AboutMetric
      useInvertedBackground={false}
      title="Join Thousands of Successful Job Seekers"
      metrics={[
        {
          icon: Users,
          label: "Applications Optimized",
          value: "1M+",
        },
        {
          icon: TrendingUp,
          label: "Interview Rate Increase",
          value: "90%",
        },
        {
          icon: Zap,
          label: "Faster Hires",
          value: "2X",
        },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFive
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",
          name: "Alex Johnson",
          date: "May 2024",
          title: "Finally, a tool that works!",
          quote: "I was skeptical at first, but CareerAI Copilot completely changed my job search. The personalized resume and cover letter drafts are spot on. I landed three interviews in a week!",
          tag: "Software Engineer",
          avatarSrc: "http://img.b2bpic.net/free-photo/pensive-young-handsome-man-working-laptop_1262-3582.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-woman-working-as-wedding-planner_23-2150328528.jpg",
        },
        {
          id: "2",
          name: "Maria Garcia",
          date: "April 2024",
          title: "Unbelievable efficiency boost!",
          quote: "Spending hours customizing applications is a thing of the past. With CareerAI Copilot, I just paste a job URL and get a perfect application in minutes. It's a lifesaver!",
          tag: "Marketing Manager",
          avatarSrc: "http://img.b2bpic.net/free-photo/portrait-man-cartoon-style_23-2151133862.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/man-using-digital-tablet-with-blank-screen_53876-14002.jpg",
        },
        {
          id: "3",
          name: "Ben Carter",
          date: "March 2024",
          title: "Worth every penny!",
          quote: "The $19/month subscription is an investment that paid off tenfold. I secured my dream job faster than I ever thought possible. Thank you, CareerAI!",
          tag: "Product Designer",
          avatarSrc: "http://img.b2bpic.net/free-photo/smiling-woman-pc-checking-servers-bottlenecks-leading-malfunctions_482257-118483.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-man-work-video-call-with-laptop-from-home-home-office-concept-new-normal-lifestyle_58466-15800.jpg",
        },
        {
          id: "4",
          name: "Chloe Zhao",
          date: "February 2024",
          title: "My interview rate soared!",
          quote: "Before CareerAI, I barely got any responses. Now, my applications stand out, and my interview requests have dramatically increased. This AI is incredibly smart!",
          tag: "Data Scientist",
          avatarSrc: "http://img.b2bpic.net/free-photo/friendly-successful-business-woman-posing-with-arms-crossed_74855-2813.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/excited-woman-with-arms-up_23-2148336917.jpg",
        },
        {
          id: "5",
          name: "Daniel Lee",
          date: "January 2024",
          title: "A true career copilot!",
          quote: "The AI’s ability to pinpoint keywords and tailor my experience to each role is unmatched. It feels like having a personal career coach. Highly recommend to all job seekers!",
          tag: "Project Manager",
          avatarSrc: "http://img.b2bpic.net/free-photo/young-woman-organizing-live-shop_23-2149947439.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/young-businessman-with-briefcase-running-city-street-hurry-up-go-work_1150-3048.jpg",
        },
      ]}
      title="What Our Users Are Saying"
      description="Hear directly from job seekers who transformed their careers with CareerAI Copilot."
      tag="Success Stories"
      tagIcon={MessageCircle}
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardEight
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        {
          id: "monthly",
          badge: "Popular",
          badgeIcon: Star,
          price: "$19/mo",
          subtitle: "Perfect for active job seekers",
          buttons: [
            {
              text: "Get Started Monthly",
              href: "#",
            },
          ],
          features: [
            "Unlimited Resume Rewrites",
            "Unlimited Cover Letters",
            "AI Keyword Matching",
            "ATS Optimization",
            "Priority Support",
          ],
        },
        {
          id: "annual",
          badge: "Best Value",
          badgeIcon: Award,
          price: "$199/yr",
          subtitle: "Save 12% with annual billing",
          buttons: [
            {
              text: "Save Annually",
              href: "#",
            },
          ],
          features: [
            "All Monthly Plan Features",
            "Advanced Analytics",
            "Interview Prep Resources",
            "Career Coaching Webinars",
            "Dedicated Account Manager",
          ],
        },
      ]}
      title="Simple Pricing, Powerful Results"
      description="Invest in your future with an affordable monthly subscription designed for serious job seekers."
      tag="Our Plans"
      tagIcon={DollarSign}
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={true}
      names={[
        "http://img.b2bpic.net/free-vector/letter-g-vector_53876-60351.jpg",
        "http://img.b2bpic.net/free-vector/gradient-metacode-logo_23-2148813744.jpg",
        "http://img.b2bpic.net/free-photo/communication-social-media-icons-laptop-device_23-2150781052.jpg",
        "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=182mt6",
        "http://img.b2bpic.net/free-photo/building-dreamy-setting_23-2151835396.jpg",
        "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=km3cko",
        "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=t28x6t",
      ]}
      title="Trusted by Ambitious Professionals"
      description="Our AI technology is celebrated for its impact on career advancement and recognized by leading platforms."
      tag="Industry Recognition"
      tagIcon={Target}
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "1",
          title: "How does CareerAI Copilot work?",
          content: "Simply paste a job URL, and our advanced AI analyzes the job description to identify key requirements and keywords. It then rewrites and optimizes your resume and cover letter to perfectly align with the role, boosting your chances of getting noticed.",
        },
        {
          id: "2",
          title: "Is my data and resume information secure?",
          content: "Absolutely. We use industry-standard encryption and security protocols to protect your personal data and documents. Your information is never shared with third parties without your explicit consent.",
        },
        {
          id: "3",
          title: "What kind of jobs does the AI work best for?",
          content: "CareerAI Copilot is highly effective for a wide range of industries and job types, from tech and marketing to healthcare and finance. Our AI is designed to adapt to various professional languages and requirements.",
        },
        {
          id: "4",
          title: "Can I edit the AI-generated documents?",
          content: "Yes, of course! The AI provides a perfectly tailored draft, but you always have full control to review and make any final edits you deem necessary. It's your application, perfected by AI.",
        },
        {
          id: "5",
          title: "What is the subscription model?",
          content: "We offer a flexible subscription model at just $19 per month. This provides you with unlimited resume and cover letter rewrites, AI keyword matching, ATS optimization, and priority support. Annual plans are also available for savings.",
        },
      ]}
      title="Frequently Asked Questions"
      description="Find quick answers to common questions about CareerAI Copilot and how it works to boost your job search."
      tag="Need Answers?"
      tagIcon={HelpCircle}
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={true}
      title="Get in Touch"
      description="Have questions or need support? Our team is here to help you succeed in your job search journey."
      inputs={[
        {
          name: "name",
          type: "text",
          placeholder: "Your Name",
          required: true,
        },
        {
          name: "email",
          type: "email",
          placeholder: "Your Email",
          required: true,
        },
      ]}
      textarea={{
        name: "message",
        placeholder: "Your Message",
        rows: 4,
        required: true,
      }}
      imageSrc="http://img.b2bpic.net/free-photo/woman-data-center-deploying-error-checking-utilities-pc_482257-118303.jpg"
      imageAlt="Customer support team assisting clients"
      mediaAnimation="none"
      mediaPosition="right"
      buttonText="Send Message"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="CareerAI Copilot"
      columns={[
        {
          title: "Product",
          items: [
            {
              label: "How It Works",
              href: "#features",
            },
            {
              label: "Pricing",
              href: "#pricing",
            },
            {
              label: "Testimonials",
              href: "#testimonials",
            },
          ],
        },
        {
          title: "Company",
          items: [
            {
              label: "About Us",
              href: "#",
            },
            {
              label: "Careers",
              href: "#",
            },
            {
              label: "Blog",
              href: "#",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "FAQ",
              href: "#faq",
            },
            {
              label: "Contact Us",
              href: "#contact",
            },
            {
              label: "Help Center",
              href: "#",
            },
          ],
        },
      ]}
      copyrightText="© 2025 CareerAI Copilot | All rights reserved"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
