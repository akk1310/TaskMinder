import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, editTodo, toggleComplete } from '../features/todo/todoSlice'


const Todos = () => {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
    const [editingId, setEditingId] = useState(null)
    const [editText, setEditText] = useState('');
    const [isTodoEditable, setIsTodoEditable] = useState(false)


    const handleUpdate = (id) => {

        dispatch(editTodo({
            id,
            text: editText
        }))
        setEditingId(null)
        setEditText('')

    }

    const toggleCompleted = (id) => {
        dispatch(toggleComplete(id))


    }
    useEffect(() => {
        // Store todos in localStorage whenever they change
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    return (
        <>
            {/* <div>Todos</div> */}
            <ul className='list-none '>
                {todos.map((todo) => (

                    <li
                        className='mt-4 h-[90px] sm:h-[50px] w-[380px] sm:w-[500px] md:w-[740px] lg:w-[1000px] flex justify-between items-center bg-zinc-800 px-4 py-2 rounded'
                        key={todo.id}>

                        <input
                            type="checkbox"
                            className='cursor-pointer'
                            checked={todo.completed}
                            onChange={() => toggleCompleted(todo.id)}
                        // onChange={toggleCompleted(todo.id)}

                        />

                        {
                            editingId === todo.id ? (
                                <input
                                    type="text"
                                    value={editText}
                                    onChange={(e) => (setEditText(e.target.value))}
                                    className={`text-black h-[50px] sm:h-[30px] rounded p-1 ${todo.completed ? "line-through" : ""}`}
                                />

                            ) : (
                                <div className={`text-white ${todo.completed ? "line-through" : ""}`}>{todo.text}</div>
                            )
                        }

                        <div className='flex gap-5  sm:flex-row'>
                            <div className='text-white flex items-center text-sm sm:text-' >{todo.date}</div>
                            <div className='flex gap-4 flex-col items-center sm:flex-row'>

                                {
                                    editingId === todo.id ? (
                                        <button
                                            className='inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50'
                                            onClick={() => {
                                                if (todo.completed) return
                                                handleUpdate(todo.id)
                                            }}
                                            disabled={todo.completed}
                                        >
                                            📁
                                        </button>

                                    ) : (
                                        <button className='inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50'
                                            onClick={() => {
                                                setEditingId(todo.id)
                                                setEditText(todo.text)
                                                setIsTodoEditable((prev) => !prev)
                                            }}
                                            disabled={todo.completed}
                                        >
                                            ✏️
                                        </button>
                                    )
                                }

                                <button
                                    onClick={() => dispatch(removeTodo(todo.id))}
                                    className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-6 h-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>

                    </li>
                ))
                }

            </ul>

        </>
    )
}

export default Todos
