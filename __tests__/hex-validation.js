import stylelint from 'stylelint';
import postcss from 'postcss';
import scssSyntax from 'postcss-scss';
import test from 'tape';
import config from '..';

const invalidScss = `.hexvalidation {
    background: #ab; // Clearly a typo
}
`;

test('Hex validation scss', t => {
    function checkResult(result) {
        t.equal(result.warnings().length, 1, 'flags 1 warning');
        t.is(
            result.warnings()[0].text,
            'Unexpected invalid hex color "#ab" (color-no-invalid-hex)',
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
