import React from 'react';
import Hero from './hero';
import Heroes from './heroes';
import {Route} from 'react-router-dom';
import {HeroesList} from '../data/hero';

const HeroContainer = (props) => {
    let heroUrl = HeroesList.map((hero) => {
        return (
            <Route path={`/hero/${hero.url}`} render={() => <Hero title="Hero Guide" info={hero.info} name={hero.name} gif={hero.gif}/>} />
        );
    });
    return (
        <React.Fragment>
            <Route exact path="/hero" render={ () => <Heroes title="Heroes"/>}/>
            {heroUrl}
        </React.Fragment>
    );
};

export default HeroContainer;