---
title: Social
nav:
  order: 6
  tooltip: Social Images
---

<div class="page-hero shell">
  <div class="hero-content">
    <p class="eyebrow">Penn Radiology · Community</p>
    <h1 class="reveal">Moments from the RAIL team</h1>
    <p class="lead reveal" data-delay="1">Explore photos from talks, milestones, and gatherings across Penn Medicine.</p>
    <div class="hero-actions">
      {% include button.html link="contact" text="Invite us to speak" icon="fa-solid fa-microphone" %}
    </div>
  </div>
  <div class="hero-panel">
    <h3>Highlights</h3>
    <ul>
      <li>Conference presentations and awards.</li>
      <li>Team celebrations and community events.</li>
      <li>Teaching moments with residents and students.</li>
    </ul>
  </div>
</div>

{% include section.html %}

<div class="shell">
  <div class="media-gallery">
    <figure class="reveal">
      {% assign img_src = '/images/rsna2024.jpg' | relative_url %}
      {% assign caption = "RAIL Team at RSNA 2024" %}
      <a href="{{ img_src }}" data-lightbox="social-gallery" data-title="{{ caption }}">
        <img src="{{ img_src }}" alt="{{ caption }}">
      </a>
      <figcaption>{{ caption }}</figcaption>
    </figure>

    <figure class="reveal" data-delay="1">
      {% assign img_src = '/images/1746393440894.jpeg' | relative_url %}
      {% assign caption = "Awarded the prestigious Fellow of the American College of Radiology (FACR) title, Dr. Cook joins the 2025 class of inductees" %}
      <a href="{{ img_src }}" data-lightbox="social-gallery" data-title="{{ caption }}">
        <img src="{{ img_src }}" alt="{{ caption }}">
      </a>
      <figcaption>{{ caption }}</figcaption>
    </figure>

    <figure class="reveal" data-delay="2">
      {% assign img_src = '/images/1746395774641.jpeg' | relative_url %}
      {% assign caption = "Dr. Cook receiving the prestigious Fellow of the American College of Radiology (FACR) title" %}
      <a href="{{ img_src }}" data-lightbox="social-gallery" data-title="{{ caption }}">
        <img src="{{ img_src }}" alt="{{ caption }}">
      </a>
      <figcaption>{{ caption }}</figcaption>
    </figure>
  </div>
</div>
