const template = `
  <div class="v-table">
    <div class="v-table-panel">

    </div>
    <table id="mainTable" ref="mainTable" class="v-table-wrap">
      <thead class="v-table-header">
        <tr class="v-table-header-row">
          <th v-show="head.isShow" :id="head.value + '-table-header'" :width="head.width" class="v-table-header-row-cell" v-for="(head, index) in options.head">{{ head.title }}</th>
          <!--<th class="v-table-header-row-cell" v-for="(head, index) in options.head">{{ head.title }}</th>-->
        </tr>
      </thead>
      <tbody class="v-table-body">
        <template v-for="row in options.data">
          <tr @click="openChildRow(row)" class="v-table-body-row">
            <td class="v-table-header-row-cell" v-show="cell.isShow" v-for="cell in options.head">
              {{ row.row[cell.value] }}
            </td>
          </tr>
          <transition transition="10s" name="fadeHeight">
            <tr v-show="row.child.isShow && options.head.some(el => !el.isShow)" class="v-table-body-row v-table-body-row--child overflowHidden">
              <td :colspan="options.head.filter(el => el.isShow).length">
                <transition-group  name="testanim" class="overflowHidden v-table-header-row-cell" tag="ul">
                  <li class="v-table-body-row-paragraph" :key="cellIndex" v-show="!cell.isShow" v-for="cell, cellIndex in options.head">
                    <span>{{ cell.title }}: </span> <span>{{ row.child.data[cell.value] }}</span>
                  </li>
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