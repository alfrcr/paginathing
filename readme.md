# Paginathing
#### Paginate Everything

a dead-simple jQuery plugin for paginate your html elements.

How the plugin's work?
Originally paginathing.js hide all your selector's children dom. Then shows the dom based on active pages by using jQuery .show()

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
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<!-- paginathing.js -->
<script type="text/javascript" src="paginathing.js"></script>
```

#### Initialize
```html
<!-- Your script -->
<script type="text/javascript">
	jQuery(document).ready(function($){
		$('.list-group').paginathing({
	    		perPage: 2,
	    		containerClass: 'panel-footer'
		})
	});
</script>
```

## Available Options
```js
  perPage: 10, // show item per page
  limitPagination: false, // false or number. Limiting your pagination number.
  prevNext: true, // enable previous and next button
  firstLast: true, // enable first and last button
  prevText: '&laquo;', // Previous button text
  nextText: '&raquo;', // Next button text
  firstText: 'First', // "First button" text
  lastText: 'Last', // "Last button" text
  containerClass: 'pagination-container', // extend default container class
  ulClass: 'pagination', // extend default ul class
  liClass: 'page', // extend li class
  activeClass: 'active', // active link class
  disabledClass: 'disable' // disabled link class,
  insertAfter: null //class or id (eg: .element or #element). append the paginator after certain element
```
