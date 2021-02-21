import React from 'react';
import styled from 'styled-components';
import classnames from 'classnames';

interface Data {
    img: any,
    title: string
}

interface Props {
    data: Data,
    circle?: boolean;
    width?: number;
    height?: number;
}

const ImageTitle: React.FC<Props> = ({ data, circle = true, height = 105, width = 105 }) => {
    if (!data) {
        return null;
    }
    return <Wrap>
        <div className="row-center w-100">
            <Img width={width} height={height} src={data.img} className={classnames('img', {
                'is-circle': circle
            })}>
                <div className='img'>

                </div>
            </Img>
        </div>
        <div className='mt8 text-white title'>
            {data.title}
        </div>
    </Wrap>
}

export default ImageTitle;

const Wrap = styled.div`
    text-align: center;

    .title {
        padding: 0px 20px;
    }
`

const Img = styled.div`
    width: ${props => props.width}px;
    height: ${props => props.height}px;
    &.is-circle {
        .img{
            border-radius: 50%;
            background-size: contain;
        }
    }
    .img{
        background: url(${props => props.src});
        width: ${props => props.width}px;
        background-size: cover;
        height: ${props => props.height}px;
        border-radius: 6px;
        border: 1px solid var(--green-4);
    }
`