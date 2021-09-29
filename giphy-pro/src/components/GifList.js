import React from 'react';
import { Gif, Grid } from '@giphy/react-components';
import InfiniteScroll from 'react-infinite-scroll-component';

export default function GifList(props) {

    const items = props.gifs.map((itemData,i) => {
        return (
            <Item key={i} url={itemData} />
        )
    })

    return (
        <div className='text-container'>
            {props.gifs.length > 0 ? 
                <InfiniteScroll
                dataLength={props.gifs.length}
                next={e => props.getMoreGifs(e)}
                hasMore={props.hasMore}
                loader={<h3>Loading...</h3>}
                endMessage={<h2>------ Thats All  ------</h2>}
                >
                    <div className="gifContainer">
                    {items}
                    </div>
                </InfiniteScroll>
            : <h3>Search for Gifs</h3>
            }
            </div>
    )
}

const Item = (props) => {
    return (
        <div className='gif-item'>
            {/* <img src={props.url} /> */}
            {props.url && <Gif gif={props.url} width={200} />}

        </div>
    )
}