import stylelint from 'stylelint';
import postcss from 'postcss';
import scssSyntax from 'postcss-scss';
import test from 'tape';
import config from '..';

const invalidScss = `.Foo {
    color: #f00;
}

.fooBar {
    color: #f00;
}

.fooBar5 {
    color: #f00;
}

.foo-Bar {
    color: #f00;
}

.foo-Bar---baz {
    color: #f00;
}

.foo__bar {
    color: #f00;
}

.foo__bar--baz {
    color: #f00;
}
`;

test('Selector format scss', t => {
    function checkResult (result) {
        t.equal(result.warnings().length, 5, 'flags 1 warning');
        t.is(
            result.warnings()[0].text,
            'Selector should be written in lowercase, starting with a letter and afterwards can include letters, numbers, backslashes, hyphens and underscores (selector-class-pattern)',
            'correct warning text'
        );
        t.is(
            result.warnings()[1].text,
            'Selector should be written in lowercase, starting with a letter and afterwards can include letters, numbers, backslashes, hyphens and underscores (selector-class-pattern)',
            'correct warning text'
        );
        t.is(
            result.warnings()[2].text,
            'Selector should be written in lowercase, starting with a letter and afterwards can include letters, numbers, backslashes, hyphens and underscores (selector-class-pattern)',
            'correct warning text'
        );
        t.is(
            result.warnings()[3].text,
            'Selector should be written in lowercase, starting with a letter and afterwards can include letters, numbers, backslashes, hyphens and underscores (selector-class-pattern)',
            'correct warning text'
        );
        t.is(
            result.warnings()[4].text,
            'Selector should be written in lowercase, starting with a letter and afterwards can include letters, numbers, backslashes, hyphens and underscores (selector-class-pattern)',
            'correct warning text'
        );
    }

    function logError (err) {
        console.log(err.stack);
    }

    t.plan(6);

    postcss()
        .use(stylelint({ code: invalidScss, config }))
        .process(invalidScss, { syntax: scssSyntax })
        .then(checkResult)
        .catch(logError);
});
