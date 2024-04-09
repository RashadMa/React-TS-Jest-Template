import { Name } from "../types/Person.types"

type PersonListProps = {
      names: Name[]
}

const PersonList = (props: PersonListProps) => {
      return (
            <div>
                  {props.names.map((person, index) => (
                        <h3 key={index}>
                              {person.firstName} {person.lastName}
                        </h3>
                  ))}
            </div>
      )
}

export default PersonList