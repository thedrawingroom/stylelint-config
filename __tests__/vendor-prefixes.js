import stylelint from 'stylelint';
import postcss from 'postcss';
import scssSyntax from 'postcss-scss';
import test from 'tape';
import config from '..';

const invalidScss = `@-webkit-keyframes anim {
    0% {
        opacity: 0;
    }
}

::-moz-placeholder {
    color: #f00;
}

.property-prefix {
    -webkit-transition: none;
}

.value-prefix {
    display: -webkit-flex;
}
`;

test('Vendor prefixes scss', t => {
    function checkResult(result) {
        t.equal(result.warnings().length, 4, 'flags 4 warning');
        t.is(
            result.warnings()[0].text,
            'Unexpected vendor-prefixed at-rule "@-webkit-keyframes" (at-rule-no-vendor-prefix)',
            'correct warning text'
        );
        t.is(
            result.warnings()[1].text,
            'Unexpected vendor-prefix "-webkit-transition" (property-no-vendor-prefix)',
            'correct warning text'
        );
        t.is(
            result.warnings()[2].text,
            'Unexpected vendor-prefix "::-moz-placeholder" (selector-no-vendor-prefix)',
            'correct warning text'
        );
        t.is(
            result.warnings()[3].text,
            'Unexpected vendor-prefix "-webkit-flex" (value-no-vendor-prefix)',
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
