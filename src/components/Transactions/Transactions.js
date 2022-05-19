import PropTypes from 'prop-types';
import TransactionsLine from './TransactionsLine';
import s from './Transactions.module.css';

const TransactionsHistory = ({ items }) => {
    return (
        <table className={s.transactionHistory}>
            <thead>
                <tr className={s.head}>
                    <th className={s.column}>Type</th>
                    <th className={s.column}>Amount</th>
                    <th className={s.column}>Currency</th>
                </tr>
            </thead>
            <tbody>
                {items.map(item => (
                    <TransactionsLine
                        key={item.id}
                        type={item.type}
                        amount={item.amount}
                        currency={item.currency}
                    />
                ))}
            </tbody>
        </table>
    )
}

TransactionsHistory.propTypes = {
    items: PropTypes.array.isRequired,
}

export default TransactionsHistory;