import React from 'react'
import './block.css'

export default () => (
  <div className='block-top'>
    <div className='block-width'>
      <p>In the block with fixed width, left and right margin auto</p>
    </div>
    <div className='block-width-max'>
      <p>In the block with max width</p>
    </div>
    <div className='one'>
      <p>In the block with max width asdas dadasd asdasdw okhcxv; sdfsadj vcxvv</p>
    </div>
    <div className='two'>
      <p>In the block with max width, saldjasd a dasd  ad andad  adajsapvpvjwenv</p>
    </div>
    <div id="parent">
      <div id="child">
        Fusce pulvinar vestibulum eros, sed luctus ex lobortis quis.
      </div>
    </div>
    <div className="simple">
      I'm smaller ...
    </div>
    <div className="fancy">
      This is bigger!
    </div>
    <div className="simple-box">
      the same width
    </div>
    <div className="fancy-box">
      same width as the above, though this has padding
    </div>
    <div className="relative1">
      relative behaves the same as static unless you add some extra properties.
    </div>
    <div className="relative2">
      Setting the top, right, bottom, and left properties of a relatively-positioned element will cause it to be adjusted away from its normal position. Other content will not be adjusted to fit into any gap left by the element.
    </div>
    <div className="fixed">
      like relative, fixed need add some extra properties. asdsad asdas asdowljdsjv dfdskdfjsdlfJEWE; FffewofjJLJKFDDSLJFFf
    </div>
    <div className="relative">
      This element is relatively-positioned. If this element was position: static; its absolutely-positioned child would escape and would be positioned relative to the document body.
    </div>
    <div className="absolute">
      This element is absolutely-positioned. It's positioned relative to its parent. Abosulte 1212 2321987 9123721987129 123982719237 129732193712312 9 129371298371273 1293712 312 102371231 1027 12301 23102371023701237107  absolute
    </div>
  </div>
)

