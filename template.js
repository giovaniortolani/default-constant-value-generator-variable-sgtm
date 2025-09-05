const returnValue = data.returnValue;
const outputs = {
  value_null: null,
  value_undefined: undefined,
  value_true: true,
  value_false: false,
  value_1: 1,
  value_0: 0,
  emptyString: '',
  emptyArray: [],
  emptyObject: {}
};

return outputs[returnValue];
