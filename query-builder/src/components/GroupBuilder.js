import React, { Component } from 'react'
import QueryInputs from './queryInputs/QueryInputs';
import '../css/GroupBuilder.css'
import { addRule, deleteQueryFun, deleteRules, savingQuery } from '../actions/QueryActions';
import { connect } from 'react-redux';

class GroupBuilder extends Component {
    state = {
        queryFilterArray: [{ id: 1, input: <QueryInputs /> }],
        queryFilterArrayIndex: 1,
        isSelected: '&&'
    }

    decideId = () => {
        return this.props.queryArray[this.getGroupIndex(this.props.group.id)].rule[this.props.queryArray[this.getGroupIndex(this.props.group.id)].rule.length - 1].id + 1
    }

    getGroupIndex = (groupId) => {
        return this.props.queryArray.findIndex((groupObj => groupObj.id == groupId))
    }
    render() {
        const handleAddFilter = () => {
            // let tempArray = this.state.queryFilterArray;
            // tempArray.push({ id: this.state.queryFilterArrayIndex + 1, input: <QueryInputs /> });
            // this.setState({ queryFilterArray: tempArray, queryFilterArrayIndex: this.state.queryFilterArrayIndex + 1 })
            // this.props.dispatch(savingQuery(this.state.isSelected))


            let payload = {
                groupId: this.props.group.id,
                rule: [{
                    id: this.decideId(),
                    field: '',
                    condition: '',
                    criteria: '',
                    conditionSymbol: this.state.isSelected
                }]
            }

            this.props.dispatch(addRule(payload));
            this.setState({ queryFilterArrayIndex: this.state.queryFilterArrayIndex + 1 })
        }

        const handleDeleteFilter = (id) => {
            // let tempArr = this.state.queryFilterArray.filter((ele) => ele.id !== id);
            // this.setState({ queryFilterArray: tempArr })
            // this.props.dispatch(deleteQueryFun(id - 1));
            let temp = {
                groupId: this.props.group.id,
                ruleId: id
            }
            this.props.dispatch(deleteRules(temp));
            this.setState({ queryFilterArrayIndex: this.state.queryFilterArrayIndex + 1 })
        }

        const handleConditionClick = (condition) => {
            this.setState({ isSelected: condition });
        }

        return (
            <div>
                <div>

                    <div className="flex-box ml-16">
                        <button className={(this.state.isSelected === '&&') ? 'btn blue-btn border-right-none' : 'btn gray-btn border-right-none'} onClick={() => handleConditionClick('&&')} >And</button>
                        <button className={(this.state.isSelected === '||') ? 'btn blue-btn border-left-none' : 'btn gray-btn border-left-none'} onClick={() => handleConditionClick('||')}>Or</button>
                    </div>

                    {this.props.queryArray[this.getGroupIndex(this.props.group.id)].rule && this.props.queryArray[this.getGroupIndex(this.props.group.id)].rule.map((rule, index) => (
                        <div key={rule.id} className="flex-box flex-wrap align-item-flex-end">
                            <div >{<QueryInputs group={this.props.group} rule={rule} />}</div>
                            {(index >= 1) ? (
                                <button onClick={() => handleDeleteFilter(rule.id)} className="delete-btn m-16"> <span className="deleteIcon"></span> </button>

                            ) : ''}
                        </div>
                    ))}
                </div>

                <button className="btn blue-btn ml-16" onClick={handleAddFilter} > + Add Filter</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    queryArray: state.queryReducers.groupRule
})

export default connect(mapStateToProps)(GroupBuilder);