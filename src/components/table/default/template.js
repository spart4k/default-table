const template = `
  <div class="v-table">
    <div :class="options.options.headerFixed ? 'v-table-panel--fixed' : ''" class="v-table-panel">
      <div class="v-table-panel__actions">
          <v-button :option="button" v-for="(button, indexButton) in options.panel.buttons" :key="indexButton"></v-button>
          <!--<v-button :option="button" v-for="(button, indexButton) in options.panel.buttons" :key="indexButton"></v-button>-->
      </div>
      <div class="v-table-panel__search">
        <v-input @clearfield="clearField('searchField')" clearing type="search" placeholder="Поиск" v-model="searchField"></v-input>
      </div>
    </div>
    <table id="mainTable" ref="mainTable" class="v-table-wrap">
      <thead :class="options.options.headerFixed ? 'v-table-header--fixed' : ''" class="v-table-header">
        <tr class="v-table-header-row">
          <th align="center" v-if="options.options.selecting" width="5%">
            <!--s-->
          </th>
          <th :align="head.align" v-show="head.isShow" :id="head.value + '-table-header'" :width="head.width" class="v-table-header-row-cell" v-for="(head, index) in options.head">
            <div class="v-table-header-row-cell-wrap">
              <span @click="openSort(head)">{{ head.title }}</span>
              <div v-if="head.sorts[0].isShow" class="v-table-header-row-cell-sort">
                <div class="v-table-header-row-cell-sort__row" v-if="head.sorts[0].type === 'string'">
                  <svg class="v-table-header-row-cell-sort__row__icon" fill="#000000" height="800px" width="800px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 489.4 489.4" xml:space="preserve">
                    <g>
                      <g>
                        <path fill="red" d="M370.2,468.9c0,6.8,5.5,12.3,12.3,12.3s12.3-5.5,12.3-12.3V50.1l73.6,73.6c2.4,2.4,5.5,3.6,8.7,3.6s6.3-1.2,8.7-3.6
                          c4.8-4.8,4.8-12.5,0-17.3l-94.5-94.5c-4.6-4.6-12.7-4.6-17.3,0l-94.5,94.5c-4.8,4.8-4.8,12.5,0,17.3c4.8,4.8,12.5,4.8,17.3,0
                          l73.6-73.6v418.8H370.2z"/>
                        <path d="M209.9,365.7c-4.8-4.8-12.5-4.8-17.3,0L119,439.3V20.5c0-6.8-5.5-12.3-12.3-12.3s-12.3,5.5-12.3,12.3v418.8l-73.5-73.6
                          c-4.8-4.8-12.5-4.8-17.3,0s-4.8,12.5,0,17.3l94.5,94.5c2.4,2.4,5.5,3.6,8.7,3.6s6.3-1.2,8.7-3.6L210,383
                          C214.6,378.3,214.6,370.5,209.9,365.7z"/>
                      </g>
                    </g>
                  </svg>
                  <p v-if="true">Сортировка от А до Я</p>
                </div>
                <div class="v-table-header-row-cell-sort__row" v-if="head.sorts[0].type === 'number'">
                  <svg class="v-table-header-row-cell-sort__row__icon" fill="#000000" height="800px" width="800px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 489.4 489.4" xml:space="preserve">
                    <g>
                      <g>
                        <path d="M370.2,468.9c0,6.8,5.5,12.3,12.3,12.3s12.3-5.5,12.3-12.3V50.1l73.6,73.6c2.4,2.4,5.5,3.6,8.7,3.6s6.3-1.2,8.7-3.6
                          c4.8-4.8,4.8-12.5,0-17.3l-94.5-94.5c-4.6-4.6-12.7-4.6-17.3,0l-94.5,94.5c-4.8,4.8-4.8,12.5,0,17.3c4.8,4.8,12.5,4.8,17.3,0
                          l73.6-73.6v418.8H370.2z"/>
                        <path d="M209.9,365.7c-4.8-4.8-12.5-4.8-17.3,0L119,439.3V20.5c0-6.8-5.5-12.3-12.3-12.3s-12.3,5.5-12.3,12.3v418.8l-73.5-73.6
                          c-4.8-4.8-12.5-4.8-17.3,0s-4.8,12.5,0,17.3l94.5,94.5c2.4,2.4,5.5,3.6,8.7,3.6s6.3-1.2,8.7-3.6L210,383
                          C214.6,378.3,214.6,370.5,209.9,365.7z"/>
                      </g>
                    </g>
                  </svg>
                  <p v-if="true">Сортировка по убыванию</p>
                </div>
                <div class="v-table-header-row-cell-sort__row" v-if="head.sorts[0].type === 'date'">
                  <p v-if="true">Сортировка по дате</p>
                </div>
                <v-input class="v-table-header-row-cell-sort__search" @clearfield="clearField('searchField')" clearing type="search" placeholder="Поиск" v-model="head.search.field"></v-input>
              </div>
            </div>
          </th>
          <!--<th class="v-table-header-row-cell" v-for="(head, index) in options.head">{{ head.title }}</th>-->
        </tr>
      </thead>
      <tbody class="v-table-body">
        <template v-for="(row, indexRow) in options.data" >
          <tr :key="indexRow" :class="row.row.selected ? 'v-table-body-row--selected' : '' " @click="openChildRow($event, row)" class="v-table-body-row">
            <td class="v-table-body-row-cell__checkbox"  align="center" v-if="options.options.selecting" width="5%">
              <div @click.stop class="v-table-checkbox">
                <label>
                  <!--{{ indexRow }}-->
                  <!--{{ row.row.selected }}-->
                  <input @change="saveLastSelected({row, indexRow})" @click.stop.shift="checkboxInput(row, indexRow)" v-model="row.row.selected" type="checkbox">
                </label>
              </div>
            </td>
            <td :align="cell.align" class="v-table-body-row-cell v-table-actions" v-show="cell.isShow" v-for="cell in options.head">
              <template v-if="cell.type === 'default'">
                {{ row.row[cell.value] }}
              </template>
              <template v-else-if="cell.type === 'actions'">
                <v-table-button :row="row.row" :option="action" v-for="(action, indexAction) in cell.actions" :key="indexAction"/>
              </template>
            </td>
          </tr>
          <transition transition="10s" name="fadeHeight">
            <tr :key="indexRow" v-show="row.child.isShow && options.head.some(el => !el.isShow)" class="v-table-body-row v-table-body-row--child overflowHidden">
              <td class="v-table-body-row-cell" :colspan="colspanLength">
                <transition-group  name="testanim" class="overflowHidden" tag="ul">
                  <template v-if="!cell.isShow" v-for="cell, cellIndex in options.head">
                    <li v-if="cell.type === 'default'" class="v-table-body-row-paragraph" :key="cellIndex">
                      <span>{{ cell.title }}: </span> <span>{{ row.child.data[cell.value] }}</span>
                    </li>
                    <li v-else-if="cell.type === 'actions'" class="v-table-body-row-paragraph v-table-actions" :key="cellIndex">
                      <v-table-button :row="row.row" :option="action" v-for="action, indexAction in cell.actions" :key="indexAction" />
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