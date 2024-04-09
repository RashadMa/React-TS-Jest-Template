import { PersonProps } from "../types/Person.types"

const Person = (props: PersonProps) => {
      return (
            <div>{props.name.firstName} {props.name.lastName}</div>
      )
}

export default Person