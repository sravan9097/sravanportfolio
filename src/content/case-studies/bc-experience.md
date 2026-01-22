---
slug: bc-experience
title: Building BeautifulCode Experience App
category: Case Study
description: Designing the BC Experience platform to streamline collaboration, improve visibility, and create a frictionless check-in process that fosters autonomy and trust across distributed teams.
image: /Hero_Images/BC_experience_cover.png
rank: 2
timeline: 3 months
tools:
  - Figma
  - Cursor
role: Sr UX Designer & Front-End Developer
prototypeLinks:
  - label: Interactive Prototype
    url: https://www.figma.com/proto/EtqeVYOBvOPc15RlSbZmZr/BeautifulCode-Experience-App?page-id=553%3A11178&node-id=40000021-50100&p=f&viewport=2332%2C217%2C0.12&t=L0l2vB5rOzhuFU8Q-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=40000021%3A49953
    icon: desktop
figmaFileUrl: https://www.figma.com/community/file/1532192399307808386/beautiful-code-experience-app
tags:
  - platform-design
  - team-collaboration
  - member-management
  - user-experience
  - check-in-system
carousels:
  process-artifacts:
    - src: "/Hero_Images/Objects.png"
      alt: "Objects"
      caption: "Defining key system objects like Projects, Teams, and Check-Ins."
    - src: "/Hero_Images/Roles.png"
      alt: "Roles"
      caption: "Mapping user roles and permissions for Admins, Managers, and Engineers."
    - src: "/Hero_Images/Site_Map.png"
      alt: "Site Map"
      caption: "Structuring the app with a clear, minimal information architecture."
    - src: "/Hero_Images/check_in_flow.png"
      alt: "Check-in Flow"
      caption: "Mapping the critical daily check-in user flow."
  wireframes:
    - src: "/Hero_Images/check_in_flow_1.png"
      alt: "Check-in Flow Screen 1"
    - src: "/Hero_Images/check_in_flow_2.png"
      alt: "Check-in Flow Screen 2"
    - src: "/Hero_Images/team_view_1.png"
      alt: "Team View Screen"
    - src: "/Hero_Images/team_settings.png"
      alt: "Team Settings Screen"
  final-screens:
    - src: "/bcexperience/checkin_creation.png"
      alt: "Check-in Creation"
      caption: "The simplified check-in interface where engineers share updates in under 5 minutes."
    - src: "/bcexperience/Single_Member_View.png"
      alt: "Single Member View"
      caption: "A timeline of daily progress and blockers for each team member."
    - src: "/bcexperience/Team-View.png"
      alt: "Team View"
      caption: "A high-level view of check-in statuses and activity across teams."
---

## The Challenge

As BeautifulCode’s distributed teams scaled, visibility and alignment became harder to maintain. Updates were fragmented across channels, and managers spent valuable time chasing project information. Daily stand-ups started to feel repetitive and inefficient.

The challenge was to create a lightweight, async check-in system that fostered **trust, transparency, and autonomy**, without adding process overhead.

**Key Pain Points:**

- Inconsistent updates across distributed teams
- Excessive time spent collecting status reports
- Difficulty tracking progress and blockers
- Dependence on synchronous meetings

> “How can we design a check-in experience that builds trust, not tension?”

<!-- The goal was simple: **make updates effortless, engaging, and scalable across teams.** -->

## Outcomes & Results

<div class="metricsGrid">
  <div class="metricCard">
    <div class="metricValue">Under 5 min</div>
    <div class="metricTitle">Check-in Time</div>
    <div class="metricDescription">Average completion time per user</div>
  </div>
  <div class="metricCard">
    <div class="metricValue">40%</div>
    <div class="metricTitle">Friction Reduction</div>
    <div class="metricDescription">Less repetitive input and fewer steps</div>
  </div>
  
  <div class="metricCard">
    <div class="metricValue">76.5%</div>
    <div class="metricTitle">Daily Adoption</div>
    <div class="metricDescription">Avg monthly check-in % achieved</div>
  </div>
</div>

## Design Process

My approach focused on clarity and iteration: understanding user behavior, structuring the system for scalability, and refining the interaction flow through continuous feedback.

### User Flow & Site Mapping

The foundation started with defining key **system objects** such as _Projects, Teams, Members,_ and _Check-ins_.  

<img src="/bc-experience/Objects.png" alt="Defining Objects" />

By mapping **user roles** (Admin, Manager, Engineer), I clarified permissions and views early on to avoid complexity later.

<img src="/bc-experience/Roles.png" alt="Defining Roles" />

I then created a **site map** that organized the app into a logical, minimal structure. This ensured intuitive navigation and a consistent mental model for all users.

<img class="bg-white rounded-lg mt-4" src="/bc-experience/Site_Map.png" alt="Site Map" />

The most important flow—**the daily check-in**—was mapped in detail. It had to be frictionless, so engineers could complete their update in minutes while managers gained instant visibility. Through multiple iterations, I refined the flow to minimize steps and highlight only the essentials.

<img class="bg-white rounded-lg mt-4" src="/bc-experience/check_in_flow.png" alt="User Flow for Check-in" />

### Wireframing & Prototyping

Low-fidelity wireframes emphasized **clarity and efficiency**. Through rapid internal testing, I validated structure, content hierarchy, and usability.

Key iterations focused on:

- Reducing steps to complete a check-in
- Simplifying input fields and copy
- Adding feedback cues to confirm completion

Interactive prototypes allowed real-world validation, ensuring the flow felt intuitive and aligned with engineers’ daily routines.

<div class="wireframeGrid">
  <img src="/Hero_Images/check_in_flow_1.png" alt="Check-in Flow Screen 1" />
  <img src="/Hero_Images/check_in_flow_2.png" alt="Check-in Flow Screen 2" />
  <img src="/Hero_Images/team_view_1.png" alt="Team View Screen" />
  <img src="/Hero_Images/team_settings.png" alt="Team Settings Screen" />
</div>

![Check-in Flow Animation](/bcexperience/checkin.gif)

## Final UI

The final interface focuses on **speed, clarity, and autonomy**.  
Each screen was designed to minimize cognitive load, enabling quick updates and instant team visibility.

- **Check-in Creation:** Streamlined flow with smart defaults and contextual hints.
- **Single Member View:** A chronological feed showing progress and blockers.
- **Team View:** An overview dashboard summarizing team check-ins and activity.

<div data-carousel="final-screens"></div>

## Key Challenge: Making Check-ins Effortless & Adoptable

The hardest part was designing a process that felt **valuable, not managerial**.  
Early testers found the experience repetitive and “status-heavy.” Through iterative feedback, I redefined the flow to be faster, lighter, and more rewarding.

**Design Solutions:**

- Kept the flow within **3-4 steps**
- Added **auto-fill** for recurring data
- Introduced a **“Generate Summary”** feature to post updates directly to Slack
- Implemented **visual confirmations** for completion feedback

These small but impactful refinements made check-ins feel **natural, quick, and trustworthy**, leading to rapid adoption across teams.

> The result: Check-ins evolved from a task into a team habit, creating consistent visibility and stronger collaboration.

<!-- ## Next Steps

Building on the MVP’s success, the next phase aims to enhance insights and transparency:

- **Analytics Dashboard:** Track engagement, blockers, and trends
- **Personalized Home View:** Role-based dashboards for managers and engineers
- **Client Portal:** Share real-time progress with partners and stakeholders -->
