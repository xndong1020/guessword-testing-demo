import checkPropTypes from 'check-prop-types'

/***
 * Return ShallowWrapper container nodes(s) with the given data-test value
 * @function findByTestAttr
 * @param { ShallowWrapper } wrapper - enzyme shallow wrapper to search within
 * @param { string } val - Value of data-test attribute fo search
 * @returns { ShallowWrapper}
 */
export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`)
}

export const checkProps = (component, expectedProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    expectedProps,
    'prop',
    component.name
  )

  return propError
}
