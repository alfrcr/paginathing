/**
 * jQuery Paginathing
 * Paginate Everything
 *
 * @author Alfred Crosby <https://github.com/alfredcrosby>
 * Inspired from http://esimakin.github.io/twbs-pagination/
 *
 * Copyright (c) 2018 Alfred Crosby
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

(function ($, window, document) {
  "use strict";

  const Paginator = function (element, options) {
    this.el = $(element);
    this.options = $.extend({}, $.fn.paginathing.defaults, options);

    this.startPage = 1;
    this.currentPage = 1;
    this.totalItems = this.el.children().length;

    const availablePage = Math.ceil(this.totalItems / this.options.perPage);
    if (availablePage < this.options.limitPagination) {
      this.options.limitPagination = availablePage;
    }

    this.totalPages = Math.max(availablePage, this.options.limitPagination);
    this.container = $("<nav></nav>")
      .addClass(this.options.containerClass)
      .attr("aria-label", "Page navigation");
    this.ul = $("<ul></ul>").addClass(this.options.ulClass);

    this.show(this.startPage);

    return this;
  };

  Paginator.prototype = {
    pagination: function (type, page) {
      const _self = this;
      const li = $("<li></li>");
      const a = $("<a></a>")
        .attr("href", "#")
        .addClass(_self.options.linkClass);

      let text;
      if (type === "number") {
        text = page;
      } else if (type === "pageNumbers") {
        // get the page numbers text
        text = _self.paginationNumbersText();
      } else {
        text = _self.paginationText(type);
      }

      li.addClass(_self.options.liClass).addClass(type);
      li.data("pagination-type", type);
      li.data("page", page);
      li.append(a.html(text));

      return li;
    },

    paginationText: function (type) {
      return this.options[type + "Text"];
    },

    paginationNumbersText: function () {
      const _self = this;
      return "Page " + _self.currentPage + "/" + _self.totalPages;
    },

    buildPagination: function () {
      const _self = this;
      const pagination = [];
      const prev =
        this.currentPage - 1 < _self.startPage
          ? _self.startPage
          : _self.currentPage - 1;
      const next =
        _self.currentPage + 1 > _self.totalPages
          ? _self.totalPages
          : _self.currentPage + 1;

      let start, end;
      const limit = _self.options.limitPagination;

      if (limit) {
        if (_self.currentPage <= Math.ceil(limit / 2) + 1) {
          start = 1;
          end = limit;
        } else if (
          _self.currentPage + Math.floor(limit / 2) >=
          _self.totalPages
        ) {
          start = _self.totalPages + 1 - limit;
          end = _self.totalPages;
        } else {
          start = _self.currentPage - Math.ceil(limit / 2);
          end = _self.currentPage + Math.floor(limit / 2);
        }
      } else {
        start = _self.startPage;
        end = _self.totalPages;
      }

      // "First" button
      if (_self.options.firstLast) {
        pagination.push(_self.pagination("first", _self.startPage));
      }

      // "Prev" button
      if (_self.options.prevNext) {
        pagination.push(_self.pagination("prev", prev));
      }

      // Pagination
      for (let i = start; i <= end; i++) {
        pagination.push(_self.pagination("number", i));
      }

      // "Next" button
      if (_self.options.prevNext) {
        pagination.push(_self.pagination("next", next));
      }

      // "Last" button
      if (_self.options.firstLast) {
        pagination.push(_self.pagination("last", _self.totalPages));
      }

      // page numbers
      if (_self.options.pageNumbers) {
        pagination.push(_self.pagination("pageNumbers", _self.currentPage));
      }

      return pagination;
    },

    render: function (page) {
      const _self = this;
      const options = _self.options;
      const pagination = _self.buildPagination();

      // Remove children before re-render (prevent duplicate)
      _self.ul.children().remove();
      _self.ul.append(pagination);

      // Manage active DOM
      const startAt = page === 1 ? 0 : (page - 1) * options.perPage;
      const endAt = page * options.perPage;

      _self.el.children().hide();
      _self.el.children().slice(startAt, endAt).show();

      // Manage active state
      _self.ul.children().each(function () {
        const _li = $(this);
        const type = _li.data("pagination-type");

        switch (type) {
          case "number":
            if (_li.data("page") === page) {
              _li.addClass(options.activeClass);
            }
            break;
          case "first":
            page === _self.startPage &&
              _li
                .toggleClass(options.disabledClass)
                .attr("aria-disabled", "true");
            break;
          case "last":
            page === _self.totalPages &&
              _li
                .toggleClass(options.disabledClass)
                .attr("aria-disabled", "true");
            break;
          case "prev":
            page - 1 < _self.startPage &&
              _li
                .toggleClass(options.disabledClass)
                .attr("aria-disabled", "true");
            break;
          case "next":
            page + 1 > _self.totalPages &&
              _li
                .toggleClass(options.disabledClass)
                .attr("aria-disabled", "true");
            break;
          default:
            break;
        }
      });

      // If insertAfter is defined
      if (options.insertAfter) {
        _self.container.append(_self.ul).insertAfter($(options.insertAfter));
      } else {
        _self.el.after(_self.container.append(_self.ul));
      }
    },

    handle: function () {
      const _self = this;
      _self.container.find("li").each(function () {
        const _li = $(this);

        _li.click(function (e) {
          e.preventDefault();
          const page = _li.data("page");

          _self.currentPage = page;
          _self.show(page);
        });
      });
    },

    show: function (page) {
      const _self = this;

      _self.render(page);
      _self.handle();
    },
  };

  $.fn.paginathing = function (options) {
    const _self = this;
    return _self.each(function () {
      return new Paginator(this, options);
    });
  };

  $.fn.paginathing.defaults = {
    perPage: 10,
    limitPagination: false,
    prevNext: true,
    firstLast: true,
    prevText: "&laquo;",
    nextText: "&raquo;",
    firstText: "First",
    lastText: "Last",
    containerClass: "pagination-container",
    ulClass: "pagination",
    liClass: "page-item",
    linkClass: "page-link",
    activeClass: "active",
    disabledClass: "disabled",
    insertAfter: null,
    pageNumbers: false,
  };
})(jQuery, window, document);
