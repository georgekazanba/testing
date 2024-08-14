import React from "react";
import Entry from "./entry";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const EntryList = ({posts, title, remove}) => {

  // чтобы не орало о findDOMNode
  const nodeRef = React.useRef(null);
  if (!posts.length){
    return (
      <div>моментов пока что нет...</div>
    )
  }
  return (
        <div>
        <h2>{title}</h2>
        {/* вывод нескольких записей с полученными данными */}
        {/* number и post собираются в один массив/объект props */}
        <TransitionGroup>
            {posts.map((post, index) => 
              <CSSTransition
              nodeRef={nodeRef}
                key={index}
                timeout={500}
                classNames="entry"
              >
                <Entry remove={remove} number={index + 1} post={post}/>
              </CSSTransition>
            )}
        </TransitionGroup>

      </div>
    )
}

export default EntryList;