import get from 'lodash/get';
import React from 'react';
import styled from 'styled-components';
import { designConfig } from '../configs';
import HightlightWrap from './HightlightWrap';
import ImageTitle from './ImageTitle';
import Button from './Button';

interface Props {

}

const Design: React.FC<Props> = () => {
    const aps = designConfig.highlights || [];

    const handleBuy = (e: any) => {
        window.open(e.url, '_blank', "")
    }

    return <div>
        <img className='img-view' src={designConfig.img}></img>
        <HightlightWrap className='white w-100'>
            <div className='text-red-4 text-center h1'>
                THIẾT KẾ CĂN HỘ
            </div>
            <div className='mt32'>
                {
                    aps.map((e, index) => {
                        return <AP key={index}>
                            <div className='h1 text-green-4  mt16 mb8'>
                                {get(e, 'title')}
                            </div>
                            <div className='dash ma'></div>
                            <div className='mt16'>
                                <ImageTitle width={310} height={270} data={{ img: get(e, 'img'), title: '' }} circle={false} />
                            </div>
                            <div className='text-left des'>
                                {
                                    get(e, 'descriptions').map(e => {
                                        return <div className='phaph mt4'>
                                            {e}
                                        </div>
                                    })
                                }
                            </div>
                            <Button onClick={() => handleBuy(e)} className='mt16'>
                                <div className='h6 text-uppercase'>
                                    {`Mua ngay ${get(e, 'price')}`}
                                </div>
                            </Button>
                        </AP>
                    })
                }
            </div>
        </HightlightWrap>
    </div>
}

export default Design;

const AP = styled.div`
    text-align: center;
    .dash{
        width: 100px;
        height: 2px;
        background-color: var(--red-4);
    }
    .des{
        margin-left: 90px;
    }
`