import stylelint from 'stylelint';
import postcss from 'postcss';
import scssSyntax from 'postcss-scss';
import test from 'tape';
import config from '..';

const invalidScss = `.one .two .three > .four .five {
    color: #f00;
}

.one .two {
    .three > .four .five {
        color: #f00;
    }
}
`;

test('Selector depth scss', t => {
    function checkResult(result) {
        t.equal(result.warnings().length, 2, 'flags 2 warning');
        t.is(
            result.warnings()[0].text,
            'Expected ".one .two .three > .four .five" to have no more than 4 compound selectors (selector-max-compound-selectors)',
            'correct warning text'
        );
        t.is(
            result.warnings()[1].text,
            'Expected ".one .two .three > .four .five" to have no more than 4 compound selectors (selector-max-compound-selectors)',
            'correct warning text'
        );
    }

    function logError(err) {
        console.log(err.stack);
    }

    t.plan(3);

    postcss()
        .use(stylelint({ code: invalidScss, config }))
        .process(invalidScss, { syntax: scssSyntax })
        .then(checkResult)
        .catch(logError);
});
