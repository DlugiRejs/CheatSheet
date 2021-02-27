const app = Vue.createApp({
    data() {
        return {
            tags: [
                ["<table>", "Table",	"The wrapper element for all HTML tables."],
                ["<thead>", "Table Head", "The set of rows defining the column headers in a table."],
                ["<tbody>","Table Body", "The set of rows containing actual table data."],
                ["<tr>", "Table Row",	"The table row container."],
                ["<td>", "Table Data", "The table row container."],
                ["<tfoot>", "Table Foot",	"The set of rows defining the footer in a table."]
            ],
            attrs: [
                ["colspan", "Column Span", "Defines how many columns a td element should span."],
                ["rowspan", "Row Span", "Defines how many rows a td element should span."]
            ]
        }
    }
})