---
title: Colors
layout: docs
---
{% block head %}
<meta name="custom" value="hello">
{% endblock %}

### Main

<div class="card mb-3">
  <div class="container-fluid card-body">
    <div class="row row-cols-md-3 row-cols-sm-2 row-cols-1">
      <div class="col mb-3">
        <h5 class="mx-2">Colors</h5>
        {% ColorPalette "#0d84c7", "Primary - Harbor" %}
        {% ColorPalette "#085681", "Primary Variant" %}
        {% ColorPalette "#bf4097", "Secondary - Orchid" %}
        {% ColorPalette "#7c2a62", "Secondary Variant" %}
        {% ColorPalette "#ffffff", "Background" %}
        {% ColorPalette "#ffffff", "Surface" %}
      </div>
      <div class="col mb-3">
        <h5 class="mx-2">Text</h5>
        {% ColorPalette "#ffffff", "On Primary" %}
        {% ColorPalette "#bf4097", "On Info Box" %}
        {% ColorPalette "#262626", "On Secondary" %}
        {% ColorPalette "#262626", "On Background" %}
        {% ColorPalette "#262626", "On Surface" %}
        {% ColorPalette "#ffffff", "On Error" %}
      </div>
      <div class="col mb-3">
        <h5 class="mx-2">Info Boxes</h5>
        {% ColorPalette "#17a2b8", "Info" %}
        {% ColorPalette "#f4e8f2", "Info Box" %}
        {% ColorPalette "#28a745", "Success" %}
        {% ColorPalette "#ffc107", "Warning" %}
        {% ColorPalette "#dc3545", "Danger" %}
      </div>
    </div>
  </div>
</div>

### Palette

<div class="card mb-3">
  <div class="container-fluid card-body">
    <div class="row row-cols-md-3 row-cols-sm-2 row-cols-1">
      <div class="col mb-3">
        <h5 class="mx-2">Primary</h5>
        {% ColorPalette "#0d84c7", "gcls-harbor 100" %}
        {% ColorPalette "#5aa5db", "gcls-harbor 75" %}
        {% ColorPalette "#91bee6", "gcls-harbor 50" %}
        {% ColorPalette "#c6daf1", "gcls-harbor 25" %}
        {% ColorPalette "#e6eef8", "gcls-harbor 10" %}
      </div>
      <div class="col mb-3">
        <h5 class="mx-2">Secondary</h5>
        {% ColorPalette "#bf4097", "gcls-orchid 100" %}
        {% ColorPalette "#cb72ae", "gcls-orchid 75" %}
        {% ColorPalette "#d89dc6", "gcls-orchid 50" %}
        {% ColorPalette "#e9cbe2", "gcls-orchid 25" %}
        {% ColorPalette "#f4e8f2", "gcls-orchid 10" %}
      </div>
      <div class="col mb-3">
        <h5 class="mx-2">Accent 1</h5>
        {% ColorPalette "#42c4dd", "gcls-pool 100" %}
        {% ColorPalette "#7cd0e4", "gcls-pool 75" %}
        {% ColorPalette "#a9deeb", "gcls-pool 50" %}
        {% ColorPalette "#d3eef4", "gcls-pool 25" %}
        {% ColorPalette "#ecf7f9", "gcls-pool 10" %}
      </div>
      <div class="col mb-3">
        <h5 class="mx-2">Accent 2</h5>
        {% ColorPalette "#fbaf45", "gcls-tangerine 100" %}
        {% ColorPalette "#fdc174", "gcls-tangerine 75" %}
        {% ColorPalette "#ffd49d", "gcls-tangerine 50" %}
        {% ColorPalette "#ffe8ca", "gcls-tangerine 25" %}
        {% ColorPalette "#fff4e7", "gcls-tangerine 10" %}
      </div>
      <div class="col mb-3">
        <h5 class="mx-2">Accent 3</h5>
        {% ColorPalette "#c0d730", "gcls-lime 100" %}
        {% ColorPalette "#cfdf69", "gcls-lime 75" %}
        {% ColorPalette "#dee89b", "gcls-lime 50" %}
        {% ColorPalette "#edf3cb", "gcls-lime 25" %}
        {% ColorPalette "#f6f9e8", "gcls-lime 10" %}
      </div>
      <div class="col mb-3">
        <h5 class="mx-2">Accent 4</h5>
        {% ColorPalette "#4d4c68", "gcls-admiral 100" %}
        {% ColorPalette "#6e6e88", "gcls-admiral 75" %}
        {% ColorPalette "#9595ab", "gcls-admiral 50" %}
        {% ColorPalette "#c2c2d1", "gcls-admiral 25" %}
        {% ColorPalette "#e2e1e9", "gcls-admiral 10" %}
      </div>
    </div>
  </div>
</div>

### Other Palettes

<div class="card mb-3">
  <div class="container-fluid card-body">
    <div class="row row-cols-md-3 row-cols-sm-2 row-cols-1">
      <div class="col mb-3">
        <h5 class="mx-2">Kindergarten Readiness</h5>
        {% ColorPalette "#eb5f24", "Orange Text" %}
        {% ColorPalette "#ee2d24", "Red" %}
        {% ColorPalette "#fdb931", "Yellow" %}
        {% ColorPalette "#74c044", "Green" %}
        {% ColorPalette "#2fc0d2", "Blue" %}
      </div>
      <div class="col mb-3">
        <h5 class="mx-2">Seed Library</h5>
        {% ColorPalette "#837ab9", "Purple Text/Border" %}
        {% ColorPalette "#dddbec", "Purple Background" %}
        {% ColorPalette "#a7bc24", "Yellow-Green" %}
      </div>
      <div class="col mb-3">
        <h5 class="mx-2">Calendar</h5>
        {% ColorPalette "#bf4097", "Kids - Orchid" %}
        {% ColorPalette "#fbaf45", "Teens - Tangerine" %}
        {% ColorPalette "#0d84c7", "Adults - Harbor" %}
        {% ColorPalette "#4d4d4d", "Closed - Gray" %}
      </div>
    </div>
  </div>
</div>