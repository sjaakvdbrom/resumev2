---
title: test
---

# But First, Why Does Tailwind CSS Exist?

Before we discuss the problems with Tailwind CSS, it’s worth looking at why the framework was created in the first place and the problems that it’s trying to solve. This is mostly covered in Adam Wathan’s article linked above, which I highly recommend that you read even if you don’t like Tailwind. I already mentioned some of the motivations behind Tailwind, but I’ll recap them here.

One of the arguments that people in favor of Tailwind usually make is that the “semantic CSS” approach is flawed because your well-named CSS classes give a false sense of order and reason, when in reality there’s a good deal of complex (and repeated) logic in your CSS. It’s also difficult to come up with consistent standards for spacing, colors, and other design guidelines, and this can lead to bloated CSS and inconsistently styled UIs. Tailwind aims to solve these problems.

This is one of the arguments that Adam uses in his article. He notes that with the semantic CSS approach, there’s this inherent coupling of HTML to CSS, where either your HTML classes dictate your CSS or vice versa. And thus, the whole “separation of concerns” principle falls apart because your HTML and CSS depend on each other.

> I had “separated my concerns”, but there was still a very obvious coupling between my CSS and my HTML. Most of the time my CSS was like a mirror for my markup; perfectly reflecting my HTML structure with nested CSS selectors.
>
> My markup wasn’t concerned with styling decisions, but my CSS was very concerned with my markup structure.
>
> Maybe my concerns weren’t so separated after all.

In principle, this makes sense. But as we’ll see, Tailwind doesn’t actually solve this problem of “separation of concerns.” And it actually introduces several other problems.

## Why Tailwind Isn’t Worth Your Time

With that out of the way, let’s look at some of the reasons why I don’t like Tailwind CSS.

### 1. Tailwind Makes Your Code Difficult to Read

Other people who don’t like Tailwind tend to start off by arguing that it makes your HTML look noisy and disgusting, and I’ll do the same. Honestly, it’s a valid argument if you care at all about your developer experience. Tailwind makes your markup difficult to read for several reasons that I’d like to explore here.

### You Need to Learn a New Way of Writing CSS

First, like Bootstrap, Tailwind uses awkward abbreviations for its class names. This means that you have to first learn Tailwind’s specific syntax before you can fluently string its utility classes together to create familiar UIs. So when you’re first starting out with Tailwind, things will actually be slow, and you’ll find yourself frequently referencing the documentation to find the right classes to use. The initial promise of rapid prototyping is quite a ways off until you become familiar with the framework.

### It’s Inconsistent

That sounds like a fairly easy task for anyone who’s ever had to pick up a new language or tool, but Tailwind is inconsistent with some of its naming conventions. For example, with Flexbox, Tailwind’s justify-_ classes correspond to justify-content in CSS. Naturally, one would think that align-_ classes would correspond to align-items. But they actually correspond to a little-used align-content property. This gets confusing because CSS also happens to have properties named justify-items and align-content. This means that, at a glance, you can’t actually tell what any of these shorthand class names map to:

- `items-*`: align or justify?
- `content-*`: align or justify?
- `justify-*`: content or items?
- `align-*`: content or items?

This segues nicely into a related point.

### It’s Difficult to Read

Poor naming conventions (or just poor variable names in general) are the source of a lot of confusion when other people read your code. I would rather look at some CSS that has padding: 0.25rem or margin: 0.5rem instead of trying to mentally map Tailwind’s p-1 or m-2 to their CSS equivalents. Vanilla CSS, and CSS preprocessors like SCSS or LESS, do not impose much of a mental burden when you read them. Tailwind gets even worse with media queries—which, as you may have guessed, come in the form of prefixed class names:

```html
<div class="w-16 h-16 md:w-32 md:h-32 lg:w-48 lg:h-48"></div>
```

Another reason why Tailwind is so hard to read is because it requires you to pan your eyes horizontally rather than vertically. You know how designers recommend that you keep your copy centered on the page, somewhere around 60 characters, to make it easier for people to read? That’s because the wider your text is, the more difficult it is for a reader’s eyes to jump to the next line, and the more difficult it is to find that one particular word you’re looking for in a wall of horizontal text. Yet this is the very thing that Tailwind forces you to do. When you string a bunch of class names together, you get markup that looks like this:

```html
<div
  class="w-16 h-16 rounded text-white bg-black py-1 px-2 m-1 text-sm md:w-32 md:h-32 md:rounded-md md:text-base lg:w-48 lg:h-48 lg:rounded-lg lg:text-lg"
>
  Yikes.
</div>
```

Unfortunately, ESLint/Prettier won’t even properly format your classes or push them onto a new line—they’ll just push the className prop down, but the string itself could go on forever. This may force you to scroll your editor horizontally to view the full list of classes. Tailwind’s own documentation suffers from this very problem—many code blocks overflow horizontally and force you to scroll to find the relevant class in a sea of strings

You could turn on word wrapping in your editor, which would solve the problem of having to scroll horizontally to see all of the class names, but you would still need to parse and understand these giant strings. By comparison, vanilla CSS is much easier to parse—you only have to scan your code vertically, so it’s easier to search for a particular property: value pair. Plus, you get proper syntax highlighting, which clearly separates your properties from the values and makes things easier to read. With Tailwind, all your classes use your editor’s color for strings. There are no properties or values because they’ve been stuffed into the class names themselves.

Here’s the raw CSS equivalent of the Tailwind code sample I showed earlier:

```css
.thing {
  width: 16px;
  height: 16px;
  color: white;
  background-color: black;
  padding: 0.25rem 0.5rem;
  margin: 0.25rem;
  border-radius: 0.25rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
}

@media screen and (min-width: 768px) {
  .thing {
    width: 32px;
    height: 32px;
    border-radius: 0.375rem;
    font-size: 1rem;
    line-height: 1.5rem;
  }
}

@media screen and (min-width: 1024px) {
  .thing {
    width: 48px;
    height: 48px;
    border-radius: 0.5rem;
    font-size: 1.125rem;
    line-height: 1.75rem;
  }
}
```
