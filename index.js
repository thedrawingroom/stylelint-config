module.exports = {
    plugins: ['stylelint-order', 'stylelint-scss'],
    rules: {
        'at-rule-blacklist': ['debug'],
        'at-rule-no-unknown': null,
        'at-rule-no-vendor-prefix': true,
        'block-no-empty': true,
        'block-opening-brace-space-before': 'always',
        'color-hex-case': 'lower',
        'color-hex-length': 'short',
        'color-named': 'never',
        'color-no-invalid-hex': true,
        'declaration-bang-space-after': 'never',
        'declaration-bang-space-before': 'always',
        'declaration-block-semicolon-newline-after': 'always',
        'declaration-block-semicolon-space-before': 'never',
        'declaration-block-single-line-max-declarations': 1,
        'declaration-block-trailing-semicolon': 'always',
        'declaration-colon-space-after': 'always-single-line',
        'declaration-colon-space-before': 'never',
        'declaration-property-value-blacklist': {
            border: ['none'],
            'border-top': ['none'],
            'border-right': ['none'],
            'border-bottom': ['none'],
            'border-left': ['none']
        },
        'function-comma-space-after': 'always-single-line',
        'function-parentheses-space-inside': 'never',
        'function-url-quotes': 'always',
        indentation: 4,
        'length-zero-no-unit': true,
        'max-nesting-depth': [
            4,
            {
                ignore: ['blockless-at-rules', 'pseudo-classes'],
                ignoreAtRules: [
                    'if',
                    'else',
                    'each',
                    'for',
                    'while',
                    'media',
                    'supports',
                    'include',
                    'use'
                ]
            }
        ],
        'media-feature-name-no-vendor-prefix': true,
        'media-feature-parentheses-space-inside': 'never',
        'no-missing-end-of-source-newline': true,
        'number-leading-zero': 'always',
        'number-no-trailing-zeros': true,
        'order/order': [
            [
                'custom-properties',
                'dollar-variables',
                {
                    type: 'at-rule',
                    name: 'extend'
                },
                {
                    type: 'at-rule',
                    name: 'include',
                    hasBlock: false
                },
                'declarations',
                {
                    type: 'at-rule',
                    name: 'include',
                    hasBlock: true
                },
                'rules'
            ]
        ],
        'order/properties-order': [
            {
                groupName: 'display',
                properties: [
                    'position',
                    'top',
                    'right',
                    'bottom',
                    'left',
                    'z-index',
                    'content',
                    'display',
                    'visibility',
                    'appearance',
                    'aspect-ratio',
                    'box-sizing',
                    'float',
                    'clear',
                    'clip',
                    'order',
                    'align-content',
                    'align-items',
                    'align-self',
                    'justify-content',
                    'justify-items',
                    'justify-self',
                    'place-content',
                    'place-items',
                    'place-self',
                    'cursor',
                    'caret-color',
                    'resize',
                    'flex',
                    'flex-grow',
                    'flex-shrink',
                    'flex-basis',
                    'flex-direction',
                    'flex-wrap',
                    'overflow',
                    'overflow-x',
                    'overflow-y',
                    'grid',
                    'grid-gap',
                    'gap',
                    'grid-template',
                    'grid-template-rows',
                    'grid-template-columns',
                    'grid-template-areas',
                    'grid-auto-rows',
                    'grid-auto-columns',
                    'grid-auto-flow',
                    'grid-area',
                    'grid-row',
                    'grid-row-start',
                    'grid-row-end',
                    'grid-row-gap',
                    'row-gap',
                    'grid-column',
                    'grid-column-start',
                    'grid-column-end',
                    'grid-column-gap',
                    'columns',
                    'column-width',
                    'column-count',
                    'column-gap',
                    'column-fill',
                    'column-rule',
                    'column-rule-width',
                    'column-rule-style',
                    'column-rule-color',
                    'column-span',
                    'page-break-after',
                    'page-break-before',
                    'page-break-inside'
                ]
            },
            {
                groupName: 'dimensions',
                properties: ['width', 'max-width', 'height', 'max-height']
            },
            {
                groupName: 'spacing',
                properties: [
                    'margin',
                    'margin-top',
                    'margin-right',
                    'margin-bottom',
                    'margin-left',
                    'padding',
                    'padding-top',
                    'padding-right',
                    'padding-bottom',
                    'padding-left'
                ]
            },
            {
                groupName: 'borders',
                properties: [
                    'border',
                    'border-width',
                    'border-style',
                    'border-color',
                    'border-spacing',
                    'border-collapse',
                    'border-image',
                    'border-radius',
                    'border-top',
                    'border-top-width',
                    'border-top-style',
                    'border-top-color',
                    'border-top-left-radius',
                    'border-top-right-radius',
                    'border-right',
                    'border-right-width',
                    'border-right-color',
                    'border-right-style',
                    'border-bottom',
                    'border-bottom-width',
                    'border-bottom-style',
                    'border-bottom-color',
                    'border-bottom-left-radius',
                    'border-bottom-right-radius',
                    'border-left',
                    'border-left-width',
                    'border-left-style',
                    'border-left-color'
                ]
            },
            {
                groupName: 'outlines',
                properties: [
                    'outline',
                    'outline-width',
                    'outline-style',
                    'outline-color',
                    'outline-offset'
                ]
            },
            {
                groupName: 'fonts',
                properties: [
                    'font',
                    'font-family',
                    'font-feature-settings',
                    'font-optical-sizing',
                    'font-language-override',
                    'font-kerning',
                    'font-size',
                    'font-weight',
                    'font-style',
                    'font-variant'
                ]
            },
            {
                groupName: 'color',
                properties: ['color', 'opacity']
            },
            {
                groupName: 'lists',
                properties: [
                    'list-style',
                    'list-style-type',
                    'list-style-position',
                    'list-style-image',
                    'counter-increment',
                    'counter-reset'
                ]
            },
            {
                groupName: 'text',
                properties: [
                    'direction',
                    'tab-size',
                    'text-align',
                    'text-align-last',
                    'text-decoration',
                    'text-decoration-line',
                    'text-decoration-style',
                    'text-decoration-color',
                    'text-emphasis',
                    'text-indent',
                    'text-justify',
                    'text-orientation',
                    'text-overflow',
                    'text-rendering',
                    'text-shadow',
                    'text-transform',
                    'text-underline-offset',
                    'text-underline-position',
                    'line-height',
                    'vertical-align',
                    'letter-spacing',
                    'white-space',
                    'word-spacing',
                    'word-break',
                    'word-wrap'
                ]
            },
            {
                groupName: 'tables',
                properties: [
                    'table-layout',
                    'border-collapse',
                    'border-spacing',
                    'caption-side',
                    'empty-cells'
                ]
            },
            {
                groupName: 'backgrounds',
                properties: [
                    'background',
                    'background-color',
                    'background-image',
                    'background-position',
                    'background-size',
                    'background-repeat',
                    'background-clip',
                    'background-origin',
                    'background-attachment',
                    'background-blend-mode'
                ]
            },
            {
                groupName: 'transform',
                properties: [
                    'transform',
                    'transform-box',
                    'transform-origin',
                    'transform-style',
                    'perspective',
                    'perspective-origin',
                    'backface-visibility',
                    'will-change'
                ]
            },
            {
                groupName: 'animation',
                properties: [
                    'animation',
                    'animation-name',
                    'animation-duration',
                    'animation-timing-function',
                    'animation-delay',
                    'animation-iteration-count',
                    'animation-direction',
                    'animation-fill-mode',
                    'animation-play-state'
                ]
            },
            {
                groupName: 'transitions',
                properties: [
                    'transition',
                    'transition-property',
                    'transition-duration',
                    'transition-timing-function',
                    'transition-delay'
                ]
            }
        ],
        'property-no-unknown': true,
        'property-no-vendor-prefix': true,
        'rule-empty-line-before': [
            'always-multi-line',
            {
                except: ['first-nested'],
                ignore: ['after-comment']
            }
        ],
        'scss/at-extend-no-missing-placeholder': true,
        'scss/at-function-pattern': '^[a-z]+([a-z0-9-]+[a-z0-9]+)?$',
        'scss/at-import-no-partial-leading-underscore': true,
        'scss/at-import-partial-extension-blacklist': ['scss'],
        'scss/at-mixin-pattern': '^[a-z]+([a-z0-9-]+[a-z0-9]+)?$',
        'scss/at-rule-no-unknown': true,
        'scss/dollar-variable-colon-space-after': 'always',
        'scss/dollar-variable-colon-space-before': 'never',
        'scss/dollar-variable-pattern': '^[_]?[a-z]+([a-z0-9-]+[a-z0-9]+)?$',
        'scss/percent-placeholder-pattern': '^[a-z]+([a-z0-9-]+[a-z0-9]+)?$',
        'scss/selector-no-redundant-nesting-selector': true,
        'selector-class-pattern': [
            '^[a-z][a-z0-9\\-_]*$',
            {
                message:
                    'Selector should be written in lowercase, starting with a letter and afterwards can include letters, numbers, backslashes, hyphens and underscores (selector-class-pattern)'
            }
        ],
        'selector-list-comma-newline-after': 'always',
        'selector-max-compound-selectors': 4,
        'selector-max-id': 0,
        'selector-no-qualifying-type': [
            true,
            {
                ignore: ['attribute', 'class']
            }
        ],
        'selector-no-vendor-prefix': true,
        'selector-pseudo-element-colon-notation': 'double',
        'selector-pseudo-element-no-unknown': true,
        'shorthand-property-no-redundant-values': true,
        'string-quotes': 'single',
        'value-no-vendor-prefix': true
    }
};
