---
eleventyNavigation:
  key: Patcher
  order: 2
---

# Patcher

`Patcher` is a utility class for modifying existing functions. Instances are accessible through the [BdApi](./bdapi). This is extremely useful for modifying the internals of Discord by adjusting return value or React renders, or arguments of internal functions.

## Properties

{% for property in patcher.properties | sort(false, false, "name") %}
{% apiProperty property %}
{% endfor %}


## Methods

{% for method in patcher.methods | sort(false, false, "name") %}
{% apiMethod method %}
{% endfor %}

