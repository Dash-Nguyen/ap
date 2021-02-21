import get from 'lodash/get';
import React from 'react';
import { projectConfig } from '../configs';

interface Props {

}

const Footer: React.FC<Props> = () => {

    return <div className='px16 pb16'>
        <div className='h1 text-primary mt32'>
            {get(projectConfig, 'name')}
        </div>
        <div className='row-inline w-100 mt8'>
            <div>
                {'Address: '}
            </div>
            <div className='ml4'>
                {get(projectConfig, 'address')}
            </div>
        </div>
        <div className='row-inline w-100 mt8'>
            <div>
                {'Hotline: '}
            </div>
            <div className='ml4'>
                {get(projectConfig, 'hotline')}
            </div>
        </div>
        <div className='row-inline w-100 mt8'>
            <div>
                {'website: '}
            </div>
            <div className='h6  ml4'>
                {get(projectConfig, 'website')}
            </div>
        </div>
        <div className='mt8' dangerouslySetInnerHTML={{ __html: projectConfig.map }}>

        </div>
    </div>
}

export default Footer;