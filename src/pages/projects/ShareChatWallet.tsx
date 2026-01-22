import React from "react";
import ProjectLayout from "@/components/ProjectLayout";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, XCircle, Shield, Eye, TrendingUp, DollarSign, Users, Target } from "lucide-react";
import { useImageModal } from "@/components/ImageModal";

const FinalUICarousel = () => {
  const { openModal } = useImageModal();

  const screens = [
    {
      src: "/sharechat/wallet-main.png",
      alt: "Wallet Recharge Main Screen"
    },
    {
      src: "/sharechat/amount-selection.png",
      alt: "Amount Selection States"
    },
    {
      src: "/sharechat/payment-cta.png",
      alt: "Payment CTA & GST Disclosure"
    }
  ];

  // Duplicate screens multiple times for seamless infinite loop
  const duplicatedScreens = [...screens, ...screens, ...screens];

  return (
    <div className="relative w-full overflow-hidden py-4">
      <div className="flex animate-scroll-infinite" style={{ gap: '24px' }}>
        {duplicatedScreens.map((screen, idx) => (
          <div
            key={idx}
            className="flex-shrink-0"
            style={{ width: '600px' }}
          >
            <div className="relative h-[500px] overflow-hidden flex items-center justify-center">
              <img
                src={screen.src}
                alt={screen.alt}
                className="w-full h-full object-contain cursor-pointer hover:opacity-90 transition-opacity"
                draggable={false}
                onClick={() => openModal(screen.src, screen.alt)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ShareChatWallet = () => {
  const { openModal } = useImageModal();

  return (
    <ProjectLayout projectTitle="ShareChat Business Ads Platform">
      <div className="w-full">
        {/* Hero Section */}
        <section className="mb-24">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground max-w-4xl">
            Improving Wallet Recharge Experience for Advertisers
          </h1>

          <div className="flex flex-col lg:flex-row gap-6 mb-8">
            <div className="flex-1">
              <p className="text-base text-muted-foreground mb-6 leading-relaxed">
                ShareChat Business allows advertisers to run ad campaigns by first adding money to a prepaid wallet.
                This wallet recharge flow is a critical conversion point, especially for first time and small budget
                advertisers. However, existing data and user feedback indicated hesitation, confusion, and drop offs
                at this step directly impacting advertiser activation and revenue.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Role</p>
                  <p className="text-sm font-medium text-foreground">UX Designer (end-to-end)</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Timeline</p>
                  <p className="text-sm font-medium text-foreground">3 months</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Platform</p>
                  <p className="text-sm font-medium text-foreground">Web · Ads Platform</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Users</p>
                  <p className="text-sm font-medium text-foreground">Advertisers, SMBs, First time users</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <Badge variant="secondary" className="bg-secondary/50 text-secondary-foreground border-border">
                  Increased trust & confidence
                </Badge>
                <Badge variant="secondary" className="bg-secondary/50 text-secondary-foreground border-border">
                  Reduced confusion
                </Badge>
                <Badge variant="secondary" className="bg-secondary/50 text-secondary-foreground border-border">
                  Better activation
                </Badge>
              </div>
            </div>

            <div className="lg:w-[508px] lg:h-[376px] w-full aspect-[508/376] bg-muted rounded-2xl overflow-hidden">
              <img
                src="/sharechatwallet/walletrechargesharechatCover.png"
                alt="ShareChat Wallet Recharge"
                className="w-full h-full object-cover cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => openModal("/sharechatwallet/walletrechargesharechatCover.png", "ShareChat Wallet Recharge")}
              />
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="mb-24 bg-muted/50 rounded-2xl p-12 md:p-16">
          <h2 className="text-3xl font-bold mb-6 text-foreground max-w-2xl">
            The problem was not payment.  <br />  It was trust, clarity, and confidence.
          </h2>

          <p className="text-base text-muted-foreground mb-8 w-full leading-relaxed">
            Advertisers lacked trust, clarity, and confidence while adding money to the wallet due to unclear
            value communication, high perceived financial risk, and confusing credit related messaging resulting
            in hesitation and drop offs at a critical conversion step.
          </p>

          <div className="space-y-4 mb-8">
            {[
              "Lack of trust: Users questioned whether ads would work and if money was refundable",
              "No visibility into value: Users wanted clarity similar to Facebook or Instagram ads",
              "High entry barrier: ₹10,000 felt too high for first time advertisers",
              "Confusing minimum amount rules: Unclear about recharge constraints",
              "Overloaded credit messaging: Terms like free credits were misunderstood"
            ].map((point, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                  <XCircle className="w-4 h-4 text-destructive" />
                </div>
                <p className="text-sm text-foreground">{point}</p>
              </div>
            ))}
          </div>
        </section>



        {/* Why This Mattered */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-12 text-foreground">
            Why this mattered to business and users
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-6 bg-slate-50 dark:bg-slate-800 rounded-xl p-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Business Goals</h3>
              </div>
              <div className="space-y-3">
                {[
                  "Increase successful wallet recharges",
                  "Improve first time advertiser activation",
                  "Reduce friction and support queries related to recharge"
                ].map((goal, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-3 h-3 text-accent" />
                    </div>
                    <p className="text-sm text-foreground">{goal}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-6 bg-slate-50 dark:bg-slate-800 rounded-xl p-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <Users className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">User Goals</h3>
              </div>
              <div className="space-y-3">
                {[
                  "Understand how much to add",
                  "Know what value they get in return",
                  "Feel safe and confident before making a payment"
                ].map((goal, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-3 h-3 text-accent" />
                    </div>
                    <p className="text-sm text-foreground">{goal}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* User Research Insights */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-4 text-foreground">
            User Research & Key Insights
          </h2>

          <p className="text-base text-muted-foreground mb-8 leading-relaxed">
            We conducted qualitative research focused on advertiser behavior during wallet recharge to understand
            their pain points and decision making process.
          </p>

          {/* Before and After Images */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-background border border-border rounded-xl overflow-hidden">
              <div className="p-2.5">
                <img
                  src="/sharechatwallet/Screenshot 2023-08-17 at 2.21 1.png"
                  alt="Wallet Recharge Before"
                  className="w-full h-auto object-contain rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => openModal("/sharechatwallet/Screenshot 2023-08-17 at 2.21 1.png", "Wallet Recharge Before")}
                />
              </div>
              <p className="text-sm text-muted-foreground text-center p-4 pt-0">
                Before: Unclear messaging and confusing credit offers
              </p>
            </div>
            <div className="bg-background border border-border rounded-xl overflow-hidden">
              <div className="p-2.5">
                <img
                  src="/sharechatwallet/Screenshot 2023-08-17 at 2.21 2.png"
                  alt="Wallet Recharge After"
                  className="w-full h-auto object-contain rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => openModal("/sharechatwallet/Screenshot 2023-08-17 at 2.21 2.png", "Wallet Recharge After")}
                />
              </div>
              <p className="text-sm text-muted-foreground text-center p-4 pt-0">
                After: Clear value communication with selected state
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Half - Key Insights List */}
            <div className="space-y-6">
              {[
                {
                  title: "Lack of Trust",
                  insight: "Users questioned whether ads would work and if money was refundable."
                },
                {
                  title: "No Visibility Into Value",
                  insight: "Users wanted clarity similar to Facebook or Instagram ads."
                },
                {
                  title: "High Entry Barrier",
                  insight: "₹10,000 felt too high for many first-time advertisers. Even ₹5,000 felt risky."
                },
                {
                  title: "Confusing Minimum Amount Rules",
                  insight: "Users were unclear about minimum recharge constraints and why certain amounts were invalid."
                },
                {
                  title: "Overloaded Credit Messaging",
                  insight: "Terms like free credits, promotional credits, and ad credits were misunderstood."
                }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-semibold text-destructive">{idx + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.insight}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Half - User Feedback Chat Format */}
            <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-2 mb-4 pb-4 border-b border-border">
                <Users className="w-5 h-5 text-accent" />
                <h3 className="text-lg font-semibold text-foreground">User Feedback</h3>
              </div>

              {[
                {
                  message: "How do I know I'll get value for my money? There are no reviews or proofs that this works.",
                  user: "First time Advertiser"
                },
                {
                  message: "What reach will I get if I add this amount?",
                  user: "SMB Owner"
                },
                {
                  message: "I'm not sure if I should invest this much without knowing the outcome.",
                  user: "Small Business"
                },
                {
                  message: "Why can't I add ₹1000? The error message doesn't explain it clearly.",
                  user: "New User"
                },
                {
                  message: "I thought the credits meant guaranteed results, but I'm confused now.",
                  user: "Advertiser"
                }
              ].map((feedback, idx) => (
                <div key={idx} className="flex flex-col gap-1">
                  <div className="flex items-start gap-2">
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-medium text-accent">{feedback.user.charAt(0)}</span>
                    </div>
                    <div className="flex-1">
                      <div className="bg-white dark:bg-slate-700 rounded-2xl rounded-tl-sm p-4 shadow-sm">
                        <p className="text-sm text-foreground leading-relaxed">{feedback.message}</p>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1 ml-2">{feedback.user}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>


        </section>

        {/* Design Principles */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Design Principles</h2>

          <p className="text-base text-muted-foreground mb-8 leading-relaxed">
            Based on research and competitive learnings from platforms like Paytm, PhonePe, Amazon Pay, and Zerodha,
            the solution followed these principles:
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Eye,
                title: "Clarity before persuasion",
                description: "Users need to understand the value before being convinced to pay"
              },
              {
                icon: Shield,
                title: "Lower the entry barrier",
                description: "Make the first step less intimidating for new advertisers"
              },
              {
                icon: Target,
                title: "Make value tangible",
                description: "Show what users get at every step of the process"
              },
              {
                icon: TrendingUp,
                title: "Reduce cognitive load",
                description: "Minimize mental effort during financial decisions"
              },
              {
                icon: CheckCircle2,
                title: "Build trust organically",
                description: "Establish credibility without marketing noise"
              }
            ].map((principle, idx) => {
              const IconComponent = principle.icon;
              return (
                <div key={idx} className="flex flex-col gap-4 p-6 bg-accent/5 rounded-xl">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">{principle.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{principle.description}</p>
                  </div>
                </div>
              );
            })}
          </div>


        </section>

        {/* Process Artifacts */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-2 text-foreground">Process Artifacts</h2>

          <p className="text-base text-muted-foreground mb-6 leading-relaxed w-full">
            Before finalizing the design, I explored multiple structural directions through wireframes and conducted
            competitive analysis to understand best practices in wallet and prepaid flows.
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {[
              {
                src: "/sharechatwallet/useresearch.png",
                alt: "User Research Synthesis",
                caption: "Synthesis of user interviews and feedback highlighting key pain points."
              },
              {
                src: "/sharechatwallet/competitor analysis.png",
                alt: "Competitive Analysis",
                caption: "Competitive analysis of wallet flows from Paytm, PhonePe, Amazon Pay, and Zerodha."
              },
              {
                src: "/sharechatwallet/wireframes.png",
                alt: "Wireframe Exploration",
                caption: "Multiple wireframe variations exploring different layouts and information hierarchy."
              },
              {
                src: "/sharechatwallet/Variants.png",
                alt: "Design Iterations",
                caption: "Various iterations reviewed with product, business, and engineering teams."
              }
            ].map((artifact, idx) => (
              <div key={idx} className="bg-background border border-border rounded-xl overflow-hidden">
                <div className="p-2.5">
                  <img
                    src={artifact.src}
                    alt={artifact.alt}
                    className="w-full h-auto object-contain rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => openModal(artifact.src, artifact.alt)}
                  />
                </div>
                {artifact.caption && (
                  <p className="text-sm text-muted-foreground text-center p-4 pt-0">
                    {artifact.caption}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Key UX Decisions - Final Solution */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Key UX Decisions</h2>

          <p className="text-base text-muted-foreground mb-8 leading-relaxed">
            The final design focused on clear decision-making, transparency, and confidence. Each decision was
            made to address specific user pain points while aligning with business goals.
          </p>

          {/* Final Design Image */}
          <div className="mb-8 bg-background border border-border rounded-xl overflow-hidden">
            <div className="p-2.5">
              <img
                src="/sharechatwallet/Wallet Load Modal - Default State.png"
                alt="Wallet Recharge Final Design"
                className="w-full h-auto object-contain rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => openModal("/sharechatwallet/Wallet Load Modal - Default State.png", "Wallet Recharge Final Design")}
              />
            </div>
            <p className="text-sm text-muted-foreground text-center p-4 pt-0">
              Final wallet recharge design with improved clarity and transparency
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Clear minimum & recommended amounts",
              "Structured amount comparison with visible value",
              "Simplified credit messaging",
              "Transparent GST & pricing upfront",
              "Subtle trust signals without marketing noise"
            ].map((decision, idx) => (
              <div key={idx} className="flex items-center gap-3 p-4 bg-slate-50 dark:bg-slate-800 rounded-xl">
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                </div>
                <p className="text-base font-medium text-foreground">{decision}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Final UI Highlights */}
        <section className="mb-24">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground">Final UI Highlights</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                src: "/sharechatwallet/Wallet Load Modal - Default State.png",
                alt: "Wallet Recharge Default State",
                caption: "Default state with clear amount selection and transparent pricing"
              },
              {
                src: "/sharechatwallet/GST.png",
                alt: "GST Number Entry",
                caption: "GST number entry for business advertisers with invoice generation"
              },
              {
                src: "/sharechatwallet/minimum_amount_error.png",
                alt: "Minimum Amount Error",
                caption: "Clear error message when amount is below minimum threshold"
              },
              {
                src: "/sharechatwallet/Feedback Modal.png",
                alt: "User Feedback Modal",
                caption: "Exit feedback to understand user drop-off reasons"
              }
            ].map((screen, idx) => (
              <div key={idx} className="bg-background  overflow-hidden">
                <div className="p-2.5">
                  <img
                    src={screen.src}
                    alt={screen.alt}
                    className="w-full h-auto object-contain rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => openModal(screen.src, screen.alt)}
                  />
                </div>
                <p className="text-sm text-muted-foreground text-center p-4 pt-0">
                  {screen.caption}
                </p>
              </div>
            ))}
          </div>
        </section>


        {/* Outcomes & Impact */}
        <section className="mb-24 bg-accent/5 rounded-2xl p-12 md:pt-12 md:pb-12 md:pl-16 md:pr-16">
          <h2 className="text-3xl font-bold mb-12 text-foreground text-center">Outcomes & Impact</h2>

          <div className="grid md:grid-cols-3 gap-6 w-full">
            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-4">14%</div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Increase in Successful Recharges</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Driven by improved clarity around minimum amounts, offers, and pricing
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-4">~6%</div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Lift in Revenue</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                As more advertisers successfully completed the recharge flow
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-4">45%</div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Reduced Support Queries</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Around credits, GST, and recharge eligibility, leading to fewer drop offs
              </p>
            </div>
          </div>
        </section>



        {/* What I Learned */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-12 text-foreground">What I learned</h2>

          <div className="space-y-8">
            {[
              {
                number: "1",
                title: "Early exploration of multiple directions pays off.",
                description: "Testing various wireframe layouts helped identify the optimal structure before investing in high fidelity design."
              },
              {
                number: "2",
                title: "Ground design decisions in user trust, not just conversion.",
                description: "When users feel safe and informed, they're more likely to complete the action willingly."
              },
              {
                number: "3",
                title: "Use competitive analysis as behavioral guidance, not just inspiration.",
                description: "Understanding patterns from high trust platforms helped establish familiar, reliable patterns."
              },
              {
                number: "4",
                title: "Transparency builds confidence in financial decisions.",
                description: "Showing all costs upfront and making value tangible reduces hesitation and support queries."
              }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-6">
                <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-medium text-muted-foreground">{item.number}</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">{item.title}</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>




        {/* Future Improvements */}
        {/* <section className="mb-24">
          <h2 className="text-3xl font-bold mb-8 text-foreground">What I'd improve next</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Add estimated reach",
                description: "Show potential reach or impressions for each amount to make value even more tangible"
              },
              {
                title: "A/B test trust signals",
                description: "Experiment with different trust signal placements and messaging to optimize impact"
              },
              {
                title: "Validate with metrics",
                description: "Track quantitative funnel metrics to measure actual impact on conversion rates"
              }
            ].map((item, idx) => (
              <div key={idx} className="p-6 bg-muted/50 rounded-xl border border-border">
                <h3 className="text-lg font-semibold mb-2 text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </section> */}
      </div>
    </ProjectLayout>
  );
};

export default ShareChatWallet;
