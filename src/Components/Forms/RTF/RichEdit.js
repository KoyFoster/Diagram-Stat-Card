/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable no-return-assign */
import React, { useState } from 'react';
import './RE.css';

// Steps to accomplishing this
// tracking caret positions
// Tracking current context
// 1. This context could be as simple as track element is focused,
// which would mean you would be editing that element
//  a. Adding text only add to that element
//  b. subtracting from the current element would involve an index check
//   i. if at the begginning, then affect the previous element or do nothing if at the start of editor
//  c. modifying the style of the currently element would either mod the current character or
//  mod the current sel
//   i. modifying the current select would or could involve several selected elements.
//   ii. Might be worth creating sel logic before this step.

// TODO: Max Text
const RichEdit = (props) => {
  // key states: ctrl, etc
  const [ctrl, setCtrl] = useState(false);

  const { overflow } = props;
  // eslint-disable-next-line no-unused-vars
  let temp = [];
  const [elements, Update] = useState([
    { style: { fontWeight: 'initial' }, value: 'One' },
    { style: { fontWeight: 'bold' }, value: 'Two' },
    { style: { fontWeight: 'initial' }, value: 'Three' },
  ]);
  const [elemRange, setElemRange] = useState({
    min: { id: undefined, extent: undefined },
    max: { id: undefined, extent: undefined },
  });

  const [sel, setSel] = useState(0);
  const [caretPos] = useState(
    <div
      className="cursor-caret"
      id="cursor-caret"
      style={{
        width: '2px',
        // height: `100%`,
      }}
    />,
  );

  const onElemSel = (e) => {
    // console.warn(`Sel Elm id:`, e.target.id);
  };

  const RenderElement = ({ elem, index }) => {
    return (
      <div
        tabIndex="0"
        id={index}
        key={index}
        style={{ ...elem.style }}
        onClick={(e) => onElemSel(e)}
      >
        {elem.value}
      </div>
    );
  };

  const RenderElements = (props) => {
    const { elems } = props;
    const { index } = props;
    // console.warn(`RenderElements: ${JSON.stringify(elems)}, ${index}`);

    let id = index ? index : 0;
    return elems.map((l) => {
      return <RenderElement elem={l} index={id++}></RenderElement>;
    });
  };

  // const renderSelection = () => {
  //   return <div style={elements[sel].style}>{elements[sel].value}</div>;
  // };

  const handleKey = (key) => {
    // console.warn('handleKey:', key);

    elements[sel].value = elements[sel].value + key;
    Update([...elements]);
  };

  const removeCurElement = () => {
    elements.splice(sel, 1);

    return sel - 1;
  };

  const addNewElement = () => {
    const newElem = { style: { ...elements[sel].style }, value: '' };

    // add element
    elements.push(newElem);

    return newElem;
  };

  const handleSpecialKeyCombo = (key) => {
    // console.warn('handleSpecialKeyCombo:', key);

    if (ctrl) {
      if (key === 'b') {
        // add element
        const elem = addNewElement();
        const newSel = sel + 1;

        // style new element
        const { style } = elem;
        style.fontWeight = style.fontWeight === 'bold' ? 'normal' : 'bold';

        setSel(newSel);
        Update([...elements]);
      }
    }
  };

  const handleSpecialKeyDown = (key) => {
    if (key == 'Backspace') {
      if (elements[sel].value !== '') {
        elements[sel].value = elements[sel].value.slice(
          0,
          elements[sel].value.length - 1,
        );
      } else {
        const newSel = removeCurElement();

        if (newSel > -1) {
          elements[newSel].value = elements[newSel].value.slice(
            0,
            elements[newSel].value.length - 1,
          );
          setSel(newSel);
        }
      }
      Update([...elements]);
    }
  };

  const handleSpecialStates = (key, down = false) => {
    // console.warn('handleSpecialStates:', { key, down });
    if (key === 'Control') {
      setCtrl(down);
    }
  };

  const CaptionBar = (prop) => {
    return (
      <div style={{ display: 'flex' }}>
        <button>{ctrl ? 'CTRL' : 'ctrl'}</button>
      </div>
    );
  };

  const splitByMinMax = (value, min, max) => {
    if (!value) return [];

    const results = [
      value.substring(0, min - 1),
      value.substring(min, max),
      value.substring(max + 1, value.length),
    ];
    return results;
  };

  const RenderSelected = () => {
    let selElm = undefined;

    // 1. build new elements to replace selected elements
    //   z. This can be done by taking the elements objects and splitting them
    //   a. There can only be 2 maximum modified elements with tradition selection
    //    i.  Maybe in the future I will allow vertical selections
    // 2.

    // for loop
    let { min, max } = elemRange;
    // flip minmax if needed
    if (min.id > max.id) {
      min = elemRange.max;
      max = elemRange.min;
    }

    console.warn({ min, max });
    let minID = min.id;
    let i = minID;
    const maxID = max.id;
    const list = [];

    // Get Range of elements
    for (i; i <= maxID; i++) {
      // check if element needs to be split
      let elem = elements[i];
      const { value } = elem;
      list.push(elem);
    }

    // now handle first and last elements
    if (list.length > 0) {
      if (list.length > 1) {
        const first = list.splice(0, 1)[0];
        const last = list.splice(list.length - 1, 1)[0];

        // handle min
        let split = splitByMinMax(first.value, min.extent, first.value.length);

        // iterate through split results
        let buffer = [];
        split.forEach((val) => {
          if (val) {
            buffer.push({ ...first, value: val });
          }
        });
        list.splice(0, 0, ...buffer);

        // handle max
        split = splitByMinMax(last.value, 0, max.extent);

        // iterate through split results
        buffer = [];
        split.forEach((val) => {
          if (val) {
            buffer.push({ ...last, value: val });
          }
        });
        list.splice(list.length, 0, ...buffer);
      } else {
        // handle only element
        const first = list.splice(0, 1)[0];

        const split = splitByMinMax(first.value, min.extent, max.extent);

        // iterate through split results
        const buffer = [];
        split.forEach((val) => {
          if (val) {
            buffer.push({ ...first, value: val });
          }
        });

        list.splice(0, 0, ...buffer);
      }
    }

    minID = elemRange.min.id;

    // console.warn(`RenderSelected: ${JSON.stringify(list)}, ${minID}`);
    return <RenderElements elems={list} index={minID}></RenderElements>;
  };

  return (
    <div
      tabIndex="0" // requires for onkey events
      style={{
        border: '2px dashed green',
        width: '512px',
        height: '256px',
        background: '#BBBBBB',
      }}
      onKeyPress={(e) => {
        handleKey(e.key);
      }}
      onKeyDownCapture={(e) => {
        handleSpecialStates(e.key, true);
        handleSpecialKeyCombo(e.key);
        handleSpecialKeyDown(e.key);
      }}
      onKeyUpCapture={(e) => {
        handleSpecialStates(e.key, false);
      }}
      // onKeyPress

      // onHighlight
      // console.warn('sel:', elements[sel]);
      // console.warn('getSelection:', window.getSelection());
      // anchorNode to extentNode
      // anchorNode.parentElement.id to extentNode.parentElement.id
      // The above should get the the range of elements to work with

      // More details:
      // selection {anchorNode: text, anchorOffset: 0, focusNode: text, focusOffset: 3, isCollapsed: false, …}
      // anchorNode: text
      // anchorOffset: 0
      // baseNode: text
      // baseOffset: 0
      // extentNode: text
      // extentOffset: 3
      // focusNode: text
      // focusOffset: 3
      // isCollapsed: false
      // rangeCount: 1
      // type: "Range"
      onMouseUp={() => {
        const min = {
          // elem: window.getSelection().anchorNode.parentElement,
          id: window.getSelection().anchorNode.parentElement.id,
          extent: window.getSelection().anchorOffset,
        };

        // const startChar
        const max = {
          // elem: window.getSelection().extentNode.parentElement,
          id: window.getSelection().extentNode.parentElement.id,
          extent: window.getSelection().extentOffset,
        };

        // console.warn('Range: \n', min, '\n', max);
        // console.warn('Range:', window.getSelection());
        setElemRange({ min, max });
      }}
    >
      <CaptionBar></CaptionBar>
      <div
        style={{
          display: 'flex',
          overflow: overflow,
          border: '2px dashed grey',
        }}
      >
        <RenderElements elems={elements}></RenderElements>
        {caretPos}
      </div>
      {/* Debugger */}
      <div
        style={{
          display: 'flex',
          overflow: overflow,
          border: '2px dotted red',
          whiteSpace: 'pre',
        }}
      >
        Debugger: {'\n'} sel: {sel} {'\n'}
        elemRange:{' '}
        {elemRange.length > 0
          ? `(${elemRange.min.id},${elemRange.max.id}) (${elemRange.max.extent},${elemRange.max.extent})`
          : 'No Selection'}
        <RenderSelected />
      </div>
    </div>
  );
};

export default RichEdit;
