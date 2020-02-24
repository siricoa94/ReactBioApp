import React from 'react';
import Race from './races';
import Races from './race';
import {Route} from 'react-router-dom';
import {RaceList} from '../data/race';

const RaceContainer = (props) => {
    let raceUrl = RaceList.map((race) => {
        return (
            <Route path={`/race/${race.url}`} render={() => <Races title="Race Guide" info={race.info} name={race.name} gif={race.gif} tech_img={race.tech_img} building_info={race.building_info} building_title={race.building_title}/>} />
        );
    });
    return (
        <React.Fragment>
            <Route exact path="/race" render={ () => <Race title="Races"/>}/>
            {raceUrl}
        </React.Fragment>
    );
};

export default RaceContainer;