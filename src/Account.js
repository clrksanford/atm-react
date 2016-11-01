import React, { Component } from 'react';

export default class Account extends Component {
  constructor() {
    super();
    this.state = {
      balance: 0
    }
  }

  _handleDepositClick() {
    let amount = +this.refs.amount.value;
    let currentBalance = this.state.balance;

    this.setState({
      balance: amount + currentBalance
    });

    this.refs.amount.value = '';
  }

  _handleWithdrawClick() {
    let amount = +this.refs.amount.value;
    let currentBalance = this.state.balance;

    if (amount > currentBalance) {
      alert('You may not overdraw');
    } else {
      this.setState({
        balance: currentBalance - amount
      });
    }

    this.refs.amount.value = '';
  }

  render() {
    return (
      <div className="account">
        <h2>{this.props.name}</h2>
        <div className="balance">${this.state.balance}</div>
        <input type="text" placeholder="enter an amount" ref="amount" />
        <input type="button" value="Deposit" onClick={this._handleDepositClick.bind(this)} />
        <input type="button" value="Withdraw" onClick={this._handleWithdrawClick.bind(this)} />
      </div>
    )
  }
}
