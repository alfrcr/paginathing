# Paginathing (support BootstrapCSS)
"Paginate everything"

### Requirements
- jQuery 

### Usage

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


```html
<!-- jQuery first -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<!-- paginathing.js -->
<script type="text/javascript" src="paginathing.js"></script>
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

### Available Options
```json
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
  disabledClass: 'disable' // disabled link class
```
