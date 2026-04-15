---
title: Social
nav:
  order: 6
  tooltip: Social Images
---

<div class="page-title shell">
  <h1>Social</h1>
  <p>Moments from talks, milestones, and gatherings across Penn Medicine.</p>
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

    <figure class="reveal" data-delay="3">
      {% assign img_src = '/images/PMSR1.jpg' | relative_url %}                                                                 
      {% assign caption = "RAIL Presentation at the Penn Medical Research Symposium 2025" %}                                               
      <a href="{{ img_src }}" data-lightbox="social-gallery" data-title="{{ caption }}">                                        
        <img src="{{ img_src }}" alt="{{ caption }}">
      </a>                                                                                                                      
      <figcaption>{{ caption }}</figcaption>                                                                                  
    </figure>

    <figure class="reveal" data-delay="4">
      {% assign img1 = '/images/RSNA1.png' | relative_url %}
      {% assign img2 = '/images/RSNA2.jpg' | relative_url %}                                                                    
      {% assign img3 = '/images/RSNA3.jpg' | relative_url %}
      {% assign caption = "RAIL Team at RSNA 2025" %}                                                                           
      <a href="{{ img1 }}" data-lightbox="rsna2025" data-title="{{ caption }}">                                               
        <img src="{{ img1 }}" alt="{{ caption }}">                                                                              
      </a>                                                                                                                      
      <a href="{{ img2 }}" data-lightbox="rsna2025" data-title="{{ caption }}" style="display:none"></a>
      <a href="{{ img3 }}" data-lightbox="rsna2025" data-title="{{ caption }}" style="display:none"></a>                        
      <figcaption>{{ caption }}</figcaption>                                                                                    
    </figure>

    <figure class="reveal" data-delay="5">                                                                                                    
      {% assign img1 = '/images/PSPS1.jpg' | relative_url %}                                                                    
      {% assign img2 = '/images/PSPS2.jpg' | relative_url %}                                                                  
      {% assign caption = "RAIL Team at the Penn Science Policy Symposium 2026" %}                                                   
      <a href="{{ img1 }}" data-lightbox="psps2026" data-title="{{ caption }}">
        <img src="{{ img1 }}" alt="{{ caption }}">                                                                              
      </a>                                                                                                                      
      <a href="{{ img2 }}" data-lightbox="psps2026" data-title="{{ caption }}" style="display:none"></a>
      <figcaption>{{ caption }}</figcaption>                                                                                    
    </figure> 

    <figure class="reveal" data-delay="6">                                                                                                       
    {% assign img_src = '/images/AAR2026.jpg' | relative_url %}                                                                 
    {% assign caption = "RAIL presentation at AAR 2026" %}
    <a href="{{ img_src }}" data-lightbox="social-gallery" data-title="{{ caption }}">                                          
      <img src="{{ img_src }}" alt="{{ caption }}">                                                                             
    </a>                                                                                                                        
    <figcaption>{{ caption }}</figcaption>                                                                                      
  </figure> 
  </div>
</div>
