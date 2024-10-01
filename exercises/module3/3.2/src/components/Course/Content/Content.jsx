import Part from "components/Course/Content/Part/Part"

const Content = ({parts}) => {
    return (
        <div>
            {parts.map((part) => (
                <Part name={part.name} exercises={part.exercises} id={part.id} key={part.id} />
            ))}
        </div>
      )
  }
  export default Content