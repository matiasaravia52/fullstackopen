import Part from "./Part"

const Content = (props) => {
    return (
        <div>
            {props.parts.map(part => {
                return (
                    <p>
                        <Part name={part.name} exercises={part.exercises}/>
                    </p>
                )
            })}
        </div>
    )
}

export default Content