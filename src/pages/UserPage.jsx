import React from 'react'
import UserHeader from '../components/UserHeader'
import UserPost from '../components/UserPost'

const Userpage = () => {
  return (
    <>
    <UserHeader/>
    <UserPost likes={1200} replies={481} postImg="/post1.png" postTitle ="Lets talk abpit tech"/>
    <UserPost likes={559} replies={77} postImg="/post2.png" postTitle ="Lets talkpit tech"/>
    <UserPost likes={740} replies={245} postImg="/post3.png" postTitle ="i love this guy"/>
    <UserPost likes={557} replies={98} postTitle ="this is my talkit tech"/>

    </>
  )
}

export default Userpage