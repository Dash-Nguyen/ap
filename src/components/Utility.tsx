import React from 'react';
import styled from 'styled-components';
import { utilityConfig } from '../configs';
import HightlightWrap from './HightlightWrap';
import ImageTitle from './ImageTitle';
interface Props {

}

const Utility: React.FC<Props> = () => {

    const title = utilityConfig.title;
    const highlights = utilityConfig.highlights || [];

    return <Wrap>
        <HightlightWrap className='w-100 green'>
            {title && <div className='h1 text-orange-1 text-center'>
                {title}
            </div>}
            <div className='mt32'>
                {
                    highlights.map(e => {
                        return <div className='mt16'>
                            <ImageTitle width={400} height={250} data={e} circle={false}>

                            </ImageTitle>
                        </div>
                    })
                }
            </div>
        </HightlightWrap>
    </Wrap>
}

export default Utility;

const Wrap = styled.div`
    .position-list{
        display: grid;
        grid-template-columns: 50% 50%;
    }
`