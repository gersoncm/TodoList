import React from 'react'
import FilterLink from '../containers/FilterLink'
import { VisibilityFilters } from '../actions'

const Footer = () => (
  <div>
    <span>Filtrar: </span>
    <br/>
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>
      Todas
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
      Activas
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
      Completas
    </FilterLink>
  </div>
)

export default Footer
