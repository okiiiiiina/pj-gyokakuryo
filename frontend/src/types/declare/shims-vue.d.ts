/* vueのディレクトリで「モジュール型宣言エラー」が出ないようにするためのファイル */
/* Vue.jsのシングルファイルコンポーネント（.vue ファイル）に対して正確な型情報が提供されます */

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
