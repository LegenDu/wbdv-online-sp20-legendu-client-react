import React from "react";


class ListWidget extends React.Component{
    state = {
        editing: this.props.editing,
        widget: this.props.widget,
    };
    componentDidUpdate(prevProps) {
        if(this.props.editing !== prevProps.editing)
            this.setState({
                editing: this.props.editing
            })
    }
    render(){
        return(
            <ul className={`list-group round px-3 py-2 m-0 ${this.props.previewMode ? '': 'border'}`}>
                {
                    !this.props.previewMode &&
                    <div className="p-0 m-0">
                        <li className="list-group-item p-0 m-0">
                            <div className="row">
                                <div className="col-7">
                                    <h3 className="d-inline">{this.state.widget.value}</h3>
                                </div>
                                <div className="col-5 d-flex justify-content-end align-self-center">
                                    {
                                        this.state.widget.widOrder !== 0 &&
                                        <span className="border px-2 py-1 mr-1 rounded" style={{backgroundColor: '#f0bc2e'}}
                                              onClick={() => this.props.changeWidgetOrder(this.state.widget.widOrder, "UP")}>
                                            <i className="fas fa-arrow-up"/>
                                            </span>
                                    }
                                    {
                                        this.state.widget.widOrder !== (this.props.widgetNum - 1) &&
                                        <span className="border px-2 py-1 mr-1 rounded" style={{backgroundColor: '#f0bc2e'}}
                                              onClick={() => this.props.changeWidgetOrder(this.state.widget.widOrder, "DOWN")}>
                                                    <i className="fas fa-arrow-down"/>
                                                </span>
                                    }

                                    <span className="float-right">
                                            <select className="custom-select" onChange={(e) => {
                                                const newType = e.target.value;
                                                let newValue = "";
                                                let newStyle = "";
                                                if (newType === "HEADING")
                                                    newValue = "Heading Widget";
                                                else if (newType === "PARAGRAPH")
                                                    newValue = "Paragraph Widget";
                                                else if(newType === "IMAGE")
                                                    newValue = "Image Widget";
                                                this.setState(prevState => {
                                                    prevState.widget.type = newType;
                                                    prevState.widget.value = newValue;
                                                    prevState.widget.style = newStyle;
                                                    return prevState
                                                });
                                                this.props.updateWidget(this.state.widget.id, this.state.widget)}}
                                                    value={this.state.widget.type}>
                                                <option value="HEADING">Heading</option>
                                                <option value="PARAGRAPH">Paragraph</option>
                                                <option value="LIST">List</option>
                                                <option value="IMAGE">Image</option>
                                            </select>
                                        </span>
                                    <span onClick={() => this.props.removeWidget(this.props.widget.id, this.props.widget.widOrder)}>
                                            <i className="fas fa-times-circle fa-2x" style={{color: 'red'}}/>
                                        </span>
                                </div>
                            </div>
                        </li>
                        <li className="list-group-item px-1 py-2">
                            <textarea className="form-control" placeholder="Enter one list item per line" value={this.state.widget.text}
                                      onChange={(e) => {
                                          const newText = e.target.value;
                                          this.setState(prevState => {
                                              this.state.widget.text = newText;
                                              prevState.widget.text = newText;
                                              return prevState
                                          })
                                      }}/>
                        </li>
                        <li className="list-group-item d-flex flex-column px-1 py-2">
                            <select className="custom-select" style={{width: '100%'}}
                                    onChange={(e) => {
                                        const newStyle = e.target.value
                                        this.setState(prevState => {
                                            prevState.widget.style = newStyle
                                            return prevState
                                        })}}
                                    value={this.state.widget.style}>
                                <option value="UNORDERED">Unordered List</option>
                                <option value="ORDERED">Ordered List</option>
                            </select>
                        </li>
                        <li className="list-group-item px-1 pt-0">
                            <h3 className="d-inline">Preview</h3>
                            {
                                !this.props.orderChanged &&
                                <span onClick={()=> this.props.saveWidget(this.state.widget)}
                                      className="btn btn-primary float-right">Save</span>
                            }
                        </li>
                    </div>
                }

                <li className="list-group-item px-1 py-2">
                    <ul className="list-unstyled p-0 m-0">
                        {
                            this.state.widget.style && this.state.widget.style === "UNORDERED" &&
                            <ul>
                                {this.state.widget.text && this.state.widget.text.split(/[\s\n]/).map(text =>
                                    <li className="p-0">{text}</li>
                                )}
                            </ul>
                        }
                        {
                            this.state.widget.style && this.state.widget.style === "ORDERED" &&
                            <ol>
                                {this.state.widget.text && this.state.widget.text.split(/[\s\n]/).map(text =>
                                    <li className="p-0">{text}</li>
                                )}
                            </ol>
                        }
                    </ul>
                </li>
            </ul>
        )
    }
}

export default ListWidget