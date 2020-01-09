module.exports = {
    'env': {
        'browser': true,
        'es6': true,
        'node': true
    },
    'extends': [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'project': 'tsconfig.json',
        'sourceType': 'module'
    },
    'plugins': [
        '@typescript-eslint',
        '@typescript-eslint/tslint'
    ],
    'rules': {
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/no-inferrable-types': 'error',
        '@typescript-eslint/array-type': 'off',
        '@typescript-eslint/consistent-type-definitions': 'error',
        '@typescript-eslint/explicit-member-accessibility': [
            'error',
            {
                'accessibility': 'no-public'
            }
        ],
        '@typescript-eslint/indent': [
            'error',
            'tabs',
            {
                'FunctionDeclaration': {
                  'parameters': 'first'
                },
                'FunctionDeclaration': {
                    'parameters': 'first'
                },
                'FunctionExpression': {
                    'parameters': 'first'
                },
                'ArrayExpression': {
                  'parameters': 'first'
                },
                'ObjectExpression': {
                  'parameters': 'first'
                },
                'ImportDeclaration': {
                  'parameters': 'first'
                }
            }
        ],
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/member-delimiter-style': [
            'error',
            {
                'multiline': {
                    'delimiter': 'semi',
                    'requireLast': true
                },
                'singleline': {
                    'delimiter': 'semi',
                    'requireLast': false
                }
            }
        ],
        '@typescript-eslint/member-ordering': 'error',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-non-null-assertion': 'error',
        '@typescript-eslint/no-parameter-properties': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/no-useless-constructor': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/prefer-for-of': 'error',
        '@typescript-eslint/prefer-function-type': 'error',
        '@typescript-eslint/quotes': [
            'error',
            'single'
        ],
        '@typescript-eslint/semi': [
            'error',
            'always'
        ],
        '@typescript-eslint/no-extra-parens': 'error',
        '@typescript-eslint/unified-signatures': 'error',
        'array-bracket-spacing': ['error', 'never'],
        'arrow-body-style': 'error',
        'arrow-parens': [
            '2',
            'as-needed',
            { 'requireForBlockBody': true }
        ],
        'arrow-spacing': 'error',
        'blocked-scored-var': 'error',
        'brace-style': [
            'error',
            '1tbs',
            { 'allowSingleLine': true }
        ],
        'camelcase': 'error',
        'comma-dangle': 'off',
        'comma-spacing': 'error',
        'complexity': ['error', 10],
        'constructor-super': 'error',
        'consistent-this': 'error',
        'curly': ['error', 'multi-line'],
        'default-param-last': 'error',
        'dot-location': ['error', 'property'],
        'dot-notation': 'error',
        'eol-last': ['error', 'always'],
        'eqeqeq': [
            'error',
            'always',
            { 'null': 'ignore' }
        ],
        'guard-for-in': 'error',
        'id-blacklist': [
            'error',
            'any',
            'Number',
            'number',
            'String',
            'string',
            'Boolean',
            'boolean',
            'Undefined',
            'undefined'
        ],
        'id-match': 'error',
        'import/no-deprecated': 'warn',
        'import/order': 'off',
        'jsdoc/no-types': 'error',
        'key-spacing': 'error',
        'keyword-spacing': 'error',
        'max-classes-per-file': 'off',
        'max-len': [
            'error',
            {
                'code': 140
            }
        ],
        'max-statements': ['error', 20],
        'new-parens': 'error',
        'no-bitwise': 'error',
        'no-caller': 'error',
        'no-cond-assign': 'error',
        'no-console': [
            'error',
            {
                'allow': [
                    'warn',
                    'error'
                ]
            }
        ],
        'no-debugger': 'error',
        'no-duplicate-imports': 'error',
        'no-else-return': 'error',
        'no-empty': 'off',
        'no-empty-function': ['error', { 'allow': ['constructors'] }],
        'no-eval': 'error',
        'no-extra-parens': 'off',
        'no-fallthrough': 'error',
        'no-invalid-this': 'off',
        'no-lone-blocks': 'error',
        'no-lonely-if': 'error',
        'no-multiple-empty-lines': 'error',
        'no-new-wrappers': 'error',
        'no-param-reassign': 'error',
        'no-self-compare': 'error',
        'no-shadow': [
            'error',
            {
                'hoist': 'all'
            }
        ],
        'no-template-curly-in-strings': 'error',
        'no-throw-literal': 'error',
        'no-trailing-spaces': 'error',
        'no-undef-init': 'error',
        'no-underscore-dangle': 'error',
        'no-unsafe-finally': 'error',
        'no-unused-expressions': 'error',
        'no-unused-labels': 'error',
        'no-useless-concat': 'error',
        'no-useless-constructor': 'off',
        'object-shorthand': [2, 'properties'],
        'object-curly-spacing': ['error', 'always'],
        'one-var': [
            'error',
            'never'
        ],
        'prefer-arrow/prefer-arrow-functions': 'error',
        'quote-props': [
            'error',
            'as-needed'
        ],
        'quotes': [
            'error',
            'single',
            { 'avoidEscape': true, 'allowTemplateLiterals': true }
        ],
        'radix': 'error',
        'require-await': 'error',
        'space-before-function-paren': [
            'error',
            {
                'anonymous': 'never',
                'asyncArrow': 'always',
                'named': 'never'
            }
        ],
        'spaced-comment': ['error', 'always'],
        'spaced-in-parens': ['error', 'always'],
        'use-isnan': 'error',
        'valid-typeof': 'off',
        '@typescript-eslint/tslint/config': [
            'error',
            {
                'rules': {
                    'component-class-suffix': true,
                    'component-selector': [
                        true,
                        'element',
                        'app',
                        'kebab-case'
                    ],
                    'contextual-lifecycle': true,
                    'directive-class-suffix': true,
                    'directive-selector': [
                        true,
                        'attribute',
                        'app',
                        'camelCase'
                    ],
                    'import-blacklist': [
                        true,
                        'rxjs/Rx'
                    ],
                    'import-spacing': true,
                    'jsdoc-format': true,
                    'no-conflicting-lifecycle': true,
                    'no-host-metadata-property': true,
                    'no-input-rename': true,
                    'no-inputs-metadata-property': true,
                    'no-output-native': true,
                    'no-output-on-prefix': true,
                    'no-output-rename': true,
                    'no-outputs-metadata-property': true,
                    'no-reference-import': true,
                    'one-line': [
                        true,
                        'check-catch',
                        'check-else',
                        'check-finally',
                        'check-open-brace',
                        'check-whitespace'
                    ],
                    'template-banana-in-box': true,
                    'template-no-negated-async': true,
                    'use-lifecycle-interface': true,
                    'use-pipe-transform-interface': true,
                    'whitespace': [
                        true,
                        'check-branch',
                        'check-decl',
                        'check-operator',
                        'check-separator',
                        'check-type',
                        'check-typecast'
                    ]
                }
            }
        ]
    }
};
