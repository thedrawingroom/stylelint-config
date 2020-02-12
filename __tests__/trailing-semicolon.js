import stylelint from 'stylelint';
import postcss from 'postcss';
import scssSyntax from 'postcss-scss';
import test from 'tape';
import config from '..';

const invalidScss = `.trailingsemicolon {
    background-color: #fff ;
    color: #fff
}
`;

test('Trailing semicolon scss', t => {
    function checkResult (result) {
        t.equal(result.warnings().length, 2, 'flags 2 warning');
        t.is(
            result.warnings()[0].text,
            'Unexpected whitespace before ";" (declaration-block-semicolon-space-before)',
            'correct warning text'
        );
        t.is(
            result.warnings()[1].text,
            'Expected a trailing semicolon (declaration-block-trailing-semicolon)',
            'correct warning text'
        );
    }

    function logError (err) {
        console.log(err.stack);
    }

    t.plan(3);

    postcss()
        .use(stylelint({ code: invalidScss, config }))
        .process(invalidScss, { syntax: scssSyntax })
        .then(checkResult)
        .catch(logError);
});
