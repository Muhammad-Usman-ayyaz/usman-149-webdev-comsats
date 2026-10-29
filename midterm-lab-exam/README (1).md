# CSC336 Lab Mid Term - Upgrade Your E-commerce Navigation, Checkout and Cart

Name: Muhammad Usman
Roll number: FA24-BCS-149

N = 49
BP = 600 + 49 = 649px
H = (49 x 7) mod 360 = 343, accent colour hsl(343, 70%, 45%)
K = (49 mod 3) + 3 = 4
Max adds per product = (49 mod 4) + 2 = 3
Delivery date: min 2026-10-29 (exam date), max 2026-12-17 (exam date + 49 days)

## Files changed

- index.html (mega-menu item, cart badge, mini-cart panel, script link)
- product.html (same mega-menu item so the navbar matches everywhere)
- checkout.html (new)
- style.css (rules for all three tasks)
- script.js (new)

## Task 1 - Mega-menu

- Added a "Shop by Category" item to the existing navbar. It holds two blocks: a panel with 4 columns (Men, Women, Kids, Sport, each with a heading and 4 links) and an accordion made of 4 `<details>` groups.
- From 649px up, the panel is `position: absolute` under the navbar with `z-index: 2000`, so it sits above the page and does not push content down. It opens with `.mega:hover` and `.mega:focus-within`, so it works with the mouse and with Tab. An invisible `::after` bridge keeps it open while the pointer moves down into it.
- Below 649px the panel is hidden and the accordion shows inside the hamburger menu. I used two blocks because a closed `<details>` cannot be forced open with CSS alone.

## Task 2 - Checkout form

- Created checkout.html with the same header and footer. It has two fieldsets with legends: Contact (name, email, phone) and Delivery (address, city select, delivery date). Every input has a label joined with for/id. The cart icon links to it.
- Validation is HTML5 only: `required`, `type="email"`, phone `pattern="03[0-9]{2}-[0-9]{7}"`, and date `min="2026-10-29"` / `max="2026-12-17"`.
- `:user-invalid` gives the red border and shows the message only after the user has interacted, so the page loads clean.
- Layout uses CSS Grid. Below 649px it is one column. From 649px the two fieldsets sit side by side and each fieldset uses `grid-template-columns: auto 1fr` to put labels on the left. The submit button is `width: 100%` at every size.

## Task 3 - Cart badge and mini cart

- Added script.js (plain JavaScript) linked to index.html. Clicking Add to Cart reads the name and price from the card and pushes `{name, price}` into the `cart` array.
- One `render()` function redraws the badge, the mini-cart list with Remove buttons, the total (calculated with `reduce()`), and every card button. Add and Remove only change the array and call `render()`, so everything updates at once.
- A product can be added at most 3 times (`MAX = 3`). After that its button says "Limit reached" and is disabled until one of that product is removed.
- The cart icon uses `preventDefault()` and shows or hides the mini-cart panel. The panel also has a Checkout link to checkout.html.

## AI tools used

Claude (Anthropic).
