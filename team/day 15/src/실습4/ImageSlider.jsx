import React, { useState } from 'react'
import './imageslider.css'

const ImageSlider = () => {

  const image = [`https://media.istockphoto.com/id/466173807/ko/%EC%82%AC%EC%A7%84/%EB%A0%88%EB%93%9C-ixora-coccinea-%EA%BD%83-%EC%97%B4%EB%8C%80-%EC%98%A4%EB%A0%8C%EC%A7%80-%EA%BD%83.webp?s=2048x2048&w=is&k=20&c=wMI_xL2e5IyWAaK7M6Td27p_AltTswssiYmsnHk3tpk=`,`https://media.istockphoto.com/id/1395952534/ko/%EC%82%AC%EC%A7%84/%EC%83%89%EC%83%81%ED%99%94-%EA%B5%AD%ED%99%94%EA%B3%BC%EC%9D%98-%EC%A0%95%EC%9B%90.jpg?s=2048x2048&w=is&k=20&c=cs-ITovKVLJjBNyuS8F-Qi71Nh2V-K9Z4ueKP-1FBsw=`,`https://cdn.pixabay.com/photo/2023/05/09/07/18/space-7980556_1280.jpg`]
  let [count,setCount] = useState(0)

  const onPrev = () => {
    if(count == 0) setCount(2)
    else setCount(count-1) 
  }

  const onNext = () => {
    if(count == 2)setCount(0)
    else setCount(count+1) 
  }

  return (
    <div className='imageslider'>
      <div className='image'>
        <img src={image[count]} alt="" />
      </div>
      <button onClick={onPrev}>{"이전"}</button>
      <button onClick={onNext}>{"다음"}</button>
    </div>
  )
}

export default ImageSlider