import stylelint from 'stylelint';
import postcss from 'postcss';
import scssSyntax from 'postcss-scss';
import test from 'tape';
import config from '..';

const invalidScss = `// scss features not lintable for declaration order in stylelint
.declarationorder {
    p {
        color: #f00;
        background-color: #0f0;
    }

    color: #f00;
    @include message-box();
    @extend %error;
}

`;

test('Declaration order scss', t => {
    function checkResult(result) {
        t.equal(result.warnings().length, 4, 'flags 4 warnings');
        const warningsArray = Object.values(result.warnings()).map(x => x.text);
        t.is(
            warningsArray.includes(
                'Expected background-color to come before color (order/properties-alphabetical-order)'
            ),
            true,
            'correct warning text'
        );
        t.is(
            warningsArray.includes(
                'Expected declaration to come before rule (order/order)'
            ),
            true,
            'correct warning text'
        );
        t.is(
            warningsArray.includes(
                'Expected blockless @include to come before declaration (order/order)'
            ),
            true,
            'correct warning text'
        );
        t.is(
            warningsArray.includes(
                'Expected @extend to come before blockless @include (order/order)'
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
