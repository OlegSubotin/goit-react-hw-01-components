import PropTypes from 'prop-types';
import s from './Transactions.module.css';


const TransactionsLine = ({ type, amount, currency }) => {
    return (
        <tr className={s.head}>
      <td className={s.value}>{type}</td>
      <td className={s.value}>{amount}</td>
      <td className={s.value}>{currency}</td>
    </tr>
    )
}

TransactionsLine.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,    
}

export default TransactionsLine;