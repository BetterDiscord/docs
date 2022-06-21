---
eleventyNavigation:
  key: general
  order: 1
  title: General
---
{% set navPages = collections.all | eleventyNavigation(navigationKey) %}

{% for entry in navPages %}
<h2>{{entry.title}}</h2>
<ul>
{% for subentry in entry.children %}
    <li><a href="{{subentry.url | url}}">{{subentry.title}}</a></li>
{% endfor %}
</ul>
{% endfor %}