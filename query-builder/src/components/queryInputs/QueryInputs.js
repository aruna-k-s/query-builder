import React, { Component } from 'react'
import "../../css/QueryInputs.css"
import Select from 'react-select';
import * as options from './QueryInputValues';
import { connect } from 'react-redux';
import {
    savingQuery,
    criteriaAreaFun,
    fieldAreaFun,
    conditionAreaFun,
    updateInp
} from '../../actions/QueryActions';

class QueryInputs extends Component {

    state = {
        defaultValue: "",
        criteriaOptions: [{ value: 'no value', label: 'No field selected' }],
    }

    setCategariesOptions = (field) => {
        switch (field.value) {
            case 'Theme':
                this.setState({ criteriaOptions: options.themeCriteriaOptions })
                break;
            case 'Sub-theme':
                this.setState({ criteriaOptions: options.subThemeCriteriaOptions })
                break;
            case 'Reason':
                this.setState({ criteriaOptions: options.reasonCriteriaOptions })
                break;
            case 'Language':
                this.setState({ criteriaOptions: options.languageCriteriaOptions })
                break;
            case 'Source':
                this.setState({ criteriaOptions: options.sourceCriteriaOptions })
                break;
            case 'Rating':
                this.setState({ criteriaOptions: options.ratingCriteriaOptions })
                break;
            case 'Time Period':
                this.setState({ criteriaOptions: options.timePeriodCriteriaOptions })
                break;
            case 'Customer ID':
                this.setState({ criteriaOptions: options.customerIdCriteriaOptions })
                break;

            default:
                break;
        }
    }

    getIndex = (group, ruleId) => {
        return group.rule.findIndex(ruleObj => ruleObj.id == ruleId)
    }

    render() {
        const colourStyles = {
            control: styles => ({
                ...styles, backgroundColor: '#3e4045', color: "#fffff",
                outline: "none",
                border: '1px solid transparent',
                boxShadow: 'none',
                ':hover': {
                    border: '1px solid transparent',
                    boxShadow: 'none',
                }
            }),
            container: styles => ({
                ...styles, border: "1px solid #404348",
                ':active': {
                    ...styles[':active'],
                    borderColor: '#404348',
                },
            }),
            option: (styles, { data, isDisabled, isFocused, isSelected }) => {
                return {
                    ...styles,
                    margin: '0px 10px',
                    width: 'calc(100% - 20px)',
                    textAlign: 'left',
                    color: '#ffffff',
                    fontFamily: "Inter",
                    backgroundColor: isSelected
                        ? '#282B30'
                        : isFocused
                            ? '#282B30'
                            : null,
                    ':active': {
                        ...styles[':active'],
                        backgroundColor: isSelected ? '#383a3f' : '#3e4045',
                    },
                    ':hover': {
                        ...styles[':active'],
                        backgroundColor: '#383a3f',
                    },
                };
            },
            input: styles => ({
                ...styles, backgroundColor: "#3e4045", color: '#ffffff80',

                ':active': {
                    ...styles[':active'],
                    'border': '1px solid #404348',
                    outline: 'none'
                },
            }),
            singleValue: styles => ({ ...styles, color: '#ffffff80' }),
            menu: styles => ({
                ...styles,
                backgroundColor: '#282B30',
                border: '1px solid #404348',
                boxSizing: 'border-box'
            }),
            dropdownIndicator: styles => ({
                ...styles,
                color: '#7E8083',
                ':hover': {
                    color: '#7E8083'
                }
            }),
            indicatorSeparator: styles => ({
                ...styles,
                backgroundColor: 'transparent'
            }),
        };

        const handleFieldChange = (field) => {
            this.setCategariesOptions(field);
            // this.props.dispatch(fieldAreaFun('"' + field.value + '"'));
            const ruleIndex = this.getIndex(this.props.group, this.props.rule.id)
            let temp = {
                groupId: this.props.group.id,
                ruleId: this.props.rule.id,
                rule: {
                    id: this.props.group.rule[ruleIndex].id,
                    field: '"' + field.value + '"',
                    condition: this.props.group.rule[ruleIndex].condition,
                    criteria: this.props.group.rule[ruleIndex].criteria,
                    conditionSymbol: this.props.group.rule[ruleIndex].conditionSymbol
                }
            }

            this.props.dispatch(updateInp(temp));
        }

        const handleConditionChange = (condition) => {
            // this.props.dispatch(conditionAreaFun(condition.value));
            const ruleIndex = this.getIndex(this.props.group, this.props.rule.id)
            let temp = {
                groupId: this.props.group.id,
                ruleId: this.props.rule.id,
                rule: {
                    id: this.props.group.rule[ruleIndex].id,
                    field: this.props.group.rule[ruleIndex].field,
                    condition: condition.value,
                    criteria: this.props.group.rule[ruleIndex].criteria,
                    conditionSymbol: this.props.group.rule[ruleIndex].conditionSymbol
                }
            }
            this.props.dispatch(updateInp(temp));
        }

        const ruleIndex = this.getIndex(this.props.group, this.props.rule.id);

        const handleCriteriaChange = (criteria) => {
            // this.props.dispatch(criteriaAreaFun('"' + criteria.value + '"'));
            let temp = {
                groupId: this.props.group.id,
                ruleId: this.props.rule.id,
                rule: {
                    id: this.props.group.rule[ruleIndex].id,
                    field: this.props.group.rule[ruleIndex].field,
                    condition: this.props.group.rule[ruleIndex].condition,
                    criteria: '"' + criteria.value + '"',
                    conditionSymbol: this.props.group.rule[ruleIndex].conditionSymbol
                }
            }
            this.props.dispatch(updateInp(temp));
        }
        return (
            <div className="select-box-container">
                <div className="m-16 mr-0 ">
                    <div className="label">Field</div>
                    <Select tabIndex="0"
                        options={options.fieldOptions}
                        styles={colourStyles}
                        className="select-box select-font"
                        onChange={(e) => handleFieldChange(e)} />
                </div>
                <div className="m-16 mr-0">
                    <div className="label">Condition</div>
                    <Select tabIndex="0"
                        options={options.conditionOptions}
                        styles={colourStyles}
                        className="select-box select-font"
                        onChange={(eve => handleConditionChange(eve))} />
                </div>
                <div className="m-16 mr-0">
                    <div className="label">Criteria</div>
                    <Select tabIndex="0"
                        options={this.state.criteriaOptions}
                        styles={colourStyles}
                        className="select-box select-font"
                        onChange={(eve) => handleCriteriaChange(eve)} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    query: state.queryReducer.query
})

export default connect(mapStateToProps)(QueryInputs);