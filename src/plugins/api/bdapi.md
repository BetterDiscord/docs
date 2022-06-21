---
eleventyNavigation:
  key: BdApi
  order: 1
---

# BdApi

`BdApi` is a globally (`window.BdApi`) accessible object for use by plugins and developers to make their lives easier.

## Properties

{% for property in bdapi.properties %}
### {{property.name}}
{{property.description | safe}}

**Type:** `{{property.type}}`
___
{% endfor %}


## Methods

{% for method in bdapi.methods %}
### {{method.name}}{% if method.deprecated %} <span class="deprecated">Deprecated</span>{% endif %}
{{method.description | safe}}

{% if method.parameters %}

{% set parameterString = "" %}
{% for parameter in method.parameters %}
  {% set parameterString = parameterString + "|" + parameter.name %}
  {% set parameterString = parameterString + "|" + parameter.type | replace("|", "\\|") %}
  {% if parameter.optional %}
    {% set parameterString = parameterString + "|&#x2705;" %}
  {% else %}
    {% set parameterString = parameterString + "|&#x274C;" %}
  {% endif %}
  {% if parameter.default %}
    {% set parameterString = parameterString + "|" + parameter.value %}
  {% else %}
    {% set parameterString = parameterString + "|*none*" %}
  {% endif %}
  {% set parameterString = parameterString + "|" + parameter.description %}
  {% set parameterString = parameterString + "|\r\n" %}
{% endfor %}

| Parameter |  Type  | Optional | Default |       Description      |
|:---------:|:------:|:--------:|:-------:|:----------------------:|
{{parameterString | safe}}
{% endif %}

**Returns:** `{% if method.returns %}{{method.returns}}{% else %}void{% endif %}`
___
{% endfor %}