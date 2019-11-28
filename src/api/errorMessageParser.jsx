import React from 'react'
import _ from 'lodash'

export const getErrorMessages = (value) => {
    const getData = _.map(value, (getVal, getKey) => <li key={getKey}>Message : {getVal.msg} / Param : {getVal.param}</li>)
    return <ul className="text-left">{getData}</ul>
}