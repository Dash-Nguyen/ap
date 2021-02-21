import react from 'react';
import classnames from 'classnames';
import styled from 'styled-components';
import hightlightImg from './../assets/images/hightlight.png';

interface HLData {
    content: any,
    hl?: any,
}

interface HighlightProps {
    data: HLData[];
}

const HighlightItem: React.FC<HighlightProps> = ({ data = [] }) => {
    return <WrapHL className='row-inline mb16 ml8 w-100'>
        <img className='mr8 ml8' src={hightlightImg}></img>
        <div className='h4'>
            {
                data.map(e => {
                    return <span className={classnames('mr4', e.hl)}>
                        {e.content}
                    </span>
                })
            }
        </div>
    </WrapHL>
}

const WrapHL = styled.div`
    color :var(--theme);
    .hl {
        color :var(--red-4);
    }
    .green-bold {
        color :var(--green-4);
    }
`

export default HighlightItem;