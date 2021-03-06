import React from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'
function MapRouter({route}) {
    return (
        <Switch>
             {
                 route.map(item=>(
                    item.path ? (
                        item.children ? (
                            <Route
                                key={item.path}
                                path={item.path}
                                render={props => (
                                    <item.component {...props} route={item.children}>
                                        <MapRouter route={item.children} />
                                    </item.component>
                                )}
                            />
                        ) : (
                                <Route
                                    key={item.path}
                                    path={item.path}
                                    render={props => (
                                        <item.component {...props}>
                                        </item.component>
                                    )}
                                />
                            )
                    ) : (
                            <Redirect key={item.from} {...item} />
                        )
                 ))
             }
        </Switch>
    )
}

export default MapRouter
