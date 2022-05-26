import React from "react";
import { Tag } from "antd";
import { commonPropTypes, tagPropTypes } from "./attributePropTypes";
import { commonDefaultProps, tagDefaultProps } from "./attributeDefaultProps";


class TagAttribute extends React.Component {

  readElement() {
    if (!this.props.value || !this.props.value.length) {
      return '-'
    }
    if (this.props.tagMode === 'multiple') {
      return (
        <>
          {this.props.value.map((value) => (<Tag key={value}>{value}</Tag>))}
        </>
      );
    }
    return <Tag>{this.props.value}</Tag>
  }

  writeElement() {
    return (
      <div className="attribute-input-container">
        Non implémenté
      </div>
    )
  }

  render() {
    if (this.props.editMode) {
      return this.writeElement();
    } else {
      return (
        <div className="attribute-value">
          {this.readElement()}
        </div>
      );
    }
  }
}

TagAttribute.defaultProps = {
  ...commonDefaultProps,
  ...tagDefaultProps,
}

TagAttribute.propTypes = {
  ...commonPropTypes,
  ...tagPropTypes,
};

export default TagAttribute;