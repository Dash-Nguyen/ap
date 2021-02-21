import React from 'react';
import styled from 'styled-components';
import { positionConfig } from '../configs';
import HightlightWrap from './HightlightWrap';
import ImageTitle from './ImageTitle';
interface Props {

}

const Positon: React.FC<Props> = () => {

    const title = positionConfig.title;
    const highlights = positionConfig.highlights || [];
    const img360s = positionConfig.img360s || [];
    return <Wrap>
        <HightlightWrap className='w-100 green'>
            {title && <div className='h1 text-orange-1 text-center'>
                {title}
            </div>}
            <div className='position-list mt32'>
                {
                    highlights.map(e => {
                        return <div className='mt16'>
                            <ImageTitle data={e}>

                            </ImageTitle>
                        </div>
                    })
                }
            </div>
            <div className='mt16'>
                {img360s.map(e => {
                    return <iframe width='480' height='360' src={e}>

                    </iframe>
                })}
            </div>
        </HightlightWrap>
    </Wrap>
}

export default Positon;

const Wrap = styled.div`
    .position-list{
        display: grid;
        grid-template-columns: 50% 50%;
    }
`