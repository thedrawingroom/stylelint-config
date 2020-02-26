import stylelint from 'stylelint';
import postcss from 'postcss';
import scssSyntax from 'postcss-scss';
import test from 'tape';
import config from '..';

const invalidScss = `@function calculationFunction($some-number, $another-number) {
    @return $some-number + $another-number;
}

@mixin myMixin() {
    color: #fff;
}

$myVar: 10px;

%placeHolder {
    color: #f00;
}
`;

test('Name format scss', t => {
    function checkResult(result) {
        t.equal(result.warnings().length, 4, 'flags 4 warning');
        const warningsArray = Object.values(result.warnings()).map(x => x.text);
        t.is(
            warningsArray.includes(
                'Expected @function name to match specified pattern (scss/at-function-pattern)'
            ),
            true,
            'correct warning text'
        );
        t.is(
            warningsArray.includes(
                'Expected @mixin name to match specified pattern (scss/at-mixin-pattern)'
            ),
            true,
            'correct warning text'
        );
        t.is(
            warningsArray.includes(
                'Expected $ variable name to match specified pattern (scss/dollar-variable-pattern)'
            ),
            true,
            'correct warning text'
        );
        t.is(
            warningsArray.includes(
                'Expected %-placeholder "%placeHolder" to match specified pattern (scss/percent-placeholder-pattern)'
            ),
            true,
            'correct warning text'
        );
    }

    function logError(err) {
        console.log(err.stack);
    }

    t.plan(5);

    postcss()
        .use(stylelint({ code: invalidScss, config }))
        .process(invalidScss, { syntax: scssSyntax })
        .then(checkResult)
        .catch(logError);
});
