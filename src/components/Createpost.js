import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createPost } from '../features/PostSlice'
import Spinner from './Spinner'

const Createpost = () => {
  const [values, setValues] = useState({
    title: "",
    body: ""
  })
  const [showPost, setshowPost] = useState(false)
  const data = useSelector(state => state.app.post)
  // console.log(data);
  // const {loading,post} = createPostdata
  const { title, body } = values
  const dispatch = useDispatch()
  const navigate = useNavigate()
  console.log(showPost);
  const HandleCreatedata = (e) => {
    e.preventDefault()
    dispatch(createPost({ values }))
    setValues({ title: "", body: "" })
    setshowPost(true)
    console.log(showPost);
  }

  const showCreatePost = () => {
    return (
      <>
        <div className='container'>
          {data.loading ? (
            <Spinner />
          ) : (
            <>
              {data.length !== 0 && (
                <div className="card mt-4">
                  <div className="card-body">
                    {/* <h4 className="card-title">{data.title.length>15 ? `${data.title.slice(0,15)}...` : data.title}</h4> */}
                    <h4 className="card-title">{data.title}</h4>
                    <p className="card-text" style={{ textTransform: 'capitalize' }}>{data.body}</p>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </>
    )
  }

  return (
    <div>
      <h1 className='text-center bg-dark text-white p-2'>Create Post</h1>
      <form>
        <div className="mb-3">
          <input type="text" className="form-control"
            placeholder='Enter Post Title'
            value={title}
            onChange={(e) => setValues({ ...values, title: e.target.value })}
          />
        </div>
        <div className="form-floating">
          <textarea className="form-control" placeholder="Enter Post Description"
            value={body}
            onChange={(e) => setValues({ ...values, body: e.target.value })}
          />
          <label htmlFor="floatingTextarea">Comments</label>
        </div>
        <div>
          <button type='submit' className='btn btn-primary mt-4' onClick={() => navigate('/')}>Go Home</button>
          <button type='submit' className='btn btn-success ms-4 mt-4' onClick={HandleCreatedata}>Post</button>
        </div>
      </form>
      <div className='mt-4'>{showPost && <div>{showCreatePost()}</div>}</div>
    </div>
  )
}

export default Createpost
