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
            <td class="v-table-header-row-cell v-table-actions" v-show="cell.isShow" v-for="cell in options.head">
              <template v-if="cell.type === 'default'">
                {{ row.row[cell.value] }}
              </template>
              <template v-else-if="cell.type === 'actions'">
                <template v-for="action in cell.actions">
                  <!--<button :onclick="action.event" :click="action.event" v-if="action.type === 'button'">{{ action.event }}</button>-->
                  <!--<div :onclick="action.function" :style="{ 'background-image': action.urlIcon }" v-else-if="action.type === 'icon'" class="">icon</div>-->
                  <table-button :row="row.row" :option="action" />
                </template>
              </template>
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