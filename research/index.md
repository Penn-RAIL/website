---
title: Research
nav:
  order: 1
  tooltip: Published works
---

<div class="page-title shell">
  <h1>Research</h1>
  <p>Our scholarship spans clinical validation, fairness, interpretability, and implementation science.</p>
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
