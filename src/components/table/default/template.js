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
          <th :style="{ left: getWidth(head.value + '-table-header') }" :align="head.align" :class="head.fixed ? 'v-table-header-row-cell--fixed' : ''" v-show="head.isShow" :id="head.value + '-table-header'" :width="head.width" class="v-table-header-row-cell" v-for="(head, index) in options.head">
            <div class="v-table-header-row-cell-wrap">
              <span @click="openSort(head)">{{ head.title }}</span>
              <transition name="accordion">
                <div v-if="head.sorts && head.sorts[0].isShow" class="v-table-header-row-cell-sort">
                  <div @click="sortRow(head)" class="v-table-header-row-cell-sort__row" v-if="head.sorts[0].type === 'string'">
                    <v-icon-sort :state="head.sorts[0].value"/>
                    <p v-if="true">Сортировка от А до Я</p>
                  </div>
                  <div @click="sortRow(head)" class="v-table-header-row-cell-sort__row" v-if="head.sorts[0].type === 'number'">
                    <v-icon-sort :state="head.sorts[0].value"/>
                    <p v-if="true">Сортировка по убыванию</p>
                  </div>
                  <div @click="sortRow(head)" class="v-table-header-row-cell-sort__row" v-if="head.sorts[0].type === 'date'">
                    <v-icon-sort :state="head.sorts[0].value"/>
                    <p v-if="true">Сортировка по дате</p>
                  </div>
                  <v-input class="v-table-header-row-cell-sort__search" @clearfield="clearField('searchField')" clearing type="search" placeholder="Поиск" v-model="head.search.field"></v-input>
                </div>
              </transition>
            </div>
          </th>
          <!--<th class="v-table-header-row-cell" v-for="(head, index) in options.head">{{ head.title }}</th>-->
        </tr>
      </thead>
      <tbody class="v-table-body">
        <template v-for="(row, indexRow) in options.data.rows" >
          <tr :key="indexRow" :class="row.row.selected ? 'v-table-body-row--selected' : '' " @contextmenu="openContext($event, row)" @click="openChildRow($event, row)" class="v-table-body-row">
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
      <div class="v-table-footer-total">
        Итого
      </div>
      <div class="v-table-footer-pagination">
        <div class="v-table-footer-pagination-length">
          <p class="v-table-footer-pagination-length__label">Количество на странице:</p>
          <!--<span>
            10
          </span>-->
          <select name="" id="">
            <option v-for="(option, optionIndex) in 5" value="">10</option>
          </select>
        </div>
        <div class="v-table-footer-pagination-wrap">
          <div class="v-table-footer-pagination__button v-table-footer-pagination__button--prev">
            <svg height="800px" width="800px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 185.343 185.343" xml:space="preserve">
              <g>
                <g>
                  <path fill="currentColor" d="M51.707,185.343c-2.741,0-5.493-1.044-7.593-3.149c-4.194-4.194-4.194-10.981,0-15.175
                    l74.352-74.347L44.114,18.32c-4.194-4.194-4.194-10.987,0-15.175c4.194-4.194,10.987-4.194,15.18,0l81.934,81.934
                    c4.194,4.194,4.194,10.987,0,15.175l-81.934,81.939C57.201,184.293,54.454,185.343,51.707,185.343z"/>
                </g>
              </g>
            </svg>
          </div>
          <div class="v-table-footer-pagination-pages">
            <div v-for="item, index in 5" :class="index === 2 ? 'v-table-footer-pagination-pages__el--active' : ''"  class="v-table-footer-pagination-pages__el v-table-footer-pagination__button">
              <span>{{ index }}</span>
            </div>
          </div>
          <div class="v-table-footer-pagination__button v-table-footer-pagination__button--next">
            <svg fill="currentColor" height="800px" width="800px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 185.343 185.343" xml:space="preserve">
              <g>
                <g>
                  <path fill="currentColor" d="M51.707,185.343c-2.741,0-5.493-1.044-7.593-3.149c-4.194-4.194-4.194-10.981,0-15.175
                    l74.352-74.347L44.114,18.32c-4.194-4.194-4.194-10.987,0-15.175c4.194-4.194,10.987-4.194,15.18,0l81.934,81.934
                    c4.194,4.194,4.194,10.987,0,15.175l-81.934,81.939C57.201,184.293,54.454,185.343,51.707,185.343z"/>
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
    <v-contextmenu :options="contextmenu"/>
  </div>

`

export default template