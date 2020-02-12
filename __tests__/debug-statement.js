import stylelint from 'stylelint';
import postcss from 'postcss';
import scssSyntax from 'postcss-scss';
import test from 'tape';
import config from '..';

const invalidScss = `$color-blue: #1c94c6;

.debug {
    @debug $color-blue;
}

`;

test('Debug statement scss', t => {
    function checkResult (result) {
        t.equal(result.warnings().length, 1, 'flags 1 warning');
        t.is(
            result.warnings()[0].text,
            'Unexpected at-rule "debug" (at-rule-blacklist)',
            'correct warning text'
        );
    }

    function logError (err) {
        console.log(err.stack);
    }

    t.plan(2);

    postcss()
        .use(stylelint({ code: invalidScss, config }))
        .process(invalidScss, { syntax: scssSyntax })
        .then(checkResult)
        .catch(logError);
});
