import EventsEmitter from '../EventsEmitter';
import jQuery from 'jquery';
/////////////////////////////////////////////////////////////////////
//
//
/////////////////////////////////////////////////////////////////////
export default class TreeNode extends EventsEmitter {
  /////////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////////
  constructor(properties) {
    super();

    Object.assign(this, properties);
  }

  /////////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////////
  destroy() {}
}

/////////////////////////////////////////////////////////////////////
//
//
/////////////////////////////////////////////////////////////////////
jQuery.fn.insertAt = function(index, element) {
  const lastIndex = this.children().length;

  this.append(element);

  if (index < lastIndex) {
    this.children()
      .eq(index)
      .before(this.children().last());
  }

  return this;
};
