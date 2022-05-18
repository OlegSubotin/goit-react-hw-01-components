import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({ label, percentage }) => {
    return (
        <li className={s.item} style={
            {
                backgroundColor: getRandomHexColor()
            }}>
            <span className={s.label}>{ label }</span>
            <span className={s.percentage}>{ percentage }%</span>
        </li>
    )
}

Statistics.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}

export default Statistics

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}