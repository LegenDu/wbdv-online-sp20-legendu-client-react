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
                                    <h3 className="d-inline">{this.state.widget.title}</h3>
                                </div>
                                <div className="col-6 d-flex justify-content-end align-self-center">
                                    {
                                        this.state.widget.order !== 0 &&
                                        <span className="border px-2 py-1 mr-1 rounded"
                                              style={{backgroundColor: '#f0bc2e'}}
                                              onClick={() => this.props.changeWidgetOrder(this.state.widget.order, "UP")}>
                                            <i className="fas fa-arrow-up"/>
                                        </span>
                                    }
                                    {
                                        this.state.widget.order !== (this.props.widgetNum - 1) &&
                                        <span className="border px-2 py-1 mr-1 rounded" style={{backgroundColor: '#f0bc2e'}}
                                             onClick={() => this.props.changeWidgetOrder(this.state.widget.order, "DOWN")}>
                                            <i className="fas fa-arrow-down"/>
                                        </span>
                                    }
                                    <span className="float-right">
                                    <select className="custom-select" onChange={(e) => {
                                        const newType = e.target.value;
                                        let newTitle = "";
                                        if (newType === "HEADING")
                                            newTitle = "Heading Widget";
                                        this.setState(prevState => {
                                            this.state.widget.type = newType;
                                            this.state.widget.title = newTitle;
                                            return {
                                                widget: {
                                                    ...this.state.widget,
                                                    type: newType
                                                }
                                            }
                                        });
                                        this.props.updateWidget(this.state.widget.id, this.state.widget)
                                    }}
                                            value={this.state.widget.type}>
                                        <option value="HEADING">Heading</option>
                                        <option value="PARAGRAPH">Paragraph</option>
                                    </select>
                                </span>
                                    <span onClick={() => this.props.removeWidget(this.props.widget.id, this.props.widget.order)}>
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
                            <span className="btn btn-primary float-right"
                                  onClick={() => this.props.saveWidget(this.state.widget)}>save</span>
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