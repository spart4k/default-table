const template = `
  <div class="v-table">
    <div class="v-table-panel">

    </div>
    <table class="v-table-wrap">
      <thead class="v-table-header">
        <tr class="v-table-header-row">
          <th class="v-table-header-row-cell" v-for="(head, index) in options.head">{{ head.title }}</th>
        </tr>
      </thead>
      <tbody class="v-table-body">
        <tr class="v-table-body-row" v-for="(row, indexRow) in options.data">
          <td class="v-table-body-row-cell" v-for="(cell, indexCell) in options.head">
            {{ row[cell.value] }}
          </td>
        </tr>
      </tbody>
    </table>
    <div class="v-table-footer">
      <div class="v-table-footer-pagination">

      </div>
    </div>
  </div>
`

export default template