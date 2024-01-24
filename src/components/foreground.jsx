import React, {useRef, useState} from "react";
import Card from "./card";


function Foreground() {

  const ref = useRef(null);

  const data =[

    
    {
      desc: "hello sameer.",
      filesize: ".10gb",
      close: false,
      tag: {isOpen: true, tagTitle: "Download Now", tagColor: "red"},
    },
    {
      desc: "Hello khuuram.",
      filesize: ".989mb",
      close: true,
      tag: {isOpen: true, tagTitle: "Upload", tagColor: "green"},
    },
    {
      desc: "Hello asad.",
      filesize: ".2gb",
      close: true,
      tag: {isOpen: true, tagTitle: "Upload", tagColor: "blue"},
    },
    {
      desc: "Hello nabeel.",
      filesize: ".2kb",
      close: true,
      tag: {isOpen: true, tagTitle: "Upload", tagColor: "blue"},
    },
    {
      desc: "Hello moiz.",
      filesize: ".600mb",
      close: true,
      tag: {isOpen: false, tagTitle: "Upload", tagColor: "blue"},
    },
  ];


  return (
    
      <div ref={ref} className="fixed z-[3] top-0 left-0 w-full h-full flex gap-10 flex-wrap p-5">
       {data.map((item, index)=>(
        <Card data={item} reference={ref}/>
       ))}
      </div>
    
  );
}

export default Foreground;
