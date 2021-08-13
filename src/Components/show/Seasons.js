import React from 'react'
import { SeasonList, SeasonsWrapper } from './Seasons.styled'

const Seasons = ({ seasons } ) => {
    return (
        <SeasonsWrapper>
            <p>
                Seasons in total: <span> {seasons.length } </span>
            </p>
            <p>
                Episides in total: {' '}
                <span> 
                    {seasons.reduce((acc, seasons) => acc + seasons.episodeOrder, 0)}
                </span>
            </p>
            <SeasonList>
                {seasons.map(seasons => (
                    <div key ={seasons.id} className ="season-item">
                        <div className = "left">
                            <p>
                                Seasond {seasons.number}
                            </p>
                            <p>
                                Episodes: <span>{seasons.episodeOrder}</span>
                            </p>
                            </div>
                            <div className ="right">
                                Aired :{' '}
                                <span> {seasons.premieredDate} - {seasons.endDate} </span>
                            </div>
                        </div>
                ))}
            </SeasonList>
        </SeasonsWrapper>
    )
}

export default Seasons
