module.exports = {
    'env': {
        'browser': true,
        'es2020': true,
        'node': true
    },
    'extends': [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
		'ecmaVersion': 2019,
        'project': 'tsconfig.json',
        'sourceType': 'module'
	},
	'plugins': ['@typescript-eslint/eslint-plugin'],
    'rules': {
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/no-inferrable-types': 'error',
        '@typescript-eslint/array-type': 'off',
        '@typescript-eslint/consistent-type-definitions': 'error',
        '@typescript-eslint/explicit-member-accessibility': ['error', { 'accessibility': 'no-public' }],
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
        '@typescript-eslint/quotes': ['error', 'single'],
        '@typescript-eslint/semi': ['error', 'always'],
        '@typescript-eslint/no-extra-parens': 'error',
        '@typescript-eslint/unified-signatures': 'error',
        'array-bracket-spacing': ['error', 'never'],
        'arrow-body-style': 'error',
        'arrow-parens': [2, 'as-needed', { 'requireForBlockBody': true }],
        'arrow-spacing': 'error',
        'brace-style': ['error', '1tbs', { 'allowSingleLine': true }],
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
        'eqeqeq': ['error', 'always', { 'null': 'ignore' }],
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
		'import/order': 'off',
		'indent': ['error', "tab", { 'SwitchCase': 1 }],
        'key-spacing': 'error',
        'keyword-spacing': 'error',
        'max-classes-per-file': 'off',
        'max-len': ['error', { 'code': 140 }],
        'max-statements': ['error', 20],
        'new-parens': 'error',
        'no-bitwise': 'error',
        'no-caller': 'error',
        'no-cond-assign': 'error',
        'no-console': ['error', { 'allow': ['warn', 'error'] }],
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
        'no-shadow': ['error', { 'hoist': 'all' }],
        // 'no-template-curly-in-strings': 'error', not sure if needed
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
        'one-var': ['error', 'never'],
        'prefer-arrow-callback': 'error',
        'quote-props': ['error', 'as-needed'],
        'quotes': ['error', 'single', { 'avoidEscape': true, 'allowTemplateLiterals': true }],
        'radix': 'error',
		'require-await': 'error',
		'require-jsdoc': ['error', {
			'require': {
				'FunctionDeclaration': true,
				'MethodDefinition': true,
				'ClassDeclaration': true,
				'ArrowFunctionExpression': false,
				'FunctionExpression': false
			}
		}],
        'space-before-function-paren': ['error', { 'anonymous': 'always', 'asyncArrow': 'always', 'named': 'never' }],
        'spaced-comment': ['error', 'always'],
        'space-in-parens': ['error', 'never'],
		'use-isnan': 'error',
		'valid-jsdoc': 'error',
        'valid-typeof': 'off'
    }
};
