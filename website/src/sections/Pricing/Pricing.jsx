// Pricing.jsx
import React, { useState } from "react";
import "./Pricing.css";

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const pricingPlans = [
    {
      id: "landing-page",
      name: "Landing Page",
      price: 1500,
      description:
        "Perfect for pre-launch validation and building your waitlist",
      features: [
        "High-converting landing page design",
        "Email capture optimization",
        "Mobile-responsive build",
        "Domain setup included",
        "2-week delivery",
      ],
      cta: "Get Started",
      popular: false,
      additionalCosts: "+ domain costs",
    },
    {
      id: "mvp",
      name: "MVP Development",
      price: 4000,
      description:
        "Complete MVP with core features to validate your concept with real users",
      features: [
        "Working MVP with core features",
        "Interactive prototypes for approval",
        "User authentication system",
        "Mobile-responsive design",
        "4-week delivery",
      ],
      cta: "Get Started",
      popular: true,
      additionalCosts: "+ hosting & domain costs",
    },
    {
      id: "custom",
      name: "Full-Service Development",
      price: null,
      description:
        "Fully managed project from concept to launch with ongoing support",
      features: [
        "Complete technical consultation",
        "Custom feature development",
        "Scalable architecture",
        "Timeline based on scope",
      ],
      cta: "Book a Call",
      popular: false,
      additionalCosts: null,
    },
  ];

  return (
    <section className="pricing" id="pricing">
      <div className="pricing-container">
        <div className="pricing-header">
          {/* <div className="pricing-badge">Pricing</div> */}
          <h2>Simple and Transparent Pricing</h2>
          <p>
            Choose the package that fits your startup's needs. No hidden fees,
            no surprises.
          </p>
        </div>

        <div className="pricing-grid">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`pricing-card ${
                plan.popular ? "pricing-card-popular" : ""
              }`}
            >
              {plan.popular && (
                <div className="popular-badge">Most Popular</div>
              )}

              <div className="pricing-card-header">
                <h3 className="plan-name">{plan.name}</h3>
                <div className="plan-price">
                  {plan.price ? (
                    <>
                      <span className="price-currency">$</span>
                      <span className="price-amount">
                        {plan.price.toLocaleString()}
                      </span>
                      <span className="price-period">one-time</span>
                    </>
                  ) : (
                    <span className="price-custom">Custom Quote</span>
                  )}
                </div>
                <p className="plan-description">{plan.description}</p>
                {plan.additionalCosts && (
                  <p className="additional-costs">{plan.additionalCosts}</p>
                )}
              </div>

              <div className="pricing-card-features">
                <h4>What's included:</h4>
                <ul className="features-list">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="feature-item">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pricing-card-footer">
                <button
                  className={`pricing-cta ${
                    plan.popular ? "pricing-cta-popular" : ""
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="pricing-footer">
          <p>All packages include full source code ownership.</p>
          <p>
            Need something different?{" "}
            <a href="#contact">Let's discuss your specific requirements.</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
