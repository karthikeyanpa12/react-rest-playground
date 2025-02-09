import React from 'react'
import { useFieldArray } from 'react-hook-form'
import {
  PairFieldBlock,
  StyledRemoveButton,
  StyledInputField,
  StyledAddButton,
} from '@/styled/blocks'

function PairFieldList(props) {
  const { name, control, register, labels } = props
  const { fields, append, remove } = useFieldArray({
    control,
    name: name,
  })

  return (
    <PairFieldBlock>
      {fields.map(({ id, key, value }, index) => {
        return (
          <div key={id}>
            <StyledInputField
              type="text"
              defaultValue={key}
              {...register(`${name}[${index}].key`)}
            />
            <StyledInputField
              type="text"
              defaultValue={value}
              {...register(`${name}[${index}].value`)}
            />
            <StyledRemoveButton type="button" onClick={() => remove(index)}>
              {labels.removeButton}
            </StyledRemoveButton>
          </div>
        )
      })}
      <StyledAddButton type="button" onClick={() => append({})}>
        {labels.addButton}
      </StyledAddButton>
    </PairFieldBlock>
  )
}

export default PairFieldList
