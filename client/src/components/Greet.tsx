type GreetProps = {
      name: string;
      count: number;
      isOkay: boolean;
}

const Greet = (props: GreetProps) => {
      return (
            <div>
                  <h1>
                        {
                              props.isOkay ? `Hello, ${props.name}! You have ${props.count} new messages.`
                                    : `Welcome Guest!`
                        }
                  </h1>
            </div>
      )
}

export default Greet