import Table from "./Table"
import { useState } from "react"

function SortableTable(props) {
    const [sortOrder, setSortOrder] = useState(null)
    const [sortby, setSortby] = useState(null)

    const {config} = props

    const handleClick = (label) => {
        if(sortOrder === null){
            setSortOrder('asc')
            setSortby(label)
        } else if(sortOrder === 'asc'){
            setSortOrder('desc')
            setSortby(label)
        }else if(sortOrder === 'desc'){
            setSortOrder(null)
            setSortby(label)
        }
    }

    const updatedConfig = config.map((column)=>{
        if(!column.sortValue){
            return column
        }
        return {
            ...column,
            header: () => <th onClick={()=> handleClick(column.label)}>{column.lable} IS SORTABLE</th>
        }
    })

  return (
    <div>
        {sortOrder} - {sortby}
       <Table{...props} config={updatedConfig}/>
    </div>
  )
}

export default SortableTable
