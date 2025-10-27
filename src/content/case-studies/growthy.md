---
slug: growthy
title: Building Growthy - Empowering Continuous Learning in the Age of AI
category: Case Study
description: Designing Growthy, an internal platform to help employees upskill and reflect on their daily learning through AI-powered guidance and mentor-driven courses.
image: /Hero_Images/growthyCover.png
date: 2025-01-10
rank: 4
timeline: 4 months
tools:
  - Figma
  - User Research
  - AI Integration
role: Sr UX Designer & Front-End Developer
tags:
  - ai-learning
  - employee-upskilling
  - reflection-tool
  - course-design
  - product-design
---

## The Challenge

As AI rapidly transforms how we work, staying relevant means learning continuously. At BeautifulCode, we wanted to empower our team to learn actively, reflect deeply, and grow consistently.

However, traditional learning platforms felt transactional. They captured _completion_, not _understanding_.  
We needed an internal tool that encouraged people to **capture what they learn every day**, reflect meaningfully, and **get personalized feedback from AI**, without making it feel like a classroom.

> “How might we help every employee become a self-driven learner in the age of AI?”

Our solution became **Growthy**: an internal platform built around two key experiences:

1. **TIL (Today I Learned):** For quick daily learning reflections
2. **Course Learn:** For structured, guided learning journeys

---

## Design Process

I approached this project by first defining what “learning” should _feel like_ inside a busy workplace. We didn’t want to add another to-do but we wanted to build a "_habit_".

### Research & Insights

We conducted quick discovery sessions with employees to understand:

- How they currently learn and capture knowledge
- What motivates them to share insights
- Why learning reflections often fade away

**Key findings:**

- People learn constantly but rarely document it.
- Reflection increases retention but requires a simple process.
- AI support should be helpful but not intrusive.

These insights guided the design principles for Growthy: **simplicity, autonomy, and reflection through feedback.**

<!-- ## Information Architecture

We designed Growthy around two complementary learning modes:

- **TIL (Today I Learned):** Captures micro-learnings from daily work.
- **Course Learn:** Guides structured, mentor-led learning experiences.

Each mode was mapped with distinct user flows but shared a unified design language and dashboard.

> _Add Site Map / IA diagram here_ -->

## Designing the “Today I Learned” (TIL) Flow

TIL was envisioned as a daily reflection ritual: quick, conversational, and AI-assisted.

### Flow & Interaction

1. **Write a TIL:**  
   The user clicks “Write a TIL” and lands on a page with a single input to describe what they learned today.

2. **AI Review:**  
   On submission, Growthy’s AI assistant analyzes the content for **truthfulness, clarity, and factual accuracy**.  
   It makes gentle corrections _only when necessary_, ensuring learning remains authentic.

3. **Suggested Titles:**  
   Based on the content, AI generates **title options**, each written in a different tone or "mode" (e.g., informative, curious, or thought-provoking), helping users express their learning better.

4. **Post to Feed:**  
   Once finalized, the TIL is published to the **daily feed**, where peers can **like, comment, and discuss** others' posts, transforming isolated learning into shared growth.

<div class="wireframeGrid">
  <img src="/growthy/growthy_til_empty.png" alt="Today I learned Landing UI" />
  <img src="/growthy/growthy_til_filled.png" alt="User filled the TIL section and choose title to post" />
</div>
<picture class="pciture">
  <img src="/growthy/growthy_dashboard.png" alt="Dashboard of Growthy after posting view of TIL feed" />
  
</picture>

## Designing “Course Learn”

While TIL nurtures daily reflection, **Course Learn** provides depth: a structured journey for mastering new skills through practice, reflection, and feedback.

Each course contains multiple **modules**, and each module has a clear path: **Learn → Reflect → Evaluate.**

### 1. Learn Phase

Users explore learning tasks such as reading articles, watching videos, or doing exercises.  
As they engage, they **capture notes** using the in-app note-capture feature. Each note or image of their work is uploaded as proof of progress.

<div data-carousel="growthy-learn-phase-slides"></div>

### 2. Reflect Phase

Reflection happens once the learning tasks are complete. Here, users annotate their uploaded notes by tagging sections as Concepts, Analogy, Insights, Questions.

AI reviews each annotation and provides **constructive feedback**. Users can revise and re-evaluate until all annotations reach "green", meaning the reflections are complete and accurate.

<div class="wireframeGrid">
  <img src="/growthy/growthy_learn_reflect_1.png" alt="Reflect Phase" />
  <img src="/growthy/growthy_learn_reflect_2.png" alt="Reflect Phase" />
</div>

### 3. Evaluation Phase

In the final stage, the user submits all annotated notes, reflections, and exercises for evaluation.  
Growthy’s AI compares the user’s work to **mentor-defined expectations**, checking if learning goals are achieved.

**If all expectations are met**: The user can move to the Module Summary and submit for **mentor review**.

**If not**: AI poses **follow-up questions or challenges** to bridge the learning gap. Once those are answered correctly, the user proceeds to completion.

<div class="wireframeGrid">
  <img src="/growthy/growthy_learn_evaluate_1.png" alt="Evaluate Phase" />
  <img src="/growthy/growthy_learn_evaluate_2.png" alt="Evaluate Phase" />
</div>

<!-- ## Challenges Faced

### 1. Balancing AI Feedback with Human Judgment

Early prototypes made users feel as if AI was “grading” their learning.
We redesigned the experience so AI became a **coach**, not a critic, giving supportive, conversational feedback and allowing users to choose whether to apply suggestions. -->

## Outcomes & Impact

### Key Metrics

<div class="metricsGrid">
  <div class="metricCard">
    <div class="metricValue">3 min</div>
    <div class="metricTitle">TIL Completion Time</div>
    <div class="metricDescription">Average time to complete daily learning reflection</div>
  </div>
  <div class="metricCard">
    <div class="metricValue">65%</div>
    <div class="metricTitle">Employee Adoption</div>
    <div class="metricDescription">Employees posted TIL at least three times a week on average till now</div>
  </div>
  
  <div class="metricCard">
    <div class="metricValue">Daily</div>
    <div class="metricTitle">Reflection Rhythm</div>
    <div class="metricDescription">Active understanding replaced passive consumption</div>
  </div>
</div>

## Next Steps

- Introduce **One Pager** to adopt employees publishing culture in the company.
- In progrees of implementing **Growth Journey** which documents the progress of the learning jouirney and track thier DEC goals.
- Expand **TIL** to include nominations for one-pager from mentors and peers.

<!-- ## Conclusion

Growthy was more than a product, it was a cultural shift.
By blending human reflection with AI-assisted learning, we built a platform that encourages curiosity, consistency, and critical thinking.

The combination of **TIL** for daily reflection and **Course Learn** for structured growth created a complete learning ecosystem that supports both individual development and organizational knowledge building. -->

<!-- > "Growthy helped transform everyday moments into learning opportunities, and that's the real measure of growth." -->
