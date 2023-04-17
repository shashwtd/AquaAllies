/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { RemoveCurtain } from "@/components/curtain/Curtain";
import styles from "@/styles/Contribute.module.css";
import Okfe from "@/components/okfe/Okfe";

const Contribute = () => {
  React.useEffect(() => {
    const handleLoad = () => RemoveCurtain();
    const images = document.querySelectorAll("img");
    const bgVid = document.querySelector(".fsBgVid") as HTMLVideoElement;
    let imagesToLoad = images.length + 1;
    const reduceImagesToLoad = () => {
      imagesToLoad--;
      if (imagesToLoad === 0) handleLoad();
    };

    if (bgVid.readyState === 4) handleLoad();
    else bgVid.addEventListener("loadeddata", reduceImagesToLoad);

    images.forEach((image) => {
      if (image.complete) reduceImagesToLoad();
      else image.addEventListener("load", reduceImagesToLoad);
    });
    return () => {
      images.forEach((image) =>
        image.removeEventListener("load", reduceImagesToLoad)
      );
    };
  }, []);
  return (
    <>
      <main id="goalsPage">
        <article className={styles.article}>
          <div className={styles.article__content}>
            <h1>Here's how to Contribute!</h1>
            <p>
              We are a community of people who are passionate about the SDGs and
              want to make a difference. We are looking for people who are
              passionate about the SDGs and want to make a difference. We
              believe that everyone can contribute to achieving the SDGs,
              regardless of their background or expertise. Whether you are a
              student, a professional, or a member of a community organization,
              you have a role to play in advancing the SDGs. You can start by
              educating yourself and others about the goals and why they are
              important. You can take action in your own life to support the
              goals, such as reducing your carbon footprint or supporting local
              businesses. No matter how you choose to contribute, the important
              thing is that you take action. By working together, we can create
              a world that is more sustainable, equitable, and just for all.
            </p>
            <br />
            <h5>How can someone contribute to SDGs?</h5>
            <p>
              The SDGs, or Sustainable Development Goals, represent a global
              effort to address some of the most pressing challenges facing
              humanity, such as poverty, inequality, and environmental
              degradation. By contributing to the SDGs, individuals can play a
              role in creating a more sustainable, equitable, and prosperous
              future for all. There are many ways that someone can contribute to
              the SDGs. Here are a few examples:
            </p>
            <ol>
              <li l-index="1">
                <b>Find a Goal 6 charity you want to support.</b>
                One of the best and easiest ways to contribute towards this goal
                is to find a trustworthy charity and donate to them. There are
                many charities that are working on SDG-related projects and
                initiatives. By volunteering your time and skills, you can
                directly contribute to these efforts. contribution to these
                efforts.
              </li>
              <li l-index="2">
                <b>Run a campaign on hygiene.</b> You can also raise awareness
                about the hygiene issues in your community through social media,
                school/university campaign or even a campaign in the
                neighbourhood you live in. The more people you reach, the more
                likely you are to make a difference.
              </li>
              <li l-index="3">
                <b>Organize a clean up project for rivers and oceans.</b>
                There are many organizations that are working on similar
                projects but if you feel like it you can create your own.
                Engaging your whole community to clean up a local river, seaside
                or ocean can make a lot of difference. You can also encourage
                your friends and family to do the same and contribute towards
                this cause.
              </li>
              <li l-index="4">
                <b>Raise awareness for lack of Sanitation</b>
                About 4 billion people in this world lack access to basic
                sanitation services. You can help by lending your voice and
                efforts to generate awareness about the lack of toilets and
                sanitation in many communities around the world.
              </li>
              <li l-index="5">
                <b>Do not overuse water.</b>
                One of the most simplest ways to contribute is to not waste
                water. There are many for whom even the smallest amount of water
                is a blessing. Make sure to close a tap when washing dishes,
                take short showers – Bathtubs require gallons more water than a
                5-10 minute shower. Consider getting a water meter to be aware
                of your water usage.
              </li>
              <li l-index="6">
                <b>Spread the word.</b>
                The more people who know about the Global Goals, the more we can
                achieve and the higher the chances of us creating a better world
                for everyone by 2030. You can help by sharing this website on
                social, and by talking to everyone about the action you’re
                taking. You can also follow @TheGlobalGoals on social media to
                stay up to date with the latest news and events.
              </li>
            </ol>
            <p>
              No matter how you choose to contribute to the SDGs, the important
              thing is that you take action. By working together, we can create
              a world that is more sustainable, equitable, and just for all. We
              believe that everyone can contribute to achieving the SDGs,
              regardless of their background or expertise. Whether you are a
              student, a professional, or a member of a community organization,
              you have a role to play in advancing the SDGs. You can start by
              educating yourself and others about the goals and why they are
              important.
            </p>
            <hr />
            <br />
            <br />
            <h3>Some Additional ways to contribute —</h3>
            <br />
            <br />
            <div className={styles.okfee}>
              <Okfe
                title="Team Seas 🌊"
                desc="This is a fundraiser created and promoted by various YouTubers primarily MrBeast and Mark Rober. The fundraiser has helped in removing more than 30 million pounds (14 million kg) of marine debris from the ocean and still going."
                thumb="/images/seas.jpg"
                link="https://teamseas.org/"
              />
              <Okfe
                title="Water.org 🚰"
                desc="An organization that focuses on providing access to safe water and sanitation to people in need by working with local partners to develop sustainable solutions that empower communities to take ownership of their own water resources."
                thumb="/images/wate.jpg"
                link="https://water.org/donate/"
              />
              <Okfe
                title="The Water Project 💧"
                desc="This is a nonprofit organization that works to provide access to clean and safe water to communities in Africa. They work with local partners to implement sustainable water projects that provide communities with clean water sources."
                thumb="/images/conse.jpg"
                link="https://thewaterproject.org/donate"
              />
            </div>
          </div>
        </article>
      </main>
    </>
  );
};

export default Contribute;
