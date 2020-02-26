import stylelint from 'stylelint';
import postcss from 'postcss';
import scssSyntax from 'postcss-scss';
import test from 'tape';
import config from '..';

const invalidScss = `.fatal {
    @extend .error;
}
`;

test('Placeholder in extend scss', t => {
    function checkResult(result) {
        t.equal(result.warnings().length, 1, 'flags 1 warning');
        t.is(
            result.warnings()[0].text,
            'Expected a placeholder selector (e.g. %placeholder) to be used in @extend (scss/at-extend-no-missing-placeholder)',
            'correct warning text'
        );
    }

    function logError(err) {
        console.log(err.stack);
    }

    t.plan(2);

    postcss()
        .use(stylelint({ code: invalidScss, config }))
        .process(invalidScss, { syntax: scssSyntax })
        .then(checkResult)
        .catch(logError);
});
