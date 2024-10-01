import StatisticLine from './StatisticLine'

const Statistics = ({good, neutral, bad}) => {
    const all = good + neutral + bad
    const average = all !== 0 ? (good - bad) / all : 0
    const porcentage = all !== 0 ? (good / all) * 100 : 0

    if(all === 0){
      return <p>No feedback given</p>
    }

    return (
      <table>
        <tbody>
        <StatisticLine text='good' value={good}/>
        <StatisticLine text='neutral' value={neutral}/>
        <StatisticLine text='bad' value={bad}/>
        <StatisticLine text='all' value={all}/>
        <StatisticLine text='average' value={average}/>
        <StatisticLine text='positive' value={porcentage}/>
        </tbody>
      </table>
    )
}
  
export default Statistics;