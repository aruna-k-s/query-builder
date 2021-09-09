import React, { Component } from 'react'
import GroupBuilder from './GroupBuilder'
import "../css/QueryBuilder.css"
import { connect } from 'react-redux'
import { addGroup, deleteGroups } from '../actions/QueryActions'

class QueryBuilder extends Component {

    state = {
        groupFilterArray: [{ id: 1, input: <GroupBuilder /> }],
        groupFilterArrayIndex: 1
    }
    render() {

        const handleAddFilter = () => {
            // let tempArray = this.state.groupFilterArray;
            // tempArray.push({ id: this.state.groupFilterArrayIndex + 1, input: <GroupBuilder /> });
            // this.setState({ groupFilterArray: tempArray, groupFilterArrayIndex: this.state.groupFilterArrayIndex + 1 })

            let group = {
                id: this.props.queryReducers[this.props.queryReducers.length - 1].id + 1, rule: [{
                    id: 1,
                    field: '',
                    condition: '',
                    criteria: ''
                }]
            }

            this.props.dispatch(addGroup(group));
            this.setState({ groupFilterArrayIndex: this.state.groupFilterArrayIndex })
        }

        const handleDeleteFilter = (id) => {
            // let tempArr = this.state.groupFilterArray.filter((ele) => ele.id !== id);
            // this.setState({ groupFilterArray: tempArr })
            let temp = {
                groupId: id
            }
            this.props.dispatch(deleteGroups(temp));
        }


        return (
            <div>

                {/* {this.state.groupFilterArray.map((e, index) => (
                    <div>
                        <div className="group-filter">
                            <div key={e.id}>
                                <div className="rule-group p-16">{e.input}</div>

                            </div>
                        </div>
                        <div className="group-btn-section">
                            {(index == this.state.groupFilterArray.length - 1) ? (<button className="btn blue-btn " onClick={handleAddFilter}> + Add queryReducers group filter</button>) : ''}
                            {(index >= 1) ? (<button className="btn gray-btn f-right" onClick={() => handleDeleteFilter(e.id)}>Delete Group</button>) : ''}
                        </div>
                    </div>

                ))} */}

                {this.props.queryReducers && this.props.queryReducers.map((group, index) => (
                    <div>
                        <div className="group-filter">
                            <div key={group.id}>
                                <div className="rule-group p-16">
                                    {/* {group.rule.map(rule => ( */}
                                        <GroupBuilder rule={group.rule} group={group} />
                                    {/* ))} */}
                                </div>

                            </div>
                        </div>
                        <div className="group-btn-section">
                            {(index == this.props.queryReducers.length - 1) ? (<button className="btn blue-btn " onClick={handleAddFilter}> + Add new group filter</button>) : ''}
                            {(index >= 1) ? (<button className="btn gray-btn f-right" onClick={() => handleDeleteFilter(group.id)}>Delete Group</button>) : ''}
                        </div>
                    </div>

                ))}

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    queryReducers: state.queryReducers.groupRule
})

export default connect(mapStateToProps)(QueryBuilder);