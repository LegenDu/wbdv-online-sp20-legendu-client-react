import React from "react";

class ParagraphWidget extends React.Component {
    state = {
        editing: this.props.editing,
        widget: this.props.widget
    }
    render() {
        return(
            <ul className={`list-group round px-3 py-2 m-0 ${this.props.previewMode ? '': 'border'}`}>
                {
                    !this.props.previewMode &&
                    <div className="p-0 m-0">
                        <li className="list-group-item p-0">
                            <div className="row">
                                <div className="col-6">
                                    <h3 className="d-inline">{this.state.widget.value}</h3>
                                </div>
                                <div className="col-6 d-flex justify-content-end align-self-center">
                                    {
                                        this.state.widget.widOrder !== 0 &&
                                        <span className="border px-2 py-1 mr-1 rounded"
                                              style={{backgroundColor: '#f0bc2e'}}
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
                                        else if(newType === "LIST") {
                                            newValue = "List Widget";
                                            newStyle = "UNORDERED";
                                        }
                                        else if(newType === "IMAGE")
                                            newValue = "Image Widget";
                                        this.setState(prevState => {
                                            prevState.widget.type = newType;
                                            prevState.widget.value = newValue;
                                            prevState.widget.style = newStyle;
                                            return prevState
                                        });
                                        this.props.updateWidget(this.state.widget.id, this.state.widget)
                                    }}
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
                            <textarea className="form-control" placeholder="Paragraph Text" value={this.state.widget.text}
                                  onChange={(e) => {
                                      const newText = e.target.value;
                                      this.setState(prevState => {
                                          this.state.widget.text = newText;
                                          prevState.widget.text = newText;
                                          return prevState
                                      })
                                  }}/>
                        </li>
                        <li className="list-group-item px-1 py-2">
                            <input className="form-control" type="text" placeholder="Widget Name"
                                   value={this.state.widget.name}
                                   style={{width: '100%'}}
                                   onChange={(e) => {
                                       const newName = e.target.value;
                                       this.setState(prevState => {
                                           prevState.widget.name = newName;
                                           return prevState;
                                       })
                                   }}/>
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
                <li className="list-group-item px-1 pt-0">
                    <p>{this.state.widget.text}</p>
                </li>
            </ul>
        )
    }
}

export default ParagraphWidget