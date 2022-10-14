---
title: Buttons
layout: docs
eleventyNavigation:
  key: Buttons
---

<div class="card">
  <div class="card-body">
    <button type="button" class="btn btn-primary">Primary</button>
    <button type="button" class="btn btn-secondary">Secondary</button>
    <button type="button" class="btn btn-success">Success</button>
    <button type="button" class="btn btn-danger">Danger</button>
    <button type="button" class="btn btn-warning">Warning</button>
    <button type="button" class="btn btn-info">Info</button>
    <button type="button" class="btn btn-light">Light</button>
    <button type="button" class="btn btn-dark">Dark</button>
    <button type="button" class="btn btn-link">Link</button>
  </div>
</div>

```html
<button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-secondary">Secondary</button>
<button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-danger">Danger</button>
<button type="button" class="btn btn-warning">Warning</button>
<button type="button" class="btn btn-info">Info</button>
<button type="button" class="btn btn-light">Light</button>
<button type="button" class="btn btn-dark">Dark</button>
<button type="button" class="btn btn-link">Link</button>
```

## Outlined Buttons 

<div class="card">
  <div class="card-body">
    <button type="button" class="btn btn-outline-primary">Primary</button>
    <button type="button" class="btn btn-outline-secondary">Secondary</button>
    <button type="button" class="btn btn-outline-success">Success</button>
    <button type="button" class="btn btn-outline-danger">Danger</button>
    <button type="button" class="btn btn-outline-warning">Warning</button>
    <button type="button" class="btn btn-outline-info">Info</button>
    <button type="button" class="btn btn-outline-light">Light</button>
    <button type="button" class="btn btn-outline-dark">Dark</button>
  </div>
</div>

```html
<button type="button" class="btn btn-outline-primary">Primary</button>
<button type="button" class="btn btn-outline-secondary">Secondary</button>
<button type="button" class="btn btn-outline-success">Success</button>
<button type="button" class="btn btn-outline-danger">Danger</button>
<button type="button" class="btn btn-outline-warning">Warning</button>
<button type="button" class="btn btn-outline-info">Info</button>
<button type="button" class="btn btn-outline-light">Light</button>
<button type="button" class="btn btn-outline-dark">Dark</button>
```

## Buttons with Margin

In many (but not all) cases, buttons will need a margin.  To add a default margin, use the `gcls-btn--margin` css class.

<div class="card">
  <div class="card-body">
    <button type="button" class="btn btn-primary gcls-btn gcls-btn--margin">Primary</button>
    <button type="button" class="btn btn-primary  gcls-btn gcls-btn--margin">Primary</button>
  </div>
</div>

```html
<button type="button" class="btn btn-primary gcls-btn gcls-btn--margin">Primary</button>
<button type="button" class="btn btn-primary  gcls-btn gcls-btn--margin">Primary</button>
```
<div class="card">
  <div class="card-body">
    <button type="button" class="btn gcls-btn--text btn-outline-primary">Primary</button>
    <button type="button" class="btn gcls-btn--text btn-outline-secondary">Secondary</button>
    <button type="button" class="btn gcls-btn--text btn-outline-success">Success</button>
    <button type="button" class="btn gcls-btn--text btn-outline-danger">Danger</button>
    <button type="button" class="btn gcls-btn--text btn-outline-warning">Warning</button>
    <button type="button" class="btn gcls-btn--text btn-outline-info">Info</button>
    <button type="button" class="btn gcls-btn--text btn-outline-light">Light</button>
    <button type="button" class="btn gcls-btn--text btn-outline-dark">Dark</button>
  </div>
</div>

<div class="card">
  <div class="card-body">
    <button type="button" class="gcls-btn">Primary</button>
    <button type="button" class="gcls-btn" disabled>disabled</button>
  </div>
</div>