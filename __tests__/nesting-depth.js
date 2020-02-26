import stylelint from 'stylelint';
import postcss from 'postcss';
import scssSyntax from 'postcss-scss';
import test from 'tape';
import config from '..';

const invalidScss = `
.one {
    .two {
        .three {
            .four {
                .five {
                    background-color: #c0ffee;

                    @media (min-width: 420px) {
                        background-color: #bada55;
                    }

                    @include mixin() {
                        background-color: #ba2;
                    }

                    .six {
                        color: #fff;
                    }
                }
            }

            .alpha {
                .beta {
                    .gamma {
                        color: #f00;
                    }
                }
            }
        }
    }
}
`;

const validScss = `
.button {
    @each $key, $value in $colors {
        &-#{$key} {
            background-color: $value;
        }
    }
}
`;

test('Nesting depth scss', t => {
    function checkResult(result) {
        t.equal(result.warnings().length, 6, 'flags 6 warning');

        t.is(
            result.warnings()[0].text,
            'Expected nesting depth to be no more than 4 (max-nesting-depth)',
            'correct warning text'
        );

        t.is(
            result.warnings()[1].text,
            'Expected nesting depth to be no more than 4 (max-nesting-depth)',
            'correct warning text'
        );

        t.is(
            result.warnings()[2].text,
            'Expected ".one .two .three .four .five" to have no more than 4 compound selectors (selector-max-compound-selectors)',
            'correct warning text'
        );

        t.not(
            result.warnings()[2].node.type,
            'atrule',
            'max-depth ignores at-rules'
        );
    }

    function logError(err) {
        console.log(err.stack);
    }

    t.plan(6);

    postcss()
        .use(stylelint({ code: invalidScss, config }))
        .process(invalidScss, { syntax: scssSyntax })
        .then(checkResult)
        .catch(logError);

    postcss()
        .use(stylelint({ code: validScss, config }))
        .process(validScss, { syntax: scssSyntax })
        .then(result => {
            t.is(result.warnings().length, 0);
        })
        .catch(logError);
});
