import { DataGrid, DataGridProps } from '@mui/x-data-grid'
import  styled from 'styled-components'


export const LayoutContainer = styled(DataGrid)<DataGridProps>`

    @media screen {
        
    }
    
`


export const LayoutContainerGrid = styled.div`

    @media only screen and (min-width: 1421px){
        width: 100%;
    }

    @media only screen and  (max-width: 1176px){
        padding:12px;
    }
    
`
