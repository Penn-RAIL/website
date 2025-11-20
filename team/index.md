---
title: Team
nav:
  order: 3
  tooltip: About our team
---

<div class="page-hero">
  <div class="hero-content">
    <p class="eyebrow">Penn Radiology · Team</p>
    <h1>People shaping the future of radiology AI</h1>
    <p class="lead">
      RAIL brings together faculty, engineers, trainees, and collaborators from across Penn Medicine. We balance clinical depth
      with technical rigor to deliver tools that clinicians trust and patients feel good about.
    </p>
  </div>
  <div class="hero-panel">
    <h3>How we work</h3>
    <ul>
      <li>Co-production with radiologists, technologists, and IT partners.</li>
      <li>Mentorship for students, residents, and fellows exploring AI.</li>
      <li>Inclusive culture centered on learning and shared wins.</li>
    </ul>
  </div>
</div>

{% include section.html %}

<div class="card-stack">
  <div class="card-tile">
    <h3>Faculty leadership</h3>
    <p>Guiding strategy, governance, and mentorship across clinical and technical teams.</p>
  </div>
  <div class="card-tile">
    <h3>Engineering &amp; data science</h3>
    <p>Building, validating, and hardening AI solutions for real-world imaging workflows.</p>
  </div>
  <div class="card-tile">
    <h3>Trainees &amp; collaborators</h3>
    <p>Students, residents, and partners who expand our research and implementation capacity.</p>
  </div>
</div>

{% include section.html %}

{% include list.html data="members" component="portrait" filter="role != 'research assistant'" %}
{% include section.html %}
{% include list.html data="members" component="portrait" filter="role == 'research assistant'" %}
