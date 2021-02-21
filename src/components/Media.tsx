import get from 'lodash/get';
import React from 'react';
import styled from 'styled-components';
import { mediaConfig } from '../configs';
import HightlightWrap from './HightlightWrap';
interface Props {

}

const Media: React.FC<Props> = () => {
    const videos = mediaConfig.highlights || [];
    return <Wrap>
        <HightlightWrap className='w-100 green'>
            <div className="h1 text-red-4 text-center mb16">
                <div>
                    {get(mediaConfig, 'title')}
                </div>
            </div>
            {
                videos.map(e => {
                    return <MediaItem className="mt16" >
                        <div className='h4 mb8'>
                            {get(e, 'title')}
                        </div>
                        <iframe width="500" height="345" src={e.url}>
                        </iframe>
                    </MediaItem>
                })
            }
        </HightlightWrap>

    </Wrap>
}

export default Media;

const Wrap = styled.div`

`

const MediaItem = styled.div`
    background
`