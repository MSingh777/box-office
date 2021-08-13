import React from 'react'
import { Navs } from './Navs'
import { Title } from './Title'

export const MainPageLayout = ({children}) => {
    return (
        <div>
            <Title title="Box Office" subtitle="Are You looking for a Movie or an Actor?"/>
      <Navs />
        {children}
        </div>
    )
}
