import react from 'react';
import classnames from 'classnames';
import styled from 'styled-components';
import { introConfig, projectConfig } from './../configs/index';
import hightlightImg from './../assets/images/hightlight.png';
import splite from './../assets/images/splite.png';
import get from 'lodash/get';
import Button from './Button';
import HightlightWrap from './HightlightWrap';
import Highlight from './HighlightItem';


interface Props {
}

const Intro: React.FC<Props> = () => {
    const headerImg = introConfig.img;
    const highlights = introConfig.highlights;
    const hightlightData = introConfig.highlights.data || [];
    const news = introConfig.new || [];
    const price = introConfig.price;

    const handleViewPrice = () => {
        window.open(price.url, '_blank', "")
    }

    return <Wrap data-cy="intro" className='into'>
        <img className="img-view" src={headerImg} alt="" />
        <HightlightWrap className=''>
            <div className='into__header--title h1 text-red-4 text-center mb8'>
                <div className='mb4 mt8'>
                    Mở bán chung cư
                    </div>
                <div>
                    {get(highlights, 'title')}
                </div>
                <img className="img-view mt4" src={splite} alt="" />
            </div>
            {
                hightlightData.map(e => {
                    return <Highlight data={e}>

                    </Highlight>
                })
            }
            <div className='w-100 text-center mt8 mb8'>
                <div className='text-primary h1 w-60 ma'>
                    KHAI TRƯƠNG CĂN HỘ MẪU
                    NHẬN QUÀ LIỀN TAY
                    </div>
            </div>
            {
                news.map(e => {
                    return <Highlight data={e}>

                    </Highlight>
                })
            }
            <div className='w-100 text-center mt8 mb8'>
                <div className='text-primary h1 w-80 ma'>
                    {`PHÒNG BÁN HÀNG
                    CHỦ ĐẦU TƯ  ${projectConfig.name}`}
                </div>
                <div className='h1 text-red-4 mt16'>
                    {`HOTLINE:  ${projectConfig.hotline}`}
                </div>
            </div>

        </HightlightWrap>
        {
            price && <div className='mt16'>
                <img className="img-view" src={price.img} alt="" />
                <div className='mt32 row-center'>
                    <Button onClick={handleViewPrice}>Xem bảng giá chi tiết</Button>
                </div>
            </div>
        }
    </Wrap>
}

export default Intro;

export { Highlight }

const Wrap = styled.div`
    .into__header{ 
        .into__header--title{ 
            color: var(--red-4);
        }
    }
`