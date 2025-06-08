// types are used when building applications
// Interfaces are used when building libraries
//Props is a special keyword in React that stands for properties and is used for passing data from one component to another
type GreetProps = {
    name: string;
    messageCount?: number;
    isLoggedIn: boolean;
}

export const Greet = (props: GreetProps) => {

  const {messageCount = 0} = props
  return (
    <div>
        <h1>
            {
                props.isLoggedIn ? `Welcome ${props.name}! You have ${messageCount} unread messages.` : 'Welcome Guest!'
            }
        </h1>
      <p>Welcome to my React application.</p>
    </div>
  );
}


