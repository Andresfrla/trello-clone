"use client"

import { ListWithCards } from "@/types"
import { ListForm } from "./list-form"
import { useEffect, useState } from "react"
import { DragDropContext,Droppable } from "@hello-pangea/dnd"
import { ListItem } from "./list-item"

interface ListContainerProps {
    data: ListWithCards[]
    boardId: string
}

export const ListContainer = ({
    data,
    boardId
}: ListContainerProps) => {
  const [orderData, setOrderData] = useState(data)

  useEffect(() => {
    setOrderData(data)
  }, [data])

  return (
    <DragDropContext onDragEnd={() => {}}>
      <Droppable droppableId="lists" type="list" direction="horizontal">
        {(provided) => (
        <ol 
          {...provided.droppableProps}
          ref={provided.innerRef}
          className="flex gap-x-3 h-full">
          {orderData.map((list, index) => {
            return (
              <ListItem
                key={list.id}
                index={index}
                data={list}
                />
            )
          })}
          {provided.placeholder}
          <ListForm />
          <div className="flex-shrink-0 w-1"/>
        </ol>
        )}
      </Droppable>
    </DragDropContext>
  )
}
