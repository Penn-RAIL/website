---
title: Research
nav:
  order: 1
  tooltip: Published works
---

<div class="page-hero shell">
  <div class="hero-content">
    <p class="eyebrow">Penn Radiology · Research</p>
    <h1 class="reveal">Evidence that strengthens clinical AI</h1>
    <p class="lead reveal" data-delay="1">
      Our scholarship spans clinical validation, fairness, interpretability, and implementation science. We publish to share what
      works, what does not, and how to responsibly bring AI into radiology practice across Penn Medicine.
    </p>
    <div class="hero-actions">
      {% include button.html link="contact" text="Partner on a study" icon="fa-solid fa-handshake" %}
      {% include button.html link="projects" text="See related projects" icon="fa-solid fa-diagram-project" style="bare" %}
    </div>
  </div>
  <div class="hero-panel">
    <h3>Focus areas</h3>
    <p>We prioritize rigorous, patient-first evidence that is reproducible and transparent.</p>
    <div class="badge-list">
      <span><i class="fa-solid fa-microscope"></i> Clinical validation</span>
      <span><i class="fa-solid fa-scale-balanced"></i> Fairness</span>
      <span><i class="fa-solid fa-eye"></i> Interpretability</span>
      <span><i class="fa-solid fa-shield-heart"></i> Safety</span>
    </div>
  </div>
</div>

{% include section.html %}

<div class="shell">
  <div class="card-stack">
    <div class="card-tile reveal">
      <h3>Highlighted scholarship</h3>
      <p>Spotlighting work that shapes how we evaluate and deliver AI in radiology.</p>
      {% include citation.html lookup="Beyond Proprietary Models: The Potential of Open-Source Large Language Models in Radiology." style="rich" %}
    </div>
    <div class="card-tile reveal" data-delay="1">
      <h3>Reproducible by design</h3>
      <p>Datasets, benchmarks, and code released to accelerate trustworthy imaging AI for everyone.</p>
      <div class="note-grid">
        <div class="note">Transparent reporting aligned with Penn Medicine standards.</div>
        <div class="note">Human factors research that centers clinicians and patients.</div>
      </div>
    </div>
  </div>
</div>

{% include section.html %}

## All research

{% include search-box.html %}
{% include search-info.html %}
{% include list.html data="citations" component="citation" style="rich" %}
