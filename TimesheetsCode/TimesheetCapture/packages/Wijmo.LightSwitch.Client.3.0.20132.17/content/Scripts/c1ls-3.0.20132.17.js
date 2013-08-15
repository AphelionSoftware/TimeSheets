/*!
  Wijmo LightSwitch JavaScript Library v3.0.20132.17
  Copyright (C) GrapeCity, Inc. All rights reserved.
*/

(function (window, undefined) {

    "use strict";
    var c1ls = Object.create({});

    // Constants

    c1ls.fontFamily = "Segoe UI, Segoe WP, Roboto, Frutiger, Helvetica Neue, Helvetica, Arial, sans-serif";

    // ContentItem

    c1ls.getFirstItem = function (contentItem) {

        if (contentItem.children.length > 0) {
            var first = contentItem.children[0];
            return first.children[0].valueModel.name;
        }

        return null;
    };

    c1ls.isNullableType = function (contentItem) {

        var n = contentItem.valueModel.propertyType.__isNullableType;
        return n === undefined ? false : n !== 0;
    };

    c1ls.isImageType = function (contentItem) {

        var t = contentItem.valueModel.propertyType;
        t = c1ls.isNullableType(contentItem) ? t.underlyingType : t;
        return t.id === ":Binary" || t.id === "Microsoft.LightSwitch.Extensions:Image";
    }

    c1ls.getTypeDesc = function (contentItem) {

        function isPrimitiveType(t) {
            var p = t.__isPrimitiveType;
            return p === undefined ? false : p !== 0;
        }

        var t = contentItem.valueModel.propertyType;
        var f = undefined;

        while (!isPrimitiveType(t)) {
            t = t.underlyingType;
        }

        if (t.name === "Int16" || t.name === "Int32" || t.name === "Int64") {
            f = "n0";
        }

        var j = t.jSType.toLowerCase();

        if (j === "date") {
            j = "datetime";
        }

        return {
            type: j,
            format: f
        };
    };

    c1ls.loadMore = function (contentItem, callback) {

        if (contentItem.value.canLoadMore) {
            $.mobile.loading("show");

            contentItem.value.loadMore().then(function (data) {
                if ($.isFunction(callback)) {
                    callback(data);
                }
                $.mobile.loading("hide");
            });
        }
    }

    // wijgrid

    c1ls.getGridContent = function (table, contentItem, options) {

        function wijgridGetColumns(contentItem) {

            var cols = [];

            function imageFormatter(args) {
                if (args.row.type & wijmo.grid.rowType.data) {
                    if (args.formattedValue !== "") {
                        args.formattedValue = "<img style='text-align:center' src='data:image;base64," + args.formattedValue + "'>";
                        args.$container.parent().addClass("wijalign-center");
                    }
                }
            }

            if (contentItem.children.length > 0) {
                var first = contentItem.children[0];

                var createColumn = function (c) {
                    if (c.isVisible) {
                        if (c.kind === "Details") {
                            var m = this.slice(0); 
                            m.push(c.valueModel.name);
                            if (c.children.length > 1) {
                                c.children.forEach(createColumn, m);
                            }
                            else {
                                var summary = c.valueModel.elementType[":@SummaryProperty"].property.name;
                                cols.push({ headerText: c.displayName, key: summary, context: m });
                            }
                        }
                        else if (c.kind === "Value") {
                            if (c1ls.isImageType(c)) {
                                cols.push({ cellFormatter: imageFormatter, headerText: c.displayName, key: c.valueModel.name, dataType: "string" });
                            }
                            else {
                                var t = c1ls.getTypeDesc(c);
                                if (t.type !== "array") {
                                    cols.push({ headerText: c.displayName, key: c.valueModel.name, context: this, dataType: t.type, dataFormatString: t.format });
                                }
                            }
                        }
                    }
                };

                first.children.forEach(createColumn, []);
            }

            return cols;
        }

        function wijgridGetDataRow(columns, value) {

            var row = [];

            columns.forEach(function (c) {
                var v = value;

                if (c.context !== undefined) {
                    var m = c.context.slice(0);
                    while (m.length > 0) {
                        v = v[m.shift()];
                    }
                }

                if (v !== undefined) {
                    if (c.dataType === "number") {
                        row.push(Number(v[c.key]));
                    }
                    else {
                        row.push(v[c.key]);
                    }
                }
                else {
                    row.push(null);
                }
            });

            return row;
        }

        contentItem.proxyValue = {
            data: contentItem.value.data,
            baseQuery: contentItem.value._loader._baseQuery,
            query: undefined,
            count: 0,
            totalCount: 0,
            busy: false
        };

        var cols = wijgridGetColumns(contentItem);

        var rows = function () {
            if (typeof startIndex === "number") {
                var pageSize = contentItem.valueModel.pageSize;

                return contentItem.proxyValue.data.slice(startIndex, startIndex + pageSize).map(function (r) {
                    return wijgridGetDataRow(cols, r);
                });
            }
            else {
                return contentItem.proxyValue.data.map(function (r) {
                    return wijgridGetDataRow(cols, r);
                });
            }
        };

        var selected = function (index) {
            return contentItem.proxyValue.data[index];
        };

        function refresh(clear) {
            if (clear) {
                table.wijgrid("selection").clear();
            }
            table.wijgrid("option", "data", rows());
        }

        function executeQuery() {

            var proxy = contentItem.proxyValue;
            var query = proxy.baseQuery;

            $.each(table.wijgrid("columns"), function (index, column) {
                var key = _getColumnKey(column.options);
                var dir = column.options.sortDirection;

                if (dir === "ascending") {
                    query = query.orderBy(key);
                }
                else if (dir === "descending") {
                    query = query.orderByDescending(key);
                }
            });

            $.each(table.wijgrid("columns"), function (index, column) {
                var expr, op = column.options.filterOperator.toLowerCase();

                if (op !== "nofilter") {
                    var key = _getColumnKey(column.options);
                    var value = _getColumnFilterValue(column.options);

                    if (op === "equals") {
                        expr = key + " eq " + value;
                    }
                    else if (op === "notequals") {
                        expr = key + " ne " + value;
                    }
                    else if (op === "greater") {
                        expr = key + " gt " + value;
                    }
                    else if (op === "greaterorequal") {
                        expr = key + " ge " + value;
                    }
                    else if (op === "less") {
                        expr = key + " lt " + value;
                    }
                    else if (op === "lessorequal") {
                        expr = key + " le " + value;
                    }
                    else if (op === "isempty") {
                        expr = key + " eq ''";
                    }
                    else if (op === "isnull") {
                        expr = key + " eq null";
                    }
                    else if (op === "notisempty") {
                        expr = key + " ne ''";
                    }
                    else if (op === "notisnull") {
                        expr = key + " ne null";
                    }
                    else if (op === "beginswith") {
                        expr = "startswith(" + key + ", " + value + ")";
                    }
                    else if (op === "endswith") {
                        expr = "endswith(" + key + ", " + value + ")";
                    }
                    else if (op === "contains") {
                        expr = "indexof(" + key + ", " + value + ") ge 0";
                    }
                }

                if (expr !== undefined) {
                    query = query.filter(expr);
                }
            });

            if (!contentItem.valueModel.disablePaging) {
                query = query.top(contentItem.valueModel.pageSize);
            }

            query = query.includeTotalCount();

            proxy.count = 0;
            proxy.totalCount = 0;
            proxy.busy = true;
            proxy.query = query;

            startIndex = undefined;
            finalIndex = undefined;

            if (prevCmd !== undefined) {
                prevCmd.isEnabled = false;
            }

            if (nextCmd !== undefined) {
                nextCmd.isEnabled = false;
            }

            $.mobile.loading("show");

            query.execute().then(function (data) {
                proxy.data = data.results;
                proxy.count += data.results.length;
                proxy.totalCount = data.totalCount;
                if (nextCmd !== undefined) {
                    nextCmd.isEnabled = (proxy.count < proxy.totalCount);
                }
                refresh(true);
                proxy.busy = false;
                $.mobile.loading("hide");
            }, function (error) {
                proxy.busy = false;
                $.mobile.loading("hide");
                msls.showMessageBox(error, { title: "Error" });
            });
        }

        function _getColumnKey(column) {
            if (column.context !== undefined && column.context.length > 0) {
                return column.context.join("/") + "/" + column.key;
            }
            else {
                return column.key;
            }
        }

        function _getColumnFilterValue(column) {
            var value = column.filterValue;
            if (column.dataType === "string" || column.dataType === undefined) {
                value = msls._toODataString(value, "String");
            }
            else if (column.dataType === "datetime") {
                value = msls._toODataString(value, "DateTime");
            }
            return value;
        }

        var sort = function (e, args) {
            $.each(table.wijgrid("columns"), function (index, column) {
                column.options.sortDirection = "none";
            });
            args.column.sortDirection = args.sortDirection;
            executeQuery();
            table.wijgrid("ensureControl", false);
            return false;
        };

        var filter = function (e, args) {
            args.column.filterOperator = args.operator;
            args.column.filterValue = args.value;
            executeQuery();
            table.wijgrid("ensureControl", false);
            return false;
        };

        var rowHeader = false, cellClick = null, cellFormat = null;

        function selectRow(args) {
            var offset = (typeof startIndex === "number") ? startIndex : 0;
            var index = args.cell.row() !== null ? args.cell.row().dataRowIndex : args.cell.rowIndex();
            var item = selected(offset + index);

            if (item === contentItem.value.selectedItem) {
                return true;
            }

            contentItem.value.selectedItem = item;
            return false;
        }

        if (contentItem.children.length > 0) {
            var first = contentItem.children[0];

            if (first.properties.tap !== null) {
                rowHeader = true;

                cellClick = function (e, args) {
                    var again = selectRow(args);
                    var single = table.data().wijmoWijgrid.options.selectionMode === "singleRow";

                    if ((again && single) || (args.cell.column() === null && args.cell.cellIndex() === 0)) {
                        var tap = contentItem.children[0].properties.tap;

                        if (tap.canExecute) {
                            tap.execute();
                        }
                    }
                };

                cellFormat = function (args) {
                    if (args.column === null && args.row.dataRowIndex >= 0) {
                        args.$cell.css("cursor", "pointer");
                    }
                };
            }
            else {
                cellClick = function (e, args) {
                    selectRow(args);
                };
            }
        }

        var more = function (callback) {
            var proxy = contentItem.proxyValue;

            if (proxy.query !== undefined) {
                if (proxy.count < proxy.totalCount) {
                    $.mobile.loading("show");
                    proxy.busy = true;
                    proxy.query = proxy.query.skip(proxy.count);

                    proxy.query.execute().then(function (data) {
                        proxy.data = proxy.data.concat(data.results);
                        proxy.count += data.results.length;
                        proxy.totalCount = data.totalCount;
                        proxy.busy = false;

                        if ($.isFunction(callback)) {
                            callback(data);
                        }

                        $.mobile.loading("hide");
                    });
                }
            }

            else {
                c1ls.loadMore(contentItem, callback);
            }
        };

        var startIndex, finalIndex, nextCmd, prevCmd;

        var next = function () {
            if (typeof startIndex === "number") {
                if (startIndex < finalIndex) {
                    $.mobile.loading("show");
                    var proxy = contentItem.proxyValue;
                    var pageSize = contentItem.valueModel.pageSize;
                    startIndex += pageSize;
                    prevCmd.isEnabled = true;
                    nextCmd.isEnabled = (startIndex < finalIndex) || contentItem.value.canLoadMore;
                    if (proxy.totalCount > 0 && proxy.data.length >= proxy.totalCount) {
                        nextCmd.isEnabled = false;
                    }
                    refresh(true);
                    $.mobile.loading("hide");
                    return;
                }
            }

            more(function (data) {
                var proxy = contentItem.proxyValue;

                if (data.startIndex) {
                    startIndex = data.startIndex;
                }
                else if (typeof startIndex === "number") {
                    startIndex += contentItem.valueModel.pageSize;
                }
                else {
                    startIndex = contentItem.valueModel.pageSize;
                }

                finalIndex = startIndex;

                if (data.items) {
                    proxy.data = proxy.data.concat(data.items);
                }

                prevCmd.isEnabled = true;

                if (proxy.totalCount === 0 && !contentItem.value.canLoadMore) {
                    proxy.totalCount = proxy.data.length;
                }

                if (proxy.totalCount > 0 && proxy.data.length >= proxy.totalCount) {
                    nextCmd.isEnabled = false;
                }

                refresh(true);
            });
        }

        var previous = function () {
            if (typeof startIndex === "number") {
                $.mobile.loading("show");
                var pageSize = contentItem.valueModel.pageSize;
                startIndex -= pageSize;
                nextCmd.isEnabled = true;
                prevCmd.isEnabled = startIndex > 0;
                refresh(true);
                $.mobile.loading("hide");
            }
        }

        var scrolling = true;

        if (options !== undefined) {
            if (typeof options.next === "string") {
                nextCmd = contentItem.screen.findContentItem(options.next);

                if (nextCmd !== undefined) {
                    scrolling = false;
                    nextCmd.isEnabled = contentItem.value.canLoadMore;

                    contentItem.value.onchange = function (arg) {
                        if (arg.detail === "canLoadMore") {
                            nextCmd.isEnabled = contentItem.value.canLoadMore;
                        }
                    };
                }
            }

            if (typeof options.previous === "string") {
                prevCmd = contentItem.screen.findContentItem(options.previous);

                if (prevCmd !== undefined) {
                    prevCmd.isEnabled = false;
                }
            }
        }

        if (scrolling) {
            var scroll = table.closest(".msls-vscroll");
            scroll = scroll.length ? scroll : $(window);

            scroll.on("scroll", function () {
                if (table.is(":visible") && contentItem.value !== null && contentItem.value.state === "idle" && !contentItem.proxyValue.busy) {
                    var needMore = table.height() - scroll.scrollTop() < 2 * scroll.height();
                    if (needMore) {
                        more(function (data) {
                            if (contentItem.proxyValue.query !== undefined) {
                                refresh();
                            }
                        });
                    }
                }
            });

            contentItem.value.oncollectionchange = function () {
                contentItem.proxyValue.data = contentItem.value.data;
                refresh();
            };
        }

        var cellUpdate = function (e, args) {
            var row = table.wijgrid("currentCell").row();
            var selected = contentItem.value.selectedItem;

            $.each(table.wijgrid("columns"), function (index, column) {
                var key = column.options.key;
                var value = row.data[index].value;
                selected[key] = value;
            });
        }

        $(".msls-tabs-container li").click(function (e) {
            setTimeout(function () {
                table.wijgrid("setSize");
            }, 500);
        });

        function findColumn(name) {
            var result = null;
            cols.forEach(function (c) {
                if (c.key === name) {
                    result = c;
                }
            });
            return result;
        }

        return {
            Columns: cols,
            Rows: rows,
            Sorting: sort,
            Filtering: filter,
            LoadMore: more,
            NextPage: next,
            PreviousPage: previous,
            ShowRowHeader: rowHeader,
            OnCellClicked: cellClick,
            OnCellFormat: cellFormat,
            OnCellUpdate: cellUpdate,
            FindColumn: findColumn
        };
    };

    // wijlist

    c1ls.getListContent = function (contentItem) {

        if (contentItem.children.length > 0) {

            var first = contentItem.children[0];
            var label = first.children[0].valueModel.name;
            var value = label;

            if (first.children.length > 1) {
                value = first.children[1].valueModel.name;
            }

            var items = contentItem.value.data.map(function (r) {
                return { label: r[label], value: r[value] };
            });

            return items;
        }

        return null;
    };

    // wijevcal

    c1ls.getCalendarContent = function (contentItem) {

        var items = null;
        var select = null;

        if (contentItem.children.length > 0) {
            var first = contentItem.children[0];

            if (first.children.length > 2) {
                var start = first.children[0].valueModel.name;
                var end = first.children[1].valueModel.name;
                var title = first.children[2].valueModel.name;
                var id = 0;

                items = contentItem.value.data.map(function (r) {
                    return {
                        index: id,
                        id: (++id).toString(),
                        start: r[start],
                        end: r[end],
                        subject: r[title]
                    };
                });
            }

            select = function (e, args) {
                var tap = contentItem.children[0].properties.tap;
                contentItem.value.selectedItem = contentItem.value.data[args.data.index];

                if (tap !== null && tap.canExecute) {
                    tap.execute();
                }

                return false;
            };
        }

        return {
            Events: items,
            Select: select
        };
    };

    // wijbarchart, wijlinechart, wijscatterchart

    c1ls.getChartContent = function (contentItem) {

        function getColumns(contentItem) {

            var cols = [];

            if (contentItem.children.length > 0) {
                var first = contentItem.children[0];

                first.children.forEach(function (c) {
                    if (c.isVisible) {
                        cols.push({ label: c.displayName, key: c.valueModel.name, data: [] });
                    }
                });
            }

            return cols;
        }

        var cols = getColumns(contentItem);
        var data = contentItem.value.data;
        var series = [];

        for (var i = 0; i < data.length; i++) {
            cols[0].data.push(data[i][cols[0].key]);

            for (var j = 1; j < cols.length; j++) {
                cols[j].data.push(data[i][cols[j].key]);
            }
        }

        for (var n = 1; n < cols.length; n++) {
            series.push({ label: cols[n].label, legendEntry: true, data: { x: cols[0].data, y: cols[n].data } });
        }

        var groupby = function (name) {
            var hash = {};

            data.forEach(function (r) {
                    hash[r[name]] = null;
            });

            var unique = Object.keys(hash);
            var groups = [];

            unique.forEach(function (u) {
                var s = { label: u, legendEntry: true, data: { x: [], y: [] } };
                hash[u] = s;
                groups.push(s);
            });

            var x = cols[0].key;
            var y = cols[1].key;

            for (var i = 0; i < data.length; i++) {
                var n = data[i][name];
                hash[n].data.x.push(data[i][x]);
                hash[n].data.y.push(data[i][y]);
            }

            return groups;
        };

        var select = function (e, data) {
            if (contentItem.children.length > 0) {
                var tap = contentItem.children[0].properties.tap;
                contentItem.value.selectedItem = contentItem.value.data[data.index];

                if (tap !== null && tap.canExecute) {
                    tap.execute();
                }
            }
        };

        return {
            Series: series,
            GroupBy: groupby,
            OnClick: select,
            Hint: {
                content: function () {
                    return this.label + ": " + this.y;
                },
                contentStyle: {
                    "font-family": c1ls.fontFamily
                }
            }
        };
    };

    // wijpiechart

    c1ls.getPieChartContent = function (contentItem) {

        function asNumber(n) {
            return typeof n === "number" ? n : Number(n);
        }

        var series = [];
        var select = null;

        if (contentItem.children.length > 0) {

            var first = contentItem.children[0];

            if (first.children.length > 1) {
                var label = first.children[0].valueModel.name;
                var value = first.children[1].valueModel.name;

                series = contentItem.value.data.map(function (r) {
                    return { label: r[label], legendEntry: true, data: asNumber(r[value]) };
                });
            }

            var select = function (e, data) {
                var tap = contentItem.children[0].properties.tap;
                contentItem.value.selectedItem = contentItem.value.data[data.index];

                if (tap !== null && tap.canExecute) {
                    tap.execute();
                }
            };
        }

        return {
            Series: series,
            OnClick: select,
            Hint: {
                content: function () {
                    return this.label + ": " + this.value;
                },
                contentStyle: {
                    "font-family": c1ls.fontFamily
                }
            }
        };
    };

    // wijgallery

    c1ls.getGalleryProperties = function (contentItem) {

        var result = {
            caption: null,
            image: null,
            base64: false,

            src: function (v) {
                return this.base64 ? "data:image;base64," + v[this.image] : v[this.image];
            }
        };

        if (contentItem.children.length > 0) {

            var first = contentItem.children[0];

            if (first.children.length >= 2) {
                result.caption = first.children[0].valueModel.name;
                result.image = first.children[1].valueModel.name;
                result.base64 = c1ls.isImageType(first.children[1]);
            }
        }

        return result;
    };

    // JSON

    c1ls.getJsonData = function (data, options) {

        function getJsonColumns(data) {

            var cols = [];

            $.each(data[0], function (key, value) {
                if ($.isNumeric(value)) {
                    cols.push({ label: key, key: key, data: [], dataType: "number", dataFormatString: "n0" });
                }
                else {
                    cols.push({ label: key, key: key, data: [] });
                }
            });

            return cols;
        }

        var rows = $.parseJSON(data);
        var cols = getJsonColumns(rows);
        var series = [];

        for (var i = rows.length - 1; i >= 0; i--) {
            cols[0].data.push(rows[i][cols[0].key]);

            for (var j = 1; j < cols.length; j++) {
                cols[j].data.push(rows[i][cols[j].key]);
            }
        }

        var totals = "none";
        var length = cols.length;

        if (options !== undefined) {
            if (typeof options.totals === "string") {
                totals = options.totals;
            }
        }

        if (totals === "rows" || totals === "all") {
            var t = rows.length - 1;

            for (var i = 0; i < cols.length; i++) {
                var k = cols[i].key;
                var v = rows[t][k];
                rows[t][k] = [v, { "class": "wijmo-wijgrid-total" }];
                cols[i].data.shift();
            }
        }

        if (totals === "columns" || totals === "all") {
            var k = cols[cols.length - 1].key;
            var n = (totals === "all") ? rows.length - 1 : rows.length;

            for (var i = 0; i < n; i++) {
                var v = rows[i][k];
                rows[i][k] = [v, { "class": "wijmo-wijgrid-total" }];
            }

            length--;
        }

        for (var n = 1; n < length; n++) {
            series.push({ label: cols[n].label, legendEntry: true, data: { x: cols[0].data, y: cols[n].data } });
        }

        return {
            Columns: cols,
            Rows: rows,
            Series: series,
            Hint: {
                content: function () {
                    return this.label + ": " + Globalize.format(this.y, "n0");
                },
                contentStyle: {
                    "font-family": c1ls.fontFamily
                }
            }
        };
    };

    // c1ls

    if (!window.c1ls) {
        window.c1ls = c1ls;
    }

})(window);

