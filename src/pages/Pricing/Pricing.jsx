import { useEffect } from "react";
import Title from "../../components/Title/Title";
import bg from "../../img/pages/pricing/bg.jpg";
import "./index.scss";
import { motion } from "framer-motion";
import { animationsTop } from "../../data/animations";
import PricingItem from "../../components/PricingItem/PricingItem";
import MobileCarousel from "../../components/PricingSlider/PricingSlider";
const Pricing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const pricePlansInfo = [
    {
      title: "Design advices",
      price: 29,
      text: [
        "General living space advices",
        "Rennovation advices",
        "Interior design advices",
        "Up to 5 hours meetings",
      ],
    },
    {
      title: "Complete interior",
      price: 39,
      mostPopular: true,
      text: [
        "Complete home redesign",
        "Interior and exterior works",
        "Modular interior planning",
        "Kitchen design",
        "Garages organization",
      ],
    },
    {
      title: "Furniture design",
      price: 59,
      text: [
        "Furniture for living room",
        "Furniture refurbishment",
        "Sofas and amchairs",
        "Tables and chairs",
        "Kitchens",
      ],
    },
  ];

  return (
    <section className="pricing">
      <Title title="Pricing & Plan" img={bg} subtitle="Pricing" />
      <div className="container">
        <div className="pricing__wrapper  mt-[-50px] pb-[150px]">
          <motion.div
            className="pricing__row hidden md:flex justify-center items-center gap-0 md:gap-[20px] lg:gap-[32px] xl:gap-[48px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {pricePlansInfo.map((plan) => (
              <PricingItem
                title={plan.title}
                price={plan.price}
                mostPopular={plan.mostPopular ? true : false}
                info={plan.text}
              />
            ))}
            {/* <motion.div
              className="pricing__plan rounded-[33px]"
              variants={animationsTop}
              custom={0.5}
            >
              <h3 className="pricing__name subtitle mb-[38px]">
                Design advices
              </h3>
              <div className="pricing__price text">
                $<span>29</span> <br />
                /month
              </div>
              <div className="pricing__line mt-[37px] mb-[28px]"></div>
              <div className="pricing__text text leading-[2] xl:leading-[2.5]">
                <p>General living space advices</p>
                <p>Rennovation advices</p>
                <p>Interior design advices</p>
                <p>Furniture reorganization</p>
                <p>Up to 5 hours meetings</p>
              </div>
              <div className="pricing__button button button--light mt-[28px] w-[219px]">
                <span className="--after-arow ">Get Started</span>
              </div>
            </motion.div>
            <motion.div
              className="pricing__plan rounded-[33px]"
              variants={animationsTop}
              custom={1}
            >
              <div className="pricing__name subtitle mb-[38px]">
                Complete interior
              </div>
              <div className="pricing__price text">
                $<span>39</span> <br />
                /month
              </div>
              <div className="pricing__line mt-[37px] mb-[28px]"></div>
              <div className="pricing__text text leading-[2.5]">
                <p>Complete home redesign</p>
                <p>Interior and exterior works</p>
                <p>Modular interior planning</p>
                <p>Kitchen design</p>
                <p>Garages organization</p>
              </div>
              <div className="pricing__button button mt-[28px] w-[219px]">
                <span className="--after-arow ">Get Started</span>
              </div>
            </motion.div>
            <motion.div
              className="pricing__plan rounded-[33px]"
              variants={animationsTop}
              custom={1.5}
            >
              <div className="pricing__name subtitle mb-[38px]">
                Furniture design
              </div>
              <div className="pricing__price text">
                $<span>59</span> <br />
                /month
              </div>
              <div className="pricing__line mt-[37px] mb-[28px]"></div>
              <div className="pricing__text text leading-[2.5]">
                <p>Furniture for living room</p>
                <p>Furniture refurbishment</p>
                <p>Sofas and amchairs</p>
                <p>Tables and chairs</p>
                <p>Kitchens</p>
              </div>
              <div className="pricing__button button button--light mt-[28px] w-[219px]">
                <span className="--after-arow ">Get Started</span>
              </div>
            </motion.div> */}
          </motion.div>
          <div className="md:hidden block">
            <MobileCarousel slidersInfo={pricePlansInfo} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
