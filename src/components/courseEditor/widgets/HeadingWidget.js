import React from "react";
import { connect } from "react-redux";

class HeadingWidget extends React.Component{
    state = {
        editing: this.props.editing,
        widget: this.props.widget,
    }
    componentDidUpdate(prevProps) {
        if(this.props.editing !== prevProps.editing)
            this.setState({
                editing: this.props.editing
            })
    }
    render() {
        return(
            <ul className={`list-group round px-3 py-2 m-0 ${this.props.previewMode ? '': 'border'}`}>
                {
                    !this.props.previewMode &&
                        <div className="p-0 m-0">
                            <li className="list-group-item p-0 m-0">
                                <div className="row">
                                    <div className="col-7">
                                        <h3 className="d-inline">{this.state.widget.title}</h3>
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
                                                let newStyle = "";
                                                let newTitle = "";
                                                if (newType === "PARAGRAPH")
                                                    newTitle = "Paragraph Widget";
                                                else if(newType === "LIST") {
                                                    newTitle = "List Widget";
                                                    newStyle = "UNORDERED";
                                                }
                                                else if(newType === "IMAGE")
                                                    newTitle = "Image Widget";
                                                this.setState(prevState => {
                                                    prevState.widget.type = newType;
                                                    prevState.widget.title = newTitle;
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
                                <input className="form-control" type="text" placeholder="Heading Text" value={this.state.widget.text} style={{width:'100%'}}
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
                                            const newSize = parseInt(e.target.value)
                                            this.setState(prevState => {
                                                prevState.widget.size = newSize
                                                return prevState
                                            })}}
                                        value={this.state.widget.size}>
                                    <option value={1}>Heading 1</option>
                                    <option value={2}>Heading 2</option>
                                    <option value={3}>Heading 3</option>
                                    <option value={4}>Heading 4</option>
                                    <option value={5}>Heading 5</option>
                                    <option value={6}>Heading 6</option>
                                </select>
                            </li>
                            <li className="list-group-item px-1 py-2">
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
                    <div className="row p-0 m-0">
                        {this.state.widget.size === 1 && <h1 className="d-inline">{this.state.widget.text}</h1>}
                        {this.props.widget.size === 2 && <h2 className="d-inline">{this.state.widget.text}</h2>}
                        {this.state.widget.size === 3 && <h3 className="d-inline">{this.state.widget.text}</h3>}
                        {this.props.widget.size === 4 && <h4 className="d-inline">{this.state.widget.text}</h4>}
                        {this.props.widget.size === 5 && <h5 className="d-inline">{this.state.widget.text}</h5>}
                        {this.props.widget.size === 6 && <h6 className="d-inline">{this.state.widget.text}</h6>}
                    </div>
                </li>
            </ul>
        )
    }
}

export default HeadingWidget