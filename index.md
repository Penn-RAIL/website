---
title: Home
description: Official site of RAIL (Radiology AI Implementation Lab) at the Perelman School of Medicine—clinical radiology AI research, Penn Medicine projects, publications, and team.
---

<div class="page-hero home-hero shell">
  <span class="accent-orb"></span>
  <span class="accent-orb" data-blue></span>
  <div class="hero-content">
    <p class="eyebrow">Radiology AI Implementation Lab · Penn Medicine</p>
    <h1 class="reveal">Advancing trustworthy clinical AI from Penn Radiology</h1>
    <p class="lead reveal" data-delay="1">
      RAIL translates rigorously validated algorithms into workflows that fit how clinicians care for patients. We design,
      evaluate, and deploy AI that is transparent, equitable, and centered on real-world radiology needs.
    </p>
    <div class="hero-actions">
      {% include button.html link="projects" text="Explore active builds" icon="fa-solid fa-diagram-project" %}
      {% include button.html link="research" text="Read our latest research" icon="fa-solid fa-book-open" style="bare" %}
    </div>
    <div class="hero-meta">
      <div class="stat-card" style="animation-delay: 0.05s;">
        <strong>Implementation science</strong>
        Production-minded validation, monitoring, and workflow fit for every tool we ship.
      </div>
      <div class="stat-card" style="animation-delay: 0.15s;">
        <strong>Clinician partnership</strong>
        Close collaboration with radiologists, technologists, and trainees across Penn Medicine.
      </div>
      <div class="stat-card" style="animation-delay: 0.25s;">
        <strong>Equity &amp; safety</strong>
        Built-in guardrails, bias review, and education to keep patients at the center.
      </div>
    </div>
  </div>
  <div class="hero-panel">
    <h3>Built on UPenn values</h3>
    <p>We pair research excellence with operational discipline to launch AI that clinicians trust.</p>
    <div class="signal-bar" aria-hidden="true">
      <span></span><span></span><span></span><span></span><span></span><span></span>
    </div>
    <ul>
      <li>Co-design with clinical teams for adoption and safety.</li>
      <li>Transparent documentation and open communication.</li>
      <li>Human-first experiences that respect patient dignity.</li>
    </ul>
  </div>
</div>

<div class="shell seo-intro">
  <p class="lead">
    The <strong>Radiology AI Implementation Lab</strong> (RAIL) advances radiology AI at the
    <strong>University of Pennsylvania</strong>. Explore our
    <a href="{{ '/research/' | relative_url }}">research and publications</a>,
    <a href="{{ '/projects/' | relative_url }}">clinical AI projects</a>,
    <a href="{{ '/team/' | relative_url }}">team</a>, and
    <a href="{{ '/contact/' | relative_url }}">contact</a> the lab.
  </p>
</div>

{% include section.html %}

<div class="shell">
  <div class="section-heading">
    <h2>Impact in motion</h2>
    <p class="section-note">See how our team pairs science, engineering, and human factors.</p>
  </div>
  <div class="highlight-tiles">
    <div class="highlight-tile reveal">
      <h3>Research that informs practice</h3>
      <p>Explainability, fairness, and calibration studies guide how we steward AI responsibly.</p>
      <p class="tagline">Explore publications and talks</p>
      <div class="image-chip">
        <img src="{{ 'images/researchStock.jpg' | relative_url }}" alt="Researchers reviewing radiology AI outputs">
      </div>
    </div>
    <div class="highlight-tile reveal" data-delay="1">
      <h3>Products clinicians adopt</h3>
      <p>We build decision support, triage, and education tools that plug into Penn Medicine workflows.</p>
      <p class="tagline">View our active projects</p>
      <div class="image-chip">
        <img src="{{ 'images/projectStock.jpeg' | relative_url }}" alt="Radiology imaging dashboard">
      </div>
    </div>
    <div class="highlight-tile reveal" data-delay="2">
      <h3>People who lead the field</h3>
      <p>Multidisciplinary faculty, trainees, and engineers teaching and mentoring across the system.</p>
      <p class="tagline">Meet the RAIL team</p>
      <div class="image-chip">
        <img src="{{ 'images/teamStock.jpg' | relative_url }}" alt="Team collaborating in a meeting room">
      </div>
    </div>
  </div>

  <div class="equity-band">
    <div class="equity-card">
      <h4>Education &amp; outreach</h4>
      <p>Hands-on training for radiologists and residents on AI literacy, risks, and use.</p>
    </div>
    <div class="equity-card">
      <h4>Monitoring in production</h4>
      <p>Performance drift, bias checks, and uptime reviews keep patients and clinicians protected.</p>
    </div>
    <div class="equity-card">
      <h4>Partnerships that scale</h4>
      <p>We collaborate with Penn Medicine IT, compliance, and quality teams to deploy responsibly.</p>
    </div>
  </div>
</div>
