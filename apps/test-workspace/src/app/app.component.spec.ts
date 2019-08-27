describe('BIZARRE TEST', () => {
  it('', () => {
    const foo = { styles: 'hello world' };
    if (Array.isArray(foo.styles)) {
      console.log('THIS SHOULD NOT PRINT');
    }
    console.log('FOO IS:', foo);
    expect(Array.isArray(foo.styles)).toBe(false);
  });
});
