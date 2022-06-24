---
eleventyNavigation:
  key: BdApi
  order: 1
---

# BdApi

`BdApi` is a globally (`window.BdApi`) accessible object for use by plugins and developers to make their lives easier.

## Properties

{% for property in bdapi.properties | sort(false, false, "name") %}
{% apiProperty property %}
{% endfor %}


## Methods

{% for method in bdapi.methods | sort(false, false, "name") %}
{% apiMethod method %}
{% endfor %}