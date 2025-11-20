---
title: Contact
nav:
  order: 5
  tooltip: Email, address, and location
---

<div class="page-hero shell">
  <div class="hero-content">
    <p class="eyebrow">Connect with RAIL</p>
    <h1 class="reveal">We'd love to collaborate</h1>
    <p class="lead reveal" data-delay="1">
      Reach out to explore research partnerships, clinical pilots, or educational programming. RAIL is based in the Department
      of Radiology at the Perelman School of Medicine, University of Pennsylvania.
    </p>
    <div class="hero-actions">
      {% include button.html type="email" text="satvik.tripathi@pennmedicine.upenn.edu" link="satvik.tripathi@pennmedicine.upenn.edu" %}
      {% include button.html link="https://www.google.com/maps/place/Perelman+School+of+Medicine+at+the+University+of+Pennsylvania/@39.9476279,-75.1951729,16z" text="Find us on maps" icon="fa-solid fa-location-dot" style="bare" %}
    </div>
  </div>
  <div class="hero-panel">
    <h3>Response promise</h3>
    <p>We respond to collaboration requests within a few business days.</p>
    <div class="badge-list">
      <span><i class="fa-solid fa-users"></i> Partnerships</span>
      <span><i class="fa-solid fa-graduation-cap"></i> Education</span>
      <span><i class="fa-solid fa-stethoscope"></i> Clinical pilots</span>
    </div>
  </div>
</div>

{% include section.html %}

<div class="shell">
  <div class="contact-grid">
    <div class="contact-card reveal">
      <h3>Email the team</h3>
      <p>satvik.tripathi@pennmedicine.upenn.edu</p>
      {% include button.html type="email" text="Send an email" link="satvik.tripathi@pennmedicine.upenn.edu" style="bare" %}
    </div>
    <div class="contact-card reveal" data-delay="1">
      <h3>Visit us</h3>
      <p>Perelman School of Medicine<br>University of Pennsylvania<br>3400 Civic Center Blvd</p>
      {% include button.html type="address" text="Open in Google Maps" link="https://www.google.com/maps/place/Perelman+School+of+Medicine+at+the+University+of+Pennsylvania/@39.9476279,-75.1951729,16z" style="bare" %}
    </div>
    <div class="contact-card reveal" data-delay="2">
      <h3>Stay connected</h3>
      <p>Follow RAIL highlights and publications.</p>
      {% include button.html link="socials" text="View socials" icon="fa-solid fa-images" style="bare" %}
    </div>
  </div>
</div>

{% include section.html %}

## Send us a Message

{% include contact_form.html %}
