/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Cursor, { ResetCursor, HideCursor } from "@/components/cursor/Cursor";
import styles from "@/styles/Goals.module.css";
import Carausel from "@/components/carausel/Carausel";
import Timeline from "@/components/timeline/Timeline";
import { RemoveCurtain } from "@/components/curtain/Curtain";

const Goals = () => {
  React.useEffect(() => {
    const page = document.getElementById("goalsPage");
    page?.addEventListener("load", () => {
      RemoveCurtain(ResetCursor);
    });
  }, []);

  return (
    <>
      <Cursor />
      <main id="goalsPage">
        <article className={styles.article}>
          <div className={styles.article__content}>
            <h1> The 2030 Agenda — Sustainable Development Goals</h1>
            <p>
              The Sustainable Development Goals (SDGs, also referred to as the
              Global Goals) are the blueprint to achieve a better and more
              sustainable future for all. The key element of the 2030 Agenda,
              address the global challenges we face, including those related to
              poverty, inequality, climate, environmental degradation,
              prosperity, and peace and justice. The Goals interconnect and, to
              ensure a just transition that leaves no one behind, we must
              achieve each Goal and target by 2030. Each SDG is comprised of a
              set of sub-targets. Additionally, each goal has a set of
              indicators, jointly known as the global indicator framework, with
              which to assess progress. The global indicator framework was
              developed by the Inter-Agency and Expert Group on SDG Indicators
              (IAEG-SDGs) and agreed to, as a practical starting point at the
              47th session of the UN Statistical Commission held in March 2016.
              The report of the Commission, which included the global indicator
              framework, was then taken note of by ECOSOC at its 70th session in
              June 2016. The links in the list of SDGs below will take you to
              the Goals’ unique targets and indicators, as well as recent
              updates on progress.
            </p>
            <p>By far, There are 17 Sustainable Development Goals (SDGs)</p>
            <Carausel />
            <br />
            <p>
              Now that you know about the 17 Sustainable Development Goals,
              let's shift our focus to the 6th SDG - Clean Water and Sanitation.
              This goal aims to ensure availability and sustainable management
              of water and sanitation for all. Achieving this goal is crucial
              for preventing the spread of diseases and improving the overall
              well-being of individuals and communities. Let's explore the
              targets and indicators of this and see how we can contribute
              towards achieving it by 2030.
            </p>
            <br />
            <hr />
            <br />
            <br />
            <h1>Goal 6 — Clean Water and Sanitation</h1>
            <p>
              The sixth Sustainable Development Goal (SDG) in the 2030 Agenda
              for Sustainable Development is Clean Water and Sanitation. This
              goal is focused on ensuring access to clean water and adequate
              sanitation facilities for all. The SDG is essential because access
              to clean water and proper sanitation is a fundamental human right
              and a prerequisite for achieving sustainable development.
              According to the United Nations, nearly one-third of the world's
              population lacks access to safe drinking water, and more than half
              of the world's population lacks access to adequate sanitation
              facilities. The lack of access to clean water and sanitation
              facilities is particularly acute in developing countries, where
              millions of people die each year from water-related diseases.
            </p>
            <p>
              The SDG aims to ensure that everyone has access to safe and
              affordable drinking water and basic sanitation services by 2030.
              The target is to improve water quality and increase access to
              adequate sanitation facilities for all. This includes providing
              access to improved water sources, such as piped water, protected
              wells, and rainwater harvesting systems. It also includes
              improving water quality by reducing pollution and increasing water
              treatment facilities.
            </p>
            <p>
              The goal of the Clean Water and Sanitation SDG is critical in
              ensuring that everyone has access to basic necessities that are
              crucial for their well-being. The achievement of this goal will
              not only save lives but will also contribute significantly to the
              development of societies. The provision of clean water and
              adequate sanitation facilities will not only improve health but
              will also provide opportunities for economic growth and increased
              social well-being.
            </p>
            <br />
            <h4>
              "Ensuring availability and sustainable management of water and
              sanitation for all"
            </h4>
            <br />
            <p>
              To reach universal access to drinking water, sanitation and
              hygiene by 2030, the current rates of progress would need to
              increase fourfold. Achieving these targets would save 829,000
              people annually, who die from diseases directly attributable to
              unsafe water, inadequate sanitation and poor hygiene practices.
              This goal is to ensure availability
              and sustainable management of water and sanitation for all. More
              specifically, 8 targets need to be attained by 2030:
            </p>
          </div>
          <Timeline />
        </article>
      </main>
    </>
  );
};

export default Goals;
