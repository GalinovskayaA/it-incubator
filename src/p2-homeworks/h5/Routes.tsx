import React from "react";
import {Route, Switch, Redirect, HashRouter} from "react-router-dom";
import Error404 from "./pages/Error404";
import PreJunior from "./pages/PreJunior";
import HW2 from "../h2/HW2";
import HW1 from "../h1/HW1";
import HW4 from "../h4/HW4";
import HW3 from "../h3/HW3";


export const PATH = {
    PRE_JUNIOR: "/pre-junior",
    PRE_JUNIOR_1: "/pre-junior-1",
    PRE_JUNIOR_2: "/pre-junior-2",
    PRE_JUNIOR_3: "/pre-junior-3",
    PRE_JUNIOR_4: "/pre-junior-4",
    ERROR: "/error404",
    JUN: "/jun",
    JUN_PLUS: "/jun+",
    // add paths
}


function Routes() {
    return (
        <HashRouter>
            <div>
                {/*Switch выбирает первый подходящий роут*/}
                <Switch>

                    {/*в начале мы попадаем на страницу "/" и переходим сразу на страницу PRE_JUNIOR*/}
                    {/*exact нужен чтоб указать полное совподение (что после "/" ничего не будет)*/}
                    <Route path={"/"} exact render={() => <Redirect to={PATH.PRE_JUNIOR}/>}/>

                    <Route path={PATH.PRE_JUNIOR} render={() => <PreJunior/>}/>
                    <Route path={PATH.PRE_JUNIOR_1} render={() => <HW1/>}/>
                    <Route path={PATH.PRE_JUNIOR_2} render={() => <HW2/>}/>
                    <Route path={PATH.PRE_JUNIOR_3} render={() => <HW3/>}/>
                    <Route path={PATH.PRE_JUNIOR_4} render={() => <HW4/>}/>

                    // add routes

                    {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
                    <Route path={PATH.JUN} render={() => <Error404/>}/>
                    <Route path={PATH.JUN_PLUS} render={() => <Error404/>}/>

                </Switch>
            </div>
        </HashRouter>

    );
}

export default Routes;
