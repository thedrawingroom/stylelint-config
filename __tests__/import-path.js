import stylelint from 'stylelint';
import postcss from 'postcss';
import scssSyntax from 'postcss-scss';
import test from 'tape';
import config from '..';

const invalidScss = `@import 'foo/_bar.scss';
@import '_bar.scss';
@import '_bar';
@import 'bar.scss';
`;

test('Import path scss', t => {
    function checkResult(result) {
        t.equal(result.warnings().length, 6, 'flags 6 warning');
        const warningsArray = Object.values(result.warnings()).map(x => x.text);
        t.is(
            warningsArray.includes(
                'Unexpected leading underscore in imported partial name (scss/at-import-no-partial-leading-underscore)'
            ),
            true,
            'correct warning text'
        );
        t.is(
            warningsArray.includes(
                'Unexpected extension ".scss" in imported partial name (scss/at-import-partial-extension-blacklist)'
            ),
            true,
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
