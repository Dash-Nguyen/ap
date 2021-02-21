import react from 'react';
import styled from 'styled-components';
import { infoConfig, projectConfig } from '../configs';
import HightlightWrap from './HightlightWrap';
import splite from './../assets/images/splite.png';
import get from 'lodash/get';
import Highlight from './HighlightItem';
interface Props {
}

const Info: React.FC<Props> = ({ }) => {
    const infoImg = infoConfig.img;
    const highlights = infoConfig.highlights || [];

    return <Wrap className='info'>
        {
            infoImg && <img className='img-view' src={infoImg}></img>
        }
        <HightlightWrap>
            <div className='info__header--title h1 text-red-4 text-center mb8'>
                <div className='mb4 mt8'>
                    GIỚI THIỆU DỰ ÁN
                    </div>
                <div>
                    {get(projectConfig, 'name')}
                </div>
                <img className="img-view mt4" src={splite} alt="" />
            </div>
            {highlights.map(e => {
                return <Highlight data={e}></Highlight>
            })}
            <div className='w-100 text-center mt8 mb8'>
                <div className='text-primary h1 w-80 ma'>
                    {'LIÊN HỆ XEM CĂN HỘ MẪU'}
                </div>
                <div className='h1 text-red-4 mt16'>
                    {`HOTLINE:  ${projectConfig.hotline}`}
                </div>
            </div>
        </HightlightWrap>

    </Wrap>
}

const Wrap = styled.div`

`

export default Info;