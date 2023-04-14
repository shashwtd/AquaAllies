/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Cursor, { ResetCursor, HideCursor } from "@/components/cursor/Cursor";
import { RemoveCurtain } from "@/components/curtain/Curtain";
import styles from "@/styles/Contribute.module.css";

const Contribute = () => {
  React.useEffect(() => {
    const handleLoad = () => RemoveCurtain(ResetCursor);
    const images = document.querySelectorAll("img");
    let imagesToLoad = images.length;
    const checkImagesLoaded = () => {
      imagesToLoad--;
      if (imagesToLoad === 0) handleLoad();
    };
    images.forEach((image) => {
      if (image.complete) checkImagesLoaded();
      else image.addEventListener("load", checkImagesLoaded);
    });
    return () => {
      images.forEach((image) =>
        image.removeEventListener("load", checkImagesLoaded)
      );
    };
  }, []);
  return (
    <>
      <Cursor />
      <main id="goalsPage">
        <article className={styles.article}>
          <div className={styles.article__content} contentEditable>
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
                <b>Educate yourself and others.</b> One of the first steps to
                contributing to the SDGs is to educate yourself about the goals
                and why they are important. You can then share this knowledge
                with others, whether it's through conversations with friends and
                family, social media, or public speaking.
              </li>
              <li l-index="2">
                <b>Take action in your own life.</b> There are many small
                changes that individuals can make in their own lives to support
                the SDGs. This can include things like reducing your carbon
                footprint, supporting local businesses, or volunteering in your
                community.
              </li>
              <li l-index="3">
                <b>Volunteer your time and skills.</b> There are many
                organizations that are working on SDG-related projects and
                initiatives. By volunteering your time and skills, you can make
                a direct contribution to these efforts.
              </li>
              <li l-index="4">
                <b>Advocate for policy changes.</b> Finally, individuals can
                contribute to the SDGs by advocating for policy changes that
                support the goals. This can involve contacting elected
                officials, writing letters to the editor, or using social media
                to raise awareness about specific issues.
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
          </div>
        </article>
      </main>
    </>
  );
};

export default Contribute;
