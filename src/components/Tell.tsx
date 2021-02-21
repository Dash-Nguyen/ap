import React from 'react';
import styled from 'styled-components';
import { projectConfig } from '../configs';
import call from './../assets/images/call.gif';

interface Props {

}

const Tell: React.FC<Props> = () => {
    const phone = projectConfig.hotline;
    return <Wrap>
        <a href={`tel:${phone}`}>
            <img src={call} alt="" />
        </a>
    </Wrap>
}

export default Tell;

const Wrap = styled.div`
    position: fixed;
    width: 100px;
    height: 100px;
    bottom: 10px;
    &:hover {
        cursor: pointer;
    }
    img{ 
        width: 100px;
        height: 100px;
    }
`