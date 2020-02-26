import stylelint from 'stylelint';
import postcss from 'postcss';
import scssSyntax from 'postcss-scss';
import test from 'tape';
import config from '..';

const invalidScss = `.zerounit {
    margin: 0px;
}
`;

test('Zero unit scss', t => {
    t.plan(2);

    function checkResult(result) {
        t.equal(result.warnings().length, 1, 'flags 1 warning');
        t.is(
            result.warnings()[0].text,
            'Unexpected unit (length-zero-no-unit)',
            'correct warning text'
        );
    }

    function logError(err) {
        console.log(err.stack);
    }

    postcss()
        .use(stylelint({ code: invalidScss, config }))
        .process(invalidScss, { syntax: scssSyntax })
        .then(checkResult)
        .catch(logError);
});
