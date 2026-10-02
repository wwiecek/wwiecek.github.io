---
title: Blog
layout: site-page
icon: fas fa-pen-nib
order: 1
redirect_from:
  - /archives/
---
<ul class="blog-list">
  {% for post in site.posts %}
    <li>
      <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: '%-d %B %Y' }}</time>
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      {% if post.description %}<p>{{ post.description }}</p>{% endif %}
    </li>
  {% endfor %}
</ul>
