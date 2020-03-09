import stylelint from 'stylelint';
import postcss from 'postcss';
import scssSyntax from 'postcss-scss';
import test from 'tape';
import config from '..';

const invalidScss = `.bangformat {
    color: #000!important; // Bang format test
    background-color: #000! important; // Bang format test
}

`;

test('Bang format scss', t => {
    function checkResult(result) {
        t.equal(result.warnings().length, 3, 'flags 3 warning');
        t.is(
            result.warnings()[0].text,
            'Unexpected whitespace after "!" (declaration-bang-space-after)',
            'correct warning text'
        );
        t.is(
            result.warnings()[1].text,
            'Expected single space before "!" (declaration-bang-space-before)',
            'correct warning text'
        );
        t.is(
            result.warnings()[2].text,
            'Expected single space before "!" (declaration-bang-space-before)',
            'correct warning text'
        );
    }

    function logError(err) {
        console.log(err.stack);
    }

    t.plan(4);

    postcss()
        .use(stylelint({ code: invalidScss, config }))
        .process(invalidScss, { syntax: scssSyntax })
        .then(checkResult)
        .catch(logError);
});
