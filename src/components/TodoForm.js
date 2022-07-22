import React, { useState }  from "react";

const TodoForm = ({addTodo}) =>{
  const [judul, setJudul] = useState('')

  const handleChange = (event) => {
    setJudul(event.currentTarget.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    addTodo(judul)
    setJudul('')
  }


  return(
  <div style={{marginBottom: '32px'}}>
  <form onSubmit={handleSubmit}>
    <input
      type='text'
      placeholder='Add your ToDo'
      style={{height: '66px', width: '40%', fontSize: '16px'}}
      onChange={handleChange}
      value={judul}
    />
    <button style={{height: '72px', fontSize: '16px'}}>Add ToDo</button>
  </form>
</div>
)
}

export default TodoForm