import React, { useState  } from 'react'
import ActorGrid from '../Components/actor/ActorGrid';
import { MainPageLayout } from '../Components/MainPageLayout'
import ShowGrid from '../Components/show/ShowGrid';
import { apiGet } from '../misc/config';
import { useLastQuery } from '../misc/custom-hooks';
import { RadioInputWrapper, SearchButtonWrapper, SearchInput } from './Home.styled';


export const Home = () => {
    const [input , setInput]=useLastQuery();
    const[results, setResults]=useState(null)
    const[searchOption, setSearchOption]=useState('shows')
    const isShowsSearch = searchOption==='shows'

   

    const onInputChange =(ev)=>{
        setInput(ev.target.value);
    };
    const  onSearch =() =>{
        apiGet (`/search/${searchOption}?q=${input}`).then(result => {
            setResults(result)
    })  
    };
    const onKeyDown = (ev) =>{
        if (ev.keyCode===13){
            onSearch()
        }
        
    }
    const onRadioChange=(ev) => {
        setSearchOption(ev.target.value)
    }
    
    const renderResults = () =>{
        if(results && results.length ===0){
            return <div>No Results</div>
        }
        if(results && results.length >0){
           return results[0].show ?(
            <ShowGrid data={results}/>
            ):(
            <ActorGrid data={results}/>
            )
           
    }

    return null;
}

    return (
        <MainPageLayout>
        
            <SearchInput type="text" placeholder="Search for Something" onChange={onInputChange} onKeyDown={onKeyDown} value={input} />
            <RadioInputWrapper>
                <div>
                <label htmlFor="shows-search">
                    Shows
                    <input id="shows-search" type="radio" value="shows" onChange={onRadioChange} checked={isShowsSearch}/>
                </label>
                </div>
                <div>
                <label htmlFor="actors-search">
                    Actors
                    <input id ="actors-search" type="radio" value="people" onChange={onRadioChange} checked={!isShowsSearch}/>
                </label>
                </div>
            </RadioInputWrapper>
            <SearchButtonWrapper >
            <button type="button" onClick={onSearch} >Search</button>
            </SearchButtonWrapper>
            {renderResults()}
        </MainPageLayout>
    )
}
