import { useState, useEffect } from "react";
import "./style.css";
import BackgroundLines from "../BackgroundLines";
import WorkCard from "../WorkCard";
import ScrambleText from "../ScrambleText";
import ParaWriting from "../ParaWriting";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import work1 from "../../assets/Images/work1.png";
import work2 from "../../assets/Images/work2.png";
import work3 from "../../assets/Images/work3.png";
import papertalk from "../../assets/Images/papertalk.png";
import dalle from "../../assets/Images/dalle.png";
import pricercheck from "../../assets/Images/pricercheck.png";
import interviewmate from "../../assets/Images/pricercheck.png";

export default function Projects() {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const [hasAnimated, setHasAnimated] = useState(false);

  const handleComplete = () => {
    setHasAnimated(true);
  };

  useEffect(() => {
    // Start animation when the component is in view
    if (inView && !hasAnimated) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const works = [
    {
      client: "Personal Project",
      year: "2024",
      img: interviewmate,
      title: "AI Interview Mocker",
      link: "https://yourinterviewmate.vercel.app/",
      detail:
        "Interview simulation platform using Next.js and TypeScript, with advanced AI algorithms to provide dynamic feedback and in-depth performance analytics",
    },
    {
      client: "Summarist",
      year: "2023",
      img: work1,
      title: "Online subscription based library platform",
      link: "https://summarist.vercel.app/",
      detail:
        " I crafted an engaging online library where users can seamlessly read and listen to a diverse collection of books. This library offers users unlocking premium content within the library to upgrade to monthly or yearly plans",
    },
    {
      client: "Personal Project",
      year: "2024",
      img: papertalk,
      title: "PaperTalk",
      link: "https://papertalkai.vercel.app/",
      detail:
        "Next.js web application enabling PDF uploads stored in a Postgres database, and AI-Powered chat engineered through Langchain.js, Pinecone, OpenAI API for discussing document information.",
    },
    {
      client: "Personal Project",
      year: "2024",
      img: dalle,
      title: "AI Image Generator",
      link: "https://imagegenerator-xi.vercel.app/",
      detail: "MERN stack AI image generator app",
    },
    {
      client: "Personal Project",
      year: "2024",
      img: pricercheck,
      title: "PricerCheck",
      link: "https://pricercheck.vercel.app/",
      detail:
        "Next.js web scraping project leveraging Node.js to create a personalized Amazon price tracking tool, enabling users to monitor and analyze product prices dynamically.",
    },
    {
      client: "Personal Project",
      year: "2023",
      img: work2,
      title: "Twitter Clone",
      link: "https://twitter-clone-cbql.vercel.app/",
      detail:
        "Twitter clone designed to deliver a seamless user experience. Allowing for user account creation and it's ability for users to interact with eachothers comments and profiles.",
    },
    {
      client: "Scaling.so",
      year: "2023",
      img: work3,
      title: "NFT Marketplace Application",
      link: "https://haroon-internship.vercel.app/",
      detail:
        "An online NFT Marketplace with a community of NFT holders. One of its stand out features is to view and interact with other NFT holders profiles.",
    },
  ];

  const opacityVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <section ref={ref} className="projects" id="projects">
      <BackgroundLines />
      <div className="background--glow"></div>

      <div className="projects--grid">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={opacityVariant}
          transition={{ duration: 1, delay: 0.5 }}
          className="projects--grid--title"
        >
          <h3 className="theme--text">
            <ScrambleText shuffle delay={0.5}>
              03
            </ScrambleText>{" "}
            <span className="hash">{"//"}</span>{" "}
            <ScrambleText shuffle delay={0.5}>
              Expertise
            </ScrambleText>
          </h3>
        </motion.div>

        <div className="projects--grid--content">
          <div className="projects--grid--content--heading">
            <h2>
              <ParaWriting stagger={0.08} text={"My "} sec={"Works"} />
            </h2>
          </div>
          <div className="projects--grid--content--works">
            {works.map((item, index) => {
              return (
                <a href={item.link} target="__blank">
                  <WorkCard
                    item={item}
                    key={index}
                    // link={item.link}
                    // delay={0.1 * index + 1}
                    // controls={controls}
                  />
                </a>
              );
            })}
          </div>
        </div>

        <motion.div
          initial="hidden"
          animate={controls}
          variants={opacityVariant}
          transition={{ duration: 1, delay: 1 }}
          onAnimationComplete={() => handleComplete()}
          className="projects--grid--detail"
        >
          <p className="theme--detail">
            <ScrambleText delay={1}>
              Discover a curated portfolio of projects where each line of code
              tells a story of problem-solving, creativity, and technical
              finesse.
            </ScrambleText>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
