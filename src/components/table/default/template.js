const template = `
  <div class="v-table">
    <div class="v-table-panel">

    </div>
    <table id="mainTable" ref="mainTable" class="v-table-wrap">
      <thead class="v-table-header">
        <tr class="v-table-header-row">
          <th align="center" v-if="options.options.selecting" width="5%">
            s
          </th>
          <th v-show="head.isShow" :id="head.value + '-table-header'" :width="head.width" class="v-table-header-row-cell" v-for="(head, index) in options.head">{{ head.title }}</th>
          <!--<th class="v-table-header-row-cell" v-for="(head, index) in options.head">{{ head.title }}</th>-->
        </tr>
      </thead>
      <tbody class="v-table-body">
        <template v-for="row, indexRow in options.data">
          <tr @click="openChildRow($event, row)" class="v-table-body-row">
            <td class="v-table-body-row-cell__checkbox"  align="center" v-if="options.options.selecting" width="5%">
              <div @click.stop class="v-table-checkbox">
                <label>
                  {{ indexRow }}
                  <input @change="saveLastSelected({row, indexRow})" @click.stop.shift="checkboxInput(row, indexRow)" v-model="row.row.selected" type="checkbox">
                </label>
              </div>
            </td>
            <td class="v-table-header-row-cell v-table-actions" v-show="cell.isShow" v-for="cell in options.head">
              <template v-if="cell.type === 'default'">
                {{ row.row[cell.value] }}
              </template>
              <template v-else-if="cell.type === 'actions'">
                <table-button :row="row.row" :option="action" v-for="action in cell.actions" />
              </template>
            </td>
          </tr>
          <transition transition="10s" name="fadeHeight">
            <tr v-show="row.child.isShow && options.head.some(el => !el.isShow)" class="v-table-body-row v-table-body-row--child overflowHidden">
              <td :colspan="options.head.filter(el => el.isShow).length">
                <transition-group  name="testanim" class="overflowHidden v-table-header-row-cell" tag="ul">
                  <template v-if="!cell.isShow" v-for="cell, cellIndex in options.head">
                    <li v-if="cell.type === 'default'" class="v-table-body-row-paragraph" :key="cellIndex">
                      <span>{{ cell.title }}: </span> <span>{{ row.child.data[cell.value] }}</span>
                    </li>
                    <li v-else-if="cell.type === 'actions'" class="v-table-body-row-paragraph v-table-actions" :key="cellIndex">
                      <table-button :row="row.row" :option="action" v-for="action in cell.actions" />
                    </li>
                  </template>

                </transition-group>
              </td>
            </tr>
          </transition>
        </template>
      </tbody>
    </table>
    <div class="v-table-footer">
      <div class="v-table-footer-pagination">

      </div>
    </div>
  </div>

`

export default template