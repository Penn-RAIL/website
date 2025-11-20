---
---

<div class="home-hero">
  <div class="hero-content">
    <p class="eyebrow">Radiology AI Implementation Lab (RAIL)</p>
    <h1>Translating trustworthy AI into clinical impact</h1>
    <p class="lead">
      Based in the Department of Radiology at the Perelman School of Medicine and led by Dr. Tessa Cook, RAIL bridges
      groundbreaking AI research with real clinical workflows. We specialize in creating usable, ethical, and equitable
      tools that elevate clinicians and patients alike.
    </p>
    <div class="hero-actions">
      {%
        include button.html
        link="projects"
        text="Explore our projects"
        icon="fa-solid fa-diagram-project"
      %}
      {%
        include button.html
        link="research"
        text="Read our publications"
        icon="fa-solid fa-arrow-up-right-from-square"
        style="bare"
      %}
    </div>
    <div class="hero-metrics">
      <div class="metric-card">
        <p class="metric-label">Clinical deployment</p>
        <p class="metric-value">Real-world AI integrations with clinician-first workflows.</p>
      </div>
      <div class="metric-card">
        <p class="metric-label">Ethics &amp; trust</p>
        <p class="metric-value">Transparent, fair, and responsible AI by design.</p>
      </div>
      <div class="metric-card">
        <p class="metric-label">Education</p>
        <p class="metric-value">Training the next generation of AI-literate radiologists.</p>
      </div>
    </div>
  </div>
  <div class="hero-visual" aria-hidden="true">
    <div class="glow-ring"></div>
    <div class="signal-grid">
      <span></span><span></span><span></span><span></span>
      <span></span><span></span><span></span><span></span>
      <span></span><span></span><span></span><span></span>
      <span></span><span></span><span></span><span></span>
    </div>
    <div class="floating-badge">
      <p>Radiology meets AI</p>
      <p class="badge-highlight">Built for impact</p>
    </div>
  </div>
</div>

{% include section.html %}

<div class="value-grid">
  <div class="value-card">
    <p class="value-title">Implementation excellence</p>
    <p class="value-copy">
      We translate cutting-edge AI technologies into tools that enhance radiology workflows, support clinician
      decision-making, and improve patient experiences.
    </p>
  </div>
  <div class="value-card">
    <p class="value-title">Interdisciplinary collaboration</p>
    <p class="value-copy">
      Our team unites radiologists, computer scientists, trainees, and engineers to tackle usability, trust, fairness,
      and regulatory compliance together.
    </p>
  </div>
  <div class="value-card">
    <p class="value-title">Patient-first design</p>
    <p class="value-copy">
      We design patient-friendly AI tools and educational resources that promote transparency, engagement, and equitable
      outcomes.
    </p>
  </div>
</div>

## Highlights

{% capture text %}

Explore how RAIL’s research is pushing the boundaries of artificial intelligence to improve medical imaging, diagnosis, and patient outcomes.

{%
  include button.html
  link="research"
  text="See our publications"
  icon="fa-solid fa-arrow-right"
  flip=true
  style="bare"
%}

{% endcapture %}

{%
  include feature.html
  image="images/researchStock.jpg"
  link="research"
  title="Our Research"
  text=text
%}

{% capture text %}

Discover how RAIL at the University of Pennsylvania is transforming medical imaging through innovative AI-powered projects.
{%
  include button.html
  link="projects"
  text="Browse our projects"
  icon="fa-solid fa-arrow-right"
  flip=true
  style="bare"
%}

{% endcapture %}

{%
  include feature.html
  image="images/projectStock.jpeg"
  link="projects"
  title="Our Projects"
  flip=true
  style="bare"
  text=text
%}

{% capture text %}

Meet the team behind RAIL’s cutting-edge research and projects.

{%
  include button.html
  link="team"
  text="Meet our team"
  icon="fa-solid fa-arrow-right"
  flip=true
  style="bare"
%}

{% endcapture %}

{%
  include feature.html
  image="images/teamStock.jpg"
  link="team"
  title="Our Team"
  text=text
%}
