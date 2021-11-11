/*
 * @Description: stylelint 配置
 * @Author: kunyu.cao@hlifetech.com
 * @Date: 2021-09-24 23:00:33
 * @LastEditors: kunyu.cao@hlifetech.com
 * @LastEditTime: 2021-10-16 17:37:07
 */
module.exports = {
  extends: ['stylelint-config-prettier', 'stylelint-prettier'],
  plugins: ['stylelint-order'],
  rules: {
    indentation: 2, // 缩紧2空格
    'string-quotes': 'single', // 单引号
    'function-url-quotes': 'always', // url 引号
    'unit-case': 'lower', // 单位小写
    'no-descending-specificity': null,
    'color-hex-case': 'lower', // 颜色小写
    'color-hex-length': 'short',
    'string-quotes': 'single',
    'function-url-quotes': 'always',
    'unit-case': 'lower',

    'rule-empty-line-before': 'never',
    'font-family-no-missing-generic-family-keyword': null,
    'block-opening-brace-space-before': 'always',
    'property-no-unknown': null,
    'no-empty-source': null,
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['deep']
      }
    ],
    'number-leading-zero': null,

    // 排序插件
    'order/properties-order': [
      'position',
      'top',
      'right',
      'bottom',
      'left',
      'z-index',
      'display',
      'justify-content',
      'align-items',
      'float',
      'clear',
      'overflow',
      'overflow-x',
      'overflow-y',
      'margin',
      'margin-top',
      'margin-right',
      'margin-bottom',
      'margin-left',
      'padding',
      'padding-top',
      'padding-right',
      'padding-bottom',
      'padding-left',
      'width',
      'min-width',
      'max-width',
      'height',
      'min-height',
      'max-height',
      'font-size',
      'font-family',
      'font-weight',
      'border',
      'border-style',
      'border-width',
      'border-color',
      'border-top',
      'border-top-style',
      'border-top-width',
      'border-top-color',
      'border-right',
      'border-right-style',
      'border-right-width',
      'border-right-color',
      'border-bottom',
      'border-bottom-style',
      'border-bottom-width',
      'border-bottom-color',
      'border-left',
      'border-left-style',
      'border-left-width',
      'border-left-color',
      'border-radius',
      'text-align',
      'text-justify',
      'text-indent',
      'text-overflow',
      'text-decoration',
      'white-space',
      'color',
      'background',
      'background-position',
      'background-repeat',
      'background-size',
      'background-color',
      'background-clip',
      'opacity',
      'filter',
      'list-style',
      'outline',
      'visibility',
      'box-shadow',
      'text-shadow',
      'resize',
      'transition'
    ]
  }
}
