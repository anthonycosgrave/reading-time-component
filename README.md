# Reading time

A small web component that estimates reading time from the text in an element
identified by its `for` attribute.

```
<h1>This Is Amazing Content</h1>
<reading-time for="post-content"></reading-time>
...
<div id="post-content">
  <p>The amazing content goes here.</p>
</div>

<script src="./reading-time.js"></script>
```

The estimate uses 265 words per minute, rounds to the nearest whole minute,
and displays nothing if the target has no text. Medium documents its rate as
roughly 265 words per minute in its [read-time guidance](https://help.medium.com/hc/en-us/articles/214991667-Read-time).

The component adds no styles. Style `<reading-time>` with your own CSS.

```
 reading-time {
    font-size: 0.875rem;
    font-style: italic;
}
```