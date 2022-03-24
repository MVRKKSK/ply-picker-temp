import React, { useState } from 'react'


const Update = () => {

    const [open, setOpen] = useState(false)
    const [data, setData] = useState("")

    const handleSubmit = (e) => {
        setOpen(true)
        console.log(e.target.value)
    }

    const categories = [
        {
            "name": "kitchen",
            "id": "21",
            "image": "google.com"
        },
        {
            "name": "kitchen",
            "id": "21",
            "image": "google.com"
        },
        {
            "name": "kitchen",
            "id": "21",
            "image": "google.com"
        },
        {
            "name": "kitchen",
            "id": "21",
            "image": "google.com"
        }
    ]

    return (
        <div>
            <div>Update Component</div>
            <div>Update Category</div>
            <form>
                <select type="text" placeholder='enter your category' onChange={(e) => setData(e.target.value)}>
                    {categories.map((category) => (
                        <>
                            <option id={category.id}>
                                {category.name}
                            </option>

                        </>
                    ))}
                </select>
                <button type="submit" onSubmit={handleSubmit}>Update</button>
                

            </form>
            {open ? <>{data}</> : <>select a category first</>}
        </div>
    )
}

export default Update

