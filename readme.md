# Paginathing

#### Paginate Everything (support BootstrapCSS 5)

a dead-simple jQuery plugin for paginate your html elements. [DEMO](https://paginathing.netlify.app)

#### How does the plugin work?

Originally `paginathing.js` hide all your selector's children DOM. Then shows the DOM based on active page by using jQuery .show()

## Requirements

- jQuery

## Usage

Your html markup (example)

```html
<div class="panel panel-primary">
	<div class="panel-heading">
		<h3 class="panel-title">List of item.</h3>
	</div>
	<ul class="list-group">
		<li class="list-group-item"> Your Item 1</li>
		<li class="list-group-item"> Your Item 2</li>
		<li class="list-group-item"> Your Item 3</li>
		<li class="list-group-item"> Your Item 4</li>
		<li class="list-group-item"> Your Item 5</li>
		<li class="list-group-item"> Your Item 6</li>
	</ul>
</div>
</div>
```

#### Include jQuery & paginathing first

```html
<!-- jQuery first -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
<!-- paginathing.min.js -->
<script
  type="text/javascript"
  src="https://cdn.jsdelivr.net/gh/alfrcr/paginathing/dist/paginathing.min.js"
></script>
```

#### Initialize

```html
<!-- Your script -->
<script type="text/javascript">
  jQuery(document).ready(function ($) {
    $(".list-group").paginathing({
      perPage: 2,
      containerClass: "panel-footer",
    });
  });
</script>
```

## Available Options

```js
{
  // show item per page
  perPage: 10,
  // Limiting your pagination number.
  // Value could be boolean or positive integer.
  limitPagination: false,
  // Enable previous and next button
  prevNext: true,
  // Enable first and last button
  firstLast: true,
  // Previous button text
  prevText: '&laquo;',
  // Next button text
  nextText: '&raquo;',
  // "First button" text
  firstText: 'First',
  // "Last button" text
  lastText: 'Last',
  // Extend default container class
  containerClass: 'pagination-container',
  // Extend default <ul> class
  ulClass: 'pagination',
  // Extend <li> class
  liClass: 'page-item',
  // Extend <a> css class
  linkClass: 'page-link',
  // Active link class
  activeClass: 'active',
  // disabled link class,
  disabledClass: 'disable',
  // class or id (eg: .element or #element). append the paginator after certain element
  insertAfter: null,
  // showing current page number of total pages number, to work properly limitPagination must be true
  pageNumbers: false,
}
```

## License

paginathing.js is licensed under [MIT](./LICENSE)
