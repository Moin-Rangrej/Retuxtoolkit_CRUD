import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getPost, DeletePost, setEdit, updatePost } from '../features/PostSlice'
import Spinner from './Spinner'

const Post = () => {
    const {post,body,edit} = useSelector(state => state.app)
    const navigate = useNavigate()
    const [postid, setPostid] = useState("")
    const [textBody, settextBody] = useState("")
    const dispatch = useDispatch()
    useEffect(() => {
        if (body) {
            settextBody(body)
        }
    }, [body])
    const Handlepostdata = (e) => {
        e.preventDefault()
        if (postid === "") {
            window.alert("Plz Enter PostID")
        }
        else {
            dispatch(getPost({ postid }))
            setPostid("")
        }
    }
    const HandledeletePost = () => {
        dispatch(DeletePost({ postid }))
        window.location.reload()
        window.alert("Post Deleted")
    }
    return (
        <>
            <div className='row mt-4 d-flex align-items-center justify-content-center'>
                <form>
                    <div className='col-md-8'>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Search By ID</label>
                            <input type="number" className="form-control" value={postid} onChange={(e) => setPostid(e.target.value)} />
                            <button type='submit' className='btn btn-primary mt-4' onClick={Handlepostdata}>FetchPost</button>
                            <button type='submit' className='btn btn-success ms-4 mt-4' onClick={() => navigate('/createpost')}>CreatePost</button>
                        </div>
                    </div>
                </form>
            </div>
            <div className='container'>
                {post.loading ? (
                    <Spinner />
                ) : (
                    <>
                        {post.length !== 0 && (
                            <div className="card mt-4">
                                <div className="card-body">
                                    {/* <h4 className="card-title">{data.title.length>15 ? `${data.title.slice(0,15)}...` : data.title}</h4> */}
                                    <h4 className="card-title">{post.title}</h4>
                                    {
                                        edit ? (<>
                                            <div className="form-floating">
                                                <textarea className="form-control"
                                                    value={textBody}
                                                    onChange={e => settextBody(e.target.value)}
                                                />
                                                <button className="btn btn-primary"
                                                onClick={() => {
                                                    dispatch(updatePost({
                                                        postid:post.id,
                                                        title: post.title,
                                                        body:textBody
                                                    }))  
                                                    dispatch(setEdit({edit:false,body:""}))
                                                }} 
                                                >Save</button>
                                                <button className="btn btn-danger ms-4"
                                                onClick={() => dispatch(() => setEdit({edit:false,body:""}))}
                                                >Cancel</button>
                                            </div>
                                        </>) : (
                                            <>
                                                <p className="card-text" style={{ textTransform: 'capitalize' }}>{post.body}</p>
                                            </>
                                        )
                                    }
                                    {!edit && (
                                        <div>
                                            <button className="btn btn-primary" onClick={() => dispatch(setEdit({ edit: true, body: post.body }))}>Edit</button>
                                            <button className="btn btn-danger ms-4" onClick={HandledeletePost}>Delete</button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </>
                )}
            </div>
        </>
    )
}

export default Post
