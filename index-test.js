var test = require('tape');
var s = require('./index');

test('browser-vendor-prefix', function(t) {
  t.deepEqual(s.alignItemsBaseline, {
    alignItems: 'baseline',
    WebkitAlignItems: 'baseline'
  }, 'alignItems: "baseline"');

  t.deepEqual(s.alignItemsCenter, {
    alignItems: 'center',
    WebkitAlignItems: 'center'
  }, 'alignItems: "center"');

  t.deepEqual(s.alignItemsFlexStart, {
    alignItems: 'flex-start',
    WebkitAlignItems: 'flex-start'
  }, 'alignItems: "flex-start"');

  t.deepEqual(s.alignItemsFlexEnd, {
    alignItems: 'flex-end',
    WebkitAlignItems: 'flex-end'
  }, 'alignItems: "flex-end"');

  t.deepEqual(s.alignItemsStretch, {
    alignItems: 'stretch',
    WebkitAlignItems: 'stretch'
  }, 'alignItems: "stretch"');

  t.deepEqual(s.alignSelfBaseline, {
    alignSelf: 'baseline',
    WebkitAlignSelf: 'baseline'
  }, 'alignSelf: "baseline"');

  t.deepEqual(s.alignSelfCenter, {
    alignSelf: 'center',
    WebkitAlignSelf: 'center'
  }, 'alignSelf: "center"');

  t.deepEqual(s.alignSelfFlexStart, {
    alignSelf: 'flex-start',
    WebkitAlignSelf: 'flex-start'
  }, 'alignSelf: "flex-start"');

  t.deepEqual(s.alignSelfFlexEnd, {
    alignSelf: 'flex-end',
    WebkitAlignSelf: 'flex-end'
  }, 'alignSelf: "flex-end"');

  t.deepEqual(s.alignSelfStretch, {
    alignSelf: 'stretch',
    WebkitAlignSelf: 'stretch'
  }, 'alignSelf: "stretch"');

  t.deepEqual(s.flex1, {
    flex: 1,
    WebkitFlex: 1
  }, 'flex: 1');

  t.deepEqual(s.flexDirectionRow, {
    flexDirection: 'row',
    WebkitFlexDirection: 'row'
  }, 'flexDirection: "row"');

  t.deepEqual(s.flexWrapWrap, {
    flexWrap: 'wrap',
    WebkitFlexWrap: 'wrap'
  }, 'flexWrap: "wrap"');

  t.end();
});
