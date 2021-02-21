import react from 'react';
import styled from 'styled-components';
import classnames from 'classnames';

interface Props {
    className?: string;
}

const HightlightWrap: React.FC<Props> = ({ className, children }) => {
    return <Wrap className={classnames('row-inline', className)}>
        <div className='inner w-100'>
            {children}
        </div>
    </Wrap>
}

const Wrap = styled.div`
    padding: 20px;   
    background-color: var(--yellow-4);
    max-width: calc(550px - 40px);
    .inner{ 
        
        border: 1px dashed var(--green-4);
        border-radius: 4px;
        padding:  0px 12px;
    }

    &.green {
        background: radial-gradient(
            94.27% 100.22% at 8.92% 23.84%, 
            var(--green-4) 0%, 
            var(--green-4) 43.33%, 
            var(--green-3) 100%) !important;
        .inner{ 
        
                border: none;
        
            }
    }

    &.white {
        background: radial-gradient(
            94.27% 100.22% at 8.92% 23.84%, 
            var(--green-3) 0%, 
            var(--white) 43.33%, 
            var(--green-1) 100%) !important;
        .inner{ 
        
                border: none;
        
            }
    }
`

export default HightlightWrap;