import PropTypes from 'prop-types';
import s from './Statistics.module.css';
import StatisticsItem from './StatisticsItem';
// import data from './Statistics.json'

const StatisticsList = ({ items, title }) => {
    return (
    <div className={s.wrapper}>
            {title && <h2 className={s.title}>{title}</h2>} 
            <ul className={s.list}>
            {items.map(el => (
                <StatisticsItem 
                key={el.id}
                label={el.label}
                percentage={el.percentage}           
                />                 
            ))}
            </ul>
    </div>
    )
}

export default StatisticsList;

StatisticsList.propTypes = {
    items: PropTypes.array.isRequired,
    title:PropTypes.string,
}