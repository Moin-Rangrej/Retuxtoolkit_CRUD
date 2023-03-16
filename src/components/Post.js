import React from 'react'
import { useSelector } from 'react-redux'

const Post = () => {
    const data = useSelector(state => state.app)    
    console.log(data);
    return (
        <>
            <div className='row mt-4 d-flex align-items-center justify-content-center'>
                <form>
                <div className='col-md-8'>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Search By ID</label>
                        <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <button type='submit' className='btn btn-primary mt-4'>FetchPost</button>
                        <button type='submit' className='btn btn-success ms-4 mt-4'>FetchPost</button>
                    </div>
                </div>
                </form>
            </div>
        </>
    )
}

export default Post
