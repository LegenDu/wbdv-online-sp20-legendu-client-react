import React from "react";


class ImageWidget extends React.Component{
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
                                                let newUrl = "";
                                                if (newType === "HEADING")
                                                    newValue = "Heading Widget";
                                                else if (newType === "PARAGRAPH")
                                                    newValue = "Paragraph Widget";
                                                else if (newType === "LIST"){
                                                    newValue = "List Widget";
                                                    newStyle = "UNORDERED";
                                                }
                                                this.setState(prevState => {
                                                    prevState.widget.type = newType;
                                                    prevState.widget.value = newValue;
                                                    prevState.widget.style = newStyle;
                                                    prevState.widget.url = newUrl;
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
                            <input className="form-control" type="text" placeholder="Image URL" value={this.state.widget.url}
                                   style={{width:'100%'}}
                                   onChange={(e) => {
                                       const newUrl = e.target.value;
                                       this.setState(prevState => {
                                           prevState.widget.url = newUrl;
                                           return prevState;
                                       })
                                   }}/>
                        </li>
                        <li className="list-group-item d-flex flex-column px-1 py-2">
                            <input className="form-control" type="text" placeholder="Widget Name" value={this.state.widget.name}
                                   style={{width:'100%'}}
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

                <li className="list-group-item px-1 py-2">
                    <img src={this.state.widget.url} style={{width: "100%"}}></img>
                </li>
            </ul>
        )
    }
}

export default ImageWidget