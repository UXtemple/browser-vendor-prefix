var test = require('tape');
var s = require('./index');

test('browser-vendor-prefix', function(t) {
  t.deepEqual(s.alignItemsCenter, {
    alignItems: 'center',
    msFlexAlign: 'center',
    WebkitAlignItems: 'center'
  }, 'alignItems: "center"');

  t.deepEqual(s.alignSelfFlexStart, {
    alignSelf: 'flex-start',
    msFlexAlign: 'flex-start',
    WebkitAlignSelf: 'flex-start'
  }, 'alignSelf: "flex-start"');

  t.deepEqual(s.alignSelfStretch, {
    alignSelf: 'stretch',
    msFlexItemAlign: 'stretch',
    WebkitAlignSelf: 'stretch'
  }, 'alignSelf: "stretch"');

  t.deepEqual(s.flex1, {
    flex: 1,
    WebkitFlex: 1
  }, 'flex: 1');

  t.deepEqual(s.flexDirectionRow, {
    flexDirection: 'row',
    msFlexDirection: 'row',
    WebkitFlexDirection: 'row'
  }, 'flexDirection: "row"');

  t.deepEqual(s.flexWrapWrap, {
    flexWrap: 'wrap',
    msFlexWrap: 'wrap',
    WebkitFlexWrap: 'wrap'
  }, 'flexWrap: "wrap"');

  t.end();
});
