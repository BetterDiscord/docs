---
eleventyNavigation:
  key: AddonAPI
  order: 3
---

# AddonAPI

`AddonAPI` is a utility class for working with plugins and themes. Instances are accessible through the [BdApi](./bdapi).

## Properties

{% for property in addonapi.properties | sort(false, false, "name") %}
{% apiProperty property %}
{% endfor %}


## Methods

{% for method in addonapi.methods | sort(false, false, "name") %}
{% apiMethod method %}
{% endfor %}