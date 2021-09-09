import React, { Component } from 'react'
import QueryBuilder from './QueryBuilder'
import "../css/QueryDialog.css"
import { connect } from 'react-redux'
import { savingQueryData } from '../actions/SaveQueryActions'

class QueryDialog extends Component {

    componentDidUpdate(prevChange){
        if (
            prevChange.saveQuery.saveQueryLoading === true &&
            this.props.saveQuery.saveQueryLoading === false 
          ) {
            this.props.onClose();
          }
    }

    render() {
        const getQuery = () => {

            let query = '';

            this.props.queryReducers.groupRule.map(group => {
                query += '(';
                group.rule.map(rule => {
                    query += (rule.conditionSymbol ? rule.conditionSymbol : '') + rule.field + rule.condition + rule.criteria
                })
                query += ')' + '&&';
            })
            return query;
        }

        const saveQuery = () => {
            let finalString = getQuery().substr(0, getQuery().length - 2);
            this.props.dispatch(savingQueryData({ query: finalString }))
        }
        return (
            <div className="dialog">
                <div className="background-bg">
                    <div className="header">
                        <div className="title">
                            <span>Build your query</span>
                            <button className="f-right close-icon btn" onClick={this.props.onClose}><span>X</span></button>
                        </div>
                        <div className="flex-box">
                            <span className="query-section">Query: {getQuery()}</span>
                            <span className="ml-10">more...</span></div>
                    </div>
                    <div className="p-16 query-construct">
                        <QueryBuilder className="p-16" />
                    </div>
                    <div className="p-16 footer">
                        <button className="btn gray-btn">Back</button>
                        <button className="btn blue-btn f-right flex-box" onClick={saveQuery}>
                            Finish
                            {this.props.saveQuery.saveQueryLoading ? (<div className="loader ml-10"></div>) : ''}
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    queryReducers: state.queryReducers,
    saveQuery: state.saveQuery
})

export default connect(mapStateToProps)(QueryDialog);
