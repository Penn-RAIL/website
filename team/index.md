---
title: Team
nav:
  order: 3
  tooltip: About our team
---

<div class="page-title shell">
  <h1>Our Team</h1>
  <p>Faculty, engineers, trainees, and collaborators shaping the future of radiology AI.</p>
</div>

{% include section.html %}

{% include list.html data="members" component="portrait" filter="role != 'research assistant'" %}
{% include section.html %}
{% include list.html data="members" component="portrait" filter="role == 'research assistant'" %}
