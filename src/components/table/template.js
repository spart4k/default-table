const template = `
  <div class="v-table">
    <table class="v-table-wrap">
      <thead class="v-table-header">
        <tr>
          <th v-for="(head, index) in options.head">{{ head.title }}</th>
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
  </div>
`

export default template