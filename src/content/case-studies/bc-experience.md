---
slug: bc-experience
title: Building BeautifulCode Experience App
category: Case Study
description: Designing the BC Experience platform to improve team collaboration, member management, and overall user experience for better engagement and productivity.
image: /Hero_Images/BC_experience_cover.png
rank: 1
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
      caption: "Defining key objects in the system like Projects, Teams, and Check-Ins."
    - src: "/Hero_Images/Roles.png"
      alt: "Roles"
      caption: "Mapping user roles such as Admin, Manager, and Employee."
    - src: "/Hero_Images/Site_Map.png"
      alt: "Site Map"
      caption: "Structuring the application with a clear sitemap."
    - src: "/Hero_Images/check_in_flow.png"
      alt: "Check-in Flow"
      caption: "Mapping the critical check-in user flow."
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
      caption: "The simplified check-in interface where engineers update their progress twice daily."
    - src: "/bcexperience/Single_Member_View.png"
      alt: "Single Member View"
      caption: "A timeline of daily check-ins for a specific team member to track progress and blockers."
    - src: "/bcexperience/Team-View.png"
      alt: "Team View"
      caption: "A snapshot of check-in status across all team members."
---

## The Challenge

BeautifulCode’s success has always relied on transparency and autonomy. As the company grew, maintaining visibility across distributed teams became increasingly difficult.  
Project updates were shared inconsistently, managers had to chase people for information, and daily stand-ups turned into time-consuming status meetings.

The growing team needed a better way to share progress and blockers—without adding extra meetings or friction.

**Key problems identified:**

- Lack of structured communication across distributed teams
- Managers spending excessive time collecting updates
- Difficulty tracking progress at scale
- Increasing dependency on synchronous meetings

> “How can we create a system that builds trust and transparency, without micromanagement?”

The goal was to design a lightweight internal tool that encouraged regular updates, enabled visibility for everyone, and scaled naturally with team growth.

## Design Process

My process began with understanding user pain points and defining the product’s core architecture before diving into UI. The focus was on building a system that was easy to use daily, provided value instantly, and worked seamlessly for different roles—engineers, managers, and partners.

### User Flow & Site Mapping

The foundation started with defining key **system objects** such as _Projects, Teams, Members,_ and _Check-ins_.  
By mapping **user roles** (Admin, Manager, Engineer), I clarified permissions and views early on to avoid complexity later.

I then created a **site map** that organized the app into a logical, minimal structure. This ensured intuitive navigation and a consistent mental model for all users.

The most important flow—**the daily check-in**—was mapped in detail. It had to be frictionless, so engineers could complete their update in minutes while managers gained instant visibility. Through multiple iterations, I refined the flow to minimize steps and highlight only the essentials.

<div data-carousel="process-artifacts"></div>

### Wireframing & Prototyping

Once the structure was validated, I moved into low-fidelity wireframes using Figma.  
The focus was simplicity—clear layout, minimal input, and predictable navigation. Early prototypes were tested internally, leading to valuable feedback about interaction patterns and terminology.

Iterations focused on:

- Reducing the number of actions needed to complete a check-in
- Clarifying input labels and hierarchy
- Improving contrast and readability for faster scanning

After several design-feedback loops, I developed interactive prototypes to test real workflows, ensuring the app felt natural in day-to-day use.

<div class="wireframeGrid">
  <img src="/Hero_Images/check_in_flow_1.png" alt="Check-in Flow Screen 1" />
  <img src="/Hero_Images/check_in_flow_2.png" alt="Check-in Flow Screen 2" />
  <img src="/Hero_Images/team_view_1.png" alt="Team View Screen" />
  <img src="/Hero_Images/team_settings.png" alt="Team Settings Screen" />
</div>

## Final UI

The final interface balances **clarity and focus**.  
Every screen communicates purpose without distractions—ideal for teams who need to check in, view updates, and move on quickly.

![Check-in Flow Animation](/bcexperience/checkin.gif)

- **Check-in Creation:** A step-by-step form with smart defaults and contextual help.
- **Single Member View:** A chronological timeline that highlights each engineer’s daily progress and blockers.
- **Team View:** A high-level snapshot of all team members’ check-in statuses and recent activity.

The overall design embraces BeautifulCode’s minimalist brand values while maintaining strong usability.

<div data-carousel="final-screens"></div>

## Challenges Faced

### 1. Making Check-ins Feel Effortless

One of the biggest challenges was ensuring check-ins didn’t feel like surveillance. Engineers were used to autonomy, so the process had to feel quick and valuable rather than administrative.

The solution was to:

- Keep the flow under 2–3 screens
- Use auto-fill for recurring project data
- Provide instant Slack summaries to reduce redundancy

These small optimizations made check-ins natural rather than burdensome.

### 2. Driving Adoption Across Teams

Early testers found the process repetitive. Through user feedback, I introduced:

- **Auto-fill for repeated entries** to save time
- A **“Generate Summary”** feature to instantly create update messages for Slack
- Visual cues and feedback to confirm submissions

This approach reduced friction and helped adoption rates grow steadily.

## Outcomes & Results

### Quantitative Impact

- Reduced average check-in time to **under 5 minutes**
- Introduced **auto-fill and smart suggestions**, reducing user friction by over 40%
- Implemented **Slack summaries** that cut redundant communication
- Achieved an **85% daily check-in rate** within the first month of rollout

## Next Steps

The success of the MVP opened up opportunities for future improvements, including:

- **Analytics Dashboard:** Insights into team activity, blockers, and performance trends
- **Main Dashboard:** Personalized view for each user role
- **Client-Side Portal:** Transparency for partners to view project progress

---
