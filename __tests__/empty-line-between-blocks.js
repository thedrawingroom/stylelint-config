import stylelint from 'stylelint';
import postcss from 'postcss';
import scssSyntax from 'postcss-scss';
import test from 'tape';
import config from '..';

const invalidScss = `p {
    margin: 0;
    em {
        color: #f00;
    }
}
a {
    color: #f00;
}
`;

test('Empty line between scss', t => {
    function checkResult (result) {
        t.equal(result.warnings().length, 2, 'flags 2 warning');
        t.is(
            result.warnings()[0].text,
            'Expected empty line before rule (rule-empty-line-before)',
            'correct warning text'
        );
        t.is(
            result.warnings()[1].text,
            'Expected empty line before rule (rule-empty-line-before)',
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
